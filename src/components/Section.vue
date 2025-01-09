<script setup lang="ts">
import { useStore } from '@/stores/store';
import { sectionTypes } from '@/constant/formInfo';
import MoveBtn from './buttons/MoveBtn.vue';
import DuplicateBtn from './buttons/DuplicateBtn.vue';
import DeleteBtn from './buttons/DeleteBtn.vue';
import SwitchBtn from './buttons/SwitchBtn.vue';
import Text from './sections/Text.vue';
import Textarea from './sections/Textarea.vue';
import Radio from './sections/Radio.vue';
import Checkbox from './sections/Checkbox.vue';
import Dropdown from './sections/Dropdown.vue';
import File from './sections/File.vue';
import { computed } from 'vue';


const props = defineProps<{
    sectionIndex: number
}>()
const newForm = useStore().newForm;

const isFirstIndex = computed(() => props.sectionIndex === 0);

const isLastIndex = computed(() => props.sectionIndex === (newForm.sections.length - 1));

const currentSection = computed(() => {
    switch (newForm.sections[props.sectionIndex].type) {
        case 'text' :
            return Text
        case 'textarea' :
            return Textarea
        case 'radio' :
            return Radio
        case 'checkbox' :
            return Checkbox
        case 'dropdown' :
            return Dropdown
        case 'file' :
            return File
    }
})


function moveUp() {
    const newInd = props.sectionIndex - 1;
    swaper(newForm.sections, newInd, props.sectionIndex)
}

function moveDown() {
    const newInd = props.sectionIndex + 1;
    swaper(newForm.sections, newInd, props.sectionIndex)
}

function swaper(array: Sections[], newInd: number, oldInd: number) {
    array[newInd] = array.splice(oldInd, 1, array[newInd])[0];
}

function changeRequired() {
    const required = newForm.sections[props.sectionIndex].required;
    newForm.sections[props.sectionIndex].required = !required;
}

function duplicate() {
    const section = newForm.sections[props.sectionIndex];
    newForm.sections.push(section);
}
</script>


<template>
    <div class="card">
        <div class="form mb-8">
            <div>
                <input 
                    type="text" 
                    placeholder="عنوان پرسش"
                    v-model="newForm.sections[props.sectionIndex].title"
                >
            </div>
            <div>
                <select v-model="newForm.sections[props.sectionIndex].type">
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
                    :required="newForm.sections[props.sectionIndex].required"
                    :changeRequired="changeRequired"
                />
                <DeleteBtn @click="newForm.sections.splice(props.sectionIndex, 1)" />
                <DuplicateBtn @click="duplicate" />
                <MoveBtn 
                    :isLastIndex="isLastIndex"
                    :moveDown="moveDown"
                    :isFirstIndex="isFirstIndex"
                    :moveUp="moveUp"
                />
            </div>
        </div>
        <div class="w-full grid grid-cols-5 gap-2">
            <component 
                :is="currentSection" 
                :sectionIndex="props.sectionIndex"
            />
        </div>
    </div>
</template>


<style scoped></style>