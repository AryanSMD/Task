<script setup lang="ts">
import { useStore } from '@/stores/store';

const newForm = useStore().newForm;
const props = defineProps<{
    sectionIndex: number
}>()

function addItem() {
    newForm.sections[props.sectionIndex].properties.push('گزینه');
}
</script>


<template>
    <div>
        <div 
            v-for="item, index in newForm.sections[props.sectionIndex].properties"
            :key="item"
            class="flex items-center justify-between w-1/2"
        >
            <div class="text-primaryColor font-medium">{{ `${ index + 1 }- گزینه ${ index + 1 }` }}</div>
            <button
                class="mb-2 bg-textColor text-white rounded-full p-[2px]"
                @click="newForm.sections[props.sectionIndex].properties?.splice(index, 1)"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 aspect-square" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
        </div>
        <button class="btn" @click="addItem()">افزودن گزینه جدید ...</button>
    </div>
</template>


<style scoped>
.btn {
    @apply
    cursor-pointer mt-4 relative flex items-center pr-[10px]
}
</style>