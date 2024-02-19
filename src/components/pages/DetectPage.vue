<template>
  <q-tabs align="left" class="bg-primary text-white shadow-6 top-navigation">
    <q-route-tab to="" label="内部页面一" />
    <q-route-tab to="" label="内部页面二" />
    <q-route-tab to="" label="内部页面三" />
  </q-tabs>
  <div>
    <h1>DetectPage</h1>
  </div>
  <chat-room />
</template>
<script setup>
import ChatRoom from 'src/components/ChatRoom.vue';
</script>
<style>
.top-navigation .q-tab__label {
  margin: 20px;
  font-weight: 500;
  font-size: 20px; /* 调整文字大小 */
}
</style>
