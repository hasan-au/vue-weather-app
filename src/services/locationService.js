// services/locationService.js
import { geocodingApi } from '@/plugins/axiosPlugin';

export const getCityName = async(lat, lon) => {
  return await geocodingApi.get(`/reverse`, 
    { 
        params: { 
            lat: lat, 
            lon: lon,
            limit: 1,
        } 
    });
}

export const getLatLonOfCity = async(city) => {
    return await geocodingApi.get(`/direct`, 
    { 
        params: { 
            q: city,
            limit: 1,
        } 
    });
}

