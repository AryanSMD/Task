import { ref } from "vue";

export const show = ref <boolean> (false);

export function showLoadingScreen() {
    show.value = true;
}

export function hideLoadingScreen() {
    show.value = false;
}