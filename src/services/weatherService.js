import { geocodingApi, weatherApi } from "@/plugins/axiosPlugin";

export const fetchWeather = async (lat, lon) =>{
    return await weatherApi.get('', {
    params: { 
        lat: lat,
        lon: lon,
        exclude: 'minutely',
        units: 'metric' },
  });
}

export const fetchWeatherByTime = async (lat, lon, time) =>{
  return await weatherApi.get('/timemachine', {
    params: { 
        lat: lat,
        lon: lon,
        dt: time,
        units: 'metric' },
    });
}


export const fetchWeatherByDayDate = async (lat, lon, dayDate) =>{
  return await weatherApi.get('/day_summary', {
    params: { 
        lat: lat,
        lon: lon,
        date: dayDate,
        units: 'metric'
    }
    });
}

export const fetchWeatherOverviewOfDate = async (lat, lon, dayDate) =>{
  return await weatherApi.get('/overview', {
        params: { 
        lat: lat,
        lon: lon,
        date: dayDate,
        units: 'metric'
    }
    });
}

// export const getLocationByCityName = async (city) =>{
//   return geocodingApi.get('', {
//     params: {}
//   });

// }
