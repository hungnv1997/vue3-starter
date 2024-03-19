<template>
  <div class="sentence-puzzle">
    <h2>Puzzle</h2>

    <h2>Your answer</h2>
    <div class="answer">
      <div
        v-for="(word, index) in userWords"
        :key="'user-' + index"
        class="word-container"
      >
        <button
          @click="moveWord(index, 'userWords', 'shuffledWords')"
          class="word-button"
        >
          {{ word }}
        </button>
      </div>
    </div>
    <hr class="divider" />
    <div class="answer">
      <div
        v-for="(word, index) in shuffledWords"
        :key="'shuffled-' + index"
        class="word-container"
      >
        <button
          @click="moveWord(index, 'shuffledWords', 'userWords')"
          class="word-button"
        >
          {{ word }}
        </button>
      </div>
    </div>
    <div>
      <button @click="checkSentence" class="check-button">Test</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    correctSentence: {
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
      shuffledWords: this.correctSentence.example
        ?.split(" ")
        ?.sort(() => Math.random() - 0.5),
      userWords: [],
    };
  },
  methods: {
    moveWord(index, from, to) {
      this[to].push(this[from][index]);
      this[from].splice(index, 1);
    },
    checkSentence() {
      if (this.userWords.join(" ") === this.correctSentence.example) {
        alert("Chúc mừng! Bạn đã tạo thành công câu đúng.");
      } else {
        alert("Rất tiếc, câu của bạn chưa đúng. Hãy thử lại.");
      }
    },
  },
};
</script>

<style scoped>
.sentence-puzzle {
  font-family: "Arial", sans-serif;
  margin: 20px;
}

.word-container {
  display: inline-block;
  margin: 5px;
}

.word-button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.word-button:hover {
  background-color: #45a049;
  transform: translateY(-2px);
}

.divider {
  margin: 20px 0;
  border: none;
  border-top: 2px solid #ccc;
}

.check-button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background-color: #008cba;
  color: white;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.check-button:hover {
  background-color: #005f79;
  transform: translateY(-2px);
}

.answer {
  min-height: 3.5rem;
}
</style>
