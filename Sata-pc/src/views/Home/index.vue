<template>
  <div class="home">
    <bannerVue />
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
</style>
