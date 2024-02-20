<template>
  <div class="schedule-box">
    <div class="schedule-title box-sizi">
      <ul class="wrap ds-flex">
        <li class="item" v-for="day in daysOfWeek" :key="day">
          {{ day }}
        </li>
      </ul>
    </div>
    <div class="schedule-container box-sizi">
      <ul class="wrap ds-flex" v-for="week in calendar" :key="week">
        <li
          class="item ds-flex-center"
          v-for="date in week"
              :key="date.format('YYYY-MM-DD')"
              :class="{
                'blue': isInRange(date),
                'red': isCurrentDate(date),
              }"
        >
          <p>{{ date.date() }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
    
<script setup lang='ts'>
 import { ref, computed, watch } from 'vue';
  import dayjs from 'dayjs';
  import isBetween from 'dayjs/plugin/isBetween';
  dayjs.extend(isBetween);
  
  // Props
  const props = defineProps({
    start: String,
    end: String,
  });
  
  const start = ref(props.start);
  const end = ref(props.end);
  const currentDate = ref(dayjs());
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const currentMonth = computed(() => currentDate.value);
  
  const calendar = computed(() => {
    const firstDay = currentMonth.value.startOf('month');
    const lastDay = currentMonth.value.endOf('month');
    const weeks: dayjs[][] = [];
    let currentDay = firstDay.clone().startOf('week');
  
    while (currentDay.isBefore(lastDay)) {
      const week: dayjs[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(currentDay);
        currentDay = currentDay.add(1, 'day');
      }
      weeks.push(week);
    }
  
    return weeks;
  });
  
  const prevMonth = () => {
    currentDate.value = currentDate.value.subtract(1, 'month');
  };
  
  const nextMonth = () => {
    currentDate.value = currentDate.value.add(1, 'month');
  };
  
  const isInRange = (date: dayjs.Dayjs) => {
    const startDate = dayjs(start.value);
    const endDate = dayjs(end.value);
    return date.isBetween(startDate, endDate, null, '[]');
  };
  
  const isCurrentDate = (date: dayjs.Dayjs) => {
    return date.isSame(currentDate.value, 'day');
  };
  
  // 监听props的变化，更新start和end
  watch([start, end], () => {
    // 更新日历组件的显示
  });
</script>
    
<style lang="scss" scoped>
.schedule-box {
  width: 718px;
  .schedule-title {
    width: 100%;
    height: 58px;
    border: 2px solid #363636;
    border-radius: 16px 16px 0 0;
    .wrap {
      width: 100%;
      height: 58px;
      .item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        font-family: FiraMono-Regular;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
  .schedule-container {
    width: 100%;
    height: 350px;
    border: 2px solid #363636;
    border-radius: 0 0 16px 16px;
    border-top: none;
    .wrap {
      width: 100%;
      height: 65px;
      .item {
        flex: 1;
        text-align: center;
        font-size: 14px;
        font-family: FiraMono-Regular;
        font-weight: 400;
        color: #888888;
      }
      .red {
        p {
          width: 32px;
          height: 32px;
          text-align: center;
          line-height: 32px;
          background: #ffffff;
          border-radius: 50%;
          font-size: 14px;
          font-family: FiraMono-Medium;
          font-weight: 500;
          color: #121212;
        }
      }
      .blue {
        color: #ceff7c;
      }
    }
  }
}
</style>