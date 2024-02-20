import axios from "axios";
import stores from "../store";
import router from "../router";
import { openErrorInfo } from "@/plugins/prompt/index";
import Cookies from "js-cookie";
import { stringToObject } from "@/uint/index";
// import { useMutations } from '@/uint/vuex/useMutations'
// const { setData } = useMutations('user', ['setData'])

const instance = axios.create({
  // baseURL
});
let num = 0;

/**
 * generateReqKey：用于根据当前请求的信息，生成请求 Key；
 * addPendingRequest：用于把当前请求信息添加到pendingRequest对象中；
 * removePendingRequest：检查是否存在重复请求，若存在则取消已发的请求。
 * 防止重复请求*/
function generateReqKey(config: any) {
  const { method, url, params, data } = config;
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join("&");
}

const pendingRequest = new Map();

function addPendingRequest(config: any) {
  const requestKey = generateReqKey(config);
  config.cancelToken = config.cancelToken || new axios.CancelToken((cancel) => {
    if (!pendingRequest.has(requestKey)) {
      pendingRequest.set(requestKey, cancel);
    }
  });
}

function removePendingRequest(config: any) {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancelToken = pendingRequest.get(requestKey);
    cancelToken(requestKey);
    pendingRequest.delete(requestKey);
  }
}

//请求拦截器
let requestConfig: any;
instance.interceptors.request.use((config: any) => {
  config.headers['Cache-Control'] = 'no-cache';
  requestConfig = config;
  removePendingRequest(config); // 检查是否存在重复请求，若存在则取消已发的请求
  addPendingRequest(config); // 把当前请求信息添加到pendingRequest对象中
  const ctoken = Cookies.get("c_token");
  let url = config.url;
  if (ctoken) {
    url = [url, ["c_token", ctoken].join("=")].join(
      url.indexOf("?") > -1 ? "&" : "?"
    );
  }
  config.url = url;
  return config;
}, error => {
  return Promise.reject(error)
});
// 响应拦截器
instance.interceptors.response.use((response: any) => {
  if (response.status) {
    if (response.status != 200) {
      openErrorInfo("Sorry, request failed, please try again", 5000);
    }
  }
  removePendingRequest(response.config); // 从pendingRequest对象中移除请求
  return response;
}, (error: any) => {
  if (error.response) {
    if (error.response.status != 200) {
      console.log("error.response", error.response);
      if (error.response.data.code == 5) {
        num++;
        if (num == 1) {
          // openErrorInfo(error.response.data.msg, 5000);
          stores.commit('user/logout'); //退出登录
          stores.dispatch('user/login');
          num = 0;
          // router.push("/");
        }
      } else if (error.response.data.code == 2047) {
        let obj = stringToObject(requestConfig.data);
        stores.commit("wallet/setData", { limitPageRequest: requestConfig });
        router.push("/");
      } else if (error.response.data.code == 2053) {
        router.push("/");
      } else {
        openErrorInfo(error.response.data.msg, 5000);
      }
    }
  }
  removePendingRequest(error.config || {}); // 从pendingRequest对象中移除请求
  if (axios.isCancel(error)) {
    console.log("已取消的重复请求：" + error.message);
  } else {
    // 添加异常处理
    console.log("请求错误");
  }
  return Promise.reject(error)
})

export default instance;
