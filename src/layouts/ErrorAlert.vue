<script setup lang="ts">
import { errorAlertMsg } from '@/composables/ErrorAlert';
</script>


<template>
    <div 
        v-if="errorAlertMsg"
        class="fixed top-0 left-0 w-full z-[101] bg-[#FF0000] text-white flex justify-center
            items-center font-medium text-[1.5rem] py-1"
    >
        {{ errorAlertMsg }}
    </div>
</template>