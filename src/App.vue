<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingScreen from './layouts/LoadingScreen.vue';
import Error from './layouts/Error.vue';
</script>

<template>
  <div class="wrapper">
    <Error />
    <LoadingScreen />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
