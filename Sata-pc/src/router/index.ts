import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/newHome.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true, // 需要被缓存
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from, next) => {
  if (to.name === from.name) {
    return;
  }
  window.scrollTo(0, 0);
})
router.beforeEach((to, from, next) => {
  console.log(to)
  // 如果是marketNftDetails和mint页面
  if (to.fullPath.includes('?info=') && to.fullPath.includes('state=')) {
    if (to.fullPath.includes('&state=')) return next()
    to.fullPath = to.fullPath.replace('state', '&state')
    let key = 'info'
    let value: any = to.query[key]
    to.query[key] = value.split('state=')[0]
    to.query.state = value.split('state=')[1]
  }
  if (to.fullPath.split('?').length - 1 == 2) {
    to.fullPath = to.fullPath.replace('?token', '&token')
    let lastKey: any
    let lastValue: any
    for (const key in to.query) {
      lastKey = key
      lastValue = to.query[key]
    }
    to.query[lastKey] = lastValue.split('?token=')[0]
    to.query.token = lastValue.split('?token=')[1]
    console.log(to)
  }
  let nextFlag = true
  if (to.path === '/redirect_page') {
    nextFlag = false
    if (to.hash) {
      let redirectPageUrl = localStorage.getItem('redirect-page-url')
      if (redirectPageUrl && redirectPageUrl.indexOf('?') > -1) {
        redirectPageUrl = redirectPageUrl + to.hash.substr(1)
      } else {
        redirectPageUrl = redirectPageUrl + '?' + to.hash.substr(1)
      }
      window.location.replace(redirectPageUrl)
    } else {
      window.location.replace('/')
    }
  }
  if (nextFlag) {
    next()
  }
})
export default router
