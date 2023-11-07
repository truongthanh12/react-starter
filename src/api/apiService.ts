import axios from "axios";
import queryString from "query-string";

const ApiService = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3000",
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
