<template>
  MultipleChoice
  <div class="word-container">
    <div class="glass-effect">
      <div class="word-play">{{ wordPlay }}</div>
      <div class="answer-list">
        <button
          v-for="answer in answers"
          :key="answer"
          class="answer-item"
          @click="selectAnswer(answer)"
        >
          {{ answer }}
        </button>
      </div>
      <button v-if="selectedAnswer" class="submit-button" @click="checkAnswer">
        Answer
      </button>
    </div>
  </div>
</template>

<script>
export default {
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
      mode: "index",
      selectedAnswer: null,
    };
  },
  computed: {
    wordPlay() {
      return this.removeAndReplaceWord(
        this.removeCharacters(this.word.example, ".,?"),
        this.word.word,
        "...",
      );
    },
    answers() {
      let antonyms = this.word?.antonyms?.split(", ");
      return [this.word.word, ...antonyms];
    },
  },
  methods: {
    selectAnswer(answer) {
      this.selectedAnswer = answer;
    },
    checkAnswer() {
      if (this.selectedAnswer === this.word.word) {
        alert("Correct!");
      } else {
        alert("Wrong answer.");
      }
      this.selectedAnswer = null; // Reset the selected answer
    },
    removeCharacters(
      inputString,
      charactersToRemove,
      charactersToReplace = "",
    ) {
      const regex = new RegExp(`[${charactersToRemove}]`, "g");
      return inputString.replace(regex, charactersToReplace);
    },
    removeAndReplaceWord(inputString, targetWord, replacementChar) {
      // Use a regular expression to match the target word and replace it with the replacement character
      const regex = new RegExp(`\\b${targetWord}\\b`, "gi");
      return inputString.replace(regex, replacementChar);
    },
  },
};
</script>
<style lang="scss" scoped>
.word-container {
  font-family: "Arial", sans-serif;
  margin: 10px;
}

.glass-effect {
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

.word-play {
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.answer-list {
  margin-bottom: 5px;
}

.answer-item {
  display: inline-block;
  margin-right: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.25);
  color: #333;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.answer-item:hover {
  background-color: rgba(255, 255, 255, 0.35);
  transform: translateY(-2px);
}

.submit-button {
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

.submit-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}
</style>
