import axios from "axios";
import queryString from "query-string";

const ApiService = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://dummyjson.com",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

ApiService.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

ApiService.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default ApiService;
