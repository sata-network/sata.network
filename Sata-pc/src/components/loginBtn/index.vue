<template>
  <div class="btns">
    <button class="login-btn ds-flex-center box-sizi" v-if="false">
      <span>Login to Earn</span>
      <img src="@static/img/newIcon/arrow_icon.png" class="icon-white" />
      <img src="@static/img/newIcon/arrow_black_icon.png" class="icon-black" />
    </button>
    <el-dropdown
      trigger="click"
      @visible-change="handleVisibleChange"
      @command="handleCommand"
      class="tipbot-nav-box"
    >
      <div class="nike-name ds-flex">
        <img class="user-icon" />
        <p class="name clamp-Line-1">sadknhasd</p>
        <img
          src="@static/img/newIcon/arrow_bottom.png"
          class="icon"
          :class="{ open: isOpen }"
        />
      </div>
      <template #dropdown>
        <el-dropdown-menu class="tipbot-nav">
          <el-dropdown-item command="Profile">
            <img
              src="@static/img/nav/profile_nav_icon.png"
              class="white_icon"
            />
            <img
              src="@static/img/nav/profile_black_icon.png"
              class="black_icon"
            />
            <span>Profile</span>
          </el-dropdown-item>
          <el-dropdown-item command="LogOut">
            <img src="@static/img/nav/logOut_icon.png" class="white_icon" />
            <img
              src="@static/img/nav/logOut_black_icon.png"
              class="black_icon"
            />
            <span>Log out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
  <el-dialog
    v-model="loginAlert"
    class="login-dialog"
    :before-close="handleClose"
  >
    <div class="dialog-header-box ds-flex-spaween">
      <span class="txt">Login</span>
      <p class="icon-box" @click="handleClose">
        <img src="@static/img/public/close_icon.png" class="icon" />
        <img src="@static/img/public/close_hover_icon.png" class="hover_icon" />
      </p>
    </div>
    <div class="dialog-content">
      <p class="toos">
        Please connect your <span class="white-txt">Twitter</span> or
        <span class="white-txt">Telegram</span> to join the airdrop! This is
        just to verify your account, we won't be able to post or make changes.
      </p>
      <div class="btns">
        <div class="connect-btn">
          <button class="ds-flex">
            <img
              src="@static/img/profile/twitter_black_icon.png"
              class="icon"
            />
            <span>CONNECT TWITTER</span>
          </button>
        </div>
        <div class="connect-btn">
          <button class="ds-flex">
            <img
              src="@static/img/profile/telegram_black_icon.png"
              class="icon"
            />
            <span>CONNECT TELEGRAM</span>
          </button>
        </div>
      </div>
    </div>
  </el-dialog>
  <!-- 激活 -->
  <el-dialog
    v-model="activateAlert"
    class="login-dialog"
    :before-close="handleActivateClose"
  >
    <div class="dialog-header-box ds-flex-spaween">
      <span class="txt">Activate Twitter</span>
      <p class="icon-box" @click="handleActivateClose">
        <img src="@static/img/public/close_icon.png" class="icon" />
        <img src="@static/img/public/close_hover_icon.png" class="hover_icon" />
      </p>
    </div>
    <div class="dialog-content">
      <p class="toos">
        Sent out our activation tweet to activate your account.
      </p>
      <div class="btns">
        <div class="connect-btn">
          <button>
            <span>ACTIVATE ACCOUNT</span>
          </button>
        </div>
      </div>
    </div>
  </el-dialog>
</template>
    
<script setup lang='ts'>
import { ref } from "vue";
import {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElImage,
  ElDialog,
} from "element-plus";
import "element-plus/es/components/dropdown/style/css";
import "element-plus/es/components/image/style/css";
import "element-plus/es/components/dialog/style/css";
const isOpen = ref(false);
const loginAlert = ref(false);
const activateAlert = ref(false);
const handleVisibleChange = (visible: boolean) => {
  isOpen.value = visible;
};
const handleCommand = (command?: any) => {
  console.log("command", command);
};
const handleClose = ()=>{
    loginAlert.value = false;
}
const handleOpen = ()=>{
    loginAlert.value = true;
}
const handleActivateClose = ()=>{
    activateAlert.value = false;
}
const handleActivateOpen = ()=>{
    activateAlert.value = true;
}
</script>
  <style lang="scss" >
.el-dialog.login-dialog {
  width: 502px;
  max-height: 327px;
  background: #080404;
  border-radius: 8px;
  border: 2px solid #363636;
  padding: 30px;
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 0;
  }
}
.el-popper {
  border-radius: 8px;
}
.el-popper__arrow {
  display: none;
}
.el-popper.is-light {
  border: none;
  box-shadow: none;
}
.tipbot-nav {
  background: #252525;
  border-color: #252525;
  padding: 0;
  .el-dropdown-menu__item {
    width: 147px;
    padding: 16px;
    box-sizing: border-box;
    .black_icon,
    .white_icon {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 14px;
      font-family: FiraMono-Medium;
      font-weight: 500;
      color: #fff;
    }
    .black_icon {
      display: none;
    }
  }
  .el-dropdown-menu__item:hover {
    background-color: #ceff7c;
    span {
      color: #000;
    }
    .black_icon {
      display: block;
    }
    .white_icon {
      display: none;
    }
  }
  .el-dropdown-menu__item:nth-child(1) {
    border-radius: 8px 8px 0 0;
  }
  .el-dropdown-menu__item:nth-last-child(1) {
    border-radius: 0 0 8px 8px;
  }
}
</style>  
<style lang="scss" scoped>
.dialog-header-box {
  padding-bottom: 16px;
  border-bottom: 1px solid #1c1a1a;
  .txt {
    font-size: 20px;
    font-family: FiraMono-Medium;
    font-weight: 500;
    color: #fff;
  }
  .icon,
  .hover_icon {
    width: 16px;
    height: 16px;
  }
  .hover_icon {
    display: none;
  }
  .icon-box {
    cursor: pointer;
  }
  .icon-box:hover {
    .hover_icon {
      display: block;
    }
    .icon {
      display: none;
    }
  }
}
.dialog-content {
  .toos {
    margin-top: 16px;
    margin-bottom: 30px;
    text-align: center;
    font-family: FiraMono-Medium;
    font-weight: 500;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    .white-txt {
      color: #fff;
    }
  }
  .connect-btn {
    margin-bottom: 24px;
    width: 100%;
    button {
      width: 442px;
      height: 52px;
      background: #ffffff;
      border-radius: 8px;
      padding: 0 18px;
      .icon {
        margin-right: 17px;
        width: 28px;
        height: 28px;
      }
      span {
        font-size: 16px;
        font-family: FiraMono-Medium;
        font-weight: 500;
        color: #000000;
      }
    }
  }
  .connect-btn:hover{
    button{
        opacity: 0.8;
    }
  }
  .connect-btn:nth-last-child(1){
    margin: 0;
  }
}
.login-btn {
  width: 165px;
  height: 37px;
  border-radius: 4px;
  border: 1px solid #ffffff;
  white-space: nowrap;
  span {
    font-size: 16px;
    font-family: FiraMono-Medium;
    font-weight: 500;
    color: #ffffff;
  }
  .icon-white,
  .icon-black {
    width: 16px;
    height: 16px;
  }
  .icon-black {
    display: none;
  }
}
.login-btn:hover {
  background: #ffffff;
  span {
    color: #000000;
  }
  .icon-white {
    display: none;
  }
  .icon-black {
    display: block;
  }
}
.nike-name {
  cursor: pointer;
  .user-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #000000;
  }
  .name {
    margin: 0 8px;
    max-width: 90px;
    height: 25px;
    line-height: 25px;
    font-family: FiraMono-Medium;
    font-weight: 500;
    color: #ffffff;
    text-decoration: underline;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
  .open {
    transform: rotate(180deg);
  }
}
</style>