<template>
    <div class="row mb-4">
            <div class="col-12">
                <div class="card shadow-lg border-0">
                    <div class="card-header bg-transparent border-0 pb-0">
                        <h5 class="mb-0">
                            <i class="bi bi-calendar-week me-2 text-primary"></i>5-Day Forecast
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="row" id="dailyForecast">
                            <!-- Daily forecast items will be populated by JavaScript -->
                            <div class="col-12 col-md-6 col-lg mb-3" v-for="(day, index) in dailyData.slice(0, 5)" :key="index" @click="goToDayForecast(day.dt)">
                                <div class="daily-forecast-item">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="fw-bold" v-if="index === 0">Today</div>
                                            <div class="fw-bold" v-else>{{ formatters.formatDay(day.dt) }}</div>
                                            <div class="text-muted small">{{ day.weather[0].description }}</div>
                                        </div>
                                        <div class="text-center mx-3">
                                            <i class="bi weather-icon-daily" :class="formatters.getBootstrapIcon(day.weather[0].icon)"></i>
                                        </div>
                                        <div class="text-end">
                                            <div class="fw-bold">{{ Math.floor(day.temp.max) }}°</div>
                                            <div class="text-muted small">{{ Math.floor(day.temp.min) }}°</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-12 col-md-6 col-lg mb-3">
                                <div class="daily-forecast-item">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <div class="fw-bold">Tomorrow</div>
                                            <div class="text-muted small">Sunny</div>
                                        </div>
                                        <div class="text-center mx-3">
                                            <i class="bi bi-sun weather-icon-daily"></i>
                                        </div>
                                        <div class="text-end">
                                            <div class="fw-bold">26°</div>
                                            <div class="text-muted small">20°</div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup>
import formatters from '@/utils/formatter';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';



const props = defineProps({
    dailyData: {
        type: Array,
        required: true,
    },
});

const router = useRouter();


function goToDayForecast(day) {
    const date = formatters.formatDate(day);
    router.push({
        name: 'day-forecast',
        params: {date: date},
    });
}


</script>