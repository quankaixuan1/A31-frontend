import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/SelectModel.vue'), // 选择模型页面作为起始页面
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'), // MainLayout作为一个独立的页面
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'detect',
        component: () => import('src/components/pages/DetectPage.vue'),
      },
      {
        path: 'defense',
        component: () => import('src/components/pages/DefensePage.vue'),
      },
      {
        path: 'log',
        component: () => import('src/components/pages/DetectLog.vue'),
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
