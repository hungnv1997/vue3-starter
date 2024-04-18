<template>
  <div class="">
    <div class="mobile-layout">
      <div class="notification-header">
        <div class="necessities">
          <i class="fas fa-signal"></i>
          <i class="fas fa-wifi"></i>
          <i class="fas fa-battery-full"></i>
        </div>
      </div>
      <div class="actions">
        <i class="fas fa-chevron-left"></i>
        <i class="fas fa-bookmark"></i>
      </div>
      <div class="book-cover" id="book-cover-id">
        <div class="book-top">saddáddsa</div>
        <img
          class="book-side"
          src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
          alt="book-side"
        />
      </div>
      <div class="preface" id="preface-id">
        <div class="content">
          <div class="header">
            <div class="title">The Diary of a Young Girl</div>
            <div class="icon">
              <i class="fas fa-chevron-down"></i>
            </div>
          </div>
          <div class="author">by Anne Frank</div>
          <div class="body">
            <p>
              also known as The Diary of Anne Frank, is a book of the writings
              from the Dutch-language diary kept by Anne Frank while she was in
              hiding for two years with her family during the Nazi occupation of
              the Netherlands
            </p>
            <p>
              Anne calls her diary "Kitty", so almost all of the letters are
              written to Kitty. dsaA
            </p>
            <p>
              Anne calls her diary "Kitty", so almost all of the letters are
              written to Kitty. dsaA
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--
https://saranyamk.github.io/images-repo/book-top.svg
https://saranyamk.github.io/images-repo/book-side.svg
--></template>

<script>
export default {
  mounted() {
    // index.js
    window.addEventListener("scroll", this.scrollRotate);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollRotate);
  },
  setup() {
    return {};
  },
  methods: {
    scrollRotate() {
      let image = document.getElementById("book-cover-id");
      image.style.transform =
        "rotateX(" +
        Math.min(Math.min(window.pageYOffset / 2, 75), 62) +
        "deg)" +
        "translateZ(3px) scale(0.75)";
      let text = document.getElementById("preface-id");
      text.style.transform =
        "translateY(" + Math.max(-window.pageYOffset, -302) + "px)";
    },
  },
};
</script>

<style lang="scss" scoped>
$mobile-width: 325px;
$mobile-height: 670px;
$mobile-radius: 25px;
$separator-height: 500px;

$bg: #fdf3f2;
$mobile-bg: #fdeae6;
$intro-bg: #eed7d1;
$font-color: #807b7b;

$transition: transform 0.7s ease-in-out;

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $bg;
}

.info {
  font-family: "Quicksand", sans-serif;
  font-style: italic;
  font-size: 26px;
  margin-top: 10px;
  color: $font-color;
}

.mobile-layout {
  // width: $mobile-width;
  // height: $mobile-height;
  // margin: 30px 0;
  border-radius: $mobile-radius;
  perspective: 500px;
  overflow: hidden;
  color: $font-color;
  background-color: $mobile-bg;
  box-shadow: 36px 36px 50px 15px rgba(238, 215, 209, 0.82);

  .notification-header,
  .actions {
    position: fixed;
    top: 5px;
    width: 100%;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    z-index: 6;
  }

  .actions {
    top: 37px;
    padding: 50px;
    font-size: 20px;
  }

  .book-cover {
    position: relative;
    height: $separator-height;
    // width: calc(#{$mobile-width} * 2);
    border-top-left-radius: $mobile-radius;
    border-top-right-radius: $mobile-radius;
    transform-style: preserve-3d;
    transform-origin: 50% 40%;
    transition: $transition;
    z-index: 4;
  }

  .book-top {
    width: 15rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 5;
    transform: translateZ(28.5px);
    background-color: #857070;
    height: 251px;
    border-radius: 10px;
  }

  .book-side {
    width: 19.8rem;
    position: absolute;
    top: 289px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: translateY(-15px) translateX(0px) translateZ(15px)
      rotateX(104deg);
  }

  .preface {
    height: $separator-height;
    padding: 50px;
    transition: $transition;

    .header {
      display: flex;
      align-items: center;
    }

    .title {
      font-family: "Quicksand", sans-serif;
      font-size: 26px;
      margin-bottom: 10px;
    }

    .author {
      font-family: "Open Sans", sans-serif;
      font-style: italic;
      margin-bottom: 20px;
    }

    .icon {
      transform-origin: top;
      transition: $transition;
    }

    .body {
      font-family: "Quicksand", sans-serif;
    }

    .body p:first-child {
      margin-bottom: 15px;
    }
  }
}
</style>
