<template>
  <component :is="$route?.meta?.layout || 'div'"></component>
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
