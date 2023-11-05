<template>
  <button
    class="content-button status-button"
    :class="[isOpen ? 'open' : '', `btn--${typeButton}`]"
  >
    {{ btnName }}
  </button>
</template>

<script>
export default {
  props: {
    typeButton: {
      type: String,
      default: "normal",
    },
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

<style lang="scss" scoped>
.btn--small {
  font-size: 10px;
}
</style>
