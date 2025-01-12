import { ref } from "vue";

export const errorAlertMsg = ref <string|null> (null);

export function showError(val: string) {
    errorAlertMsg.value = val;
    setTimeout(() => {
        errorAlertMsg.value = null;
    }, 5000)
}
