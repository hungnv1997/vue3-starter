<template>
  <div class="icon-container">
    <div
      class="icon-group"
      v-for="(item, index) in listIcons"
      :key="`${index}${item.idPrefix}`"
    >
      <component :is="item.component" class="icon" />
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import GraphicDesign from "../../components/images/GraphicDesign.vue";
import Icon3DAR from "../../components/images/Icon3DAR.vue";
import AllApps from "../../components/images/AllApps.vue";
import Behance from "../../components/images/Behance.vue";
import Illustrations from "../../components/images/Illustrations.vue";
import ManageFonts from "../../components/images/ManageFonts.vue";
import Photography from "../../components/images/Photography.vue";
import Portfolio from "../../components/images/Portfolio.vue";
import SocialForum from "../../components/images/SocialForum.vue";
import Stock from "../../components/images/Stock.vue";
import Tutorials from "../../components/images/Tutorials.vue";
import UIUX from "../../components/images/UIUX.vue";
import Update from "../../components/images/Update.vue";
export default {
  components: { GraphicDesign },
  setup() {
    const state = reactive({
      listIcons: [
        {
          idPrefix: "icons",
          component: AllApps,
          name: "AllApps",
        },
        {
          idPrefix: "icons",
          component: Behance,
          name: "Behance",
        },
        {
          idPrefix: "icons",
          component: GraphicDesign,
          name: "GraphicDesign",
        },
        {
          idPrefix: "icons",
          component: Icon3DAR,
          name: "Icon3DAR",
        },
        {
          idPrefix: "icons",
          component: Illustrations,
          name: "Illustrations",
        },
        {
          idPrefix: "icons",
          component: ManageFonts,
          name: "ManageFonts",
        },
        {
          idPrefix: "icons",
          component: Photography,
          name: "Photography",
        },
        {
          idPrefix: "icons",
          component: Portfolio,
          name: "Portfolio",
        },
        {
          idPrefix: "icons",
          component: SocialForum,
          name: "SocialForum",
        },
        {
          idPrefix: "icons",
          component: Stock,
          name: "Stock",
        },
        {
          idPrefix: "icons",
          component: Tutorials,
          name: "Tutorials",
        },
        {
          idPrefix: "icons",
          component: UIUX,
          name: "UIUX",
        },
        {
          idPrefix: "icons",
          component: Update,
          name: "Update",
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.icon-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
.icon-group {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}
.icon {
  height: 2rem;
  width: 2rem;
}
</style>
