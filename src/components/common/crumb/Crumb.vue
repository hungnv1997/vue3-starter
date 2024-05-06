<template>
  <div class="bread-crumb">
    <div class="bread-crumb__container">
      <div class="bread-crumb__inner">
        <ul class="bread-crumb__list">
          <li class="bread-crumb__list-item">
            <router-link class="bread-crumb__link" :to="routes.home">
              <font-awesome-icon
                :icon="['fas', 'home-user']"
                class="MovieDetails__btn-icon"
                fixed-width
              />
            </router-link>
          </li>
          <li class="bread-crumb__list-item">
            <div class="bread-crumb__link">Details</div>
          </li>
          <li class="bread-crumb__list-item">
            <div class="bread-crumb__link">User accounts</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from "@/helpers/constants";
export default {
  data() {
    return {
      routes,
    };
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.bread-crumb {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  padding: 1rem 2rem 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.bread-crumb__inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 100%;
  margin: auto;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: flex-end;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.bread-crumb__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: auto;
}
.bread-crumb__list-item {
  font-size: 1.2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
$color-crumb: #565656;
.bread-crumb__list-item:not(:first-child):before {
  display: inline-block;
  width: 1.2rem;
  content: ">";
  text-align: center;
  color: $color-crumb;
  font-size: 0.8rem;
}
.bread-crumb__link {
  cursor: pointer;
  color: $color-crumb;
  font-size: 0.8rem;
}
.bread-crumb__link:hover {
  color: #0085b2;
  text-decoration: underline;
}
</style>
