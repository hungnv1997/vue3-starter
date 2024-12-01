<template>
  <div class="flex flex-col my-6 h-full">
    <div
      class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 h-full"
    >
      <div
        class="flex justify-between items-center px-4 py-2"
        v-get-size="updateSizeTop"
      >
        <slot name="top-left" />
        <slot name="top-right" />
      </div>
      <div
        class="table-wrapper shadow overflow-hidden rounded border border-white"
      >
        <table class="min-w-full text-sm text-gray-300 h-full overflow-y-auto">
          <thead class="text-sm font-bold">
            <tr>
              <th
                v-for="(header, index) in columnsConfig"
                :key="header.value"
                class="px-6 py-2 text-center"
                :class="[
                  {
                    'border-r border-gray-600':
                      index !== columnsConfig.length - 1,
                  },
                ]"
              >
                {{ header.label }}
              </th>
            </tr>
          </thead>
          <tbody class="overflow-y-auto border-t border-gray-600">
            <tr
              v-for="(row, index) in data"
              :key="index"
              :class="[
                { 'bg-gray-800 bg-opacity-20': index % 2 === 0 },
                { 'hover:bg-gray-700': true },
                {
                  'border-b border-gray-600': index === data.length - 1,
                },
              ]"
              style="height: 36px; max-height: 36px"
            >
              <td
                v-for="(cell, index) in columnsConfig"
                :key="cell.value"
                class="px-6 py-2 whitespace-nowrap"
                :class="[
                  { 'text-left': cell.align === 'left' },
                  { 'text-center': !cell.align || cell.align === 'center' },
                  { 'text-right': cell.align === 'right' },
                  {
                    'border-r border-gray-600':
                      index !== columnsConfig.length - 1,
                  },
                ]"
              >
                {{ row[cell.value] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="mt-4 flex justify-between items-center"
        v-get-size="updateSize"
      >
        <div class="text-xs">Show 1 to 3 of 10 results</div>
        <Pagination
          v-model="currentPage"
          :page-count="totalPages"
          @input="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, computed } from "vue";
import Pagination from "@/components/common/paginate/Pagination.vue";

export default {
  components: {
    Pagination,
  },
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
    const currentPage = ref(1);
    const totalPages = ref(100);
    const itemsPerPage = 3;
    const tableFooterSize = reactive({
      width: 0,
      height: 0,
    });
    const tableTopSize = reactive({
      width: 0,
      height: 0,
    });
    const handlePageChange = function (newPage) {
      currentPage.value = newPage;
      // Handle page change logic
    };
    const updateSize = function (size) {
      tableFooterSize.width = size.width;
      tableFooterSize.height = size.height;
    };
    const updateSizeTop = function (size) {
      tableTopSize.width = size.width;
      tableTopSize.height = size.height;
    };
    const tableTopHeight = computed(() => {
      return `${tableTopSize.height}px`;
    });
    const tableFooterHeight = computed(() => {
      return `${tableFooterSize.height}px`;
    });
    onMounted(() => {
      tableData.value = props.data;
    });

    return {
      tableData,
      currentPage,
      totalPages,
      itemsPerPage,
      tableFooterSize,
      tableTopHeight,
      tableFooterHeight,
      updateSizeTop,
      updateSize,
      handlePageChange,
    };
  },
};
</script>
<style lang="scss" scoped>
.table-wrapper {
  height: calc(100% - v-bind(tableTopHeight) - v-bind(tableFooterHeight));
  max-height: calc(100% - v-bind(tableTopHeight) - v-bind(tableFooterHeight));
}
table tbody {
  display: block;
  max-height: calc(100% - 36.5px);
  height: calc(100% - 36.5px);
  overflow-y: scroll;
  // scrollbar-gutter: stable both-edges;
}
table thead {
  width: calc(100% - 14.6px) !important;
}
table thead,
table tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
</style>
