<template>
        <!-- Four Time Periods -->
        <div class="row g-4 mb-5">
            <!-- Morning -->
            <div class="col-6 col-lg-3">
                <div class="card weather-detail-card h-100">
                    <div class="card-body text-center p-4">
                        <div class="weather-icon-daily mb-3">
                            <i class="bi bi-sunrise text-warning"></i>
                        </div>
                        <h6 class="card-title fw-bold text-primary mb-2">Morning</h6>
                        <p class="display-5 fw-bold mb-2">{{ Math.round(dayForecast.temperature.morning) }}°C</p>
                        <small class="text-muted">6:00 - 12:00</small>
                        <div class="mt-2">
                            <!-- <span class="badge bg-primary bg-opacity-10 text-primary">Cool Start</span> -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Afternoon -->
            <div class="col-6 col-lg-3">
                <div class="card weather-detail-card h-100">
                    <div class="card-body text-center p-4">
                        <div class="weather-icon-daily mb-3">
                            <i class="bi bi-brightness-high text-warning"></i>
                        </div>
                        <h6 class="card-title fw-bold text-primary mb-2">Afternoon</h6>
                        <p class="display-5 fw-bold mb-2">{{ Math.round(dayForecast.temperature.afternoon) }}°C</p>
                        <small class="text-muted">12:00 - 18:00</small>
                        <div class="mt-2">
                            <!-- <span class="badge bg-warning bg-opacity-25 text-warning">Peak Heat</span> -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Evening -->
            <div class="col-6 col-lg-3">
                <div class="card weather-detail-card h-100">
                    <div class="card-body text-center p-4">
                        <div class="weather-icon-daily mb-3">
                            <i class="bi bi-sunset text-orange"></i>
                        </div>
                        <h6 class="card-title fw-bold text-primary mb-2">Evening</h6>
                        <p class="display-5 fw-bold mb-2">{{ Math.round(dayForecast.temperature.evening) }}°C</p>
                        <small class="text-muted">18:00 - 24:00</small>
                        <div class="mt-2">
                            <!-- <span class="badge bg-info bg-opacity-25 text-info">Pleasant</span> -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Night -->
            <div class="col-6 col-lg-3">
                <div class="card weather-detail-card h-100">
                    <div class="card-body text-center p-4">
                        <div class="weather-icon-daily mb-3">
                            <i class="bi bi-moon-stars text-primary"></i>
                        </div>
                        <h6 class="card-title fw-bold text-primary mb-2">Night</h6>
                        <p class="display-5 fw-bold mb-2">{{ Math.round(dayForecast.temperature.evening) }}°C</p>
                        <small class="text-muted">0:00 - 6:00</small>
                        <div class="mt-2">
                            <!-- <span class="badge bg-secondary bg-opacity-25 text-secondary">Mild</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
import { inject, defineProps } from 'vue';

const dayForecast = inject('dayForecast');

</script>