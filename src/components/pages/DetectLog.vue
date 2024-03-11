<template>
  <div v-if="!isChildRoute">
    <h1>Log</h1>
  </div>
  <router-view />
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isChildRoute = computed(() => {
  return route.matched.length > 2;
});</script>
<style>

</style>
