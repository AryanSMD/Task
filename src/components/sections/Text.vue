<script setup lang="ts">
import { useStore } from '@/stores/store';

const newForm = useStore().newForm;
const props = defineProps<{
    sectionIndex: number
}>()
</script>


<template>
    <div class="cols-span-1">
        <input type="text" placeholder="پاسخ شما ...">
    </div>
</template>


<style scoped></style>