<template>
  <div class="story__details">
    <Crumb />
  </div>
  <div class="story__details">
    <Book />
  </div>
</template>

<script>
import Crumb from "../../components/common/crumb/Crumb.vue";
import Book from "@/components/common/reading/Book.vue";
export default {
  components: {
    Crumb,
    Book,
  },
  setup() {
    const content = "";
    return { content };
  },
};
</script>

<style lang="scss" scoped>
@import "../home/Home.scss";
.story__details {
  margin-top: 6rem;
  //   background-color: black;
}
</style>
