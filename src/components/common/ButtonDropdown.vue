<template>
  <div class="menu" @click="handleActiveDropdown" ref="target">
    <button class="dropdown" :class="isActiveDropdown ? 'is-active' : ''">
      <ul>
        <li><a href="#">Go to Discover</a></li>
        <li><a href="#">Learn more</a></li>
        <li><a href="#">Uninstall</a></li>
      </ul>
    </button>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
export default {
  setup() {
    const target = ref(null);
    const state = reactive({
      isActiveDropdown: false,
    });
    const handleActiveDropdown = () => {
      state.isActiveDropdown = !state.isActiveDropdown;
    };
    onClickOutside(target, () => {
      state.isActiveDropdown = false;
    });
    return {
      target,
      ...toRefs(state),
      handleActiveDropdown,
    };
  },
};
</script>

<style lang="scss" scoped></style>
