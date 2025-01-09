<script setup lang="ts">
const props = defineProps<{
    required: boolean,
    changeRequired: Function
}>()
</script>

<template>
    <div 
        class="h-full rounded-md overflow-hidden shadow-md flex items-center justify-between p-2
            border-[1px] gap-1 cursor-pointer"
        @click="props.changeRequired()"
    >
        <div 
            class="btn"
            :class="required && 'on'"
        >
            <div 
                class="circle"
                :class="required && 'on'"
            ></div>
        </div>
        <div>پاسخ الزامی</div>
    </div>
</template>

<style scoped>
.btn {
    @apply
    h-full w-[50px] rounded-full shadow-inner shadow-slate-400 relative flex 
    items-center p-1 bg-slate-100 transition-colors duration-300
}

.btn.on {
    @apply
    bg-[#d4846d] shadow-slate-600
}

.circle {
    background: url('../../assets/svg/cross.svg') 50% 50% no-repeat;
    background-size: 12px;
    @apply
    h-full aspect-square rounded-full bg-white transition-all duration-300
    shadow-sm shadow-slate-400
}

.circle.on {
    background: url('../../assets/svg/check.svg') 50% 50% no-repeat;
    background-size: 12px;
    @apply
    bg-white translate-x-[-24px]
}
</style>
