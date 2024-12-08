<template>
  <div class="chat-container">
    <div class="chat-box">
      <div class="message" v-for="message in messages" :key="message.id">
        <span class="user">{{ message.user }}:</span> {{ message.text }}
      </div>
    </div>
    <div class="input-message">
      <input
        v-model="newMessage"
        @keyup.enter="sendMessage"
        placeholder="Type a message..."
      />
    </div>
    <div v-if="progress" class="progress-bar">
      <div class="filler" :style="{ width: `${progress * 100}%` }"></div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { FilesetResolver, LlmInference } from "@mediapipe/tasks-genai";
import fetchInChunks from "fetch-in-chunks";
export default {
  setup() {
    const state = reactive({
      messages: [],
      newMessage: "",
      modelBlobURL: "",
      genAI: "",
      progress: 0,
    });

    onMounted(() => {
      console.log(performance, navigator);
    });

    async function displayPartialResults($message) {
      console.log($message, state.modelBlobURL, state.genAI);
      const llmInference = await LlmInference.createFromOptions(state.genAI, {
        baseOptions: {
          modelAssetPath: state.modelBlobURL,
        },
        maxTokens: 1000,
        topK: 40,
        temperature: 0.8,
        randomSeed: Math.round(Math.random() * 1000),
      });
      if (!state.messages.length) {
        llmInference.generateResponse($message, (partialResult, done) => {
          if (done) {
            state.messages.push({
              id: Date.now(),
              user: "LLM",
              text: partialResult || "Result is empty",
            });
          }
        });
      }
    }

    async function init() {
      try {
        state.genAI = await FilesetResolver.forGenAiTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm",
        );
        // load model
        let controller = new AbortController();
        const signal = controller.signal;

        const blob = await fetchInChunks(
          "../../public/gemma2-2b-it-gpu-int8.bin",
          {
            chunkSize: 5 * 1024 * 1024,
            maxParallelRequests: 10,
            progressCallback: (done, total) => (state.progress = done / total),
            signal,
          },
        );
        state.modelBlobURL = URL.createObjectURL(blob);
      } catch (error) {
        console.error("Failed to load genAI tasks:", error);
      }
    }

    const sendMessage = () => {
      if (state.newMessage.trim()) {
        state.messages.push({
          id: Date.now(),
          user: "You",
          text: state.newMessage,
        });
        displayPartialResults(state.newMessage);
        state.newMessage = "";
      }
    };

    init();

    return {
      ...toRefs(state),
      sendMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chat-box {
  width: 100%;
  max-width: 600px;
  height: 300px;
  border: 1px solid #ccc;
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 5px;
}

.user {
  font-weight: bold;
}

.input-message {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
}

input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 0 10px;
  position: relative;
}

button::after {
  content: "Send Message";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10px;
  color: #555;
}

.progress-bar {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 10px;
  background: #ccc;
  border-radius: 10px;
  margin: 10px auto;
}

.filler {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #333;
  border-radius: inherit;
  transition: width 0.2s ease;
}
</style>
