
// initial state
import state from "./users/state";
import Cookies from "js-cookie";
import router from "@/router";
// import walletStore from "./wallet";
// getters
const getters = {}

// actions
const actions = {
  
}

// mutations
const mutations = {
  setData(state: any, obj: any) {
    Object.assign(state, obj);
  },
  setUserInfo(state: any, { userInfo }: any) {
    Object.assign(state, { userInfo });
  },
  logout(state: any) {
    state.username = '';
    state.token = null;
    state.refreshToken = '';
    state.curTime = '';
    state.userInfo = null;
    state.userID = '';
    state.googleToken = '';
    state.isProfile = false;
    state.defaultWallet = null;
    state.defaultChains = null;
    state.musicAuthInfo = null;
    location.reload();
    if (window.localStorage.getItem("walletconnect")) {
      window.localStorage.removeItem("walletconnect");
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
