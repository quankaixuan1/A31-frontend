<template>
    <q-tabs align="left" class="bg-primary text-white shadow-6 top-navigation">
    <q-route-tab to="" label="资讯" />
    <q-route-tab to="" label="图表" />
    <q-route-tab to="/main/index/test" label="测试" />
  </q-tabs>
  <h1>欢迎来到……</h1>
  <router-view />

</template>

<script setup lang="ts">

</script>
<style>
.top-navigation .q-tab__label {
  margin: 20px;
  font-weight: 500;
  font-size: 20px; /* 调整文字大小 */
}
</style>
