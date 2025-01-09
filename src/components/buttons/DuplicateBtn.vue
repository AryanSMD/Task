<script setup lang="ts"></script>

<template>
    <button class="btn rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-full aspect-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
        </svg>
    </button>
</template>

<style scoped>
.btn {
    @apply
    h-full p-3 cursor-pointer hover:text-white hover:bg-secondaryColor
    transition-colors duration-300
}
</style>
