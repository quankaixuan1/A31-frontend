<template>
  <div class="inner-box">
    <h2>DefensePage</h2>
    <!-- <h1>功能开发中</h1> -->
    <div style="background-color: white">
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
        />
        <!-- 发送按钮 -->
        <div class="flex q-gutter-md">
        <q-btn
          label="发送问题"
          color="primary"
          @click="sendQuestion"
          :disabled="!selectedQuestion"
        />
        <q-btn label="变换" color="red-10" />
      </div>
        <!-- 消息显示区 -->
        <div class="q-mt-md" style="overflow-y: auto">
          <q-chat-message

            v-for="(message, index) in conversation"
            :key="index"
            :text="[message.text]"
            :name="message.sender === 'user' ? 'You' : 'Robot'"
            :avatar="message.sender === 'user' ? userAvatar : robotAvatar"
            :sent="message.sender === 'user'"
            :text-color="message.sender === 'user'?'':'white'"

            :bg-color="message.sender === 'user' ? 'amber-7' : 'primary'"

          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { QSelect, QBtn, QChatMessage } from 'quasar';

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

const userAvatar = 'public/img/avatar.webp'; // Example avatar image
const robotAvatar = 'public/img/robot.webp'; // Example avatar image

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


</script>
<style>

</style>
