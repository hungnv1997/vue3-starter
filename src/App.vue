<template>
  <HeaderExtension />
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with -->
    <!-- the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/login">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
  <!-- <button @click="handleSpeak">Speak</button> -->
  <modal-donate />
</template>

<script>
import { onMounted, reactive } from "vue";
import ModalDonate from "./components/ModalDonate.vue";
import { hiraganaArray, katakanaArray } from "./constants";
import HeaderExtension from "./components/common/HeaderExtension.vue";
export default {
  components: { ModalDonate, HeaderExtension },
  setup() {
    let current = reactive({
      position: 0,
      shuffleArrayCharacter: [...hiraganaArray],
      checkbox: {
        isHiragana: true,
        isKatakana: false,
        isRevert: true,
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
    const handleSpeak = () => {
      //speak the text
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(activeCharacter.characters.back),
      );
    };
    return {
      activeCharacter,
      hiraganaArray,
      current,
      handleClickNextCard,
      handleClickBackCard,
      handleSelectCheckboxCharacterType,
      handleSpeak,
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
./components/common/HeaderExtension.vue
