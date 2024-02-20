<template>
  <div v-if="isNewStyle">
    <vue-countdown
      :time="timeLeft"
      v-slot="{ days, hours, minutes, seconds }"
      @end="endTimer"
    >
      <!--  hours, {{ minutes }} minutes, {{ seconds }} seconds. -->
      <div class="downTime ds-flex">
        <div class="bg-timer ds-flex-cloum-center">
          <p class="bg box-sizi">
            <span class="time">{{ days < 10 ? "0" + days : days }}</span>
          </p>
          <p class="unit">{{ $t("home.Days") }}</p>
        </div>
        <div class="bg-timer ds-flex-cloum-center">
          <p class="bg box-sizi">
            <span class="time">{{ hours < 10 ? "0" + hours : hours }}</span>
          </p>
          <p class="unit">{{ $t("home.Hours") }}</p>
        </div>
        <div class="bg-timer ds-flex-cloum-center">
          <p class="bg box-sizi">
            <span class="time">{{
              minutes < 10 ? "0" + minutes : minutes
            }}</span>
          </p>
          <p class="unit">{{ $t("home.Minutes") }}</p>
        </div>
        <div class="bg-timer ds-flex-cloum-center">
          <p class="bg box-sizi">
            <span class="time">{{
              seconds < 10 ? "0" + seconds : seconds
            }}</span>
          </p>
          <p class="unit">{{ $t("home.Seconds") }}</p>
        </div>
      </div>
    </vue-countdown>
  </div>
  {{days}}days{{hours}}hours{{minutes}}minutes{{seconds}}seconds
  111
  <div v-else>
    <vue-countdown
      :time="timeLeft"
      v-slot="{ days, hours, minutes, seconds }"
      @end="endTimer"
    >
      <!--  hours, {{ minutes }} minutes, {{ seconds }} seconds. -->
      <div class="new-timer ds-flex">
        <div class="bg-timer ds-flex" v-if="days > 0">
          <p class="bg box-sizi">
            <span class="time">{{ days < 10 ? "0" + days : days }}</span>
          </p>
          <p class="unit">d</p>
        </div>
        <div class="bg-timer ds-flex" v-if="hours > 0">
          <p class="bg box-sizi">
            <span class="time">{{ hours < 10 ? "0" + hours : hours }}</span>
          </p>
          <p class="unit">h</p>
        </div>
        <div class="bg-timer ds-flex">
          <p class="bg box-sizi">
            <span class="time">{{
              minutes < 10 ? "0" + minutes : minutes
            }}</span>
          </p>
          <p class="unit">m</p>
        </div>
        <div class="bg-timer ds-flex">
          <p class="bg box-sizi">
            <span class="time">{{
              seconds < 10 ? "0" + seconds : seconds
            }}</span>
          </p>
          <p class="unit">s</p>
        </div>
      </div>
    </vue-countdown>
  </div>
</template>


<script lang="ts" setup>
import { defineProps, ref, watch, defineEmits,onActivated,onMounted } from "vue";
import useCurrentInstance from "@/hooks/useCurrentInstance";
import VueCountdown from "@chenfengyuan/vue-countdown";
const globalApi = useCurrentInstance().proxy.$api;
const props = defineProps({
  time: Number,
  endTime: Number,
  isNewStyle: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(["time-end"]);
let timeLeft: any = ref(props.time * 1000);
const intervalId: any = ref(null);
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
onActivated(()=>{
    console.log("执行");
})
onMounted(()=>{
    console.log("1212");
})
const getServerTime = async () => {
  let res = await globalApi.home().getSystemTime();
  if (res.data.code === 200) {
    return res.data.data.timestamp + 28800000;
  }
  return 0;
};
const startTimer = () => {
  intervalId.value = setInterval(async () => {
    const now = await getServerTime();
    const distance = props.endTime - now;

    // 计算时间差
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.value = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000);

    // 如果倒计时结束，清除间隔
    if (distance < 0) {
      clearInterval(intervalId.value);
      days.value = 0;
      hours.value = 0;
      minutes.value = 0;
      seconds.value = 0;
    }
  }, 1000);
};

const endTimer = () => {
  // console.log("倒计时结束");
  emit("time-end");
};

watch(
  props,
  (newProps) => {
    if (newProps.time) {
      timeLeft.value = props.time * 1000;
    }
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss" scoped>
.control-buttons {
  color: #fff;
}

.downTime .bg-timer {
  margin-right: 13px;
  width: 67px;
  height: 67px;
  background: #000000;
  border-radius: 5px;
  border: 1px solid #252525;

  .bg {
    margin-bottom: -5px;
    .time {
      font-size: 24px;
      color: #ffffff;
    }
  }

  .unit {
    font-weight: 400;
    font-size: 13px;
    color: rgba($color: #ffffff, $alpha: 0.5);
  }
}

.downTime .bg-timer:nth-last-child(1) {
  margin-right: 0px;
}

.new-timer .bg-timer {
  margin-left: 5px;
  margin-top: 3px;
  font-size: 16px;
  color: #ffffff;
}
</style>