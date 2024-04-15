<template>
  <div class="box--border margin--narrow">
    <!-- border body start -->
    <div class="box--border__content">
      <!-- list info start -->
      <div
        class="box--border__top"
        :data-toggle="`box-border${id}`"
        @click="handleExpanseCollapse"
      >
        <!-- list info top start -->
        <!-- heading accordion start -->
        <div class="box--border__top__text">
          <p class="font--smallest">{{ title }}</p>
        </div>
        <div
          :id="`btn${id}`"
          class="btn--padding-narrow"
          :class="initDisplayTarget ? 'is-open' : ''"
        >
          <font-awesome-icon
            v-show="isShowBtnImg"
            :icon="['fas', 'angle-double-down']"
            class="btn-img"
            fixed-width
          />
        </div>
        <!-- heading accordion end -->
        <!-- list info top end -->

        <!-- import table use start -->
        <!-- table start -->

        <!-- table end -->
        <!-- import table use end -->
      </div>
      <div
        :id="`target${id}`"
        class="box--border__body padding-top--narrow u-margin-top--narrowest u-disp-none"
        data-toggle="targetC"
        :style="{ display: initDisplayTarget ? 'block' : 'none' }"
      >
        <!-- box table start -->
        <slot name="target" />
        <!-- box table end -->
      </div>
      <!-- list info end -->
    </div>
    <!-- border body end -->
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  props: {
    isShowBtnImg: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "",
    },
    initDisplayTarget: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
  data() {
    return {
      id: uuidv4(),
    };
  },
  methods: {
    handleExpanseCollapse(event) {
      let btn = event.target;
      let box = btn.closest(`[data-toggle="box-border${this.id}"]`);
      let target = document.getElementById(`target${this.id}`);
      let buttonC = document.getElementById(`btn${this.id}`);
      buttonC.classList.toggle("is-open");
      box.classList.toggle("is-box-open");
      if (target.style.display === "none") {
        setTimeout(() => {
          target.style.opacity = "1";
          target.style.visibility = "visible";
        }, 200);
        target.style.display = "block";
      } else {
        target.style.opacity = "0";
        target.style.visibility = "hidden";
        setTimeout(() => {
          target.style.display = "none";
        }, 300);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
[data-toggle="targetC"] {
  transition: opacity 0.5s linear;
}
.btn-img {
  -webkit-transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(0);
  -webkit-transform: rotate(0);
}
.btn--padding-narrow {
  &.is-open {
    .btn-img {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
  }
}
.box--border {
  -webkit-transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #ddd;
  border-radius: 4px;
  &__content {
    padding: 1.6rem;
  }
  &__top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
  }
  &__body {
    margin-top: 1rem;
    border-top: 0.1px solid rgb(187, 187, 187);
  }
}
</style>
