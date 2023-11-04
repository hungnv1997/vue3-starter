<template>
  <div class="notification">
    <span class="notification-number" v-if="notificationNumber > 0">{{
      notificationNumber
    }}</span>
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-bell"
    >
      <path
        d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
      />
    </svg>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  props: {
    notificationNumber: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
