<template>
  <q-layout view="hHh LpR lFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <!-- elevated 添加阴影（不要写在class里） -->
      <q-toolbar>
        <!-- <q-btn
          dense
          flat
          round
          icon="menu"
          size="lg"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title class="row">
          <q-avatar size="56px" class="img">
            <img src="/img/4.png" />
          </q-avatar>
          <!-- <q-select
            class="select"
            bg-color="white"
            rounded
            outlined
            v-model="model"
            :options="options"
            label="当前模型"
          /> -->
          <q-field
            dark
            class="select"
            standout
            :model-value="model"
            prefix="当前模型:"
          >
            <template v-slot:prepend>
              <q-icon name="mail" />
            </template>

            <template v-slot:control>
              <div
                class="self-center full-width no-outline text-right"
                tabindex="0"
              >
                {{ modelStore.modelName }}
              </div>
            </template>
          </q-field>
        </q-toolbar-title>
        <!-- <q-btn push color="primary" label="首页" size="lg" to="/main" /> -->
        <q-btn push color="primary" label="退出" size="md" to="/" />
      </q-toolbar>
      <!-- <q-tabs align="left">
        <q-route-tab to="" label="Page One" />
        <q-route-tab to="" label="Page Two" />
        <q-route-tab to="" label="Page Three" />
      </q-tabs> -->

      <q-separator inset dark />

      <q-tabs
        class="top-navigation home-bar"
        v-show="currentTabBar === 'home-bar'"
        v-if="showTabs"
      >
        <!-- <q-tabs align="left" class="bg-primary text-white shadow-6 top-navigation"> -->
        <q-route-tab to="" label="资讯" />
        <q-route-tab to="" label="图表" />
        <q-route-tab to="/main/index/test" label="测试" />
      </q-tabs>

      <q-tabs
        class="top-navigation detect-bar"
        v-show="currentTabBar === 'detect-bar'"
        v-if="showTabs"
      >
        <q-route-tab to="/main/detect/truthfulness" label="真实性" />
        <q-route-tab to="/main/detect/safety" label="安全性" />
        <q-route-tab to="/main/detect/fairness" label="公平性" />
        <q-route-tab to="/main/detect/robustness" label="鲁棒性" />
        <q-route-tab to="/main/detect/privacy" label="隐私" />
        <q-route-tab to="/main/detect/ethics" label="伦理" />
      </q-tabs>

      <q-tabs
        class="top-navigation defense-bar"
        v-show="currentTabBar === 'defense-bar'"
        v-if="showTabs"
      >
        <q-route-tab to="" label="内部页面一" />
        <q-route-tab to="" label="内部页面二" />
        <q-route-tab to="" label="内部页面三" />
      </q-tabs>

      <q-tabs
        class="top-navigation log-bar"
        v-show="currentTabBar === 'log-bar'"
        v-if="showTabs"
      >
        <q-route-tab to="/main/log/table" label="漏洞" />
        <q-route-tab to="/main/log/graph" label="图表" />
        <q-route-tab to="" label="版本" />
      </q-tabs>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      persistent
      overlay
      bordered
      width="130"
    >
      <SideNavigation></SideNavigation>
    </q-drawer>

    <q-page-container
      class="fit row wrap justify-center items-center container-body"
    >
      <router-view v-slot="{ Component }">
        <transition name="slide-up">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
  <q-btn
    class="menu-button"
    :class="{ 'move-right': isMoved }"
    color="blue-10"
    :icon="iconName"
    fab
    flat
    round
    @click="leftDrawerAndPositon"
  >
  </q-btn>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from 'vue';
import SideNavigation from 'src/components/SideNavigation.vue';
import { useModelStore } from 'src/stores/store';
import { useRoute } from 'vue-router';

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

const modelStore = useModelStore();

// const model = ref(null);
// const options = ref(['模型一', '模型二', '模型三']);

const route = useRoute();
const currentTabBar = ref('home-bar'); // 默认显示的顶部导航栏
const showTabs = ref(true); // 控制 q-tabs 显示的变量

const updateTabBar = (path) => {
  if (path.startsWith('/main/index')) {
    currentTabBar.value = 'home-bar';
  } else if (path.startsWith('/main/detect')) {
    currentTabBar.value = 'detect-bar';
  } else if (path.startsWith('/main/defense')) {
    currentTabBar.value = 'defense-bar';
  } else if (path.startsWith('/main/log')) {
    currentTabBar.value = 'log-bar';
  }
};

onMounted(async () => {
  updateTabBar(route.path);
});

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
</script>

<style>
.top-navigation .q-tab__label {
  margin: 15px;
  font-weight: 500;
  font-size: 15px;
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

.container-body {
  /* padding-left: 10%;
  padding-right: 10%; */
}
</style>
