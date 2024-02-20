import { createStore, mapState } from 'vuex';
import { createApp } from 'vue'
import user from "@/store/modules/user";
import createPersistedState from "vuex-persistedstate";

const state: { [key: string]: any } = {

};
const global_mix = {
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapState('user', [
      'token',
      'userInfo',
      'lang'
      // ...
    ]),
  },
}
createApp({
  mixins: [global_mix]
});


export default createStore({
  state,
  modules: {
    user
  },
  plugins: [createPersistedState({
    key: 'fandom-web',
    paths: ['user']
  })],
})
