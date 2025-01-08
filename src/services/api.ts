import axios from "axios";

let isRefreshing = false;
let refreshSubscribers = [];

function onTokenRefreshed(newToken) {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
}

function addRefreshSubscriber(callback) {
  refreshSubscribers.push(callback);
}

const api = axios.create({
  baseURL: import.meta.env.VITE_BaseURL,
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${ token }`;
    }

    return config;
  },

  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((newToken) => {
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

        isRefreshing = false;

        originalRequest.headers.Authorization = `Bearer ${ newToken }`;
        return api(originalRequest);
      } catch (Err) {
        isRefreshing = false;
        return Promise.reject(Err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;