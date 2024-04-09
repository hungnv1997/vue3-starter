<template>
  <div>Flash card</div>
</template>

<script>
export default {
  props: {
    wordObject: {
      type: Object,
      default: () => {
        return {
          word: "",
          ipa: "",
          imgLink: "",
        };
      },
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
