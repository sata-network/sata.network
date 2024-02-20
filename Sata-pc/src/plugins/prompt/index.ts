import { ElMessage, ElNotification } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/notification/style/css';
const errorIcon = require("@static/img/public/error_prompt_icon.png");
const successIcon = require("@static/img/public/success_prompt_icon.png");

export const ToastFailPrompt = (prompt: string, duration = 2000) => {
  ElNotification({
    message: `<img src='${errorIcon}'/> <span>${prompt}</span>`,
    dangerouslyUseHTMLString: true,
    duration,
    customClass: "ToastFailPrompt",
    offset: 100
  })
}
export const ToastSuccessPrompt = (prompt: string, duration?: number) => {
  ElNotification({
    message: `<img src='${successIcon}'/> <span>${prompt}</span>`,
    dangerouslyUseHTMLString: true,
    duration,
    customClass: "ToastFailPrompt ToastSuccessPrompt",
    offset: 100
  })
}


export const openErrorInfo: any = function (prompt: string, duration = 3000) {
  ElNotification({
    message: `<img src='${errorIcon}'/> <span>${prompt}</span>`,
    dangerouslyUseHTMLString: true,
    duration,
    customClass: "ToastFailPrompt",
    offset: 100
  })
}

export const openSuccessInfo: any = function (prompt: string, duration = 3000) {
  ElNotification({
    message: `<img src='${successIcon}'/> <span>${prompt}</span>`,
    dangerouslyUseHTMLString: true,
    duration,
    customClass: "ToastFailPrompt ToastSuccessPrompt",
    offset: 100
  })
}

export const copyUrl = function (data: string, message: string) {
  let url = data.toString();
  let oInput = document.createElement('input');
  oInput.value = url;
  document.body.appendChild(oInput);
  // oInput.focus(); // 选择对象;
  oInput.select(); // 选择对象;
  document.execCommand("copy"); //执行复制
  ElMessage({
    message,
    type: 'success',
    duration: 2000
  })
  oInput.remove();
}
