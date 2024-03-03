<template>
  <h1>Robustness</h1>
  <div>
    <button @click="fetchData">Get data</button>
    <div v-if="data">
      {{ data }}
    </div>
    <!-- <ul>
      <li v-for="user in users" :key="user.name">{{ user.name }} - {{ user.age }}</li>
    </ul> -->
  </div>
  <button @click="fetchData">Get message</button>
  <chat-room />

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';
import ChatRoom from 'src/components/ChatRoom.vue';

const data = ref(null);

function fetchData() {
  axios
    .get('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      data.value = response.data;
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
}
</script>
