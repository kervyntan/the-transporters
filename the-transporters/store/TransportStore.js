import { useAxios } from "./AxiosConfig/AxiosConfig";

const properties = {
    serviceAlertsData : {},
    carparkData : {},
    platformCrowdData : {},
    forecastData : {}
}

const serviceAlerts = () => {
  const axios = useAxios();

  axios.get("/servicealerts")
  .then(res => { 
    if (res.status == 200) {
        properties.serviceAlertsData = res.data
    }
  });
};

const carparkAvailability = () => {
  const axios = useAxios();

  return axios.get("/carparkavailability")
  .then(res => { 
    if (res.status == 200) {
        properties.carparkData = res.data
    }
  });
};

const platformCrowd = async (trainLine = "CCL") => {
  const axios = useAxios();

  return await axios.get(`/platformcrowd?TrainLine=${trainLine}`)
  .then(res => { 
    if (res.status == 200) {
        console.log(res.data)
        properties.platformCrowdData = res.data
    }
  })
  .catch(res => {
    console.log(res.status)
  });
};

const crowdForecast = async (trainLine = "CCL") => {
  const axios = useAxios();

  return await axios.get(`/crowdforecast?TrainLine=${trainLine}`)
  .then(res => { 
    if (res.status == 200) {
        properties.serviceAlertsData = res.data
    }
  });
};

export { properties, serviceAlerts, carparkAvailability, crowdForecast, platformCrowd };
