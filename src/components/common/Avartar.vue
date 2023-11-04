<template>
  <img class="profile-img" :src="srcImage" alt="" />
</template>

<script>
export default {
  props: {
    srcImage: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
