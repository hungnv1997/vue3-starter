<template>
  <div class="story__details">
    <Crumb />
    <MovieDetails :movie="movie" :is-full="false" />
    <!-- <MovieSliderItem :movie="movie" /> -->
  </div>
  <div class="Home__slider-list">
    <MovieSlider
      category-title="Netflix Originals"
      request-url="discover/tv?with_networks=213"
    />
  </div>
  <div class="margin-top">
    <Collapse
      :title="'Mới nhất'"
      :is-show-btn-img="true"
      :init-display-target="true"
    >
      <template #target> sdfdsf </template>
    </Collapse>
    <Collapse :title="'Chap 1 - Chap 10'">
      <template #target> sdfdsf </template>
    </Collapse>
    <Collapse :title="'Chap 10 - Chap 20'">
      <template #target> sdfdsf </template>
    </Collapse>
  </div>
</template>

<script>
// import MovieSliderItem from "../../components/MovieSliderItem/MovieSliderItem.vue";

import MovieDetails from "../../components/MovieDetails/MovieDetails.vue";
import MovieSlider from "../../components/MovieSlider/MovieSlider.vue";
import Collapse from "../../components/common/collapse/Collapse.vue";
import Crumb from "../../components/common/crumb/Crumb.vue";

export default {
  components: {
    MovieDetails,
    MovieSlider,
    Crumb,
    Collapse,
  },
  data() {
    return {
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
  },
};
</script>
<style lang="scss">
@import "../home/Home.scss";
.story__details {
  margin-top: 6rem;
  width: 100vw;
  //   background-color: black;
}
</style>
