// stores/location.js
import { defineStore } from 'pinia';

export const useLocationStore = defineStore('location', {
  state: () => ({
    lat: null,
    lon: null,
    error: null,
    loading: false,
    country: null,
    time_offset: null,
    time_zone: null
  }),

  actions: {
    async fetchCurrentLocation() {
      this.loading = true;
      this.error = null;

      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
            this.loading = false;
            resolve();
          },
          (err) => {
            this.error = err.message || 'Failed to get location';
            this.loading = false;
            reject(err);
          }
        );
      });
    },
  },

  persist: true,
});
