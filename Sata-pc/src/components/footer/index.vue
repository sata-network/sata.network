<template>
  <div class="footer-box box-sizi">
    <div class="footer-container box-sizi ds-flex-spaween">
      <div class="footer-left">
        <p class="logo">
          <img src="@static/img/public/footer-logo.png" class="img" />
        </p>
        <ul class="wrap ds-flex">
          <a v-for="(item, index) in noteList" :key="index" :href="item.url">
            <img :src="item.icon" class="icon" />
          </a>
        </ul>
        <p class="note">
          Sata protocol is the stake-as-a-service infrastructure for the BTC
          ecosystem.
        </p>
      </div>
      <div class="footer-right">
        <p class="tit">About Us</p>
        <p class="link" v-for="(item, index) in rightLikes" :key="index">
          <a :href="item.url">{{ item.tit }}</a>
        </p>
      </div>
    </div>
  </div>
</template>
    
<script setup lang='ts'>
import { ref } from "vue";
const noteList = ref([
  {
    icon: require("@static/img/newhome/footer-twitter.png"),
    url: "",
  },
  {
    icon: require("@static/img/newhome/footer-discord.png"),
    url: "",
  },
  {
    icon: require("@static/img/newhome/footer-email.png"),
    url: "",
  },
]);
const rightLikes = ref([
  {
    tit: "Whitepaper",
    url: "",
  },
  {
    tit: "Documentation",
    url: "",
  },
]);
</script>
    
<style lang="scss" scoped>
.footer-box {
  margin: 0 auto;
  width: 100%;
  height: 220px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 32px 0 0 0;
  .footer-container {
    margin: 0 auto;
    width: 1200px;
    .logo .img {
      width: 266px;
    }
    .wrap {
      margin: 20px 0;
      a {
        margin-right: 20px;
      }
      a .icon {
        width: 24px;
        height: 24px;
      }
    }
    .note {
      font-size: 16px;
      font-family: PlusJakartaSans-Medium;
      font-weight: 500;
      color: #666666;
    }
    .footer-right {
      .tit {
        margin-bottom: 28px;
        font-size: 16px;
        font-family: PlusJakartaSans-Bold;
        font-weight: bold;
        color: #feffff;
      }
      .link {
        margin-bottom: 24px;
        a {
          font-size: 16px;
          font-family: PlusJakartaSans-Bold;
          font-weight: bold;
          color: #999999;
        }
      }
    }
  }
}
</style>