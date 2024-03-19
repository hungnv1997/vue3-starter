<template>
  <div>Game</div>
  <FillCharacterToBlank />
  <MultipleChoice />
  <ShuffleWord />
</template>

<script>
import FillCharacterToBlank from "../../components/game/FillCharacterToBlank.vue";
import MultipleChoice from "../../components/game/MultipleChoice.vue";
import ShuffleWord from "../../components/game/ShuffleWord.vue";
const GAMES = [
  "FLASH_CARD",
  "SHUFFLE_CHARACTER",
  "SHUFFLE_WORD",
  "MULTIPLE_CHOICE",
  "RE_WRITE",
];
export default {
  components: {
    FillCharacterToBlank,
    MultipleChoice,
    ShuffleWord,
  },
  data() {
    return {
      game: {
        step: 0,
        listStep: [],
      },
      listWords: [
        {
          ipa: "hæv",
          word: "have",
          antonyms: "lack, miss",
          example: "I have a dog.",
          mean: "verb (to possess, to experience)",
        },
      ],
    };
  },
  created() {
    this.game.listStep = this.createListGame(this.listWords, GAMES);
  },
  methods: {
    createListGame(listWords, listGames) {
      let finalStep = [];
      listGames.forEach((game) => {
        listWords.forEach((word) => {
          finalStep.push({ ...word, type: game });
        });
      });
      console.log(finalStep);
      return finalStep;
    },
  },
};
</script>

<style lang="scss" scoped></style>
