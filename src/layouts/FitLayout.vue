<template>
  <!-- blank -->
  <div class="fit-layout">
    <div ref="siteHeader" class="site-header"><SiteHeaderVue /></div>
    <main class="site-main mx-2">
      <router-view />
    </main>
    <div ref="siteFooter" class="site-footer">
      <SiteFooter />
    </div>
  </div>
</template>
<script>
import { ref, onMounted, nextTick } from "vue";
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
    const siteHeader = ref(null);
    const siteFooter = ref(null);

    onMounted(() => {
      nextTick(() => {
        footerHeight.value = `${siteFooter.value?.clientHeight}px`;
        headerHeight.value = `${siteHeader.value?.clientHeight}px`;
        setTimeout(() => {
          console.log(siteHeader.value?.clientHeight);
        }, 2500);
      });
    });

    return {
      headerHeight,
      footerHeight,
      siteHeader,
      siteFooter,
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
  padding-top: calc(64px - 0.8rem);
  height: calc(100vh - v-bind(footerHeight) - 0.8rem);
}
</style>
