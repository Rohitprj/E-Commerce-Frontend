import axios from "axios";

export const BASE_URL = "http://localhost:3009";
// export const BASE_URL = "https://backend.rohitkumar.site";

const axiosInstance = axios.create({
  // baseURL: "https://backend.rohitkumar.site",
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
