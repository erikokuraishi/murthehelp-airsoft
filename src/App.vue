<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/Footer.vue'
</script>

<style scoped>
main {
  min-height: 70vh;
}
</style>