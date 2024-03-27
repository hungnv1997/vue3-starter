<template>
  <button @click="handleClickNext">Next</button>
</template>

<script>
import { useGameStore } from "../../../store/game";
export default {
  setup() {
    const game = useGameStore();
    // methods
    const handleClickNext = () => {
      console.log("first");
      game.step++;
    };
    return { game, handleClickNext };
  },
};
</script>

<style lang="scss" scoped></style>
