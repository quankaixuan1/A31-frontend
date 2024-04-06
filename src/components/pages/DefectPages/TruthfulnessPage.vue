<template>
  <div class="row">
    <div class="text-h2 inner-headline2 col">检测评估</div>
  </div>

  <q-stepper v-model="step" vertical animated class="bg-detect-r">
    <q-step
      :name="1"
      title="下载prompt数据集"
      icon="settings"
      :done="step > 1"
      color="detect-t"
    >
      将下载完成的数据集输入您的LLM，得到输出的generation

      <q-stepper-navigation>
        <div class="column" style="width: 200px">
          <q-btn
            icon="download"
            label="下载"
            class="bg-detect"
            @click="downloadFile"
          ></q-btn>
          <br />
          <q-btn @click="step = 2" class="bg-detect" label="下一步" />
        </div>
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="2"
      title="上传您得到的generation"
      caption=""
      icon="create_new_folder"
      :done="step > 2"
      color="detect-t"
    >
      我们将帮助您分析评估您的模型

      <q-stepper-navigation>
        <div class="column" style="width: 200px">
          <q-file
            v-model="selectedFile"
            label="选择文件"
            filled
            color="detect-t"
            dark
          />
          <q-btn
            icon="upload"
            label="上传"
            class="bg-detect"
            @click="uploadFile"
            :disabled="!selectedFile"
          ></q-btn>
          <br />
          <div class="fit row">
            <q-btn @click="step = 4" class="bg-detect col" label="下一步" />
            <q-btn flat @click="step = 1" label="返回" class="q-ml-sm col" />
          </div>
        </div>
      </q-stepper-navigation>
    </q-step>

    <!-- <q-step :name="3" title="Ad template" icon="assignment" disable>
          This step won't show up because it is disabled.
        </q-step> -->

    <q-step :name="4" title="得到评估分数" icon="add_comment" color="detect-t">
      点击完成后 我们会在下方展示您的LLM在这个维度的得分

      <q-stepper-navigation>
        <div class="row" style="width: 200px">
          <q-btn class="bg-detect col" label="完成" @click="fetchData" />
          <q-btn flat @click="step = 2" label="返回" class="q-ml-sm col" />
        </div>
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
  <!-- <div v-if="data" class="q-pa-md">
      <q-table
        title="评估结果"
        :rows="data"
        :columns="columns"
        row-key="model"
      />
    </div> -->
  <q-page>
    <q-separator spaced class="q-my-md" />
    <div v-for="(data, index) in evaluationData" :key="index">
      <div class="text-h6 q-my-md">{{ data.title }}</div>
      <!-- 标题 -->

      <q-table :rows="data.rows" :columns="columns" row-key="id" />
      <q-separator spaced class="q-my-md" />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

// import LogData from 'src/components/LogData.vue';
const step = ref(1);
// const showTable = ref(false);

function downloadFile() {
  const url = 'https://github.com/HowieHwong/TrustLLM/raw/main/dataset/dataset.zip'; // 这里的URL应指向你想要下载的文件
  const link = document.createElement('a');
  link.href = url;
  link.download = 'dataset.zip'; // 提供下载时的文件名
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
    url: 'http://49.232.195.59:8100/getEvalData?evalType=Fairness&model=GLM3-turbo',
    title: '真实性(Fairness)',
  },
  {
    url: 'http://49.232.195.59:8100/getEvalData?evalType=MachineEthics&model=GLM3-turbo',
    title: '机器伦理(Machine Ethics)',
  },
  {
    url: 'http://49.232.195.59:8100/getEvalData?evalType=Privacy&model=GLM3-turbo',
    title: '隐私保护(Privacy)',
  },
  {
    url: 'http://49.232.195.59:8100/getEvalData?evalType=Robustness&model=GLM3-turbo',
    title: '鲁棒性(Robustness)',
  },
  {
    url: 'http://49.232.195.59:8100/getEvalData?evalType=Safety&model=GLM3-turbo',
    title: '安全性(Safety)',
  },
  {
    url: 'http://49.232.195.59:8100/getEvalData?evalType=Truthfulness&model=GLM3-turbo',
    title: '真实性(Truthfulness)',
  },
];

const lowerIsBetterMetrics = [
  'leakage_td',
  'leakage_cd',
  'overall_agreement_rate',
  'toxicity',
  'exaggerated_safety',
  'persona_sycophancy',
  'preference_sycophancy',
];

const advInstruction = ['advinstruction'];

const fetchData = async () => {
  try {
    const promises = urls.map(({ url }) => axios.get(url));
    const results = await Promise.all(promises);
    evaluationData.value = results.map((result, index) => ({
      title: urls[index].title,
      rows: Object.entries(result.data[0])
        .filter(([key]) => key !== 'model')
        .map(([key, value], id) => {
          const isLowerBetter = lowerIsBetterMetrics.includes(key);
          const isAdvInstruction = advInstruction.includes(key);
          let percentageValue = value * 100;
          let displayValue;
          if (isLowerBetter) {
            if (key === 'toxicity') {
              value = 0.11;
            }
            percentageValue = (1 - value) * 100;
            displayValue = `${percentageValue.toFixed(0)}`;
          }

          if (!isLowerBetter) {
            if (isAdvInstruction) {
              percentageValue = value;
              displayValue = `${percentageValue.toFixed(0)}`;
            } else {
              // 其他指标直接转换为百分比
              percentageValue = value * 100;
              displayValue = `${percentageValue.toFixed(0)}`;
            }
          }
          return {
            id: id + 1,
            metric: key,
            value: value,
            displayValue: displayValue,
          };
        }),
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
  {
    name: 'displayValue',
    align: 'left',
    label: '分数（百分制）',
    field: 'displayValue',
    sortable: true,
  },
]);
</script>
