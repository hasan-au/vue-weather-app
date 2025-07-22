<template>
<div class="row justify-content-center mb-4">
    <div class="col-12 col-lg-8">
        <div class="card shadow-lg border-0 current-weather-card">
            <div class="card-body p-4">
                <div class="row align-items-center">
                    <div class="col-12 col-md-6 text-center text-md-start">
                        <h2 class="mb-1" id="cityName">{{ cardLocationData?.name ? `${cardLocationData.name}, ${cardLocationData.country}` : 'Loading Location...' }}</h2>
                        <p class="text-muted mb-3" id="currentDate">{{ formatters.formatFullDateTime(props.cardWeather.dt) }}</p>
                        <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                            <i id="currentIcon" class="weather-icon-large me-3" :class="formatters.getBootstrapIcon(props.cardWeather.weather[0].icon)"></i>
                            <div>
                                <div class="display-3 fw-bold text-primary mb-0" id="currentTemp">{{Math.floor(props.cardWeather.temp)}}°C</div>
                                <p class="mb-0 text-muted" id="weatherDesc">{{ props.cardWeather.weather.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="row text-center mt-3 mt-md-0">
                            <div class="col-6">
                                <div class="weather-detail-item">
                                    <i class="bi bi-thermometer-half text-info"></i>
                                    <p class="mb-1 text-muted small">Feels like</p>
                                    <p class="fw-bold mb-0" id="feelsLike">{{props.cardWeather.feels_like}}°C</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="weather-detail-item">
                                    <i class="bi bi-droplet text-info"></i>
                                    <p class="mb-1 text-muted small">Humidity</p>
                                    <p class="fw-bold mb-0" id="humidity">{{props.cardWeather.humidity}}%</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="weather-detail-item">
                                    <i class="bi bi-speedometer text-info"></i>
                                    <p class="mb-1 text-muted small">Pressure</p>
                                    <p class="fw-bold mb-0" id="pressure">{{props.cardWeather.pressure}} hPa</p>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="weather-detail-item">
                                    <i class="bi bi-wind text-info"></i>
                                    <p class="mb-1 text-muted small">Wind Speed</p>
                                    <p class="fw-bold mb-0" id="windSpeed">{{props.cardWeather.wind_speed}} m/s</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { defineProps, ref, watch, onMounted, inject } from 'vue';
import { useLocation } from '@/composables/useLocation';
import { useLocationStore } from '@/stores/location';
import formatters from '@/utils/formatter';


const props = defineProps({
  cardWeather: Object,
  location: Object,
});

const useLocationStoreInstance = useLocationStore();
const useLocationInstace = useLocation();
const cardLocationData = ref({});


async function getCityNameByLocation(lat, lon) {
  try {
    await useLocationInstace.getCityNameByLatLon(lat, lon);
    cardLocationData.value = useLocationInstace.location.value;
    console.log(cardLocationData.value);
    
  } catch (error) {
    console.error("WeatherCard Error:"+error);
  }
}


onMounted(async () => {
  if (useLocationStoreInstance.lat && useLocationStoreInstance.lon) {
    await getCityNameByLocation(useLocationStoreInstance.lat, useLocationStoreInstance.lon);
  }
});



// 👀 راقب التغيير
// watch(
//   () => props.location,
//   (newLocation) => {
//     if (newLocation?.lat && newLocation?.lon) {
//       getCityNameByLocation(newLocation.lat, newLocation.lon);
//     }
//   },
//   { deep: true } 
// );


// watch(
//   () => props.cardWeather,
//   (newCardWeather) => {
//     props.cardWeather.value = newCardWeather;
//   },
//   { deep: true }
// );
</script>
