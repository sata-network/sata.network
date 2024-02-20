import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './plugins/language';
import api from "./api"
const app = createApp(App);
app.config.globalProperties.$api = api;


app
  .use(store)
  .use(i18n)
  .use(router)
  .mount('#app')
