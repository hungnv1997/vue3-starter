<template>
  <div class="h-full">
    <div ref="siteCrumb" class="pb-4"><Crumb /></div>
    <div class="mobile-layout py-8">
      <div class="flex justify-between mx-8 border-b border-white pb-4">
        <div class="text-lg font-bold">{{ bookTitle }}</div>
        <Pagination
          :current-page="currentPage"
          :page-count="+pagination.lastPage"
          @input="handleChangePage"
        />
      </div>
      <div
        class="body mx-8 text-left text-base pt-4 overflow-y-scroll"
        id="preface-id"
        style="max-height: calc(100% - 49px)"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>
<script>
import Crumb from "@/components/common/crumb/Crumb.vue";
import Pagination from "@/components/common/paginate/Pagination.vue";
import { ref, onMounted, computed } from "vue";

export default {
  components: {
    Crumb,
    Pagination,
  },
  /**
   * Component data
   *
   * @property {String} bookTitle - book title
   * @property {Number} currentPage - current page
   * @property {Object} pagination - pagination data
   * @property {String} text - text content of the book
   */
  data() {
    return {
      bookTitle: "Chap 1234",
      currentPage: 1,
      pagination: {
        lastPage: 10,
      },
      text: "sdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsf   dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf dffdsfdsfdsfsdffdsfdsfdsfsdffdsf dsfds  fsdf  fdsfd  sfdsfs dffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfds fsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsfsdffdsfdsfdsf",
    };
  },
  setup() {
    const siteCrumb = ref(null);
    onMounted(() => {
      console.log(siteCrumb.value.clientHeight);
    });
    const crumbHeight = computed(() => {
      return `${siteCrumb?.value?.clientHeight}px`;
    });
    return { siteCrumb, crumbHeight };
  },
  methods: {
    handleChangePage($page) {
      this.currentPage = $page;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-layout {
  border-radius: 0.559rem;
  color: #fff;
  background-color: #292929;
  height: calc(100% - v-bind(crumbHeight));
}
</style>
