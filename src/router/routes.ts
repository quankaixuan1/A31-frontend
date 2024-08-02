import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('pages/SelectModel.vue'), // 选择模型页面作为起始页面
  // },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'), // MainLayout作为一个独立的页面
    children: [
      {
        path: 'index',
        component: () => import('pages/IndexPage.vue'),
        children: [
          {
            path: 'test',
            component: () =>
              import('src/components/pages/smallpages/ApiTest.vue'),
          },
          {
            path: 'news',
            component: () =>
              import('src/components/pages/smallpages/NewsPage.vue'),
          },
          {
            path: 'we',
            component: () =>
              import('src/components/pages/smallpages/WePage.vue'),
          },
        ],
      },
      {
        path: 'detect',
        component: () => import('src/pages/DetectPage.vue'),
        children: [
          {
            path: 'truthfulness',
            component: () =>
              import('src/components/pages/DefectPages/TruthfulnessPage.vue'),
          },
          {
            path: 'safety',
            component: () =>
              import('src/components/pages/DefectPages/SafetyPage.vue'),
          },
          {
            path: 'fairness',
            component: () =>
              import('src/components/pages/DefectPages/FairnessPage.vue'),
          },
          {
            path: 'robustness',
            component: () =>
              import('src/components/pages/DefectPages/RobustnessPage.vue'),
          },
          {
            path: 'privacy',
            component: () =>
              import('src/components/pages/DefectPages/PrivacyPage.vue'),
          },
          {
            path: 'ethics',
            component: () =>
              import('src/components/pages/DefectPages/EthicsPage.vue'),
          },
        ],
      },
      {
        path: 'defense',
        component: () => import('src/pages/DefensePage.vue'),
        children: [
          {
            path: 'input',
            component: () =>
              import('src/components/pages/DefensePages/InputDefense.vue'),
          },
          {
            path: 'output',
            component: () =>
              import('src/components/pages/DefensePages/OutputDefense.vue'),
          },
          {
            path: 'res',
            component: () =>
              import('src/components/pages/DefensePages/MessageRes.vue'),
          },
          {
            path: 'score',
            component: () =>
              import('src/components/pages/DefensePages/MessageScore.vue'),
          },
        ],
      },
      {
        path: 'log',
        component: () => import('src/pages/DetectLog.vue'),
        children: [
          {
            path: 'graph',
            component: () =>
              import('src/components/pages/DetectLog/DataGraph.vue'),
          },
          {
            path: 'table',
            component: () =>
              import('src/components/pages/DetectLog/DataTable.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
