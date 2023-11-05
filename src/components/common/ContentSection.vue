<template>
  <div class="content-section">
    <div class="content-section-title">{{ sectionTitle }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
