import axios, { type AxiosInstance } from "axios";
import { showLoadingScreen, hideLoadingScreen } from "@/composables/LoadingScreen";
import { showError } from "@/composables/ErrorAlert";
import router from "@/router";

let isRefreshing: boolean = false;
let refreshSubscribers: Array<(newToken: string) => void> = [];

function onTokenRefreshed(newToken: string) {
  if (refreshSubscribers.length) {
    refreshSubscribers.forEach(callback => callback(newToken));
    refreshSubscribers = [];
  }
}

function addRefreshSubscriber(callback: (newToken: string) => void) {
  refreshSubscribers.push(callback);
}


const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BaseURL,
})

api.interceptors.request.use(
  config => {
    showLoadingScreen();
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${ token }`;
    }
    return config;

  }, 
  error => {
    hideLoadingScreen();
    return Promise.reject(error);
  }
)

api.interceptors.response.use(
  response => {
    hideLoadingScreen();
    return response
  },
  async error => {
    const originalRequest = error.config;
    if (error.status === 403 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(resolve => {
          addRefreshSubscriber((newToken: string) => {
            originalRequest.headers.Authorization = `Bearer ${ newToken }`;
            resolve(api(originalRequest));
          });
        });
      }
      originalRequest._retry = true;
      isRefreshing = true;
      try {
        const response = await axios.post(
          `${ import.meta.env.VITE_BaseURL }main/refresh?token=${ localStorage.getItem("refreshToken") }`
        );
        const newToken = response.data.data.access;
        localStorage.setItem("accessToken", newToken);
        onTokenRefreshed(newToken);
        originalRequest.headers.Authorization = `Bearer ${ newToken }`;
        return api(originalRequest);

      } 
      catch (err) {
        showError('جلسه شما به پایان رسید. مجددا وارد شوید');
        router.push('/');
        return Promise.reject(err);
      } 
      finally {
        hideLoadingScreen();
        isRefreshing = false;
      }
    }
    hideLoadingScreen();
    showError('یک خطای غیر منتظره رخ داد');
    return Promise.reject(error);
  }
);

export default api;