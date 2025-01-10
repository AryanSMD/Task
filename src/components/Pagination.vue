<script setup lang="ts">
import { useStore } from '@/stores/store';
import { computed, onBeforeMount, ref, watch } from 'vue';

const props = defineProps<{
    func: Function
}>()
const store = useStore();
const currentPage = ref <number> (1);


const total = computed(() => 
    Math.ceil(store.getTotalFroms / store.getDefaultPerPage)
)

const isFirstPage = computed(() => 
    currentPage.value <= 1
)

const isLastPage = computed(() => 
    currentPage.value >= total.value
)

async function next() {
    currentPage.value++;
    await getNewPage();
}

async function previous() {
    currentPage.value--;
    await getNewPage();
}

async function getNewPage() {
    await props.func(currentPage.value, store.getDefaultPerPage);
}

onBeforeMount(async () => {
    await getNewPage();
})

watch(
    () => currentPage.value, (newVal) => {
        newVal <= 1 && (currentPage.value = 1);
        newVal >= total.value && (currentPage.value = total.value);
    }
)
</script>


<template>
    <div class="w-full h-10 flex justify-center items-center">
        <div class="w-1/5 h-full flex items-center justify-between">
            <button class="btn" @click="next" :disabled="isLastPage">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-full aspect-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
            <div class="w-1/3 h-full flex justify-center items-center gap-3">
                <div>{{ total }}</div>
                <div>از</div>
                <input 
                    type="number" 
                    min="1"
                    :max="total"
                    class="w-10 h-10 text-[1.2rem] text-center border-slate-300"
                    v-model="currentPage"
                    @change="getNewPage"
                >
            </div>
            <button class="btn" @click="previous" :disabled="isFirstPage">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-full aspect-square" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
            </button>
        </div>
    </div>
</template>


<style scoped>
.btn {
    @apply
    h-full aspect-square p-3 border-[1px] border-slate-300 rounded-[15px] transition-colors duration-300
    hover:bg-primaryColor hover:text-white text-primaryColor disabled:!bg-bgColor disabled:!text-textColor
}
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>