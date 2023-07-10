import axios from "axios";

export function useAxios() {
  const axiosInstance = axios.create({
    baseURL: "https://ill-gray-worm-hat.cyclic.app/",
    timeout: 10000,
  });

  return axiosInstance;
}
