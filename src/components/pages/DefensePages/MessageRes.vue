<template>

<div class="row">
    <div class="text-h1 inner-headline2 col">防御效果</div>
    <div class="text-h5 inner-headline2 col">防御前与防御后的效果对比</div>
  </div>
  <q-page>
  <div class="bg-defense-r" style="border-radius: 8px">
    <div class="q-pa-md">
      <!-- 下拉框选择问题 -->
      <q-select
        v-model="selectedQuestion"
        :options="questions"
        option-value="value"
        option-label="label"
        label="选择一个问题"
        outlined
        class="q-mb-md"
        popup-content-class="bg-defense"
        color="white"
      />
      <!-- 发送按钮 -->
      <div class="flex q-gutter-md">
        <q-btn
          label="发送问题"
          @click="sendQuestion"
          :disabled="!selectedQuestion"
          class="bg-defense"
        />
        <q-btn label="变换" color="red-10" />
      </div>
      <!-- 消息显示区 -->
      <div
        class="q-mt-md"
        style="
          overflow-y: auto;
          padding: 10px;
          border-radius: 4px;
          border: 2px solid grey;
          background-color: white;
        "
      >
        <q-splitter v-model="splitterModel" :limits="[40, 60]">
          <template v-slot:before>
            <div class="q-pa-md">
              <div class="text-h4 q-mb-md">防御前</div>
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
          </template>

          <template v-slot:after>
            <div class="q-pa-md">
              <div class="text-h4 q-mb-md">防御后</div>
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
          </template>
        </q-splitter>
      </div>
    </div>
  </div>
</q-page>
</template>
<script setup>
import { ref } from 'vue';
import { QSelect, QBtn, QChatMessage } from 'quasar';
import userAvatar from '../../../assets/avatar.webp';
import robotAvatar from '../../../assets/robot.webp';
import { useResponsiveClass } from 'src/mixin/ResponsiveMixin';
const { windowClass } = useResponsiveClass();

const questions = ref([
  { label: "What's the weather like?", value: "What's the weather like?" },
  {
    label: 'How can I create a component in Vue?',
    value: 'How can I create a component in Vue?',
  },
  { label: 'Can you tell me a joke?', value: 'Can you tell me a joke?' },
  {
    label: 'What is the current version of Vue?',
    value: 'What is the current version of Vue?',
  },
]);

const selectedQuestion = ref(null);
const conversation = ref([]);

// const userAvatar = '~assets/avatar.webp';
// const robotAvatar = '~assets/robot.webp';

// const userAvatar = require('@/assets/avatar.webp');
// const robotAvatar = require('@/assets/robot.webp');

const sendQuestion = () => {
  if (selectedQuestion.value) {
    // 确保发送的是问题文本字符串，而不是对象
    const questionText = selectedQuestion.value.label; // 假设我们需要发送问题的标签部分
    conversation.value.push({ text: questionText, sender: 'user' });

    // 模拟机器人回复
    const reply = `You asked: "${questionText}". I'm still learning, but I'm getting better every day!`;
    setTimeout(() => {
      conversation.value.push({ text: reply, sender: 'robot' });
    }, 500); // 延迟模拟回复时间

    // 重置选择
    selectedQuestion.value = null;
  }
};

const splitterModel = ref(50);
</script>
<style>
/* .text-detail {
  padding: 10px;
  border-radius: 4px;
  border: 2px solid ;
} */
</style>
