<script setup lang="ts">
import { loginAPI } from '@/composables/api';
import type { AxiosResponse } from 'axios';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const router = useRouter();
const userInfo = ref <UserInfo> ({
    email: '',
    password: ''
})

async function login() {
    const req = await loginAPI(userInfo.value);
    if ((req as AxiosResponse).status === 200) {
        router.push({ name: 'FormsPage' });
    }
}

onMounted(() => {
    localStorage.clear();
})
</script>


<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="w-1/4 bg-white rounded-[10px] shadow-md px-8 py-10">
            <div class="w-full font-bold text-primaryColor text-[2rem] text-end mb-3">خوش آمدید</div>
            <div class="w-full text-center mb-8 font-medium">برای ورود، ایمیل و رمز عبور خود را وارد کنید</div>
            <label>ایمیل شما</label>
            <div class="mb-2">
                <input 
                    type="email"
                    placeholder="admin@gmail.com" 
                    v-model="userInfo.email"
                >
            </div>
            <label>رمز عبور</label>
            <div class="mb-6">
                <input 
                    type="password" 
                    class="placeholder:text-end" 
                    placeholder="رمز عبور" 
                    v-model="userInfo.password"
                >
            </div>
            <div class="w-full flex justify-center items-center">
                <button 
                    @click="login()"
                    class="w-full bg-secondaryColor p-2 rounded-[12px] cursor-pointer transition-colors 
                        duration-300 text-white hover:bg-primaryColor font-medium"
                >
                    ورود
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped>
input {
    @apply
    pr-[50px] text-start
}
input[type=email] {
    background: url('../assets/svg/message.svg') 97% no-repeat;
    background-size: 25px;
}
input[type=password] {
    background: url('../assets/svg/lock.svg') 97% no-repeat;
    background-size: 25px;
}
</style>