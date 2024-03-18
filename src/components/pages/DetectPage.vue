<template>
  <div v-if="!isChildRoute">
    <div class="inner-box">
      <div class="text-body1">
        为探索llm的可信度，我们在真实性、安全性、公平性、鲁棒性、隐私性、机器道德伦理六个维度建立了基准
        <br>
        从上方导航栏中选择检测维度
      </div>
    </div>
    <h1></h1>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="slide-up">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isChildRoute = computed(() => {
  return route.matched.length > 2;
});
</script>
<style></style>
