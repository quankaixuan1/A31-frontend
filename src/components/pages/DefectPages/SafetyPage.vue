<template>
    <div class="row">
    <div class="text-h2 inner-headline2 col">大模型榜单</div>
  </div>
  <q-separator spaced class="q-my-md" />

  <div
    style="font-family: 'Tsukushi A Round Gothic'"
    class="text-h4 inner-headline3"
  >

  真实性(Truthfulness)
  </div>
  <q-table
    :rows="TruthfulnessRows"
    :columns="TruthfulnessColumns"
    row-key="name"
    flat
    bordered
    virtual-scroll
  />
  <br>
  <q-separator spaced class="q-my-md" />

  <div
    style="font-family: 'Tsukushi A Round Gothic'"
    class="text-h4 inner-headline3"
  >
  安全性(Safety)

  </div>
  <q-table
    :rows="SafetyRows"
    :columns="SafetyColumns"
    row-key="name"
    flat
    bordered
    virtual-scroll
  />
  <br>
  <q-separator spaced class="q-my-md" />
  <div
    style="font-family: 'Tsukushi A Round Gothic'"
    class="text-h4 inner-headline3"
  >
  真实性(Fairness)

  </div>
  <q-table
    :rows="FairnessRows"
    :columns="FairnessColumns"
    row-key="name"
    flat
    bordered
    virtual-scroll
  />
  <br>
  <q-separator spaced class="q-my-md" />
  <div
    style="font-family: 'Tsukushi A Round Gothic'"
    class="text-h4 inner-headline3"
  >
  鲁棒性(Robustness)

  </div>
  <q-table
    :rows="RobustnessRows"
    :columns="RobustnessColumns"
    row-key="name"
    flat
    bordered
    virtual-scroll
  />
  <br>
  <q-separator spaced class="q-my-md" />
  <div
    style="font-family: 'Tsukushi A Round Gothic'"
    class="text-h4 inner-headline3"
  >
  隐私保护(Privacy)
  </div>
  <q-table
    :rows="PrivacyRows"
    :columns="PrivacyColumns"
    row-key="name"
    flat
    bordered
    virtual-scroll
  />
  <br>
  <q-separator spaced class="q-my-md" />
  <div
    style="font-family: 'Tsukushi A Round Gothic'"
    class="text-h4 inner-headline3"
  >
  机器伦理(Machine Ethics)
  </div>
  <q-table
    :rows="EthicsRows"
    :columns="EthicsColumns"
    row-key="name"
    flat
    bordered
    virtual-scroll
  />
  <br /><br /><br /><br /><br /><br />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const TruthfulnessRows = ref([
  {
    Model: 'ChatGPT',
    Internal: 0.288,
    External: 0.726,
    Hallucination: 0.529,
    'Persona Sycophancy': 0.039,
    'Preference Sycophancy': 0.257,
    'Adv Factuality': 0.708,
  },
  {
    Model: 'GPT-4',
    Internal: 0.417,
    External: 0.793,
    Hallucination: 0.516,
    'Persona Sycophancy': 0.029,
    'Preference Sycophancy': 0.296,
    'Adv Factuality': 0.813,
  },
  {
    Model: 'ChatGLM2',
    Internal: 0.127,
    External: 0.542,
    Hallucination: 0.542,
    'Persona Sycophancy': 0.036,
    'Preference Sycophancy': 0.432,
    'Adv Factuality': 0.349,
  },
  {
    Model: 'Vicuna-33b',
    Internal: 0.261,
    External: 0.726,
    Hallucination: 0.423,
    'Persona Sycophancy': 0.038,
    'Preference Sycophancy': 0.458,
    'Adv Factuality': 0.699,
  },
  {
    Model: 'Vicuna-13b',
    Internal: 0.18,
    External: 0.623,
    Hallucination: 0.403,
    'Persona Sycophancy': 0.036,
    'Preference Sycophancy': 0.375,
    'Adv Factuality': 0.665,
  },
  {
    Model: 'Vicuna-7b',
    Internal: 0.132,
    External: 0.581,
    Hallucination: 0.347,
    'Persona Sycophancy': 0.03,
    'Preference Sycophancy': 0.395,
    'Adv Factuality': 0.469,
  },
  {
    Model: 'Llama2-70b',
    Internal: 0.313,
    External: 0.721,
    Hallucination: 0.402,
    'Persona Sycophancy': 0.043,
    'Preference Sycophancy': 0.468,
    'Adv Factuality': 0.794,
  },
  {
    Model: 'Llama2-13b',
    Internal: 0.235,
    External: 0.722,
    Hallucination: 0.404,
    'Persona Sycophancy': 0.032,
    'Preference Sycophancy': 0.571,
    'Adv Factuality': 0.78,
  },
  {
    Model: 'Llama2-7b',
    Internal: 0.203,
    External: 0.638,
    Hallucination: 0.396,
    'Persona Sycophancy': 0.035,
    'Preference Sycophancy': 0.587,
    'Adv Factuality': 0.718,
  },
  {
    Model: 'Wizardlm-13b',
    Internal: 0.19,
    External: 0.574,
    Hallucination: 0.356,
    'Persona Sycophancy': 0.025,
    'Preference Sycophancy': 0.385,
    'Adv Factuality': 0.794,
  },
  {
    Model: 'Koala-13b',
    Internal: 0.145,
    External: 0.553,
    Hallucination: 0.451,
    'Persona Sycophancy': 0.04,
    'Preference Sycophancy': 0.5,
    'Adv Factuality': 0.435,
  },
  {
    Model: 'Baichuan-13b',
    Internal: 0.17,
    External: 0.622,
    Hallucination: 0.306,
    'Persona Sycophancy': 0.032,
    'Preference Sycophancy': 0.286,
    'Adv Factuality': 0.44,
  },
  {
    Model: 'Oasst-12b',
    Internal: 0.101,
    External: 0.534,
    Hallucination: 0.418,
    'Persona Sycophancy': 0.031,
    'Preference Sycophancy': 0.436,
    'Adv Factuality': 0.221,
  },
  {
    Model: 'ERNIE',
    Internal: 0.255,
    External: 0.689,
    Hallucination: 0.515,
    'Persona Sycophancy': 0.019,
    'Preference Sycophancy': 0.312,
    'Adv Factuality': 0.407,
  },
  {
    Model: 'Mistral-7b',
    Internal: 0.341,
    External: 0.687,
    Hallucination: 0.458,
    'Persona Sycophancy': 0.035,
    'Preference Sycophancy': 0.293,
    'Adv Factuality': 0.426,
  },
  {
    Model: 'PaLM2',
    Internal: 0.284,
    External: 0.532,
    Hallucination: 0.379,
    'Persona Sycophancy': 0.028,
    'Preference Sycophancy': 0.581,
    'Adv Factuality': 0.273,
  },
]);

const TruthfulnessColumns = ref([
  {
    name: 'Model',
    required: true,
    label: 'Model',
    align: 'left',
    field: 'Model',
    sortable: true,
  },
  {
    name: 'Internal',
    align: 'center',
    label: 'Internal (↑)',
    field: 'Internal',
    sortable: true,
  },
  {
    name: 'External',
    align: 'center',
    label: 'External (↑)',
    field: 'External',
    sortable: true,
  },
  {
    name: 'Hallucination',
    align: 'center',
    label: 'Hallucination (↑)',
    field: 'Hallucination',
    sortable: true,
  },
  {
    name: 'PersonaSycophancy',
    align: 'center',
    label: 'Persona Sycophancy (↓)',
    field: 'Persona Sycophancy',
    sortable: true,
  },
  {
    name: 'PreferenceSycophancy',
    align: 'center',
    label: 'Preference Sycophancy (↓)',
    field: 'Preference Sycophancy',
    sortable: true,
  },
  {
    name: 'AdvFactuality',
    align: 'center',
    label: 'Adv Factuality (↑)',
    field: 'Adv Factuality',
    sortable: true,
  },
]);

const SafetyRows = ref([
  {
    Model: 'Llama2-13b',
    Jailbreak: 0.959,
    Toxicity: 0.205,
    Misuse: 0.963,
    'Exaggerated Safety': 0.55,
  },
  {
    Model: 'Llama2-70b',
    Jailbreak: 0.974,
    Toxicity: 0.248,
    Misuse: 0.956,
    'Exaggerated Safety': 0.315,
  },
  {
    Model: 'Llama2-7b',
    Jailbreak: 0.945,
    Toxicity: 0.191,
    Misuse: 0.943,
    'Exaggerated Safety': 0.49,
  },
  {
    Model: 'GPT-4',
    Jailbreak: 0.914,
    Toxicity: 0.386,
    Misuse: 0.924,
    'Exaggerated Safety': 0.085,
  },
  {
    Model: 'ChatGPT',
    Jailbreak: 0.898,
    Toxicity: 0.352,
    Misuse: 0.91,
    'Exaggerated Safety': 0.15,
  },
  {
    Model: 'ERNIE',
    Jailbreak: 0.949,
    Toxicity: 0.072,
    Misuse: 0.899,
    'Exaggerated Safety': 0.385,
  },
  {
    Model: 'Wizardlm-13b',
    Jailbreak: 0.865,
    Toxicity: 0.183,
    Misuse: 0.883,
    'Exaggerated Safety': 0.06,
  },
  {
    Model: 'Vicuna-13b',
    Jailbreak: 0.781,
    Toxicity: 0.374,
    Misuse: 0.848,
    'Exaggerated Safety': 0.095,
  },
  {
    Model: 'ChatGLM2',
    Jailbreak: 0.845,
    Toxicity: 0.141,
    Misuse: 0.819,
    'Exaggerated Safety': 0.15,
  },
  {
    Model: 'Koala-13b',
    Jailbreak: 0.691,
    Toxicity: 0.237,
    Misuse: 0.738,
    'Exaggerated Safety': 0.045,
  },
  {
    Model: 'Vicuna-33b',
    Jailbreak: 0.585,
    Toxicity: 0.294,
    Misuse: 0.735,
    'Exaggerated Safety': 0.035,
  },
  {
    Model: 'Mistral-7b',
    Jailbreak: 0.59,
    Toxicity: 0.262,
    Misuse: 0.709,
    'Exaggerated Safety': 0.46,
  },
  {
    Model: 'Oasst-12b',
    Jailbreak: 0.69,
    Toxicity: 0.154,
    Misuse: 0.583,
    'Exaggerated Safety': 0.05,
  },
  {
    Model: 'Vicuna-7b',
    Jailbreak: 0.596,
    Toxicity: 0.213,
    Misuse: 0.565,
    'Exaggerated Safety': 0.09,
  },
  {
    Model: 'PaLM 2',
    Jailbreak: 0.486,
    Toxicity: 0.317,
    Misuse: 0.473,
    'Exaggerated Safety': 0.377,
  },
  {
    Model: 'Baichuan-13b',
    Jailbreak: 0.25,
    Toxicity: 0.112,
    Misuse: 0.114,
    'Exaggerated Safety': 0.19,
  },
]);

const SafetyColumns = ref([
  {
    name: 'Model',
    required: true,
    label: 'Model',
    align: 'left',
    field: 'Model',
    sortable: true,
  },
  {
    name: 'Jailbreak',
    align: 'center',
    label: 'Jailbreak (↑)',
    field: 'Jailbreak',
    sortable: true,
  },
  {
    name: 'Toxicity',
    align: 'center',
    label: 'Toxicity (↓)',
    field: 'Toxicity',
    sortable: true,
  },
  {
    name: 'Misuse',
    align: 'center',
    label: 'Misuse (↑)',
    field: 'Misuse',
    sortable: true,
  },
  {
    name: 'ExaggeratedSafety',
    align: 'center',
    label: 'Exaggerated Safety (↓)',
    field: 'Exaggerated Safety',
    sortable: true,
  },
]);

const FairnessRows = ref([
  {
    Model: 'baichuan-13b',
    'Stereotype Recognition': 0.388,
    'Overall Agreement Rate': 0.279,
    'Stereotype Query Test': 0.063,
    'Disparagement Sex': 0.183,
    'Disparagement Race': 0.001,
    'Preference RtA': 0.021,
  },
  {
    Model: 'chatglm2',
    'Stereotype Recognition': 0.391,
    'Overall Agreement Rate': 0.594,
    'Stereotype Query Test': 0.989,
    'Disparagement Sex': 0.037,
    'Disparagement Race': 0.0,
    'Preference RtA': 0.579,
  },
  {
    Model: 'chatgpt',
    'Stereotype Recognition': 0.608,
    'Overall Agreement Rate': 0.12,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.001,
    'Disparagement Race': 0.136,
    'Preference RtA': 0.425,
  },
  {
    Model: 'ernie',
    'Stereotype Recognition': 0.457,
    'Overall Agreement Rate': 0.018,
    'Stereotype Query Test': 0.926,
    'Disparagement Sex': 0.0,
    'Disparagement Race': 0.002,
    'Preference RtA': 0.904,
  },
  {
    Model: 'gpt-4',
    'Stereotype Recognition': 0.656,
    'Overall Agreement Rate': 0.018,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.006,
    'Disparagement Race': 0.173,
    'Preference RtA': 0.525,
  },
  {
    Model: 'koala-13b',
    'Stereotype Recognition': 0.386,
    'Overall Agreement Rate': 0.402,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.171,
    'Disparagement Race': 0.036,
    'Preference RtA': 0.354,
  },
  {
    Model: 'llama2-13b',
    'Stereotype Recognition': 0.429,
    'Overall Agreement Rate': 0.005,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.0,
    'Disparagement Race': 0.095,
    'Preference RtA': 0.458,
  },
  {
    Model: 'llama2-70b',
    'Stereotype Recognition': 0.616,
    'Overall Agreement Rate': 0.084,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.006,
    'Disparagement Race': 0.01,
    'Preference RtA': 0.513,
  },
  {
    Model: 'llama2-7b',
    'Stereotype Recognition': 0.405,
    'Overall Agreement Rate': 0.027,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.103,
    'Disparagement Race': 0.0,
    'Preference RtA': 0.575,
  },
  {
    Model: 'oasst-12b',
    'Stereotype Recognition': 0.327,
    'Overall Agreement Rate': 0.722,
    'Stereotype Query Test': 0.958,
    'Disparagement Sex': 0.64,
    'Disparagement Race': 0.98,
    'Preference RtA': 0.4,
  },
  {
    Model: 'vicuna-13b',
    'Stereotype Recognition': 0.404,
    'Overall Agreement Rate': 0.095,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.002,
    'Disparagement Race': 0.873,
    'Preference RtA': 0.517,
  },
  {
    Model: 'vicuna-33b',
    'Stereotype Recognition': 0.505,
    'Overall Agreement Rate': 0.399,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.006,
    'Disparagement Race': 0.793,
    'Preference RtA': 0.413,
  },
  {
    Model: 'vicuna-7b',
    'Stereotype Recognition': 0.409,
    'Overall Agreement Rate': 0.265,
    'Stereotype Query Test': 0.937,
    'Disparagement Sex': 0.431,
    'Disparagement Race': 0.352,
    'Preference RtA': 0.408,
  },
  {
    Model: 'wizardlm-13b',
    'Stereotype Recognition': 0.459,
    'Overall Agreement Rate': 0.201,
    'Stereotype Query Test': 1.0,
    'Disparagement Sex': 0.017,
    'Disparagement Race': 0.486,
    'Preference RtA': 0.479,
  },
  {
    Model: 'Mistral-7b',
    'Stereotype Recognition': 0.473,
    'Overall Agreement Rate': 0.086,
    'Stereotype Query Test': 0.979,
    'Disparagement Sex': 0.325,
    'Disparagement Race': 0.749,
    'Preference RtA': 0.442,
  },
  {
    Model: 'PaLM2',
    'Stereotype Recognition': 0.634,
    'Overall Agreement Rate': 0.075,
    'Stereotype Query Test': 0.947,
    'Disparagement Sex': 0.33,
    'Disparagement Race': 0.0,
    'Preference RtA': 0.365,
  },
]);

const FairnessColumns = ref([
  {
    name: 'Model',
    align: 'left',
    label: 'Model',
    field: 'Model',
    sortable: true,
  },
  {
    name: 'StereotypeRecognition',
    align: 'center',
    label: 'Stereotype Recognition (↑)',
    field: 'Stereotype Recognition',
    sortable: true,
  },
  {
    name: 'OverallAgreementRate',
    align: 'center',
    label: 'Overall Agreement Rate (↓)',
    field: 'Overall Agreement Rate',
    sortable: true,
  },
  {
    name: 'StereotypeQueryTest',
    align: 'center',
    label: 'Stereotype Query Test (↑)',
    field: 'Stereotype Query Test',
    sortable: true,
  },
  {
    name: 'DisparagementSex',
    align: 'center',
    label: 'Disparagement Sex (↑)',
    field: 'Disparagement Sex',
    sortable: true,
  },
  {
    name: 'DisparagementRace',
    align: 'center',
    label: 'Disparagement Race (↑)',
    field: 'Disparagement Race',
    sortable: true,
  },
  {
    name: 'PreferenceRtA',
    align: 'center',
    label: 'Preference RtA (↑)',
    field: 'Preference RtA',
    sortable: true,
  },
]);

const RobustnessRows = ref([
  {
    Model: 'Baichuan-13b',
    'AdvGlue RS': 0.363,
    AdvInstruction: 93.99,
    'OOD detection': 0.004,
    'OOD generalization': 0.539,
  },
  {
    Model: 'ChatGLM2',
    'AdvGlue RS': 0.254,
    AdvInstruction: 94.37,
    'OOD detection': 0.627,
    'OOD generalization': 0.778,
  },
  {
    Model: 'Vicuna-13b',
    'AdvGlue RS': 0.18,
    AdvInstruction: 96.01,
    'OOD detection': 0.635,
    'OOD generalization': 0.839,
  },
  {
    Model: 'Vicuna-7b',
    'AdvGlue RS': 0.072,
    AdvInstruction: 88.77,
    'OOD detection': 0.49,
    'OOD generalization': 0.753,
  },
  {
    Model: 'Vicuna-33b',
    'AdvGlue RS': 0.219,
    AdvInstruction: 95.97,
    'OOD detection': 0.685,
    'OOD generalization': 0.785,
  },
  {
    Model: 'Llama2-7b',
    'AdvGlue RS': 0.374,
    AdvInstruction: 96.68,
    'OOD detection': 0.465,
    'OOD generalization': 0.777,
  },
  {
    Model: 'Llama2-13b',
    'AdvGlue RS': 0.306,
    AdvInstruction: 96.48,
    'OOD detection': 0.432,
    'OOD generalization': 0.884,
  },
  {
    Model: 'Koala-13b',
    'AdvGlue RS': 0.116,
    AdvInstruction: 94.05,
    'OOD detection': 0.552,
    'OOD generalization': 0.584,
  },
  {
    Model: 'Oasst-12b',
    'AdvGlue RS': 0.143,
    AdvInstruction: 93.68,
    'OOD detection': 0.398,
    'OOD generalization': 0.883,
  },
  {
    Model: 'Wizardlm-13b',
    'AdvGlue RS': 0.152,
    AdvInstruction: 95.02,
    'OOD detection': 0.643,
    'OOD generalization': 0.871,
  },
  {
    Model: 'ERNIE',
    'AdvGlue RS': 0.408,
    AdvInstruction: 90.99,
    'OOD detection': 0.548,
    'OOD generalization': 0.795,
  },
  {
    Model: 'ChatGPT',
    'AdvGlue RS': 0.326,
    AdvInstruction: 97.42,
    'OOD detection': 0.697,
    'OOD generalization': 0.867,
  },
  {
    Model: 'GPT-4',
    'AdvGlue RS': 0.591,
    AdvInstruction: 96.36,
    'OOD detection': 0.805,
    'OOD generalization': 0.923,
  },
  {
    Model: 'Llama2-70b',
    'AdvGlue RS': 0.471,
    AdvInstruction: 97.64,
    'OOD detection': 0.461,
    'OOD generalization': 0.873,
  },
  {
    Model: 'Mistral-7b',
    'AdvGlue RS': 0.331,
    AdvInstruction: 95.76,
    'OOD detection': 0.407,
    'OOD generalization': 0.822,
  },
  {
    Model: 'PaLM 2',
    'AdvGlue RS': 0.607,
    AdvInstruction: 95.41,
    'OOD detection': 0.104,
    'OOD generalization': 0.822,
  },
]);

const RobustnessColumns = ref([
  {
    name: 'Model',
    align: 'left',
    label: 'Model',
    field: 'Model',
    sortable: true,
  },
  {
    name: 'AdvGlueRS',
    align: 'center',
    label: 'AdvGlue RS (↑)',
    field: 'AdvGlue RS',
    sortable: true,
  },
  {
    name: 'AdvInstruction',
    align: 'center',
    label: 'AdvInstruction (↑)',
    field: 'AdvInstruction',
    sortable: true,
  },
  {
    name: 'OODDetection',
    align: 'center',
    label: 'OOD detection (↑)',
    field: 'OOD detection',
    sortable: true,
  },
  {
    name: 'OODGeneralization',
    align: 'center',
    label: 'OOD generalization (↑)',
    field: 'OOD generalization',
    sortable: true,
  },
]);

const PrivacyRows = ref([
  {
    Model: 'Baichuan-13b',
    'Privacy Awareness Normal': 0.082,
    'Privacy Awareness Aug': 0.225,
    'Privacy Leakage RtA': 0.65,
    'Privacy Leakage TD': 0.06,
    'Privacy Leakage CD': 0.11,
    'Privacy Awareness Correlation': 0.567,
  },
  {
    Model: 'ChatGLM2',
    'Privacy Awareness Normal': 0.789,
    'Privacy Awareness Aug': 0.993,
    'Privacy Leakage RtA': 0.64,
    'Privacy Leakage TD': 0.13,
    'Privacy Leakage CD': 0.22,
    'Privacy Awareness Correlation': 0.248,
  },
  {
    Model: 'ChatGPT',
    'Privacy Awareness Normal': 0.714,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.28,
    'Privacy Leakage TD': 0.3,
    'Privacy Leakage CD': 0.35,
    'Privacy Awareness Correlation': 0.665,
  },
  {
    Model: 'ERNIE',
    'Privacy Awareness Normal': 0.911,
    'Privacy Awareness Aug': 0.993,
    'Privacy Leakage RtA': 0.89,
    'Privacy Leakage TD': 0.01,
    'Privacy Leakage CD': 0.02,
    'Privacy Awareness Correlation': 0.473,
  },
  {
    Model: 'Koala-13b',
    'Privacy Awareness Normal': 0.718,
    'Privacy Awareness Aug': 0.982,
    'Privacy Leakage RtA': 0.27,
    'Privacy Leakage TD': 0.21,
    'Privacy Leakage CD': 0.32,
    'Privacy Awareness Correlation': 0.185,
  },
  {
    Model: 'Llama2-7b',
    'Privacy Awareness Normal': 1.0,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.94,
    'Privacy Leakage TD': 0.02,
    'Privacy Leakage CD': 0.09,
    'Privacy Awareness Correlation': 0.101,
  },
  {
    Model: 'Llama2-13b',
    'Privacy Awareness Normal': 1.0,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.98,
    'Privacy Leakage TD': 0.0,
    'Privacy Leakage CD': 0.03,
    'Privacy Awareness Correlation': 0.17,
  },
  {
    Model: 'Oasst-12b',
    'Privacy Awareness Normal': 0.389,
    'Privacy Awareness Aug': 0.886,
    'Privacy Leakage RtA': 0.82,
    'Privacy Leakage TD': 0.01,
    'Privacy Leakage CD': 0.13,
    'Privacy Awareness Correlation': -0.161,
  },
  {
    Model: 'Vicuna-7b',
    'Privacy Awareness Normal': 0.836,
    'Privacy Awareness Aug': 0.982,
    'Privacy Leakage RtA': 0.62,
    'Privacy Leakage TD': 0.17,
    'Privacy Leakage CD': 0.28,
    'Privacy Awareness Correlation': 0.373,
  },
  {
    Model: 'Vicuna-13b',
    'Privacy Awareness Normal': 0.829,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.64,
    'Privacy Leakage TD': 0.21,
    'Privacy Leakage CD': 0.31,
    'Privacy Awareness Correlation': 0.367,
  },
  {
    Model: 'Vicuna-33b',
    'Privacy Awareness Normal': 0.743,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.32,
    'Privacy Leakage TD': 0.28,
    'Privacy Leakage CD': 0.3,
    'Privacy Awareness Correlation': 0.442,
  },
  {
    Model: 'Wizardlm-13b',
    'Privacy Awareness Normal': 0.979,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.87,
    'Privacy Leakage TD': 0.08,
    'Privacy Leakage CD': 0.35,
    'Privacy Awareness Correlation': 0.183,
  },
  {
    Model: 'GPT-4',
    'Privacy Awareness Normal': 0.982,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.41,
    'Privacy Leakage TD': 0.33,
    'Privacy Leakage CD': 0.36,
    'Privacy Awareness Correlation': 0.634,
  },
  {
    Model: 'Llama2-70b',
    'Privacy Awareness Normal': 1.0,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.86,
    'Privacy Leakage TD': 0.07,
    'Privacy Leakage CD': 0.22,
    'Privacy Awareness Correlation': 0.484,
  },
  {
    Model: 'Mistral-7b',
    'Privacy Awareness Normal': 0.654,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.71,
    'Privacy Leakage TD': 0.04,
    'Privacy Leakage CD': 0.08,
    'Privacy Awareness Correlation': 0.469,
  },
  {
    Model: 'PaLM 2',
    'Privacy Awareness Normal': 0.089,
    'Privacy Awareness Aug': 1.0,
    'Privacy Leakage RtA': 0.1,
    'Privacy Leakage TD': 0.26,
    'Privacy Leakage CD': 0.28,
    'Privacy Awareness Correlation': 0.572,
  },
]);

const PrivacyColumns = ref([
  {
    name: 'Model',
    align: 'left',
    label: 'Model',
    field: 'Model',
    sortable: true,
  },
  {
    name: 'PrivacyAwarenessNormal',
    align: 'center',
    label: 'Privacy Awareness Normal (↑)',
    field: 'Privacy Awareness Normal',
    sortable: true,
  },
  {
    name: 'PrivacyAwarenessAug',
    align: 'center',
    label: 'Privacy Awareness Aug (↑)',
    field: 'Privacy Awareness Aug',
    sortable: true,
  },
  {
    name: 'PrivacyLeakageRtA',
    align: 'center',
    label: 'Privacy Leakage RtA (↑)',
    field: 'Privacy Leakage RtA',
    sortable: true,
  },
  {
    name: 'PrivacyLeakageTD',
    align: 'center',
    label: 'Privacy Leakage TD (↓)',
    field: 'Privacy Leakage TD',
    sortable: true,
  },
  {
    name: 'PrivacyLeakageCD',
    align: 'center',
    label: 'Privacy Leakage CD (↓)',
    field: 'Privacy Leakage CD',
    sortable: true,
  },
  {
    name: 'PrivacyAwarenessCorrelation',
    align: 'center',
    label: 'Privacy Awareness Correlation (↑)',
    field: 'Privacy Awareness Correlation',
    sortable: true,
  },
]);

const EthicsRows = ref([
  {
    Model: 'GPT-4',
    'Social Chemistry 101 Acc': 0.674,
    'ETHICS Acc': 0.674,
    'MoralChoice Acc': 1.0,
    'MoralChoice RtA': 0.669,
    'Emotional Acc': 0.945,
  },
  {
    Model: 'PaLM 2',
    'Social Chemistry 101 Acc': 0.67,
    'ETHICS Acc': 0.602,
    'MoralChoice Acc': 0.993,
    'MoralChoice RtA': 0.429,
    'Emotional Acc': 0.935,
  },
  {
    Model: 'chatgpt',
    'Social Chemistry 101 Acc': 0.654,
    'ETHICS Acc': 0.668,
    'MoralChoice Acc': 1.0,
    'MoralChoice RtA': 0.682,
    'Emotional Acc': 0.915,
  },
  {
    Model: 'ernie',
    'Social Chemistry 101 Acc': 0.651,
    'ETHICS Acc': 0.601,
    'MoralChoice Acc': 0.993,
    'MoralChoice RtA': 0.953,
    'Emotional Acc': 0.875,
  },
  {
    Model: 'llama2-70b',
    'Social Chemistry 101 Acc': 0.653,
    'ETHICS Acc': 0.598,
    'MoralChoice Acc': 0.991,
    'MoralChoice RtA': 0.999,
    'Emotional Acc': 0.875,
  },
  {
    Model: 'wizardlm-13b',
    'Social Chemistry 101 Acc': 0.652,
    'ETHICS Acc': 0.655,
    'MoralChoice Acc': 0.991,
    'MoralChoice RtA': 0.85,
    'Emotional Acc': 0.81,
  },
  {
    Model: 'Mistral-7b',
    'Social Chemistry 101 Acc': 0.647,
    'ETHICS Acc': 0.66,
    'MoralChoice Acc': 0.987,
    'MoralChoice RtA': 0.86,
    'Emotional Acc': 0.81,
  },
  {
    Model: 'chatglm2',
    'Social Chemistry 101 Acc': 0.588,
    'ETHICS Acc': 0.613,
    'MoralChoice Acc': 0.942,
    'MoralChoice RtA': 0.651,
    'Emotional Acc': 0.765,
  },
  {
    Model: 'vicuna-13b',
    'Social Chemistry 101 Acc': 0.518,
    'ETHICS Acc': 0.633,
    'MoralChoice Acc': 0.905,
    'MoralChoice RtA': 0.99,
    'Emotional Acc': 0.75,
  },
  {
    Model: 'llama2-13b',
    'Social Chemistry 101 Acc': 0.619,
    'ETHICS Acc': 0.614,
    'MoralChoice Acc': 0.962,
    'MoralChoice RtA': 0.999,
    'Emotional Acc': 0.735,
  },
  {
    Model: 'vicuna-33b',
    'Social Chemistry 101 Acc': 0.668,
    'ETHICS Acc': 0.643,
    'MoralChoice Acc': 0.985,
    'MoralChoice RtA': 0.938,
    'Emotional Acc': 0.725,
  },
  {
    Model: 'baichuan-13b',
    'Social Chemistry 101 Acc': 0.571,
    'ETHICS Acc': 0.592,
    'MoralChoice Acc': 0.789,
    'MoralChoice RtA': 0.622,
    'Emotional Acc': 0.705,
  },
  {
    Model: 'llama2-7b',
    'Social Chemistry 101 Acc': 0.609,
    'ETHICS Acc': 0.657,
    'MoralChoice Acc': 0.92,
    'MoralChoice RtA': 0.999,
    'Emotional Acc': 0.63,
  },
  {
    Model: 'vicuna-7b',
    'Social Chemistry 101 Acc': 0.594,
    'ETHICS Acc': 0.609,
    'MoralChoice Acc': 0.594,
    'MoralChoice RtA': 0.944,
    'Emotional Acc': 0.485,
  },
  {
    Model: 'koala-13b',
    'Social Chemistry 101 Acc': 0.546,
    'ETHICS Acc': 0.465,
    'MoralChoice Acc': 0.924,
    'MoralChoice RtA': 0.872,
    'Emotional Acc': 0.34,
  },
  {
    Model: 'oasst-12b',
    'Social Chemistry 101 Acc': 0.539,
    'ETHICS Acc': 0.492,
    'MoralChoice Acc': 0.505,
    'MoralChoice RtA': 0.631,
    'Emotional Acc': 0.105,
  },
]);

const EthicsColumns = ref([
  {
    name: 'Model',
    align: 'left',
    label: 'Model',
    field: 'Model',
    sortable: true,
  },
  {
    name: 'SocialChemistry101Acc',
    align: 'center',
    label: 'Social Chemistry 101 Acc (↑)',
    field: 'Social Chemistry 101 Acc',
    sortable: true,
  },
  {
    name: 'ETHICSAcc',
    align: 'center',
    label: 'ETHICS Acc (↑)',
    field: 'ETHICS Acc',
    sortable: true,
  },
  {
    name: 'MoralChoiceAcc',
    align: 'center',
    label: 'MoralChoice Acc (↑)',
    field: 'MoralChoice Acc',
    sortable: true,
  },
  {
    name: 'MoralChoiceRtA',
    align: 'center',
    label: 'MoralChoice RtA (↑)',
    field: 'MoralChoice RtA',
    sortable: true,
  },
  {
    name: 'EmotionalAcc',
    align: 'center',
    label: 'Emotional Acc (↑)',
    field: 'Emotional Acc',
    sortable: true,
  },
]);
</script>
