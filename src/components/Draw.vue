<template>
  <h5>Note Pad</h5>
  <vue-drawing-canvas
    ref="VueCanvasDrawing"
    v-model:image="image"
    :width="300"
    :height="175"
    :stroke-type="strokeType"
    :line-cap="lineCap"
    :line-join="lineJoin"
    :fill-shape="fillShape"
    :eraser="eraser"
    :lineWidth="line"
    :color="color"
    :background-color="backgroundColor"
    :background-image="backgroundImage"
    :watermark="watermark"
    :initial-image="initialImage"
    saveAs="png"
    :styles="{
      borderRadius: '0.5rem',
    }"
    :lock="disabled"
    @mousemove="getCoordinate($event)"
    :additional-images="additionalImages"
  />
  <button type="button" @click.prevent="$refs.VueCanvasDrawing.reset()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-file-earmark"
      viewBox="0 0 16 16"
    >
      <path
        d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
      />
    </svg>
    Reset
  </button>
</template>

<script>
import { reactive, toRefs } from "vue";
import VueDrawingCanvas from "vue-drawing-canvas";
export default {
  components: {
    VueDrawingCanvas,
  },
  data() {
    return {
      initialImage: [
        {
          type: "dash",
          from: {
            x: 262,
            y: 154,
          },
          coordinates: [],
          color: "#000000",
          width: 5,
          fill: false,
        },
      ],
      x: 0,
      y: 0,
      image: "",
      eraser: false,
      disabled: false,
      fillShape: false,
      line: 5,
      color: "#03446a",
      strokeType: "dash",
      lineCap: "round",
      lineJoin: "round",
      backgroundColor: "#fff",
      backgroundImage: null,
      watermark: null,
      additionalImages: [],
    };
  },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
  methods: {
    getCoordinate(event) {
      let coordinates = this.$refs.VueCanvasDrawing.getCoordinates(event);
      this.x = coordinates.x;
      this.y = coordinates.y;
    },
    handleClickClear() {},
  },
};
</script>

<style lang="scss" scoped></style>
