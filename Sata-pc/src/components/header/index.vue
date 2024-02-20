<template>
  <div class="header-box box-sizi ds-flex-spaween blockBg">
    <div class="nav-list ds-flex">
      <img src="@static/img/public/nav-logo.png" class="logo" />
      <ul class="wrap ds-flex">
        <li
          class="item box-sizi ds-flex-center"
          v-for="(item, index) in navs"
          :key="index"
        >
          <span class="bata" v-if="item.bata">Beta</span>
          <router-link v-if="item.path" :to="item.path">
            <span>{{ item.tit }}</span>
          </router-link>
          <el-tooltip
            popper-class="nav_prompt_box"
            placement="bottom"
            content="Coming soon"
            effect="light"
            v-else
          >
            <a href="javascript:;">{{ item.tit }}</a>
          </el-tooltip>
        </li>
        <!-- <li class="item">
          <el-tooltip
            popper-class="nav_prompt_box"
            placement="bottom-start"
            content="Coming soon"
            effect="light"
          >
            <a href="javascript:;">Claim</a>
          </el-tooltip>
        </li> -->
        <!-- <li class="item">
          <a href="javascript:;">Tutorials</a>
        </li> -->
      </ul>
    </div>
    <div class="links-nav-list ds-flex">
      <ul class="wrap ds-flex">
        <li
          class="item box-sizi ds-flex-center"
          v-for="(item, index) in links"
          :key="index"
        >
          <a :href="item.url" target="_blank">
            <img :src="item.icon" class="icon" />
          </a>
        </li>
        <el-tooltip
          popper-class="nav_prompt_box"
          placement="bottom"
          content="Coming soon"
          effect="light"
        >
          <button class="connect-wallet-btn" disabled>Connect Wallet</button>
        </el-tooltip>
        <!-- <Loginbtn /> -->
      </ul>
    </div>
  </div>
  <div class="header-height"></div>
</template>

<script setup lang='ts'>
import { ElTooltip } from "element-plus";
import "element-plus/es/components/tooltip/style/css";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();
import { useRouter, useRoute } from "vue-router";
import Loginbtn from "../loginBtn/index.vue";

const router = useRouter();
const route = useRoute();

const navs = computed(() => {
  return [
    {
      tit: "Restaking",
      path: "/",
      bata: true,
    },
    {
      tit: "Points",
      path: "",
    },
    {
      tit: "Leaderboard",
      path: "",
    },
  ];
});
const links = computed(() => {
  return [
    // {
    //   tit: "White",
    //   icon: require("@static/img/public/white-paper.png"),
    //   url: "https://twitter.com/TipbotMe",
    // },
    {
      tit: "Twitter",
      icon: require("@static/img/public/twitter_icon.png"),
      url: "https://twitter.com/SataBTC",
    },
    // {
    //   tit: "tg",
    //   icon: require("@static/img/public/tg@2x.png"),
    //   url: "https://t.me/TipBotSupport",
    // },
  ];
});

const toProfile = () => {
  router.push({ name: "Profile" });
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
<style lang="scss">
.changeLang-dropdown {
  width: 173px;
  border: 1px solid #222222;

  .el-popper__arrow {
    display: none;
  }

  .icon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
}

.changeLang-dropdown.el-popper.is-light {
  border: none;
}

.changeLang-dropdown.el-popper,
.changeLang-dropdown .el-dropdown-menu {
  background: #141414;
  padding: 1px 0;
}

.changeLang-dropdown .el-dropdown-menu__item {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  color: #999999;
  line-height: normal;
  font-size: 16px;
}

.changeLang-dropdown .select-lang {
  color: #fff;
  background: #262626;
}

.changeLang-dropdown .el-dropdown-menu__item:hover {
  color: #fff;
  background: #262626;
}
</style>
<style lang="scss" scoped>
.header-box {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 668;
  width: 100%;
  min-width: 1280px;
  height: 76px;
  padding: 0 38px;
  background-color: #000000;

  .logo {
    width: 105px;
  }
  .links-nav-list {
    .item {
      margin-left: 30px;
      a {
        display: block;
        .icon {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
  .nav-list {
    height: 120px;

    .item {
      position: relative;
      margin-right: 24px;
    }

    .bata {
      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 6;
      font-size: 12px;
      color: #97a095;
      font-family: PlusJakartaSans-Medium;
    }
    a {
      display: block;
      padding: 9px 20px;
      font-weight: 600;
      font-size: 16px;
      font-family: PlusJakartaSans-Bold;
      font-weight: bold;
      color: #666666;
    }
    a:hover {
      color: #ffff;
    }

    .router-link-active {
      font-size: 16px;
      font-family: PlusJakartaSans-Bold;
      font-weight: bold;

      span {
        padding-bottom: 4px;
        color: #ffff;
        border-bottom: 2px solid #fff;
      }
    }

    .wrap {
      margin-left: 57px;
    }
  }

  .login-box {
    height: 48px;
  }
}

.zindex68 {
  z-index: 668;
}

.noBg {
  background: none;
}

.blockBg {
  background: #121212;
}

.header-height {
  height: 76px;
}

.account-box {
  margin-right: 30px;
  max-width: 198px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 31px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 48px;
  padding: 0 22px;
  cursor: pointer;
}
.connect-wallet-btn {
  margin-left: 30px;
  width: 161px;
  height: 48px;
  background: linear-gradient(135deg, #acfb99 0%, #99fbbb 100%);
  border-radius: 24px;
  font-size: 16px;
  font-family: PlusJakartaSans-Bold;
  font-weight: bold;
  color: #000000;
}
</style>
