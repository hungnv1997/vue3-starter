<template>
  <component :is="$route?.meta?.layout || 'div'"></component>
  <!-- <modal-donate /> -->
</template>

<script>
// import JapaneseCharacter from "./components/japanese-character/JapaneseCharacter.vue";
// import ModalDonate from "./components/ModalDonate.vue";
export default {
  components: {
    // JapaneseCharacter,
    // ModalDonate,
  },
};
</script>
