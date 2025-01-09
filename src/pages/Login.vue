<script setup lang="ts">
import { validation } from '@/composables/validations';
import { loginAPI } from '@/composables/api';
import { Form, Field } from 'vee-validate';
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
    if (req?.status === 200) {
        router.push({ name: 'forms' });
    }
}

onMounted(() => {
    localStorage.clear();
})
</script>


<template>
    <div class="w-full h-screen flex justify-center items-center">
        <div class="w-1/4 bg-white rounded-[10px] shadow-md px-8 py-10">
            <div class="w-full font-bold text-primaryColor text-[2rem] mb-3">
                خوش آمدید
            </div>
            <div class="w-full text-center mb-8 font-medium">
                برای ورود، ایمیل و رمز عبور خود را وارد کنید
            </div>
            <Form 
                @submit="login" 
                :validation-schema="validation.login"
                v-slot="{ submitCount, errors }"
            >
                <div class="mb-2">
                    <label>ایمیل شما</label>
                    <div class="email-input" :class="errors.email && submitCount > 0 && 'err'">
                        <Field
                            name="email" 
                            type="email"
                            placeholder="admin@gmail.com"
                            v-model="userInfo.email"
                        />
                    </div>
                    <div class="label-err" v-if="submitCount > 0">{{ errors.email }}</div>
                </div>
                <div class="mb-6">
                    <label>رمز عبور</label>
                    <div class="password-input" :class="errors.password && submitCount > 0 && 'err'">
                        <Field
                            name="password" 
                            type="password"
                            placeholder="رمز عبور" 
                            v-model="userInfo.password"
                        />
                    </div>
                    <div class="label-err" v-if="submitCount > 0">{{ errors.password }}</div>
                </div>
                <div class="w-full flex justify-center items-center">
                    <button 
                        class="w-full bg-secondaryColor p-2 rounded-[12px] cursor-pointer transition-colors 
                            duration-300 text-white hover:bg-primaryColor font-medium"
                    >
                        ورود
                    </button>
                </div>
            </Form>            
        </div>
    </div>
</template>


<style scoped>
input {
    @apply
    w-full h-full border-none rounded-none
}

.email-input,
.password-input {
    @apply
    w-full h-[45px] pr-[40px] border-[1px] rounded-[12px] transition-colors duration-300 
    overflow-hidden focus-within:border-primaryColor
}

.email-input {
    background: url('../assets/svg/message.svg') 97% no-repeat;
    background-size: 25px;
}

.password-input {
    background: url('../assets/svg/lock.svg') 97% no-repeat;
    background-size: 25px;
}
</style>