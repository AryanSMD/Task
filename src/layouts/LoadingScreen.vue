<script setup lang="ts">
import { loadingScreen } from '@/composables/LoadingScreen';
</script>


<template>
    <div 
        v-if="loadingScreen"
        class="fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-70 flex 
            justify-center items-center"
    >
        <div class="p-5 bg-bgColor flex justify-center items-center rounded-md">
            <div class="half-circle-spinner">
                <div class="circle circle-1"></div>
                <div class="circle circle-2"></div>
            </div>   
        </div>
    </div>
</template>


<style scoped>
.half-circle-spinner {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
}

.circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(60px / 10) solid transparent;
}

.circle.circle-1 {
    border-top-color: var(--primaryColor);
    animation: half-circle-spinner-animation 1s infinite;
}

.circle.circle-2 {
    border-bottom-color: var(--primaryColor);
    animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
    0% {
    transform: rotate(0deg);
    }
    100%{
    transform: rotate(360deg);
    }
}
</style>