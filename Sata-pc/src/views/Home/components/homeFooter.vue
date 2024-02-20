<template>
  <div class="footer">
    <div class="title">Get Started Now</div>
    <div class="footer-wrap ds-flex-center">
      <div class="footer-item">
        <button
          class="bor-btn box-sizi ds-flex-center"
          @click="openUrl('https://t.me/TipBotSupport')"
        >
          <img src="@static/img/newhome/Readthedocs@2x.png" class="icon" />
          <span>Read the docs</span>
        </button>
      </div>
      <div class="footer-item">
        <button
          class="sol-btn box-sizi ds-flex-center"
          @click="openUrl('https://twitter.com/TipbotMe')"
        >
          <img src="@static/img/newhome/note-link.png" class="icon" />
          <span>Go to tutorials</span>
        </button>
      </div>
    </div>
  </div>
</template>
    
<script setup lang='ts'>
const openUrl = (url: string) => {
  window.open(url);
};
</script>
    
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 388px;
  background: url("@static/img/newhome/footer-bg.png");
  background-size: 100%;
  background-position: 0 -200px;
  background-repeat: no-repeat;
  .title {
    margin-bottom: 48px;
    padding-top: 100px;
    text-align: center;
    font-size: 40px;
    font-family: PlusJakartaSans-Bold;
    font-weight: bold;
    color: #ffffff;
  }
  .footer-wrap {
    width: 100%;
    .footer-item {
      width: 266px;
      .icon {
        margin-right: 8px;
        width: 28px;
        height: 28px;
      }
      button {
        font-size: 18px;
        font-family: PlusJakartaSans-Bold;
        font-weight: bold;
        color: #040404;
        .icon {
          margin-right: 8px;
          width: 24px;
          height: 24px;
        }
      }
      .bor-btn {
        position: relative;
        width: 264px;
        height: 60px;
        border-radius: 30px;
        color: #adfb96;
        border: 1px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(to right, #030410, #030410),
          linear-gradient(
            106deg,
            rgba(173, 251, 150, 1),
            rgba(150, 251, 190, 1)
          );
      }
      .sol-btn {
        width: 264px;
        height: 60px;
        background: linear-gradient(91deg, #adfb96 0%, #96fbbe 100%);
        border-radius: 30px 30px 30px 30px;
        opacity: 1;
      }
    }
    .footer-item:nth-of-type(1) {
      margin-right: 40px;
    }
  }
}
</style>