import axios, { AxiosError } from "axios";
import type { AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "base_url",
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    // Type-safe assignment
    (config.headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  console.log("📤 Request:", {
    url: config.url,
    method: config.method,
    headers: config.headers,
    data: config.data,
  });

  return config;
});

let isRefreshing = false;

api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log successful response
    console.log("Response:", {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    // Log failed response
    if (error.response) {
      console.warn("Error Response:", {
        url: originalRequest?.url,
        status: error.response.status,
        data: error.response.data,
      });
    } else {
      console.warn("Network Error:", error.message);
    }

    // Handle 401 Unauthorized with refresh token
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshing
    ) {
      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refresh = localStorage.getItem("refresh");
        const response = await axios.post(
          "token_refresh_url",
          { refresh }
        );

        const newToken = response.data.access;
        localStorage.setItem("token", newToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }
        isRefreshing = false;

        console.log("Retrying request after token refresh");
        return api(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        console.error("Token refresh failed:", refreshError);
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
