<template>
  <a-layout class="layout">
    <HeaderPage />
    
    <a-layout-content class="content">
      <div class="content-container">
        <router-view />
      </div>
    </a-layout-content>

    <FooterPage />
  </a-layout>
</template>

<script setup>
import HeaderPage from '@/components/common/HeaderPage.vue';
import FooterPage from '@/components/common/FooterPage.vue';
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.content {
  padding: 24px 0;
  background: #fff;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  min-height: calc(100vh - 64px - 429px); /* viewport height - header - footer */
}

@media (max-width: 767px) {
  .content {
    padding: 16px 0;
  }

  .content-container {
    padding: 0 8px;
  }
}
</style>
