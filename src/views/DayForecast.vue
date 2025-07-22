<template>
    <Loader :loading="loading"></Loader>
    <div v-if="!loading && dayForecast" class="container py-4">
        <Header></Header>
        
        <WeatherOverview
        :weather_overview="weather_overview"
        :errorMessage="errorMessage"
        ></WeatherOverview>

        <FourTimePeriod></FourTimePeriod>

        <WeatherDetails></WeatherDetails>
    </div>
</template>

<script setup>
import Header from '@/components/DayForecast/Header.vue';
import Loader from '@/components/Loader.vue';
import WeatherOverview from '@/components/DayForecast/WeatherOverview.vue';
import { useRoute } from 'vue-router';
import { useWeather } from '@/composables/useWeather';
import { fetchWeatherOverviewOfDate } from '@/services/weatherService';
import { ref, onMounted, provide } from 'vue';
import { useLocationStore } from '@/stores/location';
import FourTimePeriod from '@/components/DayForecast/FourTimePeriod.vue';
import WeatherDetails from '@/components/DayForecast/WeatherDetails.vue';

const route = useRoute();
const useWeatherInstance = useWeather();
const locationStore = useLocationStore();
const date = route.params?.date;

const dayForecast = ref(null);
const weather_overview = ref('');
const loading = ref(false);
const errorMessage = ref('');



provide('dayForecast', dayForecast)
onMounted(async() => {
    await getDayForecast();
});

async function getDayForecast() {
    errorMessage.value = '';
    try{
        loading.value = true;
        await new Promise(resolve => setTimeout(resolve, 10000));
        await useWeatherInstance.fetchWeatherByDay(date);
        dayForecast.value = useWeatherInstance.weatherData.value;
        console.log(dayForecast.value);
        
        const response = await fetchWeatherOverviewOfDate(locationStore.lat,locationStore.lon,date);
        console.log(response);
        weather_overview.value = response.data.weather_overview;
        
        loading.value = false;

    }catch(error){
        console.log("getDayForecast"+error)
        loading.value = false;
        errorMessage.value = error.message || 'Something went wrong';
    }
        
    
}

</script>
<style scoped>
        /* Modern Day Forecast Enhancements */
.badge.bg-light.bg-opacity-25 {
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.weather-detail-card .badge {
    font-size: 0.7rem;
    padding: 0.35rem 0.65rem;
    border-radius: 50rem;
}

.card-header.bg-transparent {
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.border-end {
    border-color: rgba(255, 255, 255, 0.1) !important;
}

/* Enhanced responsive spacing */
@media (max-width: 576px) {
    .weather-detail-card .card-body {
        padding: 1.5rem 1rem;
    }
    
    .display-5 {
        font-size: 1.8rem;
    }
}

</style>