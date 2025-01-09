<script setup lang="ts">
import { ref } from 'vue';
import { sectionTypes } from '@/constant/formInfo';
import MoveBtn from './buttons/MoveBtn.vue';
import DuplicateBtn from './buttons/DuplicateBtn.vue';
import DeleteBtn from './buttons/DeleteBtn.vue';
import SwitchBtn from './buttons/SwitchBtn.vue';

const sectionTitle = ref <string> ();
const sectionType = ref <SectionTypes> ('text');
</script>


<template>
    <div class="card">
        <div class="form">
            <div>
                <input 
                    type="text" 
                    placeholder="عنوان پرسش"
                    v-model="sectionTitle"
                >
            </div>
            <div>
                <select v-model="sectionType">
                    <option 
                        v-for="type in sectionTypes"
                        :key="type.key"
                        :value="type.key"
                    >
                        {{ type.value }}
                    </option>
                </select>
            </div>
            <div class="w-full col-span-2 col-start-4 flex items-center justify-end gap-5">
                <SwitchBtn 
                    :required="false"
                    :changeRequired="() => {}"
                />
                <DeleteBtn />
                <DuplicateBtn />
                <MoveBtn 
                    :canMoveDown="false"
                    :moveDown="() => { console.log('up') }"
                    :canMoveUp="true"
                    :moveUp="() => { console.log('up') }"
                />
            </div>
        </div>
    </div>
</template>


<style scoped></style>