<template>
  <div class="inner-box">
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
            <q-btn color="primary" label="Finish" @click="fetchData" />
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
    <!-- <div v-if="data" class="q-pa-md">
      <q-table
        title="评估结果"
        :rows="data"
        :columns="columns"
        row-key="model"
      />
    </div> -->
    <q-page class="q-pa-md">
      <q-separator spaced class="q-my-md" />
      <div v-for="(data, index) in evaluationData" :key="index">
        <div class="text-h6 q-my-md">{{ data.title }}</div>
        <!-- 标题 -->

        <q-table :rows="data.rows" :columns="columns" row-key="id" />
        <q-separator spaced class="q-my-md" />
      </div>
    </q-page>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { QBtn, QFile, QTable } from 'quasar';
import axios from 'axios';

// import LogData from 'src/components/LogData.vue';
const step = ref(1);
// const showTable = ref(false);

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

  // fetch('your-upload-endpoint', {
  //   method: 'POST',
  //   body: formData,
  // }).then(response => response.json())
  //   .then(data => console.log('上传成功', data))
  //   .catch(error => console.error('上传失败', error));
}

// const data = ref(null);

// const columns = ref([
//   { name: 'model', align: 'left', label: '模型', field: 'model', sortable: true },
//   { name: 'stereotype_recognition', align: 'center', label: '刻板印象识别', field: 'stereotype_recognition', sortable: true },
//   { name: 'overall_agreement_rate', align: 'center', label: '总体一致率', field: 'overall_agreement_rate', sortable: true },
//   { name: 'stereotype_query_test', align: 'center', label: '刻板印象查询测试', field: 'stereotype_query_test', sortable: true },
//   { name: 'disparagement_sex', align: 'center', label: '性别贬低', field: 'disparagement_sex', sortable: true },
//   { name: 'disparagement_race', align: 'center', label: '种族贬低', field: 'disparagement_race', sortable: true },
//   { name: 'preference_rta', align: 'center', label: '偏好RTA', field: 'preference_rta', sortable: true }
// ]);

// function fetchData() {
//   axios
//     .get('http://8.130.135.136:8100/getEvalData/Fairness/ChatGPT')
//     .then((response) => {
//       data.value = response.data;
//     })
//     .catch((error) => {
//       console.error('There was an error!', error);
//     });
// }

const evaluationData = ref([]);
const urls = [
  {
    url: 'http://8.130.135.136:8100/getEvalData/Fairness/ChatGPT',
    title: 'Fairness',
  },
  {
    url: 'http://8.130.135.136:8100/getEvalData/MachineEthics/ChatGPT',
    title: 'Machine Ethics',
  },
  {
    url: 'http://8.130.135.136:8100/getEvalData/Privacy/ChatGPT',
    title: 'Privacy',
  },
  {
    url: 'http://8.130.135.136:8100/getEvalData/Robustness/ChatGPT',
    title: 'Robustness',
  },
  {
    url: 'http://8.130.135.136:8100/getEvalData/Safety/ChatGPT',
    title: 'Safety',
  },
  {
    url: 'http://8.130.135.136:8100/getEvalData/Truthfulness/ChatGPT',
    title: 'Truthfulness',
  },
];

const fetchData = async () => {
  try {
    const promises = urls.map(({ url }) => axios.get(url));
    const results = await Promise.all(promises);
    evaluationData.value = results.map((result, index) => ({
      title: urls[index].title, // 为每个表格添加标题
      rows: Object.entries(result.data[0])
        .filter(([key]) => key !== 'model') // 排除 "model" 字段
        .map(([key, value], id) => ({
          id: id + 1,
          metric: key,
          value: value,
        })),
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const columns = ref([
  {
    name: 'metric',
    align: 'left',
    label: 'Metric',
    field: 'metric',
    sortable: true,
  },
  {
    name: 'value',
    align: 'left',
    label: 'Value',
    field: 'value',
    sortable: true,
  },
]);
</script>
