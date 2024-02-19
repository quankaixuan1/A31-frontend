<template>
  <div class="q-pa-md chat-container">
    <!-- 消息展示区 -->
    <div class="chat-window" ref="chatWindow">
      <div v-for="(message, index) in messages" :key="index" class="chat-message" :class="{ 'received': message.type === 'received', 'sent': message.type === 'sent' }">
        <!-- 显示接收消息的头像 -->
        <img v-if="message.type === 'received'" class="avatar" src="path/to/receiver-avatar.png" />
        <div class="message-content">{{ message.content }}</div>
        <!-- 显示发送消息的头像 -->
        <img v-if="message.type === 'sent'" class="avatar" src="path/to/sender-avatar.png" />
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
import { ref, onUpdated } from 'vue';

const inputText = ref('');
const messages = ref([]);
const promptWords = ['提示词1', '提示词2', '提示词3']; // 预设的提示词列表
const chatWindow = ref(null);

// 模拟检测的异步函数
const detect = async (word) => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 假设每次检测耗时1秒
  return `检测结果：${word}`; // 返回检测结果
};

// 检测按钮点击事件处理函数
const handleDetection = async () => {
  for (const word of promptWords) {
    inputText.value = word; // 自动输入提示词
    await new Promise(resolve => setTimeout(resolve, 500)); // 等待半秒以模拟输入过程
    const result = await detect(word); // 获取检测结果
    messages.value.push({ content: result, type: 'received' }); // 将结果添加到聊天区
    scrollToEnd(); // 滚动到聊天窗口的底部
  }
};

// 每次更新消息后滚动到底部
const scrollToEnd = () => {
  nextTick(() => {
    if (chatWindow.value) {
      chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
    }
  });
};

onUpdated(scrollToEnd); // 当消息更新时触发滚动
</script>

<style scoped>
/* ...之前的样式 */
</style>


<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 400px;
}

.chat-window {
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse; /* 使消息从底部开始显示 */
  padding: 0 1em;
}

.chat-message {
  display: flex;
  align-items: flex-end;
  margin: 0.5em 0;
}

.received .message-content {
  background-color: #eeeeee;
  margin-right: auto;
}

.sent .message-content {
  background-color: #9ccc65;
  margin-left: auto;
}

.message-content {
  max-width: 60%;
  padding: 0.5em 1em;
  border-radius: 15px;
  margin: 0 0.5em;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}

.input-area {
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em 0;
}
</style>
