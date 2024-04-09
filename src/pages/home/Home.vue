<template>
  <HeaderBanner
    :bannerButton="'Start free trial'"
    :bannerTitle="'Adobe Stock'"
    :bannerDescription="'Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and find perfect image, that will help you with your new project.'"
  />
  <content-section sectionTitle="Your courses">
    <list-cards>
      <card-common v-for="card in cards" :key="card.title" :card="card" />
    </list-cards>
  </content-section>
  <answer />
</template>

<script>
import { reactive, toRefs } from "vue";
import CardCommon from "../../components/common/CardCommon.vue";
import ContentSection from "../../components/common/ContentSection.vue";
import HeaderBanner from "../../components/common/HeaderBanner.vue";
import ListCards from "../../components/common/ListCards.vue";
import Answer from "../../components/game/Answer.vue";
// import TopRequest from "../../components/game/TopRequest.vue";

export default {
  components: { Answer, HeaderBanner, ContentSection, ListCards, CardCommon },
  setup() {
    const state = reactive({
      count: 0,
      cards: [
        {
          cardTitle: "600 essensial works for TOEIC",
          cardSubTitle: "Industry Standart motion graphics & visual effects",
          cardButton: "Update",
        },
        {
          cardTitle: "600 essensial works for IELTS",
          cardSubTitle: "Industry Standart motion graphics & visual effects",
          cardButton: "Update",
        },
        {
          cardTitle: "600 Words level B1",
          cardSubTitle: "Industry Standart motion graphics & visual effects",
          cardButton: "Update",
        },
      ],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped></style>
