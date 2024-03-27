<template>
  <div>Game</div>
  <component :is="renderComponent"></component>
</template>

<script>
import FillCharacterToBlank from "@/components/game/FillCharacterToBlank.vue";
import MultipleChoice from "@/components/game/MultipleChoice.vue";
import ShuffleWord from "@/components/game/ShuffleWord.vue";
import { useGameStore } from "../../store/game";
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
  setup() {
    const game = useGameStore();
    return { game };
  },
  data() {
    return {
      // game: {
      //   step: 0,
      //   listStep: [],
      // },
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
  computed: {
    renderComponent() {
      let typeGame = this.game.listStep[this.game.step].type;
      switch (typeGame) {
        case GAMES[0]:
          return FillCharacterToBlank;
        case GAMES[2]:
          return ShuffleWord;
        case GAMES[3]:
          return MultipleChoice;
        default:
          return FillCharacterToBlank;
      }
    },
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
      return finalStep;
    },
  },
};
</script>
