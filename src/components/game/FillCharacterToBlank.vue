<template>
  <div class="word-puzzle">
    <div class="flex flex-wrap">
      <input
        v-for="(char, index) in wordArray"
        :key="index"
        class="char-input"
        type="text"
        maxlength="1"
        v-model="userInputs[index]"
      />
    </div>
    <button v-if="isComplete" class="answer-button" @click="checkAnswer">
      Answer
    </button>
    <NextBtn />
  </div>
</template>

<script>
import NextBtn from "./share/NextBtn.vue";

export default {
  components: {
    NextBtn,
  },
  props: {
    word: {
      type: Object,
      default: () => {
        return {
          ipa: "hæv",
          word: "have",
          antonyms: "lack, miss",
          example: "I have a dog.",
          mean: "verb (to possess, to experience)",
        };
      },
    },
  },
  data() {
    return {
      userInputs: [],
    };
  },
  computed: {
    wordArray() {
      return this.word?.word?.split("");
    },
    isComplete() {
      return this.userInputs.every((input) => input !== "");
    },
  },
  created() {
    this.userInputs = Array(this.word?.word?.length).fill("");
  },
  methods: {
    checkAnswer() {
      const userWord = this.userInputs.join("");
      if (userWord === this.word?.word) {
        alert("Correct!");
      } else {
        alert("Wrong answer.");
      }
    },
  },
};
</script>

<style scoped>
.word-puzzle {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Arial", sans-serif;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.char-input {
  width: 2em;
  margin: 0.5em;
  text-align: center;
  font-size: 1.5em;
  border: none;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.answer-button {
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 20px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.answer-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}
</style>
