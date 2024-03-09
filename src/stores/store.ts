// src/store/modelStore.ts
import { defineStore } from 'pinia';

export const useModelStore = defineStore('modelStore', {
  state: () => ({
    modelName: '',
  }),
  actions: {
    setModelName(name: string) {
      this.modelName = name;
    },
  },
});

