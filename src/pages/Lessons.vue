<template>
  <HeaderBanner
    bannerTitle="Adobe Stock"
    bannerDescription="Grab yourself 10 free images from Adobe Stock in a 30-day free trial
          plan and find perfect image, that will help you with your new project."
    bannerButton="Start free trial"
  />
  <ContentSection sectionTitle="Installed (50%)">
    <ListCommon />
  </ContentSection>
  <ContentSection sectionTitle="Apps in your plan">
    <ListCards>
      <CardCommon :card="card" />
      <card-common :card="card" />
      <card-common :card="card" />
      <card-common :card="card" />
      <card-common :card="card" />
      <card-common :card="card" />
      <card-common :card="card" />
      <card-common :card="card" />
    </ListCards>
  </ContentSection>
  <!-- <ContentSample /> -->
</template>

<script>
import { reactive, toRefs } from "vue";
import HeaderBanner from "../components/common/HeaderBanner.vue";
import ContentSection from "../components/common/ContentSection.vue";
import ListCommon from "../components/common/ListCommon.vue";
import ListCards from "../components/common/ListCards.vue";
import CardCommon from "../components/common/CardCommon.vue";

export default {
  setup() {
    const state = reactive({
      card: {
        cardTitle: "After Effects",
        cardSubTitle: "Industry Standart motion graphics & visual effects",
        cardButton: "Update",
      },
    });
    return {
      ...toRefs(state),
    };
  },
  components: {
    HeaderBanner,
    ContentSection,
    ListCommon,
    ListCards,
    CardCommon,
  },
};
</script>

<style lang="scss" scoped></style>
