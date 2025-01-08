import { ref } from "vue";

export const loadingScreen = ref <boolean> (false);

export function showLoadingScreen() {
    loadingScreen.value = true;
}

export function hideLoadingScreen() {
    loadingScreen.value = false;
}