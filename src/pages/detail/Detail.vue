<template>
  <div class="story__details">
    <Crumb />
    <!-- <MovieDetails :movie="movie" :is-full="false" /> -->
    <!-- <MovieSliderItem :movie="movie" /> -->
  </div>
  <!-- <div class="Home__slider-list">
    <MovieSlider
      category-title="Netflix Originals"
      request-url="discover/tv?with_networks=213"
    />
  </div> -->
  <div class="margin-top">
    <Collapse
      title="Mới nhất"
      :is-show-btn-img="true"
      :init-display-target="true"
    >
      <template #target>
        <router-link
          class="bread-crumb__link"
          :to="'/tan-the-bang-phong/chap-1'"
          >Chap 1: Test</router-link
        >
      </template>
    </Collapse>
    <TableCommon
      :columnsConfig="columnsConfig"
      :data="chapters"
      class="overflow-x-auto box--border"
    >
      <template #top-left>
        <h2 class="text-lg font-bold">Danh sách chương</h2>
      </template>
      <template #pagination>
        <Pagination
          v-model="currentPage"
          :page-count="totalPages"
          @input="handlePageChange"
        />
      </template>
    </TableCommon>
  </div>
</template>

<script>
// import MovieDetails from "../../components/MovieDetails/MovieDetails.vue";
import Collapse from "../../components/common/collapse/Collapse.vue";
import Crumb from "../../components/common/crumb/Crumb.vue";
import TableCommon from "@/components/common/table/TableCommon.vue";
import Pagination from "@/components/common/paginate/Pagination.vue";
import { routes } from "@/helpers/constants.js";

export default {
  components: {
    // MovieDetails,
    Crumb,
    Collapse,
    TableCommon,
    Pagination,
  },
  data() {
    return {
      routes,
      movie: {
        adult: false,
        backdrop_path: "/nd11dhqVr4r2UVlIVjq17Sums04.jpg",
        genre_ids: [16, 35, 10751],
        id: 61886,
        origin_country: ["US"],
        original_language: "en",
        original_name: "The Adventures of Puss in Boots",
        overview:
          "The world's greatest feline fighter, lover and milk connoisseur is back in this original series filled with daring adventures, great boots, and laugh-out-loud fun! The entire family will be entranced by Puss' fantastical CG world filled with new characters, exotic locations and mystical tales that make up the stuff of legends. There's nothing that can get in this celebrated swashbuckling kitty's way...except maybe a hairball.",
        popularity: 698.173,
        poster_path: "/uHpUlyWCqXXUDY7zekQdJmf6QkP.jpg",
        first_air_date: "2015-01-16",
        name: "The Adventures of Puss in Boots",
        vote_average: 7,
        vote_count: 60,
      },
      chapters: [
        { id: 1, title: "Chương 1", date: "22/10/2022" },
        { id: 2, title: "Chương 2", date: "22/10/2022" },
        { id: 3, title: "Chương 3", date: "22/10/2022" },
      ],
      columnsConfig: [
        {
          value: "id",
          label: "#",
          type: "text",
        },
        {
          value: "title",
          label: "Tên",
          type: "text",
          align: "left",
        },
        {
          value: "date",
          label: "Ngày",
          type: "text",
        },
      ],
      currentPage: 1,
      totalPages: 10,
    };
  },
  created() {
    this.fetchMovieDetail();
  },
  methods: {
    fetchMovieDetail() {
      // Fetch movie details from your API
    },
    goBack() {
      this.$router.go(-1);
    },
    handlePageChange(newPage) {
      this.currentPage = newPage;
      // Handle page change logic
    },
  },
};
</script>
<style lang="scss">
@import "../home/Home.scss";
.story__details {
  margin-top: 6rem;
  width: 100%;
  //   background-color: black;
}
</style>
