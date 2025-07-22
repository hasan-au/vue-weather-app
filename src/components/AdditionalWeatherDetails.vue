<template>
    <div class="row">
            <div class="col-12 col-md-6 col-lg-3 mb-3">
                <div class="card shadow border-0 weather-detail-card">
                    <div class="card-body text-center">
                        <i class="bi bi-sunrise text-warning fs-1 mb-2"></i>
                        <h6 class="text-muted mb-1">Sunrise</h6>
                        <p class="fw-bold mb-0" id="sunrise">{{ formatters.formatHour(props.sunrise_set.sunrise) }}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-3">
                <div class="card shadow border-0 weather-detail-card">
                    <div class="card-body text-center">
                        <i class="bi bi-sunset text-orange fs-1 mb-2"></i>
                        <h6 class="text-muted mb-1">Sunset</h6>
                        <p class="fw-bold mb-0" id="sunset">{{ formatters.formatHour(props.sunrise_set.sunset) }}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-3">
                <div class="card shadow border-0 weather-detail-card">
                    <div class="card-body text-center">
                        <i class="bi bi-eye text-info fs-1 mb-2"></i>
                        <h6 class="text-muted mb-1">Visibility</h6>
                        <p class="fw-bold mb-0" id="visibility">{{ formatters.formatHour(props.currentDetails.visibility) }} km</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mb-3">
                <div class="card shadow border-0 weather-detail-card">
                    <div class="card-body text-center">
                        <i class="bi bi-moisture text-primary fs-1 mb-2"></i>
                        <h6 class="text-muted mb-1">UV Index</h6>
                        <p class="fw-bold mb-0" id="uvIndex">{{ formatters.formatHour(props.currentDetails.uvi) }}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import formatters from '@/utils/formatter';
import { defineProps } from 'vue';
const props = defineProps({
  currentDetails: Object,
  sunrise_set: Object,
});

</script>