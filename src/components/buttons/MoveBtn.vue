<script setup lang="ts">
const props = defineProps<{
    isLastIndex: boolean,
    moveUp: Function,
    isFirstIndex: boolean,
    moveDown: Function
}>()
</script>


<template>
    <div class="h-full flex items-center justify-between rounded-md overflow-hidden">
        <button class="btn" @click="props.moveUp()" :disabled="props.isFirstIndex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-full aspect-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
            </svg>
        </button>
        <button class="btn" @click="props.moveDown()" :disabled="props.isLastIndex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-full aspect-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
            </svg>
        </button>
    </div>
</template>


<style scoped>
.btn {
    @apply
    w-full h-full p-2 cursor-pointer hover:text-white hover:bg-secondaryColor 
    transition-colors duration-300 disabled:!bg-bgColor disabled:!text-textColor disabled:cursor-default
}
</style>
