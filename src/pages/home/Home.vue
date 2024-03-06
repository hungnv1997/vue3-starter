<template>
  <textarea v-model="state.val"></textarea>
  <JsonBeauty :val="state.val" />
</template>

<script setup>
import { reactive } from "vue";
import JsonBeauty from "../../components/json/JsonBeauty.vue";
const defaultData = {};
const state = reactive({
  val: JSON.stringify(defaultData),
});
</script>

<style lang="scss" scoped></style>
