<template>
            <!-- Weather Details Grid -->
        <div class="row g-3">
            <!-- Atmospheric Pressure -->
            <div class="col-6 col-md-4">
                <div class="weather-detail-item">
                    <div class="d-flex align-items-center">
                        <div class="weather-icon me-3">
                            <i class="bi bi-speedometer2"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-white-50">Pressure</h6>
                            <p class="mb-0 fw-bold text-white fs-4">{{ dayForecast.pressure.afternoon }}</p>
                            <small class="text-white-50">hPa (afternoon)</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Humidity -->
            <div class="col-6 col-md-4">
                <div class="weather-detail-item">
                    <div class="d-flex align-items-center">
                        <div class="weather-icon me-3">
                            <i class="bi bi-droplet-half"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-white-50">Humidity</h6>
                            <p class="mb-0 fw-bold text-white fs-4">{{ dayForecast.humidity.afternoon }}%</p>
                            <small class="text-white-50">Afternoon level</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Wind Max -->
            <div class="col-6 col-md-4">
                <div class="weather-detail-item">
                    <div class="d-flex align-items-center">
                        <div class="weather-icon me-3">
                            <i class="bi bi-wind"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-white-50">Max Wind</h6>
                            <p class="mb-0 fw-bold text-white fs-4">{{ dayForecast.wind.max.speed }}</p>
                            <small class="text-white-50">meter/s at {{ dayForecast.wind.max.direction }}°</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cloud Cover -->
            <div class="col-6 col-md-4">
                <div class="weather-detail-item">
                    <div class="d-flex align-items-center">
                        <div class="weather-icon me-3">
                            <i class="bi bi-cloud"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-white-50">Cloud Cover</h6>
                            <p class="mb-0 fw-bold text-white fs-4">{{ dayForecast.cloud_cover.afternoon }}%</p>
                            <small class="text-white-50">{{ getSkiesDescription(dayForecast.cloud_cover.afternoon) }}</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Precipitation -->
            <div class="col-6 col-md-4">
                <div class="weather-detail-item">
                    <div class="d-flex align-items-center">
                        <div class="weather-icon me-3">
                            <i class="bi bi-cloud-drizzle"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-white-50">Precipitation</h6>
                            <p class="mb-0 fw-bold text-white fs-4">{{ dayForecast.precipitation.total }}</p>
                            <small class="text-white-50">mm total</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Data Units -->
            <div class="col-6 col-md-4">
                <div class="weather-detail-item">
                    <div class="d-flex align-items-center">
                        <div class="weather-icon me-3">
                            <i class="bi bi-gear"></i>
                        </div>
                        <div>
                            <h6 class="mb-1 text-white-50">Units</h6>
                            <p class="mb-0 fw-bold text-white fs-6">{{ dayForecast.units }}</p>
                            <small class="text-white-50">Celisus/m/s</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
import { inject, defineProps } from 'vue';

const dayForecast = inject('dayForecast');

function getSkiesDescription(cloudCover) {
    if(cloudCover < 20){
        return 'Clear Skies';
    }else if(cloudCover < 50){
        return 'Partly cloudy';
    }else if(cloudCover < 80){
        return 'Mostly cloudy';
    }else{
        return 'Overcast';
    }
}

</script>