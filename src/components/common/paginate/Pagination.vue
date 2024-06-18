<template>
  <paginate
    v-model="page"
    :page-range="1"
    :margin-pages="0"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :page-class="'page-item'"
    :container-class="'block-pagination__items'"
    :active-class="'block-pagination__item--current'"
    :hide-prev-next="true"
    :next-link-class="'block-pagination__item--arrow'"
    :page-link-class="'block-pagination__item'"
    :break-view-link-class="'block-pagination__item--ellipsis'"
    :prev-link-class="'block-pagination__item--arrow'"
  >
  </paginate>
</template>
<script>
import Paginate from "./Paginate.vue";

export default {
  name: "Pagination",
  components: {
    Paginate,
  },
  data() {
    return {
      page: 10,
    };
  },

  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .block-pagination__item--ellipsis {
    cursor: text;
  }
  .block-pagination__item {
    color: #fff;
  }
}
</style>
