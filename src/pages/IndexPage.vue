<template>
  <div v-if="!isChildRoute"><h1>欢迎来到……</h1></div>
  <!-- <div style="height: 50px; width: 100px; background-color: blue"></div>
  <q-option-group
    v-model="panel"
    inline
    :options="[
      { label: 'Mails', value: 'mails' },
      { label: 'Alarms', value: 'alarms' },
      { label: 'Movies', value: 'movies' },
    ]"
  />
  <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
    <q-tab-panel name="mails">
      <div class="text-h6">Mails</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="alarms">
      <div class="text-h6">Alarms</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="movies">
      <div class="text-h6">Movies</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>
  <transition-group
    appear
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <p key="text">Lorem Ipsum</p>
    <q-btn key="email-button" color="secondary" icon="mail" label="Email" />
  </transition-group> -->
  <router-view />
</template>

<script setup lang="ts">
// import { ref } from 'vue';
// const panel = ref('movies');

import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isChildRoute = computed(() => {
  return route.matched.length > 2;
});
</script>
<style>
.ioopx {
  height: 100px;
}
</style>
