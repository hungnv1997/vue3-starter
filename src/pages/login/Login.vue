<template>
  <div>Login</div>
</template>

<script>
export default {
  mounted() {
    const toggleButton = document.querySelector(".dark-light");

    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
