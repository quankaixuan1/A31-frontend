<template>
  <div v-if="!isChildRoute">
    <div class="row">
      <div class="text-h1 inner-headline2 col">相关资讯</div>
      <div class="text-h5 inner-headline2 col">在这里浏览有关人工智能安全的新闻资讯，或是联系我们的开发团队</div>
    </div>
    <q-page>
      <div class="text-body1">介绍文字……</div>
    </q-page>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// 切换到子路由，隐藏父路由的元素
const isChildRoute = computed(() => {
  return route.matched.length > 2;
});
</script>
<style lang="sass"></style>
