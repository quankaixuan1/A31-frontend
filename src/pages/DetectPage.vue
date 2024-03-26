<template>
  <div v-if="!isChildRoute">
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

      漏洞检测方案围绕以下六个维度进行：<br />

      <!-- &emsp;&emsp; -->
      -
      真实性：LLMs依赖内部知识时难以提供真实回答，但加入外部知识后明显改善。不同LLMs在对抗性事实性任务上表现不同。<br />
      -
      安全性：开源LLMs安全性普遍落后于专有LLMs，且不同LLMs对不同的破解攻击防御能力不同。平衡安全性和实用性是挑战。<br />
      -
      公平性：LLMs在识别刻板印象方面表现不佳，且对特定群体的刻板印象看法不一。模型在处理污蔑和偏好偏见方面表现有差异。<br />
      -
      鲁棒性：LLMs在传统下游任务中表现较好，但生成任务上表现不一。OOD检测和泛化能力也存在差异。<br />
      -
      隐私保护：LLMs整体对隐私意识有感知，但训练数据中仍存在隐私泄露风险。不同LLMs对隐私信息的理解和处理有差异。<br />
      -
      机器伦理：LLMs内在伦理价值有一定发展，但仍与人类伦理存在差距。在不同道德情境下的反应存在差异。<br /><br />
      我们的数据集来自40个机构的近70位研究者合作提出的TrustLLM——
      一个统一的框架，用于对 LLM 可信度的全面分析，包括现有工作的全面综述、可信
      LLM 的不同维度的原则、一个新的测试基准，以及对主流 LLM
      的全面可信度评估。<br /><br />
      与其他市面上现有的漏洞检测方案相比，我们的产品具体亮点表现在如下方面：<br />
      1.数据集全面。我们提供的测评数据集涵盖了大语言模型安全风险的各个维度，包含了可信大语言模型的六个基本安全维度。<br />2.可以对市面上大多数
      LLMs 存在的过度对齐问题进行检测。结果发现许多 LLMs
      表现出一定程度的过度对齐（即过度的安全性），这可能会影响它们的整体可信性。<br />
      3.公开排行榜。参与测评的模型将出现在排行榜上，以更直观的可视化模型在测评数据上的表现。
      <br /><br />
    </div>

    <div class="column q-pa-md">
      <div class="row col q-gutter-xl">
        <q-card bordered class="bg-grey-9 my-card col bg-detect-r">
          <q-card-section>
            <div class="text-h6">真实性</div>
            <div class="text-subtitle2">Truthfulness</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-body1">
              定义为一个AI系统对信息、事实和结果的准确表示。评估重点包括生成错误信息的倾向，虚构内容、谄媚性反应和对抗性事实的纠正能力。
            </div>
          </q-card-section>
        </q-card>
        <q-card bordered class="bg-grey-9 my-card col bg-detect-r">
          <q-card-section>
            <div class="text-h6">安全性</div>
            <div class="text-subtitle2">Safety</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-body1">
              定义为LLM的输出应该只参与安全健康的对话。评估重点包括对越狱攻击的抵抗力，过度的安全性，毒性和误用。
            </div>
          </q-card-section>
        </q-card>
        <q-card bordered class="bg-grey-9 my-card col bg-detect-r">
          <q-card-section>
            <div class="text-h6">公平性</div>
            <div class="text-subtitle2">Fairness</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-body1">
              定义为确保LLM的设计、训练和部署不会导致有偏见或歧视性的结果，并确保对所有用户和群体公平对待。评估重点包括对刻板印象的识别、轻视和偏好偏见。
            </div>
          </q-card-section>
        </q-card>
      </div>
      <br /><br />
      <div class="row col q-gutter-xl">
        <q-card bordered class="bg-grey-9 my-card col bg-detect-r">
          <q-card-section>
            <div class="text-h6">鲁棒性</div>
            <div class="text-subtitle2">Robustness</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-body1">
              定义为系统在各种情况下保持其性能水平的能力。评估重点包括自然噪声下的稳定性以及处理OOD输入的适应性。
            </div>
          </q-card-section>
        </q-card>
        <q-card bordered class="bg-grey-9 my-card col bg-detect-r">
          <q-card-section>
            <div class="text-h6">隐私保护</div>
            <div class="text-subtitle2">Privacy</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-body1">
              定义为保护人类和数据的自治权、身份和尊严的规范和实践。评估重点包括隐私意识和隐私泄露风险。
            </div>
          </q-card-section>
        </q-card>
        <q-card bordered class="bg-grey-9 my-card col bg-detect-r">
          <q-card-section>
            <div class="text-h6">机器伦理</div>
            <div class="text-subtitle2">Machine Ethics</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section>
            <div class="text-body1">
              定义为确保使用人工智能的机器表现出道德行为。评估重点包括内在伦理价值、外在伦理反应和情感意识。
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
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
