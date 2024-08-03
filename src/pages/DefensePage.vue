<template>
  <div v-if="!isChildRoute">
    <div class="row">
      <div class="text-h1 inner-headline2 col">威胁防御</div>
      <div class="text-h5 inner-headline2 col">了解威胁防御模块的防御效果，还可以体验防御功能如何实现</div>
    </div>
    <q-img src="../assets/defense.png"></q-img>
    <br /><br />
    <q-page> <div class="text-body1"></div> </q-page>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const isChildRoute = computed(() => {
  return route.matched.length > 2;
});
</script>
<style></style>
