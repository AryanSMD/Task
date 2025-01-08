import axios, { type AxiosInstance } from "axios";

let isRefreshing: boolean = false;
let refreshSubscribers: Array<(newToken: string) => void> = [];

function onTokenRefreshed(newToken: string) {
  refreshSubscribers.forEach(callback => callback(newToken));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback: (newToken: string) => void) {
  refreshSubscribers.push(callback);
}

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BaseURL,
})

api.interceptors.request.use(
  config => {
    const token: string|null = localStorage.getItem('accessToken');

    if (token) {
      config.headers.Authorization = `Bearer ${ token }`;
    }

    return config;

  }, 
  error => {
    return Promise.reject(error);
  }
)

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 403 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((newToken: string) => {
            originalRequest.headers.Authorization = `Bearer ${ newToken }`;
            resolve(api(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post("", {
          token: localStorage.getItem("refreshToken"),
        });

        const newToken = response.data.accessToken;
        localStorage.setItem("accessToken", newToken);

        onTokenRefreshed(newToken);


        originalRequest.headers.Authorization = `Bearer ${ newToken }`;
        return api(originalRequest);

      } 
      catch (Err) {
        return Promise.reject(Err);

      } 
      finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;