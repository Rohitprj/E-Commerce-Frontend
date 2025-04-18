import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend.rohitkumar.site",
  withCredentials: true,
});

export default axiosInstance;
