import axios from 'axios';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Required for cookie-based JWT auth
});

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can modify request config here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle authentication errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Try to refresh the token
        await apiClient.post('/api/auth/refresh');
        // Retry the original request
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure
        console.error('Token refresh failed:', refreshError);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export { apiClient };
