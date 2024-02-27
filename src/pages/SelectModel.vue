<template>
  <div class="centered-div">
    <div class="fit column no-wrap justify-center items-center content-center q-gutter-y-xl">

      <div class="fit row no-wrap justify-center items-center content-center q-gutter-xl">
        <img src="src\assets\quasar-logo-vertical.svg" alt="Logo" class="logo">
        <div class="text-h1">产品名称</div>

      </div>


      <div class="q-pa-md">
        <q-btn-dropdown color="blue" label="将您的大语言模型链接到电脑" dropdown-icon="change_history" size="xl">
          <q-list>
            <q-item clickable @click="goToMain('模型一')">
              <q-item-section>
                <q-item-label>模型一</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable @click="goToMain('模型二')">
              <q-item-section>
                <q-item-label>模型二</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable @click="goToMain('模型三')">
              <q-item-section>
                <q-item-label>模型三</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useModelStore } from 'src/stores/store'

const modelStore = useModelStore();
const router = useRouter();

function goToMain(model: string) {
  modelStore.setModelName(model);
  router.push({ path: '/main/index' });
}
</script>

<style>
.logo {
  width: 150px;
  height: auto;
}

.button {
  width: 150px;
  height: auto;
}


html,
body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
