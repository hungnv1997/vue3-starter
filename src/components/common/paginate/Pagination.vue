<template>
  <paginate
    :value="currentPage"
    :page-range="pageRange"
    :margin-pages="0"
    :click-handler="clickCallback"
    :prev-text="'<'"
    :next-text="'>'"
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
  model: {
    prop: "content",
    event: "change",
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    /**
     * @returns {Number} The number of pages to display in the pagination, given
     *   the current screen size.
     */
    pageRange() {
      return this.isMobile ? 3 : 5;
    },
  },
  methods: {
    clickCallback(pageNum) {
      this.$emit("change", pageNum);
      this.$emit("input", pageNum);
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
