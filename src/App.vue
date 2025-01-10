<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingScreen from './layouts/LoadingScreen.vue';
import ErrorAlert from './layouts/ErrorAlert.vue';
</script>

<template>
  <div class="wrapper">
    <ErrorAlert />
    <LoadingScreen />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
