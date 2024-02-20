export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const devUrl = "https://testnets-web.fandom.co", testUrl = 'https://testnets-web.fandomkorea.co', masterUrl = "https://tiktok.fandom.co", mainUrl = "https://web.fandom.co";
const webUrl = window.location.href;
const webpathname = window.location.pathname;
const websearch = window.location.search;
export const jumpPclinkHandel = () => {
  if (isMobile && webUrl.indexOf(devUrl) != -1 || isMobile && webUrl.indexOf('localhost') != -1) {
    window.location.href = "https://testnets-m.fandom.co" + webpathname + websearch;
  }
  if (isMobile && webUrl.indexOf(testUrl) != -1) {
    window.location.href = 'https://testnets-m.fandomkorea.co' + webpathname + websearch;
  }
  if (isMobile && webUrl.indexOf(masterUrl) != -1) {
    window.location.href = 'https://tiktok-m.fandom.co' + webpathname + websearch;
  }
  if (isMobile && webUrl.indexOf(mainUrl) != -1) {
    window.location.href = 'https://m.fandom.co' + webpathname + websearch;
  }
}

