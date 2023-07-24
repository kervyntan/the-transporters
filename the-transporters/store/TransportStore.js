import { useAxios } from "./AxiosConfig/AxiosConfig";

const properties = {
    serviceAlertsData : {},
    carparkData : {},
    platformCrowdData : {},
    forecastData : {}
}

const getServiceAlerts = async () => {
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

const getCarparkAvailability = async () => {
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

const getPlatformCrowd = async (trainLine = "CCL") => {
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

const getCrowdForecast = async (trainLine = "CCL") => {
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

export { properties, getServiceAlerts, getCarparkAvailability, getCrowdForecast, getPlatformCrowd };
