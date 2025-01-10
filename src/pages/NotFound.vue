<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="text-center font-medium text-primaryColor">
            <div class="text-[9rem] italic">404</div>
            <div class="text-[3rem] mb-8">صفحه مورد نظر پیدا نشد</div>
            <button 
                @click="$router.push('/')"
                class="p-4 bg-secondaryColor text-white rounded-lg transition-colors
                    duration-300 hover:bg-primaryColor"
            >
                بازگشت به صفحه اصلی
            </button>
        </div>
    </div>
</template>