<template>
    <div class="row mb-4">
            <div class="col-12">
                <div class="card shadow-lg border-0">
                    <div class="card-header bg-transparent border-0 pb-0">
                        <h5 class="mb-0">
                            <i class="bi bi-clock me-2 text-primary"></i>24-Hour Forecast
                        </h5>
                    </div>
                    <div class="card-body p-0">
                        <div class="hourly-forecast-container">
                            <div class="hourly-scroll-wrapper" id="hourlyForecast">
                                <!-- Hourly items will be populated by JavaScript -->
                                <div class="hourly-item" :class="{ active: props.selectedIndex === index }" v-for="(hour, index) in hourlyData.slice(0, 24)" :key="index" @click="emitHour(hour.dt, index)">
                                    <div class="time" v-if="index === 0">Now</div>
                                    <div class="time" v-else>{{ formatters.formatHour(hour.dt) }}</div>
                                    <i class="bi weather-icon" :class="formatters.getBootstrapIcon(hour.weather[0].icon)"></i>
                                    <div class="temperature">{{ Math.round(hour.temp) }}°</div>
                                    <div class="condition">{{ hour.weather[0].description }}</div>
                                </div>
                                <!-- <div class="hourly-item">
                                    <div class="time">13:00</div>
                                    <i class="bi bi-cloud-rain weather-icon"></i>
                                    <div class="temperature">19°</div>
                                    <div class="condition">Rain</div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import formatters from '@/utils/formatter';
const props = defineProps({
  hourlyData: {
    type: Array,
    required: true,
  },
  selectedIndex: {
    type: Number,
    default: 0,
  }
});
const emits = defineEmits(['hour-selected']);

function emitHour(hour, index) {
    emits('hour-selected', { hour, index });
}

</script>

<style scoped>
.hourly-item.active{
    background-color: #96d6ff;
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Ensure the hourly-scroll-wrapper can scroll if content overflows */
.hourly-scroll-wrapper {
    display: flex; /* Make items lay out horizontally */
    overflow-x: auto; /* Enable horizontal scrolling */
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
    padding-bottom: 10px; /* Add some padding if scrollbar appears */
}

.hourly-item {
    flex-shrink: 0; /* Prevent items from shrinking */
    padding: 15px 10px;
    margin: 5px;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    min-width: 90px; /* Ensure enough width for content */
}

.hourly-item:hover {
    background-color: #e0f2f7; /* Light hover effect */
}

.hourly-item .time {
    font-weight: bold;
    margin-bottom: 5px;
}

.hourly-item .weather-icon {
    font-size: 2.2em; /* Adjust icon size */
    margin-bottom: 5px;
}

.hourly-item .temperature {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 5px;
}

.hourly-item .condition {
    font-size: 0.85em;
    white-space: nowrap; /* Keep condition on one line */
    overflow: hidden;
    text-overflow: ellipsis; /* Add ellipsis if too long */
}
</style>