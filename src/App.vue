<template>
  <div class="app-character">
    <div class="card">
      <div class="content">
        <div class="front">{{ activeCharacter.characters.front }}</div>
        <div class="back">{{ activeCharacter.characters.back }}</div>
      </div>
    </div>
    <div class="next-btn" @click="handleClickNextCard">></div>
  </div>
</template>

<script>
import { reactive } from "vue";
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
export default {
  setup() {
    const hiraganaArray = [
      { front: "あ", back: "a" },
      { front: "い", back: "i" },
      { front: "う", back: "u" },
      { front: "え", back: "e" },
      { front: "お", back: "o" },
      { front: "か", back: "ka" },
      { front: "き", back: "ki" },
      { front: "く", back: "ku" },
      { front: "け", back: "ke" },
      { front: "こ", back: "ko" },
      { front: "さ", back: "sa" },
      { front: "し", back: "shi" },
      { front: "す", back: "su" },
      { front: "せ", back: "se" },
      { front: "そ", back: "so" },
      { front: "た", back: "ta" },
      { front: "ち", back: "chi" },
      { front: "つ", back: "tsu" },
      { front: "て", back: "te" },
      { front: "と", back: "to" },
      { front: "な", back: "na" },
      { front: "に", back: "ni" },
      { front: "ぬ", back: "nu" },
      { front: "ね", back: "ne" },
      { front: "の", back: "no" },
      { front: "は", back: "ha" },
      { front: "ひ", back: "hi" },
      { front: "ふ", back: "fu" },
      { front: "へ", back: "he" },
      { front: "ほ", back: "ho" },
      { front: "ま", back: "ma" },
      { front: "み", back: "mi" },
      { front: "む", back: "mu" },
      { front: "め", back: "me" },
      { front: "も", back: "mo" },
      { front: "や", back: "ya" },
      { front: "ゆ", back: "yu" },
      { front: "よ", back: "yo" },
      { front: "ら", back: "ra" },
      { front: "り", back: "ri" },
      { front: "る", back: "ru" },
      { front: "れ", back: "re" },
      { front: "ろ", back: "ro" },
      { front: "わ", back: "wa" },
      { front: "を", back: "wo" },
      { front: "ん", back: "n" },
    ];
    let current = reactive({ position: 0, shuffleArrayCharacter: [] });

    current.shuffleArrayCharacter = shuffleArray(hiraganaArray);
    let activeCharacter = reactive({
      characters: {
        front: "あ",
        back: "a",
      },
    });
    const handleClickNextCard = () => {
      if (current.position >= hiraganaArray.length - 1) {
        current.position = 0;
      } else {
        ++current.position;
      }
      activeCharacter.characters =
        current.shuffleArrayCharacter[current.position];
    };
    return {
      activeCharacter,
      hiraganaArray,
      current,
      handleClickNextCard,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "https://fonts.googleapis.com/css?family=Lily+Script+One";
body {
  background: #eee;
  font-family: "Lily Script One";
}
.app-character {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card {
  // position: absolute;
  // top: 50%;
  // left: 50%;
  width: 300px;
  height: 300px;
  // margin: -150px;
  float: left;
  perspective: 500px;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  transition: transform 1s;
  transform-style: preserve-3d;
}

.card:hover .content {
  transform: rotateY(180deg);
  transition: transform 0.5s;
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: white;
  line-height: 300px;
  color: #03446a;
  text-align: center;
  font-size: 60px;
  border-radius: 5px;
  backface-visibility: hidden;
}

.back {
  background: #03446a;
  color: white;
  transform: rotateY(180deg);
}
.next-btn {
  // position: absolute;
  // right: 2rem;
  color: white;
  background-color: #03446a;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
}
</style>
