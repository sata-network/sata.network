<template>
  <div class="home">
    <bannerVue />
    <div class="footer-box ds-flex-center">
      <div class="footer-container ds-flex">
        <p class="tit">Powered by </p>
        <ul class="logos ds-flex-spaween">
          <li class="img">
            <img
              src="@static/img/newhome/footer-con/Stacks@2x.png"
              class="stacks-icon"
            />
          </li>
          <li class="img">
            <img
              src="@static/img/newhome/footer-con/alex@2x.png"
              class="alex-icon"
            />
          </li>
          <li class="img">
            <img
              src="@static/img/newhome/footer-con/BNB@2x.png"
              class="BNB-icon"
            />
          </li>
          <li class="img">
            <img
              src="@static/img/newhome/footer-con/Multibit@2x.png"
              class="Multibit-icon"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
  <script lang="ts" setup>
import { onActivated, onDeactivated, ref, nextTick, reactive } from "vue";
import bannerVue from "./components/banner.vue";
</script>
  
  <style lang="scss" scoped>
.home {
  width: 100%;
}
.footer-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 52px;
  z-index: 66;
  background: #acfb98;
  .footer-container {
    width: 1200px;
    .tit {
      margin-right: 60px;
      font-size: 14px;
      font-family: PlusJakartaSans-Bold;
      font-weight: bold;
      color: #000000;
    }
    .logos {
        flex: 1;
      .stacks-icon {
        width: 85px;
        height: 24px;
      }
      .alex-icon {
        width: 104px;
        height: 24px;
      }
      .BNB-icon {
        width: 119px;
        height: 24px;
      }
      .Multibit-icon {
        width: 192px;
        height: 24px;
      }
    }
  }
}
</style>
  