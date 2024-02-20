<template>
  <div class="banner-box box-sizi">
    <div class="banner-container box-sizi ds-flex-spaween">
      <div class="banner-left">
        <div class="title">
          <p class="sata">Sata</p>
          <p class="des">Restaking Your BTC To Eran Yeild</p>
        </div>
        <el-tooltip
          popper-class="nav_prompt_box"
          placement="bottom"
          content="Coming soon"
          effect="light"
        >
          <button class="Dragon-btn box-sizi ds-flex-spaween">
            <span class="txt">Restake Now</span>
            <span class="icon ds-flex-center">
              <img src="@static/img/public/right_icon.png" alt="" class="img" />
            </span>
          </button>
        </el-tooltip>
        <div class="dis">
          Empowering The Future Of Bitcoin With Sata- The First BTC Restaking
          Collective
        </div>
      </div>
      <div class="banner-right">
        <img src="@static/img/newhome/banner-img.gif" class="img" />
      </div>
    </div>
    <!-- <div class="unlock box-sizi">
      <span class="marquee-content">
        Unlock the full potential of Bitcoin ecosystem assets ·
      </span>
    </div> -->
  </div>
</template>
    
<script setup lang='ts'>
import { ref } from "vue";
import { ElTooltip } from "element-plus";
import "element-plus/es/components/tooltip/style/css";
const openUrl = (url?: string) => {
  window.open(url);
};
</script>
<style>
.nav_prompt_box.el-popper {
  /* Set padding to ensure the height is 32px */
  background: #5a5a5a;
  font-size: 14px;
  font-family: PlusJakartaSans-Bold;
  font-weight: bold;
  color: #ffffff;
  line-height: 20px;
  padding: 10px;
  border-color: #5a5a5a;
  border-radius: 10px;
}

.nav_prompt_box.el-popper.is-light .el-popper__arrow::before {
  background: #5a5a5a;
  border-color: #5a5a5a;
}
</style>   
<style lang="scss" scoped>
.banner-box {
  width: 100%;
  height: 750px;
  background-image: url("@static/img/newhome/banner-bg.png");
  background-size: 100% 870px;
  background-repeat: no-repeat;
  background-position: 0 -120px;
  padding: 71px 0;
  .banner-container {
    margin: 0 auto;
    width: 1200px;
    height: 507px;
    .banner-left {
      width: 589px;
      .title {
        font-family: PlusJakartaSans-Bold;
        font-weight: bold;
        .sata {
          margin-right: 8px;
          width: 141px;
          height: 59px;
          text-align: center;
          line-height: 59px;
          font-size: 58px;
          background: linear-gradient(135deg, #acfb98 0%, #97fbbe 100%);
          border-radius: 6px;
          color: #000;
        }
        .des {
          margin-top: 24px;
          color: #fff;
          width: 419px;
          font-size: 50px;
          line-height: 75px;
        }
      }
      .Dragon-btn {
        margin: 24px 0;
        width: 275px;
        height: 60px;
        background: linear-gradient(135deg, #abfb9a 0%, #99fbbb 100%);
        border-radius: 44px;
        padding: 0 10px 0 30px;
        .txt {
          font-size: 18px;
          font-family: PlusJakartaSans-Bold;
          font-weight: bold;
          color: #000000;
        }
        .icon {
          width: 44px;
          height: 44px;
          background: #000000;
          border-radius: 50%;
          .img {
            width: 24px;
            height: 24px;
          }
        }
      }
      .dis {
        margin-top: 34px;
        width: 431px;
        font-size: 20px;
        font-family: PlusJakartaSans-Regular;
        font-weight: 400;
        color: #97a095;
        line-height: 36px;
      }
    }
    .banner-right {
      .img {
        width: 480px;
        height: 278px;
      }
    }
  }
  .unlock {
    width: 100%;
    height: 57px;
    line-height: 57px;
    box-shadow: 0px 6 24px 0px rgba(0, 0, 0, 0.05);
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    overflow: hidden;
    white-space: nowrap;
    .marquee-content {
      display: inline-block;
      padding-left: 100%;
      animation: marquee 20s linear infinite;
      font-size: 16px;
      font-family: PlusJakartaSans-Medium;
      font-weight: 500;
      color: #ffffff;
    }
    .marquee-content:before {
      content: attr(data-text);
      position: absolute;
      white-space: nowrap;
    }
  }
}
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>