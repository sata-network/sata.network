<template>
  <div class="home-container box-sizi">
    <ul class="note-list ds-flex-spaween box-sizi">
      <li
        class="note-item box-sizi"
        v-for="(item, index) in noteList"
        :key="index"
      >
        <div class="note-container ds-flex-cloum-center">
          <img :src="item.icon" class="icon" />
          <p class="tit">{{ item.tit }}</p>
          <p class="dis">{{ item.dis }}</p>
        </div>
      </li>
    </ul>
    <div class="Works-box box-sizi">
      <div class="Works-container ds-flex">
        <div class="works-left">
          <p class="title box-sizi">How it Works?</p>
          <div class="content box-sizi">
            <p class="tit">Liquid Staking BRC20 & Ordinals</p>
            <p class="dis">
              SATA provides a liquidity-rich collateral service. Users whostake
              any Brc20 assets on SATA will receive a freely circulating liquid
              staking token, an asset that can be circulated and traded on any
              blockchain network.
            </p>
          </div>
        </div>
        <div class="works-right">
          <img src="@static/img/newhome/works-img.png" class="img" />
        </div>
      </div>
    </div>
    <div class="Ecosystem-box">
      <p class="title box-sizi">Ecosystem</p>
      <ul class="Ecosystem-wrap ds-flex-spaween">
        <li
          class="Ecosystem-item box-sizi"
          v-for="(item, index) in ecosystem"
          :key="index"
        >
          <p class="tit">{{ item.tit }}</p>
          <p class="dis">{{ item.dis }}</p>
          <img :src="item.icon" class="icon" />
        </li>
      </ul>
    </div>
    <div class="buy-box box-sizi">
      <div class="buy-container ds-flex-spaween">
        <div class="left">
          <p class="tit">Buy $SATA</p>
          <p class="dis">
            The utility of the $SATA token is multifaceted, intricately designed
            to promote engagement within the Sata Protocol's ecosystem and
            strategically position itself as a catalyst in the context of
            staking and node services, including Staking Rewards, Node Service
            Rewards, Governance Rights, Vote Bribing Mechanism, etc.
          </p>
          <div class="btn box-sizi ds-flex-spaween">
            <span>Buy $SATA</span>
            <p class="icons ds-flex-center">
              <img src="@static/img/newhome/right_icon.png" class="icon" />
            </p>
          </div>
        </div>
        <div class="right">
          <img class="img" src="@static/img/newhome/Mask-img.png" />
        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup lang='ts'>
import { onMounted, ref } from "vue";
const noteList = ref([
  {
    tit: "Security",
    icon: require("@static/img/newhome/Security-icon.png"),
    dis: "A decentralized and global nodes network for Security and transparency.",
  },
  {
    tit: "Accessibility",
    icon: require("@static/img/newhome/Accessibility-icon.png"),
    dis: "User-friendly services and Bridge middleware enable seamless transfers.",
  },
  {
    tit: "Maximizing Potential",
    icon: require("@static/img/newhome/MaximizingPotential-icon.png"),
    dis: "Making Brc20 tradable or usable for other Defi services, enhancing their intrinsic value.",
  },
]);
const ecosystem = ref([
  {
    tit: "Delegated staking",
    icon: require("@static/img/newhome/Delegatedstaking@2x.png"),
    dis: "Stake $SATA to earn various various rewards. Obtain governance rights within the protocol.",
  },
  {
    tit: "Node Servers",
    icon: require("@static/img/newhome/NodeServers@2x.png"),
    dis: "Cross-chain asset securitynode network.On-chain data query transaction node network.",
  },
  {
    tit: "Uni Bridge",
    icon: require("@static/img/newhome/UniBridge@2x.png"),
    dis: "The SATA Bridge boosts value by facilitating transfers across multiple chains, serving as a universal bridge.",
  },
]);
const openUrl = (url?: string) => {
  window.open(url);
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  background: #04040a;
  .note-list {
    margin: 20px auto 140px auto;
    width: 1200px;
    height: 400px;
    .note-item {
      position: relative;
      width: 320px;
      height: 320px;
      .note-container {
        position: relative;
        width: 320px;
        height: 320px;
        z-index: 1;
        background: linear-gradient(135deg, #acfb98 0%, #97fbbe 100%);
        border-radius: 30px;
        border: 1px solid #ffffff;
      }

      .icon {
        width: 110px;
        height: 110px;
      }
      .tit {
        margin-top: 20px;
        font-size: 24px;
        font-family: PlusJakartaSans-Bold;
        font-weight: bold;
        color: #000;
      }
      .dis {
        margin-top: 14px;
        text-align: center;
        width: 256px;
        font-family: PlusJakartaSans-Regular;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
        line-height: 22px;
      }
    }
    .note-item:nth-of-type(1)::before {
      content: "";
      position: absolute;
      right: -10px;
      bottom: -10px;
      width: 100%;
      height: 100%;
      border-radius: 30px;
      border: 1px solid #ffffff;
    }
  }
  .Works-box {
    margin-top: 110px;
    width: 100%;
    height: 572px;
    background: url("@static/img/newhome/work-bg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .Works-container {
      margin: 0 auto;
      width: 1200px;
      .works-left {
        position: relative;
        z-index: 1;
        .title {
          width: 578px;
          height: 92px;
          line-height: 92px;
          background: url("@static/img/newhome/work-title.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          padding-left: 96px;
          font-size: 40px;
          font-family: PlusJakartaSans-Bold;
          font-weight: bold;
          color: #ffffff;
        }
        .content {
          margin-top: -10px;
          width: 490px;
          height: 315px;
          background: url("@static/img/newhome/Liquid@2x.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          padding-top: 1px;
          .tit {
            margin-top: 57px;
            margin-bottom: 25px;
            text-align: center;
            font-size: 20px;
            font-family: PlusJakartaSans-Bold;
            font-weight: bold;
            color: #ffffff;
            line-height: 23px;
            letter-spacing: 1px;
            text-shadow: 0px 0px 15px #adfb96;
          }
          .dis {
            margin: 0 auto;
            width: 425px;
            text-align: center;
            font-size: 18px;
            font-family: PlusJakartaSans-Regular;
            font-weight: 400;
            color: #ffffff;
            line-height: 31px;
            text-shadow: 0px 0px 10px #adfb96;
          }
        }
        .com-btn {
          width: 130px;
          height: 31px;
          opacity: 0.7;
          border: 1px solid #ffffff;
          font-size: 16px;
          font-family: FiraMono-Medium;
          font-weight: 500;
          color: #ffffff;
          border-radius: 4px;
        }
        .comingLeft {
          background: url("@static/img/newIcon/comingSoon_left_bg.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .comingRight {
          background: url("@static/img/newIcon/comingSoon_right_bg.png");
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
      }
      .works-right {
        position: relative;
        margin-left: -20px;
        .img {
          width: 658px;
          height: 378px;
        }
      }
    }
  }
  .Ecosystem-box {
    margin: 0 auto;
    margin-top: -90px;
    width: 1200px;
    .title {
      margin-bottom: 48px;
      text-align: center;
      font-size: 40px;
      font-family: PlusJakartaSans-Bold;
      font-weight: bold;
      color: #ffffff;
      line-height: 47px;
    }
    .Ecosystem-item {
      width: 380px;
      height: 256px;
      background: #141414;
      border-radius: 30px;
      padding: 30px 34px;
      .tit {
        font-size: 24px;
        font-family: PlusJakartaSans-Bold;
        font-weight: bold;
        color: #ffffff;
      }
      .dis {
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 16px;
        font-family: PlusJakartaSans-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.6);
        line-height: 23px;
      }
      .icon {
        width: 48px;
        height: 48px;
      }
    }
    .Ecosystem-item:hover {
      border: 1px solid rgba(173, 251, 150, 1);
    }
  }
  .Paricipation-steps-wrap:nth-of-type(1) {
    margin-bottom: 30px;
  }
  .Paricipation-steps-right {
    height: 100%;
    .steps-item {
      width: 210px;
      height: 556px;
      padding: 30px 12px;
      .title {
        margin-bottom: 51px;
        width: 100%;
        height: 100px;
        font-size: 15px;
        font-family: FiraMono-Medium;
        font-weight: 500;
        line-height: 24px;
      }
      .content {
        font-size: 14px;
        font-family: FiraMono-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.7);
        line-height: 21px;
        .marB {
          margin-bottom: 15px;
        }
      }
    }
    .steps-item:hover {
      color: #000000;
      .title .account,
      .content .account,
      .content {
        color: #000000;
      }
    }
    .steps-item:nth-of-type(1) {
      background: url("@static/img/newIcon/steps_left_bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .steps-item:nth-of-type(1):hover {
      background: url("@static/img/newIcon/steps_left_active.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .steps-item:nth-of-type(2) {
      background: url("@static/img/newIcon/steps_right_bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .steps-item:nth-of-type(2):hover {
      background: url("@static/img/newIcon/steps_right_active.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .icon {
      margin-bottom: 30px;
      width: 36px;
      .img {
        width: 32px;
      }
    }
  }
}
.buy-box {
  margin-top: 130px;
  width: 100%;
  height: 390px;
  background: url("@static/img/newhome/buy-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .buy-container {
    margin: 0 auto;
    width: 1200px;
    height: 390px;
    .tit {
      font-size: 40px;
      font-family: PlusJakartaSans-Bold;
      font-weight: bold;
      color: #000000;
    }
    .dis {
      margin: 20px 0;
      font-size: 18px;
      font-family: DMSans-Medium;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      line-height: 27px;
    }
    .btn {
      width: 231px;
      height: 60px;
      background: #000000;
      border-radius: 44px;
      padding: 0 8px 0 30px;
      span {
        font-size: 18px;
        font-family: PlusJakartaSans-Bold;
        font-weight: bold;
        color: #ffffff;
      }
      .icons {
        width: 44px;
        height: 44px;
        background: #ffffff;
        border-radius: 50%;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
    .right .img {
      width: 434px;
    }
  }
}
</style>
