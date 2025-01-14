<template>
  <div
    class="min-h-screen min-w-screen bg-gradient-to-t from-white to-gray-100 text-gray-800 p-8"
  >
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-8">
      <div class="text-2xl font-bold">Aurora</div>
      <div class="flex items-center gap-4">
        <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <i class="fas fa-moon"></i>
        </button>
        <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <i class="fas fa-dice"></i>
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-semibold">Good Morning, Ayoub!</h1>
      <p class="text-gray-500">How can I assist you today?</p>
    </div>

    <!-- Widgets Section -->
    <div class="flex flex-wrap items-center justify-center gap-8">
      <!-- Upcoming -->
      <div class="widget">
        <h2 class="text-lg font-medium mb-4">Import Image</h2>
        <div
          class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          v-if="!previewImage"
        >
          <div class="space-y-1 text-center">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0h-8.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label
                for="importImage"
                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                @drop.prevent="onFileChanged"
              >
                <span>Upload a image</span>
                <input
                  id="importImage"
                  name="importImage"
                  type="file"
                  class="sr-only"
                  @change="onFileChanged"
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
          </div>
        </div>
        <!-- Preview -->
        <div v-if="previewImage" class="relative">
          <!-- add x icon with hover effect here to remove the image -->
          <button
            class="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer hover:bg-gray-200"
            @click="closePreview"
          >
            x
          </button>
          <img
            :src="previewImage"
            alt="Preview Image"
            class="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </div>

      <button
        class="border-0 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600"
        @click="generateImage"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.4998 7.49988L18.0098 8.98988L15.0098 5.98988L16.4998 4.49988C16.9198 4.07988 17.4598 3.87988 17.9998 3.87988C18.5398 3.87988 19.0798 4.07988 19.4998 4.49988C20.3298 5.32988 20.3298 6.66988 19.4998 7.49988Z"
            fill="#ffffff"
          />
          <path
            opacity="0.5"
            d="M18.0095 8.99023L6.49945 20.5002C5.66945 21.3302 4.32945 21.3302 3.49945 20.5002C2.66945 19.6702 2.66945 18.3302 3.49945 17.5002L15.0095 5.99023L18.0095 8.99023Z"
            fill="#ffffff"
          />
          <path
            d="M9.95051 3.50002L10.3605 2.11002C10.4005 1.98002 10.3605 1.84002 10.2705 1.74002C10.1805 1.64002 10.0205 1.60002 9.89051 1.64002L8.50051 2.05002L7.11051 1.64002C6.98051 1.60002 6.84051 1.64002 6.74051 1.73002C6.64051 1.83002 6.61051 1.97002 6.65051 2.10002L7.05051 3.50002L6.64051 4.89002C6.60051 5.02002 6.64051 5.16002 6.73051 5.26002C6.83051 5.36002 6.97051 5.39002 7.10051 5.35002L8.50051 4.95002L9.89051 5.36002C9.93051 5.37002 9.96051 5.38002 10.0005 5.38002C10.1005 5.38002 10.1905 5.34002 10.2705 5.27002C10.3705 5.17002 10.4005 5.03002 10.3605 4.90002L9.95051 3.50002Z"
            fill="#ffffff"
          />
          <path
            d="M5.95051 9.50002L6.36051 8.11002C6.40051 7.98002 6.36051 7.84002 6.27051 7.74002C6.17051 7.64002 6.03051 7.61002 5.90051 7.65002L4.50051 8.05002L3.1105 7.64002C2.9805 7.60002 2.84051 7.64002 2.74051 7.73002C2.64051 7.83002 2.61051 7.97002 2.65051 8.10002L3.05051 9.50002L2.64051 10.89C2.60051 11.02 2.64051 11.16 2.73051 11.26C2.83051 11.36 2.9705 11.39 3.1005 11.35L4.4905 10.94L5.88051 11.35C5.91051 11.36 5.95051 11.36 5.9905 11.36C6.0905 11.36 6.18051 11.32 6.26051 11.25C6.36051 11.15 6.39051 11.01 6.35051 10.88L5.95051 9.50002Z"
            fill="#ffffff"
          />
          <path
            d="M20.9497 14.5L21.3597 13.11C21.3997 12.98 21.3597 12.84 21.2697 12.74C21.1697 12.64 21.0297 12.61 20.8997 12.65L19.5097 13.06L18.1197 12.65C17.9897 12.61 17.8497 12.65 17.7497 12.74C17.6497 12.84 17.6197 12.98 17.6597 13.11L18.0697 14.5L17.6597 15.89C17.6197 16.02 17.6597 16.16 17.7497 16.26C17.8497 16.36 17.9897 16.39 18.1197 16.35L19.5097 15.94L20.8997 16.35C20.9297 16.36 20.9697 16.36 21.0097 16.36C21.1097 16.36 21.1997 16.32 21.2797 16.25C21.3797 16.15 21.4097 16.01 21.3697 15.88L20.9497 14.5Z"
            fill="#ffffff"
          />
        </svg>
      </button>

      <!-- AI Insights -->
      <div class="widget">
        <h2 class="text-lg font-medium mb-4">AI Art</h2>
        <!-- skeleton gradient loading image -->

        <div v-if="mode === MODE.INIT" class="w-full h-48 rounded-lg">
          The result will appear here
        </div>
        <div
          v-if="mode === MODE.LOADING"
          class="w-full h-48 bg-gray-200 animate-pulse rounded-lg"
        ></div>
        <img
          v-if="mode === MODE.DONE"
          :src="previewImage"
          alt="Preview Image"
          class="w-full h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref, onUnmounted } from "vue";
const MODE = {
  INIT: "init",
  LOADING: "loading",
  DONE: "done",
};
export default {
  setup() {
    const previewImage = ref(null);
    const mode = ref(MODE.INIT);
    const { t, locale } = useI18n();
    const onFileChanged = (e) => {
      // add loading spinner here if needed

      previewImage.value = URL.createObjectURL(e.target.files[0]);
    };

    const closePreview = () => {
      URL.revokeObjectURL(previewImage.value);
      previewImage.value = null;
    };
    const generateImage = () => {
      // add loading spinner here if needed
      mode.value = MODE.LOADING;
      setTimeout(() => {
        mode.value = MODE.DONE;
      }, 2000);
    };
    // revoke the object URL to avoid memory leaks
    // when the component is unmounted
    onUnmounted(() => {
      URL.revokeObjectURL(previewImage.value);
    });
    return {
      t,
      locale,
      onFileChanged,
      previewImage,
      closePreview,
      mode,
      MODE,
      generateImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.widget {
  max-width: 400px;
  @apply w-full bg-white shadow-lg rounded-xl p-6;
}
</style>
