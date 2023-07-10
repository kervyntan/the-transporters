import { useAxios } from "./AxiosConfig/AxiosConfig";

const serviceAlerts = () => {
  const axios = useAxios();

  return axios.get("/servicealerts");
};

const carparkAvailability = async () => {
  const axios = useAxios();

  const response = await axios.get("/servicealerts");

  return response.data;
};

const platformCrowd = async () => {
  const axios = useAxios();

  const response = await axios.get("/servicealerts");

  return response.data;
};

const crowdForecast = async () => {
  const axios = useAxios();

  const response = await axios.get("/servicealerts");

  return response.data;
};

export { serviceAlerts, carparkAvailability, crowdForecast, platformCrowd };
