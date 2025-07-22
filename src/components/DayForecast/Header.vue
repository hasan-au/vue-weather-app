<template>
    <!-- Page Header -->
    <header class="text-center text-white mb-5">
        <h1 class="display-5 fw-bold mb-3">Day Forecast</h1>
        <div class="row justify-content-center">
            <div class="col-auto">
                <div class="d-flex flex-wrap justify-content-center gap-2">
                    <span class="badge bg-light bg-opacity-25 text-white px-3 py-2 rounded-pill">
                        <i class="bi bi-calendar-week me-2"></i>{{ dayForecast.date }}
                    </span>
                    <span class="badge bg-light bg-opacity-25 text-white px-3 py-2 rounded-pill">
                        <i class="bi bi-geo-alt me-2"></i>{{ cityName }}
                    </span>
                    <span class="badge bg-light bg-opacity-25 text-white px-3 py-2 rounded-pill">
                        <i class="bi bi-clock me-2"></i>UTC{{ dayForecast.tz }}
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { inject, onMounted, ref, watch } from 'vue'
import { useLocation } from '@/composables/useLocation'

const dayForecast = inject('dayForecast')
const useLocationInstance = useLocation()
const cityName = ref(`${dayForecast.value.lat}°N, ${dayForecast.value.lon}°E`)




async function getCityName() {
    try{
        await useLocationInstance.getCityNameByLatLon(dayForecast.value.lat,dayForecast.value.lon);
        cityName.value = useLocationInstance.location.value.name;
        
    }catch(error){
        console.log(error)
    }
}

onMounted(async() => {
    await getCityName();
});


</script>
