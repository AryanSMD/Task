<script setup lang="ts">
import Pagination from '@/components/Pagination.vue';
import { useStore } from '@/stores/store';

const store = useStore();
</script>


<template>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-4">
        <div class="w-full flex items-center justify-between">
            <div class="font-medium text-[2.5rem] text-primaryColor">فرم ها</div>
            <button class="p-3 bg-secondaryColor text-white font-medium rounded-[15px] flex
                items-center gap-1 transition-colors duration-300 hover:bg-primaryColor"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 aspect-square" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                ایجاد فرم
            </button>
        </div>
        <div class="w-full h-[80%] bg-white rounded-lg shadow-lg flex justify-center items-center">
            <div 
                v-if="!store.getForms.length"
                class="flex items-center justify-center gap-8"
            >
                هیچ فرمی تا به حال ساخته نشده است!
                <button 
                    class="text-blu text-blue-600 font-medium"
                    @click=""
                >
                    ایجاد فرم
                </button>
            </div>
            <Pagination />
        </div>
    </div>
</template>


<style scoped></style>