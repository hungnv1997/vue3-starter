<template>
  <div class="default-layout">
    <header>
      <img
        class="logo vue"
        src="../assets/logo.png"
        alt="Vue logo"
        @click="$router.push('/')"
      />
    </header>
    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2023 Your Company Name</p>
      <img
        class="logo"
        src="../assets/logo.png"
        alt="Vue logo"
        @click="$router.push('/')"
      />
      <img
        class="logo"
        src="../assets/logo.png"
        alt="Vue logo"
        @click="$router.push('/')"
      />
    </footer>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
