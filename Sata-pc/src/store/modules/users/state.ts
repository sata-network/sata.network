// const getLang = () => {
//   let navLang = navigator.language;
//   if (navLang.includes('ko')) {
//     return 'ko-KR';
//   } else {
//     return 'en';
//   }
// }
const state = {
  username: '',
  networkName: '',
  token: '',
  userInfo: null,
  lang: 'en',
  defaultWallet: null,
  defaultChains: null,
  isTerms: false,
  openNav: false,
  isForget: false,//是否打开忘记密码的校验
  isOpenWallet: false,//是否打开选择钱包的弹窗
  createOrderInfo: null,
  changeNetwork: false,
  closep2p2Network: false,
  closeNetwork: false,
  musicAuthInfo: null, //音乐权限
  nftaddress: '',//验证用到的address
  createNftForm: null, //创建nft信息
  isVerifyFreeMint: false, //校验
}



export default state;
