<template>
  <h1>test</h1>
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
  <q-page padding>
    <q-btn label="Send Data" @click="sendData"></q-btn>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios';

const data = ref(null);

function fetchData() {
  axios
    .get('https://jsonplaceholder.typicode.com/users/3')
    .then((response) => {
      data.value = response.data;
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
}
const sendData = async () => {
  const prompt = '你好啊';
  const url = 'http://49.232.195.59:8100/defense/exec';

  try {
    const response = await axios.post(url, {
      prompt
    });
    console.log('Response:', response.data);
    // 处理响应数据
  } catch (error) {
    console.error('Error:', error);
    // 处理错误情况
  }
};
</script>
