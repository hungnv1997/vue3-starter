<template>
  <img
    ref="target"
    @click="handleActiveDropdown"
    class="profile-img"
    :src="srcImage"
    alt=""
  />
  <button
    class="dropdown content-section"
    :class="isActiveDropdown ? 'is-active' : ''"
  >
    <ul>
      <li><a href="#">Profile</a></li>
      <li><a href="#">Settings</a></li>
      <li><a href="#">Logout</a></li>
    </ul>
  </button>
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
export default {
  props: {
    srcImage: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
  },
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

<style lang="scss" scoped>
.dropdown ul {
  top: 30px;
}
</style>
