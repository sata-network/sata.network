<template>
    <div class="calendar">
      <div class="calendar-header">
        <button @click="prevMonth">&lt;</button>
        {{ currentMonth.format('MMMM YYYY') }}
        <button @click="nextMonth">&gt;</button>
      </div>
      <table class="calendar-table">
        <thead>
          <tr>
            <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="week in calendar" :key="week">
            <td
              v-for="date in week"
              :key="date.format('YYYY-MM-DD')"
              :class="{
                'range': isInRange(date),
                'current': isCurrentDate(date),
              }"
            >
              {{ date.date() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
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
  
  <style scoped>
  .calendar {
    font-family: Arial, sans-serif;
  }
  
  .calendar-header {
    text-align: center;
    margin-bottom: 10px;
  }
  
  .calendar-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .calendar-table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .calendar-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }
  
  .range {
    color: blue;
  }
  
  .current {
    color: red;
  }
  </style>
  