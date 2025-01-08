import { ref } from "vue";

export const error = ref <boolean> (false);
export const errorMsg = ref <string> ('');

export function showError(val: string) {
    errorMsg.value = val;
    error.value = true;
    setTimeout(() => {
        error.value = false;
    }, 5000)
}
