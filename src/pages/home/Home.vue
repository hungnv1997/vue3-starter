<template>
  <div class="Home">
    <div class="Home__main-slider">
      <Slider ref="slider" :autoplay="true" :options="options">
        <div
          :key="index"
          :class="`slide--${index}`"
          v-for="(movie, index) in movieList"
        >
          <MovieDetails :movie="movie" />
        </div>
      </Slider>
    </div>
    <div class="Home__slider-list">
      <MovieSlider
        category-title="Netflix Originals"
        request-url="discover/tv?with_networks=213"
      />
      <!-- <MovieSlider
        category-title="Trending Now"
        request-url="trending/all/week"
      />
      <MovieSlider
        category-title="Recently Added"
        request-url="movie/now_playing?with_networks=213"
      />
      <MovieSlider category-title="Top Rated" request-url="movie/top_rated" /> -->
    </div>
  </div>
</template>

<script>
import Slider from "../../components/Slider/Slider.vue";
import MovieDetails from "../../components/MovieDetails/MovieDetails.vue";
import MovieSlider from "@/components/MovieSlider/MovieSlider.vue";

export default {
  name: "Home",
  data() {
    return {
      movieList: [
        {
          adult: false,
          backdrop_path: "/jjECb6dSFUKXDtryuQk4rkFY7oP.jpg",
          genre_ids: [10759, 16, 10765],
          id: 4194,
          origin_country: ["US"],
          original_language: "en",
          original_name: "Star Wars: The Clone Wars",
          overview:
            "Yoda, Obi-Wan Kenobi, Anakin Skywalker, Mace Windu and other Jedi Knights lead the Grand Army of the Republic against the droid army of the Separatists.",
          popularity: 1326.919,
          poster_path: "/e1nWfnnCVqxS2LeTO3dwGyAsG2V.jpg",
          first_air_date: "2008-10-03",
          name: "Star Wars: The Clone Wars",
          vote_average: 8.461,
          vote_count: 1888,
        },
        {
          adult: false,
          backdrop_path: "/z8Mg3YVZGd1iSnoDinEAoh9WTck.jpg",
          genre_ids: [35, 18],
          id: 1424,
          origin_country: ["US"],
          original_language: "en",
          original_name: "Orange Is the New Black",
          overview:
            "A crime she committed in her youthful past sends Piper Chapman to a women's prison, where she trades her comfortable New York life for one of unexpected camaraderie and conflict in an eccentric group of fellow inmates.",
          popularity: 1100.835,
          poster_path: "/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg",
          first_air_date: "2013-07-11",
          name: "Orange Is the New Black",
          vote_average: 7.67,
          vote_count: 2336,
        },
        {
          adult: false,
          backdrop_path: "/yJjxO44EvaMYeeM9VHXHzdZ1kYL.jpg",
          genre_ids: [18],
          id: 1425,
          origin_country: ["US"],
          original_language: "en",
          original_name: "House of Cards",
          overview:
            "Set in present day Washington, D.C., House of Cards is the story of Frank Underwood, a ruthless and cunning politician, and his wife Claire who will stop at nothing to conquer everything. This wicked political drama penetrates the shadowy world of greed, sex and corruption in modern D.C.",
          popularity: 933.6,
          poster_path: "/hKWxWjFwnMvkWQawbhvC0Y7ygQ8.jpg",
          first_air_date: "2013-02-01",
          name: "House of Cards",
          vote_average: 8.026,
          vote_count: 2551,
        },
        {
          adult: false,
          backdrop_path: "/ciizJ9Okzt9tBBGK7Q3T14LFT2j.jpg",
          genre_ids: [10765, 9648, 18],
          id: 108545,
          origin_country: ["US"],
          original_language: "en",
          original_name: "3 Body Problem",
          overview:
            "Across continents and decades, five brilliant friends make earth-shattering discoveries as the laws of science unravel and an existential threat emerges.",
          popularity: 895.074,
          poster_path: "/ykZ7hlShkdRQaL2aiieXdEMmrLb.jpg",
          first_air_date: "2024-03-21",
          name: "3 Body Problem",
          vote_average: 7.571,
          vote_count: 450,
        },
        {
          adult: false,
          backdrop_path: "/bVml4IQKIS5DfPqgDoaZoRLlxIY.jpg",
          genre_ids: [16, 10751, 10762, 35, 10759],
          id: 64783,
          origin_country: ["US"],
          original_language: "en",
          original_name: "Dawn of the Croods",
          overview:
            'The world\'s first family is back for more laughs as they discover sports, sleepovers and other wonders in a world of exotic creatures and adventures. This 2D animated cartoon is based on the 3D animated feature film, "The Croods".',
          popularity: 827.155,
          poster_path: "/cyCAsMLGECvEAFDfKcxcWy7YTOW.jpg",
          first_air_date: "2015-12-24",
          name: "Dawn of the Croods",
          vote_average: 7.4,
          vote_count: 88,
        },
        {
          adult: false,
          backdrop_path: "/yQDsMnXoBjNl6x6rfwAeITNcLKy.jpg",
          genre_ids: [35, 10767],
          id: 59717,
          origin_country: ["US"],
          original_language: "en",
          original_name: "Comedians in Cars Getting Coffee",
          overview:
            "Jerry takes his comedy pals out for coffee in a selection of his classic automobiles. Larry David sums it up best when he says, 'You've finally made a show about nothing.'",
          popularity: 1020.359,
          poster_path: "/hpK5MsFa7k7RQdClvRglBo0wAoT.jpg",
          first_air_date: "2012-07-19",
          name: "Comedians in Cars Getting Coffee",
          vote_average: 7.2,
          vote_count: 128,
        },
        {
          adult: false,
          backdrop_path: "/aDBRtunw49UF4XmqfyNuD9nlYIu.jpg",
          genre_ids: [80, 10765],
          id: 63174,
          origin_country: ["US"],
          original_language: "en",
          original_name: "Lucifer",
          overview:
            "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.",
          popularity: 892.522,
          poster_path: "/ekZobS8isE6mA53RAiGDG93hBxL.jpg",
          first_air_date: "2016-01-25",
          name: "Lucifer",
          vote_average: 8.476,
          vote_count: 14298,
        },
        {
          adult: false,
          backdrop_path: "/38aCLy0BdFbOAIEfuDladoITHN0.jpg",
          genre_ids: [10765, 18, 9648],
          id: 42009,
          origin_country: ["GB"],
          original_language: "en",
          original_name: "Black Mirror",
          overview:
            "Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone - a black mirror of our 21st Century existence.",
          popularity: 852.932,
          poster_path: "/5UaYsGZOFhjFDwQh6GuLjjA1WlF.jpg",
          first_air_date: "2011-12-04",
          name: "Black Mirror",
          vote_average: 8.289,
          vote_count: 4734,
        },
        {
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
        {
          adult: false,
          backdrop_path: "/nzDvr0AkXWTHgvSRVgUVosKVgOh.jpg",
          genre_ids: [35],
          id: 61671,
          origin_country: ["US"],
          original_language: "en",
          original_name: "Unbreakable Kimmy Schmidt",
          overview:
            "When a woman is rescued from a doomsday cult and lands in New York City, she must navigate a world she didn’t think even existed anymore.",
          popularity: 698.118,
          poster_path: "/eMFHl0HyLg7k04OVeE4xPvT6XhY.jpg",
          first_air_date: "2015-03-06",
          name: "Unbreakable Kimmy Schmidt",
          vote_average: 7.135,
          vote_count: 494,
        },
      ],
      options: {
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 5000,
        speed: 300,
        timing: "ease-in-out",
      },
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  components: {
    Slider,
    MovieDetails,
    MovieSlider,
  },
  mounted() {
    // this.$refs.slider.toggleLoading();
    this.$refs.slider.disableAutoPlay();
  },
};
</script>

<style lang="scss">
@import "Home";
</style>
