<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    form: Form
}>()

const solarDate = computed(() => {
    const date = new Intl.DateTimeFormat("fa", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format((props.form as any).createdAt);
    return date;
})
</script>


<template>
    <div class="w-full h-full flex justify-center items-center">
        <div class="w-full h-full border-[1px] rounded-md flex flex-col justify-between p-2 shadow-md">
            <div 
                class="w-full h-[60%] bg-slate-200 rounded-md flex justify-center items-center
                    text-[2rem] font-bold text-primaryColor"
            >
                {{ props.form.form_title }}
            </div>
            <div class="font-medium">{{ solarDate }}</div>
            <button 
                class="w-full h-10 border-[1px] rounded-md text-primaryColor flex gap-2
                    justify-center items-center transition-colors duration-300
                    hover:text-white hover:bg-secondaryColor font-medium py-2"
                @click="$router.push({ name: 'addForm', params: { id: props.form.form_id } })"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-full aspect-square mt-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                </svg>
                مشاهده فرم
            </button>
        </div>
    </div>
</template>