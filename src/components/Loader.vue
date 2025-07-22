<template>
          <!-- Loading Indicator -->
    <div id="loading" class="text-center py-5" v-show="props.loading">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p class="text-white mt-2">Fetching weather data...</p>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    loading: Boolean,
})
</script>