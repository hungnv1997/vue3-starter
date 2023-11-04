<template>
  <div>
    <div class="video-bg">
      <video width="320" height="240" autoplay loop muted>
        <source
          src="https://assets.codepen.io/3364143/7btrrd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="dark-light">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
    <div class="app">
      <div class="header">
        <div class="menu-circle"></div>
        <!-- <Tab /> -->
        <div class="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div class="header-profile" v-if="auth.isLogin">
          <Notify notificationNumber="3" />
          <Avartar
            srcImage="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          />
        </div>
        <div class="header-profile" v-if="!auth.isLogin">
          <ButtonCommon btnName="Login" :style="{ marginRight: '5px' }" />
          <ButtonCommon btnName="Register" isOpen />
        </div>
      </div>
      <div class="wrapper">
        <SideBar />
        <div class="main-container">
          <!-- <div class="main-header">
            <a class="menu-link-main" href="#">All Apps</a>
            <div class="header-menu">
              <a class="main-header-link is-active" href="#">Desktop</a>
              <a class="main-header-link" href="#">Mobile</a>
              <a class="main-header-link" href="#">Web</a>
            </div>
          </div> -->
          <div class="content-wrapper">
            <ContentSample />
            <router-view />
          </div>
        </div>
      </div>
      <div class="overlay-app"></div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/common/SideBar.vue";
import ContentSample from "../components/common/ContentSample.vue";
import Avartar from "../components/common/Avartar.vue";
import Notify from "../components/common/Notify.vue";
import ButtonCommon from "../components/common/ButtonCommon.vue";
import { reactive } from "vue";

export default {
  setup() {
    const auth = reactive({
      isLogin: false,
    });
    return { auth };
  },
  components: { SideBar, ContentSample, Avartar, Notify, ButtonCommon },
};
</script>

<style lang="scss" scoped></style>
