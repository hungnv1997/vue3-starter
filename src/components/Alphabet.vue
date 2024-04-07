<template>
  <div class="app-character">
    <div class="list-checkbox">
      <div class="checkbox-wrapper-1">
        <input
          v-model="current.checkbox.isHiragana"
          class="substituted"
          type="checkbox"
          aria-hidden="true"
          @change="handleSelectCheckboxCharacterType"
        />
        <label for="example-1">Hiragana</label>
      </div>
      <div class="checkbox-wrapper-1">
        <input
          v-model="current.checkbox.isKatakana"
          class="substituted"
          type="checkbox"
          aria-hidden="true"
          @change="handleSelectCheckboxCharacterType"
        />
        <label for="example-1">Katakana</label>
      </div>
    </div>
  </div>
  <div class="app-character" style="flex-direction: row">
    <div class="btn-common--slider" @click="handleClickBackCard">&lt;</div>
    <div class="card">
      <div class="content">
        <div class="front">{{ activeCharacter.characters.front }}</div>
        <div class="back">{{ activeCharacter.characters.back }}</div>
      </div>
    </div>
    <div class="btn-common--slider" @click="handleClickNextCard">></div>
  </div>
  <div class="app-character">
    <draw />
  </div>
  <modal-donate />
</template>

<script>
import { onMounted, reactive } from "vue";
import Draw from "./Draw.vue";
import ModalDonate from "./ModalDonate.vue";
import { hiraganaArray, katakanaArray } from "../constants";
export default {
  name: "Alphabet",
  components: { Draw, ModalDonate },
  setup() {
    let current = reactive({
      position: 0,
      shuffleArrayCharacter: [...hiraganaArray],
      checkbox: {
        isHiragana: true,
        isKatakana: false,
      },
    });
    let activeCharacter = reactive({
      characters: {
        front: "",
        back: "",
      },
    });
    onMounted(() => {
      activeCharacter.characters = current.shuffleArrayCharacter[0];
    });
    // methods
    const handleClickNextCard = () => {
      if (!current.shuffleArrayCharacter.length) return;
      if (current.position >= current.shuffleArrayCharacter.length - 1) {
        current.position = 0;
      } else {
        ++current.position;
      }
      activeCharacter.characters =
        current.shuffleArrayCharacter[current.position];
    };
    const handleClickBackCard = () => {
      if (!current.shuffleArrayCharacter.length) return;
      if (current.position <= 0) {
        current.position = current.shuffleArrayCharacter.length - 1;
      } else {
        --current.position;
      }
      activeCharacter.characters =
        current.shuffleArrayCharacter[current.position];
    };
    const handleSelectCheckboxCharacterType = () => {
      current.position = 0;
      if (!current.checkbox.isHiragana && !current.checkbox.isKatakana) {
        current.shuffleArrayCharacter = [
          {
            front: "",
            back: "",
          },
        ];
      } else if (current.checkbox.isHiragana) {
        let characterArray = [...hiraganaArray];
        if (current.checkbox.isKatakana)
          characterArray = [...characterArray, ...katakanaArray];
        current.shuffleArrayCharacter = [...characterArray];
      } else {
        current.shuffleArrayCharacter = [...katakanaArray];
      }
      activeCharacter.characters =
        current.shuffleArrayCharacter[current.position];
    };
    return {
      activeCharacter,
      hiraganaArray,
      current,
      handleClickNextCard,
      handleClickBackCard,
      handleSelectCheckboxCharacterType,
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
.card {
  width: 300px;
  height: 175px;
  min-width: 300px;
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
  line-height: 175px;
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
}
.list-checkbox {
  display: flex;
  min-width: 300px;
  max-width: 300px;
  // justify-content: space-between;
}
.checkbox-wrapper-1 {
  padding: 0.5rem;
}
</style>
