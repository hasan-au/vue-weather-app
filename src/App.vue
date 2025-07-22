<template>
  
  <RouterView />
  <Footer></Footer>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { onMounted } from 'vue';
import { useLocationStore } from '@/stores/location';

const locationStore = useLocationStore();

onMounted(async() => {
  if (!locationStore.lat || !locationStore.lon) {
        await locationStore.fetchCurrentLocation();
    }
});

</script>
