<template>
  <div v-if="!isChildRoute">
    <div class="inner-box bg-detect">
      <div class="row">
        <div class="text-h1 inner-headline2 col">安全检测</div>
        <div class="text-h5 inner-headline3 col">
          大模型安全漏洞检测模块 从六个维度进行 检测 & 评估
        </div>
      </div>
      <q-img src="https://picsum.photos/id/250/2560/1600"></q-img>
      <div class="text-body1">
        <!-- &emsp;&emsp; -->
        <br />
        “语镜”大模型安全漏洞检测模块专注于对大模型内部做全面的安全漏洞检测。<br /><br />

        <!-- &emsp;&emsp; -->
        对于漏洞的分类，我们将其分为真实性、安全性、公平性、鲁棒性、隐私、机器伦理六大类别，涵盖了偏见歧视、违法犯罪、提示词注入、jailbreaking攻击等细分30多个二级类别，针对各类潜在安全风险，我们拥有全面的安全测评，旨在为用户提供安全可信的大语言模型漏洞检测。<br /><br />
        具体亮点表现在如下方面：<br /><br />
        1.数据集全面。我们提供的测评数据集涵盖了大语言模型安全风险的各个维度，包含了可信大语言模型的六个基本安全维度。
        <br /><br />2.公开排行榜。参与测评的模型将出现在排行榜上，以更直观的可视化模型在测评数据上的表现。
        <br />
      </div>
      <div class="q-pa-md">
        <div class="flex q-gutter-md">
          <q-btn
            label="Truthfulness"
            @click="toggleDetail('detail1')"
            style="width: 100%"
            size="lg"
            class="bg-detect-r"
          />
          <div
            v-if="showDetails.detail1"
            class="text-detail q-mt-md bg-detect-r"
            style="width: 100%"
          >
            这是细节 1 的文本。
          </div>
          <q-btn
            label="Safety"
            @click="toggleDetail('detail2')"
            style="width: 100%"
            size="lg"
            class="bg-detect-r"
          />
          <div
            v-if="showDetails.detail2"
            class="text-detail q-mt-md bg-detect-r"
            style="width: 100%"
          >
            这是细节 2 的文本。
          </div>
          <q-btn
            label="Fairness"
            @click="toggleDetail('detail3')"
            style="width: 100%"
            size="lg"
            class="bg-detect-r"
          />
          <div
            v-if="showDetails.detail3"
            class="text-detail q-mt-md bg-detect-r"
            style="width: 100%"
          >
            这是细节 3 的文本。
          </div>
          <q-btn
            label="Robustness"
            @click="toggleDetail('detail4')"
            style="width: 100%"
            size="lg"
            class="bg-detect-r"
          />
          <div
            v-if="showDetails.detail4"
            class="text-detail q-mt-md bg-detect-r"
            style="width: 100%"
          >
            这是细节 4 的文本。
          </div>
          <q-btn
            label="Privacy"
            @click="toggleDetail('detail5')"
            style="width: 100%"
            size="lg"
            class="bg-detect-r"
          />
          <div
            v-if="showDetails.detail5"
            class="text-detail q-mt-md bg-detect-r"
            style="width: 100%"
          >
            这是细节 5 的文本。
          </div>
          <q-btn
            label="Machine Ethics"
            @click="toggleDetail('detail6')"
            style="width: 100%"
            size="lg"
            class="bg-detect-r"
          />
          <div
            v-if="showDetails.detail6"
            class="text-detail q-mt-md bg-detect-r"
            style="width: 100%"
          >
            这是细节 6 的文本。
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="slide-up">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import { QBtn } from 'quasar';

const route = useRoute();
const isChildRoute = computed(() => {
  return route.matched.length > 2;
});

// 使用 reactive 包装对象以跟踪每个细节文本的显示状态
const showDetails = reactive({
  detail1: false,
  detail2: false,
  detail3: false,
  detail4: false,
  detail5: false,
  detail6: false,
});

// 切换细节显示状态的函数
const toggleDetail = (detailKey) => {
  showDetails[detailKey] = !showDetails[detailKey];
};
</script>
<style>
.text-detail {
  padding: 10px;
  background-color: #e0e0e0; /* 浅灰色背景 */
  border-radius: 4px; /* 轻微的圆角边框 */
}
</style>
