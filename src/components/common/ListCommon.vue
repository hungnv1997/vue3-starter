<template>
  <ul>
    <li class="adobe-product" v-for="row in exampleList" :key="row.id">
      <div class="products">
        <component :is="row.icon" />
        {{ row.listName }}
      </div>
      <span class="status" v-if="row.status === 1">
        <span class="status-circle white"></span>
        New</span
      >
      <span class="status" v-else-if="row.status === 2">
        <span class="status-circle"></span>
        Inprogress</span
      >
      <span class="status" v-else-if="row.status === 3">
        <span class="status-circle green"></span>
        Success</span
      >
      <div class="button-wrapper">
        <button class="content-button status-button open">Open</button>
        <component v-if="row.dropdownButton" :is="row.dropdownButton" />
      </div>
    </li>
  </ul>
</template>

<script>
import ButtonDropdown from "./ButtonDropdown.vue";
import { toRefs, reactive } from "vue";
import Photoshop from "../images/Photoshop.vue";
import ButtonCommon from "./ButtonCommon.vue";

export default {
  components: { ButtonDropdown },
  setup() {
    const state = reactive({
      exampleList: [
        {
          id: "learning1",
          listName: "Photoshop",
          icon: Photoshop,
          status: 1, //1: NEW 2: INPROGRESS 3: SUCCESS
          actionButton: ButtonCommon,
          dropdownButton: ButtonDropdown,
        },
        {
          id: "learning2",
          listName: "Illustrator",
          icon: Photoshop,
          status: 2, //1: NEW 2: INPROGRESS 3: SUCCESS
          actionButton: ButtonCommon,
          dropdownButton: ButtonDropdown,
        },
        {
          id: "learning3",
          listName: "Illustrator",
          icon: Photoshop,
          status: 3, //1: NEW 2: INPROGRESS 3: SUCCESS
          actionButton: ButtonCommon,
          dropdownButton: ButtonDropdown,
        },
      ],
    });
    return { ...toRefs(state) };
  },
};
</script>
