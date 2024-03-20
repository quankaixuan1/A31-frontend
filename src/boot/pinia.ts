// src/boot/pinia.ts
import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';

export default boot(({ app }) => {
  const pinia = createPinia();

  // 创建一个 Pinia 插件
  pinia.use(({ store }) => {
    // 当 store 初始化时，从 localStorage 加载状态
    const storedState = localStorage.getItem(store.$id);
    if (storedState) {
      store.$patch(JSON.parse(storedState));
    }

    // 监听状态变化，自动保存到 localStorage
    store.$subscribe((mutation, state) => {
      localStorage.setItem(store.$id, JSON.stringify(state));
    });
  });

  app.use(pinia);
});
