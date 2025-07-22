import {fetchWeather, fetchWeatherByTime, fetchWeatherByDayDate } from '@/services/weatherService';
import { ref } from 'vue';
import { useLocationStore } from '@/stores/location';




export function useWeather() {
    // const loading = ref(false);
    const error = ref(null);
    const weatherData = ref(null);
    const useLocation = useLocationStore();


    const fetchCurrentWeather = async (lat,lan) => {
        try {

            const response = await fetchWeather(lat,lan);
            weatherData.value = response.data;

        }catch($err){
            throw $err;
        }
        finally{
        }
    }


    const fetchWeatherByHour = async (time) => {
        try{            
            const response = await fetchWeatherByTime(useLocation.lat,useLocation.lon,time);
            
            weatherData.value = response.data;

        }catch(err){
            throw err;
        }
        finally{
        } 

    }

    const fetchWeatherByDay = async (dayDate) => {
        try{
            const response = await fetchWeatherByDayDate(useLocation.lat,useLocation.lon,dayDate);
            weatherData.value = response.data;
        }catch(err){
            throw err;
        }
        finally{
        }
    }





    return{
        fetchCurrentWeather,
        fetchWeatherByHour,
        fetchWeatherByDay,
        // loading,
        error,
        weatherData,
    }

}