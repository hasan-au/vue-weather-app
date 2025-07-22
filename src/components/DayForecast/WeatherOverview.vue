<template>
    <!-- Temperature Overview -->
    <div class="row justify-content-center mb-5">
        <div class="col-12 col-md-10 col-lg-8">
            <div class="card current-weather-card">
                <div class="card-body p-4">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start">
                            <h3 class="h5 text-muted mb-2">Temperature Range</h3>
                            <div class="d-flex align-items-center justify-content-center justify-content-md-start">
                                <div class="me-4">
                                    <span class="display-4 fw-bold text-primary">{{ Math.round(dayForecast.temperature.min) }}°</span>
                                    <div class="small text-muted">Minimum</div>
                                </div>
                                <div class="weather-icon-large me-4">
                                    <i class="bi bi-arrow-right"></i>
                                </div>
                                <div>
                                    <span class="display-4 fw-bold text-danger">{{ Math.round(dayForecast.temperature.max) }}°</span>
                                    <div class="small text-muted">Maximum</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-center mt-3 mt-md-0">
                            <div class="weather-icon-large">
                                <i class="bi bi-sun text-warning"></i>
                            </div>
                            <p class="text-muted mb-0">{{ props.weather_overview }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { inject, defineProps, ref, watch } from 'vue'
const dayForecast = inject('dayForecast')
// const weather_overview = ref('')

const props = defineProps({
    weather_overview: String,
});



</script>