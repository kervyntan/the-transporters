import axios from "axios";

export function useAxios() {
  const axiosInstance = axios.create({
    baseURL: "https://transporters-server.onrender.com/",
    timeout: 10000,
  });

  return axiosInstance;
}
