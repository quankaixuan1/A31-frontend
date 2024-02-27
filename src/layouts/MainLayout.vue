<template>
  <q-layout view="lHh lpR lFf">
    <q-header class="bg-primary text-white" height-hint="98">
      <!-- elevated 添加阴影（不要写在class里） -->
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          size="lg"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row">
          <q-avatar size="60px" class="img">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
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
            <!-- <template v-slot:prepend>
              <q-icon name="mail" />
            </template> -->

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
        <q-btn push color="primary" label="首页" size="lg" to="/main" />
        <q-btn push color="primary" label="退出" size="lg" to="/" />
      </q-toolbar>

      <!-- <q-tabs align="left">
        <q-route-tab to="" label="Page One" />
        <q-route-tab to="" label="Page Two" />
        <q-route-tab to="" label="Page Three" />
      </q-tabs> -->
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      width="200"
    >
      <SideNavigation class="center"></SideNavigation>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import SideNavigation from 'src/components/SideNavigation.vue';
import { useModelStore } from 'src/stores/store';

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const modelStore = useModelStore();

// const model = ref(null);
// const options = ref(['模型一', '模型二', '模型三']);
</script>

<style>
.center {
  padding-top: 50%;
  /* background-color: black; */
}
.img {
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.select {
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.select .q-field__native {
  font-size: 20px;
}
.select .q-field__label {
  margin-bottom: 1px;
  font-size: 20px;
}
</style>
