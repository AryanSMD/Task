<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { formTypes } from '@/constants/formInfo';
import Section from '@/components/Section.vue';
import AddSectionBtn from '@/components/buttons/AddSectionBtn.vue';
import { useStore } from '@/stores/store';
import { createFormAPI, removeFormAPI, updateFormAPI } from '@/composables/api';


const route = useRoute();
const router = useRouter();
const store = useStore();
const editMode = ref <boolean> (false);

function addNewSection() {
    store.newForm.sections.push({
        title: '',
        type: 'text',
        required: false,
        properties: []
    })
}

async function save() {
    let response;
    if (editMode.value) {
        response = await updateFormAPI(store.newForm);
    } else {
        response = await createFormAPI(store.newForm);
    }
    response?.status === 200 && router.push({ name: 'forms' });
}

async function removeForm() {
    const response = await removeFormAPI(store.newForm.form_id);
    response?.status === 200 && router.push({ name: 'forms' });
}

onBeforeMount(async () => {
    store.resetNewForm();
    const formId = route.params.id;
    if (formId !== 'add') {
        editMode.value = true;
        !store.getForms.length &&
            await router.push({ name: 'forms' });   
        store.newForm = store.getForms.filter(e => e.form_id === formId)[0];
    }
})
</script>


<template>
    <div class="w-full flex flex-col items-center gap-4 py-5 min-[1700px]:py-10">
        <div class="header">
            <div class="title">
                {{ editMode ? 'ویرایش فرم' : 'ساخت فرم' }}
            </div>
        </div>
        <div class="card flex items-center justify-end gap-4">
            <button class="del-btn" v-if="editMode" @click="removeForm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
                حذف فرم
            </button>
            <button class="save-btn" @click="save">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                </svg>
                ذخیره فرم
            </button>
        </div>
        <div class="card">
            <div class="form">
                <div>
                    <label>نام فرم</label>
                    <input 
                        type="text" 
                        placeholder="یک عنوان برای این فرم"
                        v-model="store.newForm.form_title"
                    >
                    <label>توضیحات فرم</label>
                    <textarea 
                        placeholder="توضیحات در مورد این فرم ..."
                        v-model="store.newForm.description"
                    />
                </div>
                <div>
                    <label>دسته بندی</label>
                    <select :disabled="editMode" v-model="store.newForm.form_type">
                        <option 
                            v-for="type in formTypes"
                            :key="type.key"
                            :value="type.key"
                        >
                            {{ type.value }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
        <div class="card" v-if="store.newForm.form_type === 'public'">
            <div class="form">
                <div>
                    <label>نام</label>
                    <input type="text" value="آرین" disabled>
                    <label>ایمیل</label>
                    <input type="email" value="aryansmd79@gmail.com" disabled>
                </div>
                <div>
                    <label>نام خانوادگی</label>
                    <input type="text" value="صمدی" disabled>
                </div>
            </div>
        </div>
        <Section
            v-for="section, index in store.newForm.sections"
            :key="section.type"
            :sectionIndex="index"
        />
        <AddSectionBtn @click="addNewSection" />
    </div>
</template>


<style scoped></style>