<template>
  <div class="row">
    <div class="text-h1 inner-headline2 col">防御分数</div>
    <div class="text-h5 inner-headline2 col">防御效果的详细信息</div>
  </div>
  <q-page>

    <div class="bg-defense-r" style="border-radius: 8px">
      <div class="q-pa-md">
      <q-input v-model="inputData" label="请输入内容" outlined color="white" />
      <q-btn label="发送数据" @click="sendData" class="q-mt-md bg-defense" />
      <q-btn label="测试" @click="test" class="q-mt-md bg-defense" />


      <div v-if="responseReceived">
        <h6>检测结果：</h6>
        <q-card>
          <q-card-section>
            <div>{{ output }}</div>
            <!-- <div>{{inputScore}}</div>
            <div>{{outputScore}}</div> -->
            <!-- <div v-for="(score, index) in scores" :key="index" :text="[score]"></div> -->

          </q-card-section>
        </q-card>
      </div></div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const inputData = ref('');
const output = ref('');
const responseReceived = ref(false);


const sendData = async () => {
  const url = 'http://49.232.195.59:8100/defense/exec';
  const prompt = inputData.value;
  try {
    console.log(prompt);
    const response = await axios.post(url, { prompt });
    localStorage.setItem('serverResponse', JSON.stringify(response));
    responseReceived.value = true;
    output.value = response.data;
    console.log('Response:', response.data);
    // const lines = response.data.split('\n');
    // const strInputScore = lines[0].match(/scores=({.*?})/);
    // const strOutputScore = lines[2].match(/scores=({.*?})/);
    // console.log(strInputScore,strOutputScore)
    // const inputJsonStr = strInputScore.replace(/'/g, '"');
    // const outputJsonStr = strOutputScore.replace(/'/g, '"');

    // const inputScore = JSON.parse(inputJsonStr);
    // const outputScore = JSON.parse(outputJsonStr);

    // const scores = ref(inputScore,outputScore);
    // console.log(scores)

    // 处理响应数据
  } catch (error) {
    console.error('Error:', error);
    responseReceived.value = false;
    // 处理错误情况
  }
};

function test(){
  const serverResponse = JSON.parse(localStorage.getItem('serverResponse'));
  // console.log(serverResponse.data)
  const lines = serverResponse.data.split('\n');
  console.log(lines[0])
  const strInputScore = lines[0].match(/scores=({.*?})/);


}
</script>
<style>
/* .text-detail {
padding: 10px;
border-radius: 4px;
border: 2px solid ;
} */
</style>
