<template>
  <top-request />
  <answer />
</template>

<script>
import Answer from "../../components/game/Answer.vue";
import TopRequest from "../../components/game/TopRequest.vue";

export default {
  components: { TopRequest, Answer },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
