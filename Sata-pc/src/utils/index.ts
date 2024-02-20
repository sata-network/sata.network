import BigNumber from 'bignumber.js'

/**
 * toThousands(1234567890.111)
 * 1,234,567,890.111
 * */
export const toThousands = (num = 0) => {
  return num.toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  })
}
/**
 * toThousandsFixed(1234567890.111)
 * 1,234,567,890.11
 * */
export const toThousandsFixed = (num = 0, digits = 2) => {
  var fixedNum = Number(num).toFixed(digits)
  let numArr: any = fixedNum.split('.')
  return toThousands(numArr[0]) + '.' + numArr[1]
}
/**
 * toThousandsFixedRemoveZero(1234567890.10)
 * 1,234,567,890.1
 * */
export const toThousandsFixedRemoveZero = (num = 0, digits = 2) => {
  if (num == undefined) {
    return ''
  }
  let fixedNum: any = Number(num).toFixed(digits)
  fixedNum = fixedNum - 0 + ''
  if (fixedNum.indexOf('.') > -1) {
    let numArr = fixedNum.split('.')
    return toThousands(numArr[0]) + '.' + numArr[1]
  } else {
    return toThousands(fixedNum)
  }
}
/**
 * numFormat(1234567890.111,2)
 * 123456.79 W
 * */
export const numFormat = (num: any, digits: any) => {
  if (num <= 10000) {
    return format(num, digits)
  }
  if (num > 10000 && num < 10000 * 1000) {
    let si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'k' },
      // { value: 1E4, symbol: "W" },
      // { value: 1E6, symbol: "M" },
    ]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    let i
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break
      }
    }
    return (
      (num / si[i].value).toFixed(digits).replace(rx, '$1') + ' ' + si[i].symbol
    )
  }
  if (num >= 10000 * 1000) {
    let si = [{ value: 1e6, symbol: 'M' }]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    let i
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break
      }
    }
    return (
      (num / si[i].value).toFixed(digits).replace(rx, '$1') + ' ' + si[i].symbol
    )
  }
}
/**
 * format(121.2334323,2)
 * 121.23
 * */
export const format = (number: any, digits: any) => {
  let num = new BigNumber(number).toFixed(digits)
  return parseFloat(num)
}
// 将科学记数法转成字符串
export const scientificNotationToString = (param:any) => {
  let strParam:any = String(param)
  let flag = /e/.test(strParam)
  if (!flag) return param.toString()

  // 指数符号 true: 正，false: 负
  let sysbol = true
  if (/e-/.test(strParam)) {
    sysbol = false
  }
  // 指数
  let index = Number(strParam.match(/\d+$/)[0])
  // 基数
  let basis = strParam.match(/^[\d\.]+/)[0].replace(/\./, '')

  if (sysbol) {
    return basis.padEnd(index + 1, 0)
  } else {
    return basis.padStart(index + basis.length, 0).replace(/^0/, '0.')
  }
}
// 格式化地址
export const middleEllipsis = (val:any, start = 6, end = -4, sign = '...') => {
  if (val === '') return
  return val.slice(0, start) + sign + val.slice(end)
}
