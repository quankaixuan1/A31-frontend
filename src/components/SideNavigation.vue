<template v-slot:before>
  <q-tabs class="side-navigation">
    <!-- <q-route-tab class="in" name="home" label="首页" to="/index" /> -->
    <q-route-tab class="in" name="Detect" label="安全检测" to="/detect" />
    <q-route-tab class="in" name="Defense" label="威胁防御" to="/defense/res" />
    <q-route-tab class="in" name="Log" label="系统日志" to="/log" />
  </q-tabs>
</template>

<script lang="ts" setup></script>

<style>
.side-navigation {
  /* position: fixed; */
}
.side-navigation .q-tab {
  padding: 20px;
}
/* 调整图标大小 */
.in .q-tab__icon {
  margin: 10px;

  font-size: 40px;
}
/* 调整文字大小 */
.side-navigation .q-tab__label {
  font-weight: 600;
  font-size: 18px;
  width: 90px;
}
</style>
