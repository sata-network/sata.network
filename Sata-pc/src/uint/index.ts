import BigNumber from "bignumber.js";

export function checkType(data: number | string) {
  return Object.prototype.toString.call(data)
};

/**
 * toThousands(1234567890.111)
 * 1,234,567,890.111
 * */
export const toThousands = (num: number | string = 0) => {
  return num.toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  });
};
/**
 * toThousandsFixed(1234567890.111)
 * 1,234,567,890.11
 * */
export const toThousandsFixed = (num = 0, digits = 2) => {
  var fixedNum = num.toFixed(digits);
  let numArr = fixedNum.split('.');
  return toThousands(numArr[0]) + '.' + numArr[1]
};

/**
 * format(121.2334323,2)
 * 121.23
 * */
export const formatNumber = (number: number | string, digits: number) => {
  return new BigNumber(number).toFixed(digits);
};


export function throttle(fn: any, delay: number) {
  let lastTime;
  let timer: any = null;
  let delay1 = delay || 200;
  return function () {
    let args = arguments;
    // 记录当前函数触发的时间
    let nowTime = Date.now();
    clearTimeout(timer);
    timer = setTimeout(function () {
      // 记录上一次函数触发的时间
      lastTime = nowTime;
      // 修正this指向问题
      // fn.apply(this, args);
    }, delay1)
  }
};


export const walletSub = (str: string, number: number) => {
  let startStr = str.substr(0, number);
  let endStr = str.substr(str.length - number, number);
  return startStr + "****" + endStr;
}

export const nameSub = (str: string, number: number = 30) => {
  let startStr = str && str.length > 30 ? str.substr(0, number) + "..." : str;
  return startStr;
}

export const timerShow = (time: any) => {
  time = time.toString();
  const str = insertStr(time, 10, ',');
  const timeStr = insertStr(str, 17, ' at ');
  return timeStr.substring(0, timeStr.length - 2);
}

/**
 * 字符串指定位置添加元素
 * @param str1:原字符串
 * @param n:插入位置
 * @param str2:插入元素
 * @return  拼接后的字符串
 */
function insertStr(str1: string, n: number, str2: string) {
  var s1 = '';
  var s2 = '';
  if (str1.length < n) {
    return str1 + str2;
  } else {
    s1 = str1.substring(0, n);
    s2 = str1.substring(n, str1.length);
    return s1 + str2 + s2;
  }
}

/**
 * 字符串转换成对象
 * a=1&bb=2.2&cc=jajaj&da=cccc
 * {a:1,bb:2.2,cc:'jajaj', da: 'cccc'}
 */
export function stringToObject(str: string) {
  let arr = str.split('&')
  let obj: { [key: string]: any } = {}

  for (let i = 0; i < arr.length; i++) {
    let sonArr = arr[i].split('=')
    obj[sonArr[0]] = sonArr[1];
  }
  return obj;
}

//正则表达式,验证2位小数
export function is_decimal(number: any) {
  var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
  return reg.test(number);
}

/*简化数字：k */
export function formatNumberUint(n: number) {
  if (n < 1000) {
    return n;
  } else {
    return (n / 1000).toFixed(1) + 'k';
  }
}

/**
 * 排序 配合sort方法
 * value2 - value1 大在前小在后
 */
export function compare(property: any) {
  let fun = (a: any, b: any) => {
    let value1 = a[property];
    let value2 = b[property];
    return value2 - value1;
  }
  return fun;
}

/**
 * 随机生成8位整数
 * 
*/
const uniqueNumbers = new Set();
export function generateUniqueRandom8DigitNumber() {
  const min = 10000000;
  const max = 99999999;

  while (uniqueNumbers.size <= max - min) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (!uniqueNumbers.has(randomNumber)) {
      uniqueNumbers.add(randomNumber);
      return randomNumber;
    }
  }

  throw new Error("已达到8位随机整数范围极限。无法生成新的唯一数字。");
}
/**
 * 邮箱验证
 * 
*/
export function isValidEmail(email: string) {
  const regex = /^[\w!#$%&'*+/=?^_`{|}~-]+(\.[\w!#$%&'*+/=?^_`{|}~-]+)*(@(?:[A-Z0-9-]+\.)+[A-Z]{2,})$/i;
  return regex.test(email);
}

export const formatTime = function (t: any, status: any) {
  //t传入的时间参数,utc传入的时区参数
  if (!t) return;
  //获取本地时间
  let d = new Date();
  //获得本地时区 (单位是小时)
  let timezone = d.getTimezoneOffset() / 60;
  t = t.replace(/-/g, "/"); //兼容苹果电脑
  //格式化传入时间
  let time = new Date(t);
  //转换传入时间为本地时间              设置小时  ----- ( 传入时间的小时数 - 本地时区转化成的小时数  )
  time.setHours(time.getHours() - (timezone));

  //输出时间
  let yy = time.getFullYear();     ///获取年
  let MM: any = time.getMonth() + 1;    ///获取月
  MM = MM < 10 ? '0' + MM : MM;    ///字符串拼接月个位数补0
  let dd: any = time.getDate();         ///获取日
  dd = dd < 10 ? '0' + dd : dd;	 ///字符串拼接日个位数补0
  let hh: any = time.getHours();		 ///获取小时
  hh = hh < 10 ? '0' + hh : hh;	 ///字符串拼接小时个位数补0
  let mm: any = time.getMinutes();		 ///获取分钟
  mm = mm < 10 ? '0' + mm : mm;	 ///字符串拼接分钟个位数补0
  let ss: any = time.getSeconds();		 ///获取秒
  ss = ss < 10 ? '0' + ss : ss;	 ///字符串拼接秒个位数补0
  let date
  if (status) {
    date = yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm;
  } else {

    date = yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;
  }
  return date;
}
