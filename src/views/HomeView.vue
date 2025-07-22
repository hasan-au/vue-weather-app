<template>
    <Header
    @search-form="handleSearchForm"
    @current-location="getCurrentWeatherData"
    ></Header>
    <Loader :loading="loading"></Loader>

    <div id="errorMessage" class="container" v-if="errorMessage">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8">
                <div class="alert alert-danger" role="alert">
                    <i class="bi bi-exclamation-triangle me-2"></i>
                    <span id="errorText">{{ errorMessage }}</span>
                </div>
            </div>
        </div>
    </div>

    <main id="weatherContent" class="container py-4" v-if="weatherDataResults && !loading">
        <WeatherCard
            :cardWeather="weatherCard"
        ></WeatherCard>

        <HourlyForecast 
        :hourlyData="hourlyData"
        @hour-selected="handleHourSelected"
        :selectedIndex="selectedIndex"
        ></HourlyForecast>
        <DaysForecast 
        :dailyData="dailyData"
        ></DaysForecast>
        <AdditionalWeatherDetails 
        :currentDetails="weatherCard"
        :sunrise_set="sunrise_set"
        ></AdditionalWeatherDetails>

    </main>
</template>
<script setup>
import AdditionalWeatherDetails from '@/components/AdditionalWeatherDetails.vue';
import DaysForecast from '@/components/DaysForecast.vue';
import HourlyForecast from '@/components/HourlyForecast.vue';
import WeatherCard from '@/components/WeatherCard.vue';
import Header from '@/components/Header.vue'
import Loader from '@/components/Loader.vue';

import { ref, onMounted, provide } from 'vue';
import { useWeather } from '@/composables/useWeather';
import { useLocationStore } from '@/stores/location';
import { useLocation } from '@/composables/useLocation';

const useWeatherInstance = useWeather();
const locationStore = useLocationStore();
const useLocationInstace = useLocation();


const selectedIndex = ref(0);
const loading = ref(false);
const errorMessage = ref('');
const weatherDataResults = ref(null);
const weatherCard = ref(null);
const dailyData = ref(null);
const hourlyData = ref(null);
const sunrise_set = ref({
    sunrise: null,
    sunset: null,
});


async function getCurrentWeatherData() {
    try{
                
        loading.value = true;

        if (!locationStore.lat || !locationStore.lon) {
            await locationStore.fetchCurrentLocation();
        }
        
        await new Promise(resolve => setTimeout(resolve, 5000));
        await useWeatherInstance.fetchCurrentWeather(locationStore.lat,locationStore.lon);
        
        weatherDataResults.value = useWeatherInstance.weatherData.value;
        locationStore.time_zone = weatherDataResults.value.timezone;
        console.log(locationStore.time_offset);
        
        weatherCard.value = weatherDataResults.value.current;
        dailyData.value = weatherDataResults.value.daily;
        hourlyData.value = weatherDataResults.value.hourly;
        sunrise_set.value.sunrise = weatherDataResults.value.current.sunrise;
        sunrise_set.value.sunset = weatherDataResults.value.current.sunset;



        loading.value = false;
        
    }catch(error){
        loading.value = false;
        errorMessage.value = error.message || 'Something went wrong';
        console.log("HomeViewError :"+error);
    }

}


async function handleHourSelected(payload) {
    
    try{
        loading.value = true
        selectedIndex.value = payload.index;

        await useWeatherInstance.fetchWeatherByHour(payload.hour);
        
        weatherCard.value = useWeatherInstance.weatherData.value.data[0];
        console.log(weatherCard.value);
        
        loading.value = false;
    }catch(error){
        loading.value = false;
        errorMessage.value = error.message || 'Something went wrong';
        console.log("HomeViewError :"+error);
    }
}

async function handleSearchForm(payload) {
    try{
        loading.value = true
        
        await useLocationInstace.getLatLonByCityName(payload.searchValue);
        
        locationStore.lat = useLocationInstace.location.value.lat;
        locationStore.lon = useLocationInstace.location.value.lon;
        console.log(locationStore.lat,locationStore.lon);
        
        await getCurrentWeatherData();
        loading.value = false;

    }catch(error){
        loading.value = false
        errorMessage.value = error.message || 'Something went wrong';
        console.log("HomeViewError :"+error);
    }
    
}

onMounted(async() => {
  await getCurrentWeatherData();
});

</script>