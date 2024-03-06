<template>
  <div
    class="px-1 cursor-pointer"
    :class="isActive ? 'bg-sky-300' : ''"
    @click="handleClickIcon"
  >
    <span class="p2">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:isActive"]);
const handleClickIcon = () => {
  emit("update:isActive", !props.isActive);
};
</script>
