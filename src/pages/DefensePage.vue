<template>
  <div v-if="!isChildRoute">
    <div class="row">
      <div class="text-h1 inner-headline2 col">威胁防御</div>
      <div class="text-h5 inner-headline2 col">大模型威胁防御模块 …………</div>
    </div>
    <q-img src="../assets/defense.png"></q-img>
    <br /><br />
    <div class="text-body1">介绍文字……</div>
  </div>
  <router-view></router-view>
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
