<script setup lang="ts">
import FormCard from '@/components/FormCard.vue';
import Pagination from '@/components/Pagination.vue';
import { useStore } from '@/stores/store';
import { onBeforeMount } from 'vue';

const store = useStore();

onBeforeMount(async () => {
    await store.getAllForms(1, 9);
})
</script>


<template>
    <div class="w-full h-screen flex flex-col items-center gap-4 py-10">
        <div class="header">
            <div class="title">فرم ها</div>
            <button 
                class="save-btn"
                @click="$router.push({ name: 'addForm', params: { id: 'add' } })"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                ایجاد فرم
            </button>
        </div>
        <div class="card h-full flex flex-col justify-between">
            <div class="w-full h-full flex justify-center items-center">
                <div 
                    v-if="!store.getForms.length"
                    class="flex items-center justify-center gap-8"
                >
                    هیچ فرمی تا به حال ساخته نشده است!
                    <button 
                        class="text-blu text-blue-600 font-medium"
                        @click="$router.push({ name: 'addForm', params: { id: 'add' } })"
                    >
                        ایجاد فرم
                    </button>
                </div>
                <div 
                    v-else
                    class="w-full h-full grid grid-cols-3 grid-rows-3 gap-2"
                >
                    <FormCard
                        v-for="form in store.getForms"
                        :key="form.form_id"
                        :form="form"
                    />
                </div>
            </div>
            <Pagination />
        </div>
    </div>
</template>


<style scoped></style>