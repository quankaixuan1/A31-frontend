<template>
  <div class="row">
    <div class="text-h2 inner-headline2 col">输出检测</div>
    <div class="text-h5 inner-headline2 col">根据需求选择输出检测模块，配置相应参数，对内容进行净化，适应企业特定任务需要</div>
  </div>
  <q-page>
    <div class="bg-defense-r" style="border-radius: 8px">
      <div class="q-pa-md">
        <div class="column">
          <!-- 显示区 -->
          <!-- <div
            class="q-mt-md"
            style="
              overflow-y: auto;
              padding: 10px;
              border-radius: 4px;
              border: 2px solid grey;
              background-color: white;
              height: 600px;
            "
          >
            <div v-if="!responseReceived" class="fit row flex-center">
              <div class="column"></div>
              <q-img
                style="width: 150px; height: 150px"
                src="../../../assets/3.png"
              ></q-img>
            </div>
            <div v-if="responseReceived" class="q-pa-md">
              <div class="text-h4 q-mb-md"></div>
              <q-chat-message
                v-for="(message, index) in conversation"
                :key="index"
                :text="[message.text]"
                :name="message.sender === 'user' ? 'You' : 'Robot'"
                :avatar="message.sender === 'user' ? userAvatar : robotAvatar"
                :sent="message.sender === 'user'"
                :text-color="message.sender === 'user' ? '' : 'white'"
                :bg-color="message.sender === 'user' ? 'amber-7' : 'primary'"
              />
            </div>
          </div> -->
          <!-- 输入区 -->
          <q-input
            v-model="inputData"
            label="请输入内容"
            outlined
            color="white"
            @keyup.enter="sendData"
          />
          <br />
          <div class="fit row">
            <q-btn
              label="发送数据"
              @click="sendData"
              class="bg-defense col-2"
            />
            <!-- <div class="col"></div>
            <q-btn label="测试" @click="test" class="bg-defense col-2" />
            <div class="col-7"></div> -->
          </div>
          <!-- 分数区 -->
          <br />
          <div>
            <div class="row q-gutter-lg">
              <q-card bordered class="my-card col bg-defense">
                <!-- <q-card-section class="row items-center">
                  <div class="text-h6">输入分数</div>
                  <q-space></q-space>

                  <q-icon
                    :name="inputIconInfo.icon"
                    :color="inputIconInfo.color"
                    size="lg"
                  />
                </q-card-section>

                <q-separator dark inset />

                <q-card-section>
                  <q-markup-table separator="cell">
                    <tbody>
                      <tr>
                        <td class="text-left">Anonymize</td>
                        <td class="text-center">{{ Anonymize }}</td>
                      </tr>
                      <tr>
                        <td class="text-left">Toxicity</td>
                        <td class="text-center">{{ Toxicity }}</td>
                      </tr>
                      <tr>
                        <td class="text-left">TokenLimit</td>
                        <td class="text-center">{{ TokenLimit }}</td>
                      </tr>
                      <tr>
                        <td class="text-left">PromptInjection</td>
                        <td class="text-center">{{ PromptInjection }}</td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </q-card-section> -->
              </q-card>
              <q-card bordered class="my-card col bg-defense">
                <q-card-section class="row items-center">
                  <div class="text-h6">输出分数</div>
                  <q-space></q-space>
                  <q-icon
                    :name="outputIconInfo.icon"
                    :color="outputIconInfo.color"
                    size="lg"
                  />
                </q-card-section>

                <q-separator dark inset />

                <q-card-section>
                  <q-markup-table separator="cell">
                    <tbody>
                      <tr>
                        <td class="text-left">Sensitive</td>
                        <td class="text-center">{{ Sensitive }}</td>
                      </tr>
                      <tr>
                        <td class="text-left">Relevance</td>
                        <td class="text-center">{{ Relevance }}</td>
                      </tr>
                      <tr>
                        <td class="text-left">Deanonymize</td>
                        <td class="text-center">{{ Deanonymize }}</td>
                      </tr>
                      <tr>
                        <td class="text-left">NoRefusal</td>
                        <td class="text-center">{{ NoRefusal }}</td>
                      </tr>
                    </tbody>
                  </q-markup-table>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>

      </div>

    </div>
    <br><br>
  </q-page>
</template>
<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import userAvatar from '../../../assets/avatar.webp';
import robotAvatar from '../../../assets/robot.webp';

const inputData = ref('');
const output = ref('');

const responseReceived = ref(false);
const conversation = ref([]);

const Anonymize = ref(0);
const Toxicity = ref(0);
const TokenLimit = ref(0);
const PromptInjection = ref(0);

const Sensitive = ref(0);
const Relevance = ref(0);
const Deanonymize = ref(0);
const NoRefusal = ref(0);

const inputScore = ref(0);
const outputScore = ref(0);

const inputIconInfo = ref({});
const outputIconInfo = ref({});

function getIconColorInfo(score) {
  if (score >= 3) {
    return { icon: 'error', color: 'red' };
  } else if (score >= 2) {
    return { icon: 'warning', color: 'orange' };
  } else if (score >= 1) {
    return { icon: 'notifications', color: 'yellow' };
  } else {
    return { icon: 'done_all', color: 'green' };
  }
}

const sendData = async () => {
  const url = 'http://49.232.195.59:8100/defense/exec';
  const prompt = inputData.value.trim();
  if (prompt) {
    conversation.value.push({ text: prompt, sender: 'user' });
    responseReceived.value = true;
  }
  inputData.value = '';

  try {
    console.log(prompt);
    // post请求
    const response = await axios.post(url, { prompt });
    localStorage.setItem('serverResponse', JSON.stringify(response));
    // responseReceived.value = true;
    output.value = response.data;

    console.log('Response:', response.data);

    const reply = response.data.Output;
    conversation.value.push({ text: reply, sender: 'robot' });

    Anonymize.value = response.data.Anonymize;
    Toxicity.value = response.data.Toxicity;
    TokenLimit.value = response.data.TokenLimit;
    PromptInjection.value = response.data.PromptInjection;

    inputScore.value =
      parseFloat(Anonymize.value) +
      parseFloat(Toxicity.value) +
      parseFloat(TokenLimit.value) +
      parseFloat(PromptInjection.value);

    Sensitive.value = response.data.Sensitive;
    Relevance.value = response.data.Relevance;
    Deanonymize.value = response.data.Deanonymize;
    NoRefusal.value = response.data.NoRefusal;

    outputScore.value =
      parseFloat(Sensitive.value) +
      parseFloat(Relevance.value) +
      parseFloat(Deanonymize.value) +
      parseFloat(NoRefusal.value);

    // console.log(outputScore.value);

    inputIconInfo.value = getIconColorInfo(inputScore.value);

    outputIconInfo.value = getIconColorInfo(outputScore.value);
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

function test() {
  const serverResponse = JSON.parse(localStorage.getItem('serverResponse'));
  console.log(serverResponse.data);

  Anonymize.value = serverResponse.data.Anonymize;
  Toxicity.value = serverResponse.data.Toxicity;
  TokenLimit.value = serverResponse.data.TokenLimit;
  PromptInjection.value = serverResponse.data.PromptInjection;

  inputScore.value =
    parseFloat(Anonymize.value) +
    parseFloat(Toxicity.value) +
    parseFloat(TokenLimit.value) +
    parseFloat(PromptInjection.value);

  // console.log(inputScore.value);

  Sensitive.value = serverResponse.data.Sensitive;
  Relevance.value = serverResponse.data.Relevance;
  Deanonymize.value = serverResponse.data.Deanonymize;
  NoRefusal.value = serverResponse.data.NoRefusal;

  outputScore.value =
    parseFloat(Sensitive.value) +
    parseFloat(Relevance.value) +
    parseFloat(Deanonymize.value) +
    parseFloat(NoRefusal.value);

  // console.log(outputScore.value);

  inputIconInfo.value = getIconColorInfo(inputScore.value);

  outputIconInfo.value = getIconColorInfo(outputScore.value);
}
</script>
<style>
/* .text-detail {
padding: 10px;
border-radius: 4px;
border: 2px solid ;
} */
</style>
