// import { store } from "../store/index.js";
// import imageUrl from "@/assets/images/book.webp";
function getImageUrl() {
  // url, size = 3, type
  // return imageUrl;
  // return `${require("@/assets/images/book.webp")}`;

  return "http://image.tmdb.org/t/p/w1280/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg";
  // return "";
  // let store = null
  // const config = store?.getters?.configuration;
  // if (!config) return null;
  // if (type === 'backdrop') {
  //   return config.images.base_url + config.images.backdrop_sizes[size] + url;
  // } else {
  //   return config.images.base_url + config.images.poster_sizes[size] + url;
  // }
}

export default getImageUrl;
