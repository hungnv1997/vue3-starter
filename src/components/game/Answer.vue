<template>
  <div>
    <span v-for="(character, index) in arrayCharacter" :key="index">
      {{ character }}
    </span>
  </div>
</template>

<script>
export default {
  setup() {
    const init = "hello world";
    function generateRandomStringWithLength(inputString, desiredLength) {
      // Xóa tất cả khoảng trắng từ chuỗi đầu vào
      const stringWithoutSpaces = inputString.replace(/\s/g, "");

      // Tạo một chuỗi ngẫu nhiên có độ dài cần thiết
      const characters = "abcdefghijklmnopqrstuvwxyz";
      let randomString = "";
      while (inputString.length + randomString.length < desiredLength) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
      function mergeStrings(string1, string2) {
        const maxLength = Math.max(string1.length, string2.length);
        let mergedString = "";

        for (let i = 0; i < maxLength; i++) {
          if (i < string1.length) {
            mergedString += string1[i];
          }
          if (i < string2.length) {
            mergedString += string2[i];
          }
        }

        return mergedString;
      }
      // Kết hợp chuỗi mới và chuỗi ngẫu nhiên
      const finalString = mergeStrings(stringWithoutSpaces, randomString);

      return finalString;
    }
    let arrayCharacter = generateRandomStringWithLength(init, 20);
    return { arrayCharacter };
  },
};
</script>

<style lang="scss" scoped></style>
