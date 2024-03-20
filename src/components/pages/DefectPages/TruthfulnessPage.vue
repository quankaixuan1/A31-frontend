<template>
  <div class="inner-box">
    <h2>Truthfulness</h2>
    <div class="q-pa-md">
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
        class="text-black"
      >
        <q-step
          :name="1"
          title="下载prompt数据集"
          icon="settings"
          :done="step > 1"
        >
          将下载完成的数据集输入您的LLM，得到输出的generation

          <q-stepper-navigation>
            <q-btn
              icon="download"
              label="下载"
              color="primary"
              style="width: 100px"
              @click="downloadFile"
            ></q-btn>
            <br />
            <br />
            <q-btn @click="step = 2" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="上传您得到的generation"
          caption=""
          icon="create_new_folder"
          :done="step > 2"
        >
          我们将帮助您分析评估您的模型

          <q-stepper-navigation>
            <q-file
              v-model="selectedFile"
              label="选择文件"
              filled
              style="width: 175px"
            />
            <q-btn
              icon="upload"
              label="上传"
              color="primary"
              style="width: 175px"
              @click="uploadFile"
              :disabled="!selectedFile"
            ></q-btn>
            <br /><br />
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn
              flat
              @click="step = 1"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <!-- <q-step :name="3" title="Ad template" icon="assignment" disable>
          This step won't show up because it is disabled.
        </q-step> -->

        <q-step :name="4" title="得到评估分数" icon="add_comment">
          点击完成后 我们会在下方展示您的LLM在这个维度的得分

          <q-stepper-navigation>
            <q-btn
              color="primary"
              label="Finish"
              @click="showTable = !showTable"
            />
            <q-btn
              flat
              @click="step = 2"
              color="primary"
              label="Back"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
    <LogData v-if="showTable"></LogData>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { QBtn, QFile } from 'quasar';

import LogData from 'src/components/LogData.vue';
const step = ref(1);
const showTable = ref(false);

function downloadFile() {
  const url = 'path/to/your/file.txt'; // 这里的URL应指向你想要下载的文件
  const link = document.createElement('a');
  link.href = url;
  link.download = 'file.txt'; // 提供下载时的文件名
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const selectedFile = ref(null);

function uploadFile() {
  if (!selectedFile.value) {
    console.log('没有选择文件');
    return;
  }

  // 创建FormData对象准备上传
  const formData = new FormData();
  formData.append('file', selectedFile.value);

  // 这里替换为你的上传逻辑
  console.log('正在上传文件...', selectedFile.value);

  // 示例：使用fetch上传文件
  // fetch('your-upload-endpoint', {
  //   method: 'POST',
  //   body: formData,
  // }).then(response => response.json())
  //   .then(data => console.log('上传成功', data))
  //   .catch(error => console.error('上传失败', error));
}
</script>
