import axios from "axios";
import { useUserStore } from "@/store/userStore";

const apiClient = axios.create({
  baseURL: "http://localhost:3001", // آدرس Mock API
});

// Interceptor برای اضافه کردن توکن
apiClient.interceptors.request.use(
  (config) => {
    const token = useUserStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
