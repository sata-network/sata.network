<template>
  <div class="profile">
    <div class="user-logo">
      <img class="user-icon" />
    </div>
    <p class="user-name clamp-Line-1">ASD sad</p>
    <ul class="media-wrap">
      <li class="media-item box-sizi ds-flex-spaween">
        <div class="oleft ds-flex">
          <img src="@static/img/profile/twitter_white_icon.png" class="icon" />
          <p class="name clamp-Line-1">ASD sad</p>
        </div>
        <div class="oright">
          <button class="activate-btn">Activate</button>
        </div>
      </li>
      <li class="media-item box-sizi ds-flex-spaween">
        <div class="oleft ds-flex">
          <img src="@static/img/profile/telegram_white_icon.png" class="icon" />
          <p class="name clamp-Line-1">telegram</p>
        </div>
        <div class="oright">
          <button class="connect-btn">Connect</button>
        </div>
      </li>
      <li class="prompt ds-flex-center">* Connect and activate your account</li>
    </ul>
  </div>
</template>
    
<script setup lang='ts'>
</script>
<style lang="scss" scoped>
.profile {
  width: 100%;
  height: 500px;
  .user-logo {
    margin: 133px auto 30px auto;
    text-align: center;
    .user-icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #000;
    }
  }
  .user-name {
    margin: 0 auto;
    width: 422px;
    height: 28px;
    text-align: center;
    font-size: 24px;
    font-family: FiraMono-Medium;
    font-weight: 500;
    color: #ffffff;
    line-height: 28px;
  }
}
.media-wrap {
  margin: 30px auto;
  width: 422px;
  .media-item {
    margin-bottom: 18px;
    width: 100%;
    height: 52px;
    border-radius: 8px;
    border: 1px solid #363636;
    padding: 0 20px;
    .icon {
      width: 28px;
      height: 28px;
    }
    .name {
      margin-left: 18px;
      width: 230px;
      height: 20px;
      font-size: 16px;
      font-family: FiraMono-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.7);
      line-height: 19px;
    }
    button {
      width: 100px;
      height: 32px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      font-family: FiraMono-Medium;
    }
    .activate-btn {
      color: #ffffff;
      border: 1px solid rgba(255, 255, 255, 0.7);
    }
    .activate-btn:hover{
        border-color: #ffffff;
    }
    .connect-btn {
      background: #ffffff;
      color: #000000;
    }
    .connect-btn:hover {
      opacity: 0.8;
    }
    .disable-btn {
      background: #757575;
      border: 1px solid rgba(255, 255, 255, 0.7);
    }
  }
  .prompt {
    margin-top: 30px;
    font-size: 16px;
    font-family: FiraMono-Regular;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
