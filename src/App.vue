<template>
  <select v-model="locale">
    <option>en</option>
    <option>ja</option>
  </select>
  <component :is="$route?.meta?.layout || 'div'"></component>
  <div>{{ t("a") }}</div>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { t, locale } = useI18n();
    return {
      t,
      locale,
    };
  },
};
</script>

<style lang="scss" scoped></style>
