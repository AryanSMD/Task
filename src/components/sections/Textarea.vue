<script setup lang="ts">
import { useStore } from '@/stores/store';

const newForm = useStore().newForm;
const props = defineProps<{
    sectionIndex: number
}>()
</script>


<template>
    <div class="col col-span-5">
        <textarea placeholder="پاسخ شما ..." />
    </div>
</template>


<style scoped></style>