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

const platformCrowd = (trainLine = "CCL") => {
  const axios = useAxios();

  axios.get(`/platformcrowd?TrainLine=${trainLine}`)
  .then(res => { 
    if (res.status == 200) {
        properties.platformCrowdData = res.data
    }
  });
};

const crowdForecast = (trainLine = "CCL") => {
  const axios = useAxios();

  axios.get(`/crowdforecast?TrainLine=${trainLine}`)
  .then(res => { 
    if (res.status == 200) {
        properties.serviceAlertsData = res.data
    }
  });
};

export { properties, serviceAlerts, carparkAvailability, crowdForecast, platformCrowd };
