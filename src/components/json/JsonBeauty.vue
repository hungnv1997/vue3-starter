<template>
  <div class="block">
    <div class="flex flex-row">
      <div>
        <label>showLine</label>
        <input v-model="state.showLine" type="checkbox" />
      </div>
      <div>
        <label class="text-sky-500">showLineNumber</label>
        <input v-model="state.showLineNumber" type="checkbox" />
      </div>
      <div>
        <label>editable</label>
        <input v-model="state.editable" type="checkbox" />
        <IconActive v-model.isActive="state.editable"></IconActive>
      </div>
      <div>
        <label>editableTrigger</label>
        <select v-model="state.editableTrigger">
          <option value="click">click</option>
          <option value="dblclick">dblclick</option>
        </select>
      </div>
      <div>
        <label>deep</label>
        <select v-model="state.deep">
          <option :value="2">2</option>
          <option :value="3">3</option>
          <option :value="4">4</option>
        </select>
      </div>
    </div>
    <div>
      <vue-json-pretty
        v-model:data="state.data"
        :deep="state.deep"
        :show-double-quotes="true"
        :show-line="state.showLine"
        :show-line-number="state.showLineNumber"
        :editable="state.editable"
        :editable-trigger="state.editableTrigger"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import IconActive from "../common/IconActive.vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
const defaultData = {};
const state = reactive({
  val: JSON.stringify(defaultData),
  data: defaultData,
  showLine: true,
  showLineNumber: false,
  editable: true,
  editableTrigger: "click",
  deep: 3,
});
const props = defineProps({
  val: {
    type: String,
    default() {
      return "{}";
    },
  },
});
watch(
  () => props.val,
  (newVal) => {
    console.log(newVal);
    try {
      state.data = JSON.parse(newVal);
    } catch (err) {
      console.log("JSON ERROR", err);
    }
  },
);
</script>
