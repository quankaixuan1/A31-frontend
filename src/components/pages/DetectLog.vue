<template>
    <q-tabs align="left" class="bg-primary text-white shadow-6 top-navigation" >
    <q-route-tab to="" label="漏洞" />
    <q-route-tab to="/main/log/graph" label="图表" />
    <q-route-tab to="" label="版本" />
  </q-tabs>
  <div>
    <h1>Log</h1>
  </div>
  <LogData></LogData>
  <router-view />
</template>
<script setup>
import LogData from 'src/components/LogData.vue'
</script>
