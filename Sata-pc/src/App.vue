<template>
  <myHeader />
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component v-if="$route.meta.keepAlive" :is="Component" :key="$route.name"></component>
    </keep-alive>
    <component v-if="!$route.meta.keepAlive" :is="Component" :key="$route.name"></component>
  </router-view>
  <!-- <myFooter /> -->
  <!-- <termsPopup v-if="isTerms && userInfo" /> -->
</template>

<script lang="ts" setup>
import myHeader from "@/components/header/index.vue";
import myFooter from "@/components/footer/index.vue";
import { useState } from '@/uint/vuex/useState';
import { useMutations } from '@/uint/vuex/useMutations';
import { onMounted } from "vue";
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

onMounted(() => {
})
const { setData } = useMutations('user', ['setData']);
const changeLang = () => {
  locale.value = 'en';
  setData({ lang: 'en' });
}
</script>
