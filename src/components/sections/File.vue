<script setup lang="ts">
const props = defineProps<{
    sectionIndex: number
}>()
</script>


<template>
    <div class="w-full h-[250px] bg-bgColor col-span-5 border-[1px] rounded-md flex items-center justify-center">
        <div class="flex flex-col gap-2 items-center">
            <input type="file" ref="file" accept=".pdf, .jpg, .png">
            <button 
                class="w-[100px] h-10 bg-white rounded-full shadow-md font-medium
                    transition-all duration-300 hover:bg-secondaryColor hover:text-white"
                @click="$refs.file.click()"
            >
                افزودن فایل
            </button>
            فرمت های مورد قبول PDF, PNG, JPG
        </div>
    </div>
</template>


<style scoped></style>