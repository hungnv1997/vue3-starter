<template>
  <button class="content-button status-button" :class="isOpen ? 'open' : ''">
    {{ btnName }}
  </button>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    btnName: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
