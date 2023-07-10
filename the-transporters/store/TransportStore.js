import { useAxios } from "./AxiosConfig/AxiosConfig";

const serviceAlerts = () => {
  const axios = useAxios();

  return axios.get("/servicealerts");
};

const carparkAvailability = async () => {
  const axios = useAxios();

  return axios.get("/carparkavailability");
};

const platformCrowd = async () => {
  const axios = useAxios();

  return axios.get("/platformcrowd");
};

const crowdForecast = async () => {
  const axios = useAxios();

  return axios.get("/crowdforecast");
};

export { serviceAlerts, carparkAvailability, crowdForecast, platformCrowd };
