<template>

<!-- Header Section -->
    <header class="container py-4">
        <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="card shadow-lg border-0">
                    <div class="card-body p-4">
                        <h1 class="text-center mb-4 text-primary">
                            <i class="bi bi-cloud-sun me-2"></i>Weather App
                        </h1>

                        <!-- Search Form -->
                        <form id="searchForm" class="d-flex gap-2" @submit.prevent="onSearch">
                            <input type="text" v-model="form.searchValue" id="cityInput" class="form-control" placeholder="Enter city name.. , Country code(optional)" required>
                            <button type="submit" class="btn btn-primary">
                                <i class="bi bi-search"></i>
                            </button>
                            <button type="button" id="locationBtn" class="btn btn-outline-secondary" @click="getMyLocation()">
                                <i class="bi bi-geo-alt"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </header>

</template>

<script setup>
import { useLocationStore } from '@/stores/location';
import { defineEmits, reactive, ref } from 'vue';
const locationStore = useLocationStore();
const emits = defineEmits(['search-form','current-location']);
const form = reactive({
    searchValue: '',
});


async function getMyLocation() {
    await locationStore.fetchCurrentLocation();
    emits('current-location');
}

function onSearch() {
    if (!form.searchValue.trim()) return; 
    emits('search-form', form);
    // form.searchValue = '';
}



</script>