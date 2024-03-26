<template>
  <q-layout view="hHh LpR lFf">
    <q-header
      class="row justify-center"
      height-hint="98"
      :style="{ backgroundColor: headerBackgroundColor }"
      style="transition: transform 0.5s ease, background-color 0.5s ease"
      :class="{ 'move-top': !showTopbar }"
    >
      <!-- elevated 添加阴影（不要写在class里） -->
      <q-toolbar :class="windowClass">
        <q-toolbar-title class="row items-center">
          <div
            class="row col items-center hoverable-div"
            @click="navigateTo('/')"
          >
            <img
              src="~assets/4.png"
              style="height: 40px; padding-right: 10px"
            />
            <div class="text-h5">语镜</div>
          </div>
          <div class="row col-8 justify-start">
            <SideNavigation></SideNavigation>
          </div>
          <div class="row col items-center justify-end">
            <!-- <q-select
              v-model="locale"
              :options="localeOptions"
              label="Language"
              dense
              borderless
              emit-value
              map-options
              options-dense
              dark
              style="min-width: 150px; margin-right: 20px"
            /> -->
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <div :class="windowClass">
        <q-separator dark v-show="currentTabBar !== ''" v-if="showTabs" />
      </div>

      <q-tabs
        align="right"
        :class="windowClass"
        class="top-navigation home-bar"
        v-show="currentTabBar === 'home-bar'"
        v-if="showTabs"
      >
        <q-route-tab to="" label="资讯" />
        <q-route-tab to="" label="图表" />
        <q-route-tab to="/index/test" label="测试" />
      </q-tabs>

      <q-tabs
        align="right"
        :class="windowClass"
        class="top-navigation home-bar"
        v-show="currentTabBar === 'detect-bar'"
        v-if="showTabs"
      >
        <q-route-tab to="/detect/truthfulness" label="检测 & 评估" />
        <q-route-tab to="/detect/safety" label="排行榜" />
        <!-- <q-route-tab to="/main/detect/fairness" label="公平性" />
        <q-route-tab to="/main/detect/robustness" label="鲁棒性" />
        <q-route-tab to="/main/detect/privacy" label="隐私" />
        <q-route-tab to="/main/detect/ethics" label="伦理" /> -->
      </q-tabs>

      <q-tabs
        align="right"
        :class="windowClass"
        class="top-navigation home-bar"
        v-show="currentTabBar === 'defense-bar'"
        v-if="showTabs"
      >
        <q-route-tab to="/defense/res" label="防御效果" />
        <q-route-tab to="/defense/score" label="输入&输出 识别" />
      </q-tabs>

      <q-tabs
        align="right"
        :class="windowClass"
        class="top-navigation home-bar"
        v-show="currentTabBar === 'log-bar'"
        v-if="showTabs"
      >
        <q-route-tab to="/log/table" label="漏洞" />
        <q-route-tab to="/log/graph" label="图表" />
        <q-route-tab to="" label="版本" />
      </q-tabs>
    </q-header>

    <!-- <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      persistent
      overlay
      bordered
      width="130"
    >
    </q-drawer> -->

    <!-- <q-page-container :class="bgColorClass">
      <div v-if="!isChildRoute" class="home-page">
        <SelectModel />
      </div>
      <router-view v-slot="{ Component }">
        <transition name="slide-up">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container> -->
    <div v-if="!isChildRoute">
      <SelectModel />
    </div>
    <q-page-container :class="bgColorClass" class="fit row justify-center">
      <div :class="windowClass">
        <router-view> </router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted, computed } from 'vue';
import SideNavigation from 'src/components/SideNavigation.vue';
import SelectModel from 'src/pages/SelectModel.vue';
import { useModelStore } from 'src/stores/store';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useResponsiveClass } from 'src/mixin/ResponsiveMixin';
const { windowClass, headerBackgroundColor, showTopbar } = useResponsiveClass();

const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const isMoved = ref(false);
const iconName = ref('keyboard_arrow_left');
function togglePosition() {
  isMoved.value = !isMoved.value;
  iconName.value = isMoved.value
    ? 'keyboard_arrow_right'
    : 'keyboard_arrow_left';
}

function leftDrawerAndPositon() {
  toggleLeftDrawer();
  togglePosition();
}

const route = useRoute();
const currentTabBar = ref(''); // 默认显示的顶部导航栏
const bgColorClass = ref('bg-home');
const showTabs = ref(true); // 控制 q-tabs 显示的变量

const isChildRoute = computed(() => {
  return route.matched.length > 1;
});

const updateTabBar = (path) => {
  if (path.startsWith('/index')) {
    currentTabBar.value = 'home-bar';
    bgColorClass.value = 'bg-index';
  } else if (path.startsWith('/detect')) {
    currentTabBar.value = 'detect-bar';
    bgColorClass.value = 'bg-detect';
  } else if (path.startsWith('/defense')) {
    currentTabBar.value = 'defense-bar';
    bgColorClass.value = 'bg-defense';
  } else if (path.startsWith('/log')) {
    currentTabBar.value = 'log-bar';
    bgColorClass.value = 'bg-log';
  } else {
    currentTabBar.value = '';
    bgColorClass.value = 'bg-home';
  }
};

const router = useRouter();

function navigateTo(route) {
  router.push(route);
}

onMounted(async () => {
  updateTabBar(route.path);
  window.addEventListener('scroll', updateHeaderBackground);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateHeaderBackground);
});

const updateHeaderBackground = () => {
  console.log(route.path);

  if (route.path !== '/') {
    headerBackgroundColor.value =
      window.scrollY > 100 ? 'black' : 'transparent';
    showTopbar.value = window.scrollY > 100 ? false : true;
  }
  if (route.path === '/') {
    headerBackgroundColor.value =
      window.scrollY > 1000 ? 'black' : 'transparent';
  }
};

watch(
  () => route.path,
  (newPath) => {
    showTabs.value = false;
    nextTick(() => {
      // 在下一个 tick 显示 q-tabs
      showTabs.value = true;
      updateTabBar(newPath);
    });
  }
);

const { locale } = useI18n({ useScope: 'global' });
const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-CN', label: '中文' },
];
</script>

<style>
.top-navigation .q-tab__label {
  margin: 15px;
  font-weight: 500;
  font-size: 18px;
}
.img {
  margin: 10px;
  /* margin-top: 20px; */
  margin-right: 20px;
  /* margin-bottom: 20px; */
}
.select {
  width: 300px;
  /* height: 10px; */
  margin-top: 10px;
  margin-bottom: 10px;
}

.select .q-field__native {
  font-size: 20px;
}
.select .q-field__label {
  margin-bottom: 1px;
  font-size: 20px;
}

.menu-button {
  position: fixed;
  top: 402px;
  left: 110px;
  transition: transform 0.3s ease;
}
.move-right {
  transform: translateX(-130px);
}
.move-top {
  transform: translateY(-80px);
}
</style>
