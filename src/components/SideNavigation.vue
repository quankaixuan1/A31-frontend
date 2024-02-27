<template v-slot:before>
  <q-tabs vertical class="text-teal side-navigation">
    <q-route-tab
      class="in"
      name="home"
      icon="home"
      label="首页"
      to="/main/index"
    />
    <q-route-tab
      class="in"
      name="Detect"
      icon="manage_search"
      label="漏洞检测"
      to="/main/detect"
    />
    <q-route-tab
      class="in"
      name="Defense"
      icon="alarm"
      label="安全防御"
      to="/main/defense"
    />
    <q-route-tab
      class="in"
      name="Log"
      icon="feed"
      label="系统日志"
      to="/main/log"
    />
  </q-tabs>
</template>

<script lang="ts" setup></script>

<style>
.side-navigation .q-tab {
  padding: 40px;
}
.in .q-tab__icon {
  margin: 20px;

  font-size: 60px; /* 调整图标大小 */
}

.side-navigation .q-tab__label {
  font-weight: 500;
  font-size: 20px; /* 调整文字大小 */
}
</style>
