import { useAxios } from "./AxiosConfig/AxiosConfig";

const properties = {
    serviceAlertsData : {},
    carparkData : {},
    platformCrowdData : {},
    forecastData : {}
}

const serviceAlerts = async () => {
  const axios = useAxios();

  return await axios.get("/servicealerts")
  .then(res => { 
    if (res.status == 200) {
        properties.serviceAlertsData = res.data
    }
  })
  .catch(res => {
    console.log(res.status)
  });
};

const carparkAvailability = async () => {
  const axios = useAxios();

  return await axios.get("/carparkavailability")
  .then(res => { 
    if (res.status == 200) {
        properties.carparkData = res.data
    }
  })
  .catch(res => {
    console.log(res.status)
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
  })
  .catch(res => {
    console.log(res.status)
  });
};

export { properties, serviceAlerts, carparkAvailability, crowdForecast, platformCrowd };
