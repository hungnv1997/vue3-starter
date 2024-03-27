import { defineStore } from "pinia";

export const useGameStore = defineStore("counter", {
  state: () => ({
    step: 0,
    listStep: [],
  }),
  actions: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    },
  },
});
