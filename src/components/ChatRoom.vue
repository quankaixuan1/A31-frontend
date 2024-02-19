<template>
  <div class="q-pa-md" style="height: 400px; display: flex; flex-direction: column;">
    <!-- 消息展示区 -->
    <div class="chat-window" style="flex: 1; overflow-y: auto;">
      <div v-for="(message, index) in messages" :key="index" class="message">
        {{ message }}
      </div>
    </div>
    <!-- 输入区 -->
    <div class="input-area">
      <q-input v-model="inputText" outlined readonly />
      <q-btn label="检测" @click="handleDetection" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputText = ref(''); // 用户输入的文本
const messages = ref([]); // 聊天区显示的消息
const promptWords = ['提示词1', '提示词2', '提示词3']; // 预设的提示词列表

// 模拟检测的异步函数
const detect = async (word) => {
  // 模拟检测过程
  await new Promise(resolve => setTimeout(resolve, 1000)); // 假设每次检测耗时1秒
  return `检测结果：${word}`; // 返回检测结果
};

// 检测按钮点击事件处理函数
const handleDetection = async () => {
  for (const word of promptWords) {
    inputText.value = word; // 自动输入提示词
    const result = await detect(word); // 获取检测结果
    messages.value.push(result); // 将结果添加到聊天区
  }
};
</script>

<style scoped>
.chat-window {
  border: 1px solid #ccc;
  margin-bottom: 1em;
  padding: 1em;
}

.message {
  margin-bottom: 0.5em;
}

.input-area {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>

