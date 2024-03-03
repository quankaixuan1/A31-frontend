<template>
  <q-tabs align="left" class="bg-primary text-white shadow-6 top-navigation">
    <q-route-tab to="/main/detect/truthfulness" label="真实性" />
    <q-route-tab to="/main/detect/safety" label="安全性" />
    <q-route-tab to="/main/detect/fairness" label="公平性" />
    <q-route-tab to="/main/detect/robustness" label="鲁棒性" />
    <q-route-tab to="/main/detect/privacy" label="隐私" />
    <q-route-tab to="/main/detect/ethics" label="伦理" />

  </q-tabs>
  <div>
    <h1>DetectPage</h1>
  </div>
  <!-- <chat-room /> -->
  <router-view />
</template>
<script setup>
// import ChatRoom from 'src/components/ChatRoom.vue';
</script>
<style>

</style>
