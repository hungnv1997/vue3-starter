<template>
  <div class="flex flex-col my-6">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="flex justify-between items-center px-4 py-2">
        <slot name="top-left" />
        <slot name="top-right" />
      </div>
      <div class="shadow overflow-hidden rounded border border-white">
        <table class="min-w-full text-sm text-gray-300">
          <thead
            class="text-sm font-bold tracking-wider border-b border-gray-600"
          >
            <tr>
              <th
                v-for="header in columnsConfig"
                :key="header.value"
                class="px-6 py-2 text-center border-r border-gray-600"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>
          <tbody class="">
            <tr
              v-for="(row, index) in data"
              :key="index"
              :class="[
                { 'bg-gray-800 bg-opacity-20': index % 2 === 0 },
                { 'hover:bg-gray-700': true },
              ]"
              style="height: 36px"
            >
              <td
                v-for="cell in columnsConfig"
                :key="cell.value"
                class="px-6 py-2 whitespace-nowrap border-r border-gray-600"
                :class="[
                  { 'text-left': cell.align === 'left' },
                  { 'text-center': !cell.align || cell.align === 'center' },
                  { 'text-right': cell.align === 'right' },
                ]"
              >
                {{ row[cell.value] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-4 flex justify-between items-center">
        <div class="text-xs">Show 1 to 3 of 10 results</div>
        <slot name="pagination" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    columnsConfig: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const tableData = ref([]);

    onMounted(() => {
      tableData.value = props.data;
    });

    return {
      tableData,
    };
  },
};
</script>
