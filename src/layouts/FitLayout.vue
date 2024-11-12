<template>
  <!-- blank -->
  <div class="fit-layout">
    <SiteHeaderVue class="site-header" />
    <main class="site-main mx-2">
      <router-view />
    </main>
    <SiteFooter class="site-footer" />
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import SiteHeaderVue from "../components/Header/SiteHeader.vue";
import SiteFooter from "../components/common/footer/SiteFooter.vue";
export default {
  components: {
    SiteHeaderVue,
    SiteFooter,
  },
  setup() {
    const headerHeight = ref(0);
    const footerHeight = ref(0);

    onMounted(() => {
      headerHeight.value = `${
        document.querySelector(".site-header").clientHeight
      }px`;
      footerHeight.value = `${
        document.querySelector(".site-footer").clientHeight
      }px`;
    });

    return {
      headerHeight,
      footerHeight,
    };
  },
};
</script>
<style lang="scss" scoped>
.fit-layout {
  min-height: 100vh;
  max-height: 100vh;
}
.site-main {
  padding-top: calc(v-bind(headerHeight) - 0.8rem);
  height: calc(100vh - v-bind(footerHeight) - 0.8rem);
}
</style>
