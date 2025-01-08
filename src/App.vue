<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingScreen from './layouts/LoadingScreen.vue';
</script>

<template>
  <div class="wrapper">
    <LoadingScreen />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
