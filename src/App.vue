<template>
  <component :is="$route?.meta?.layout || 'div'"></component>
</template>
<script setup></script>

<style lang="scss" scoped>
@import "./assets/index.scss";
</style>
