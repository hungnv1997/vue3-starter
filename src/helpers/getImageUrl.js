// import { store } from "../store/index.js";

function getImageUrl(url, size = 3, type) {
  console.log(url, size, type, "url");
  // return 'http://image.tmdb.org/t/p/w1280/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg'
  return "";
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
