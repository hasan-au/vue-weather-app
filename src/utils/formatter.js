import { useLocationStore } from '@/stores/location';
import { DateTime } from 'luxon';

const formatters = {
  // formatDay(timestamp) {
  //   const date = new Date(timestamp * 1000);
  //   const options = { weekday: 'long' };
  //   return date.toLocaleDateString('en-US', options);
  // },

  // formatHour(timestamp) {
  //   const date = new Date(timestamp * 1000);
  //   const options = { hour: '2-digit', minute: '2-digit' };
  //   return date.toLocaleTimeString('en-US', options);
  // },

  // formatFullDateTime(timestamp) {
  //   const date = new Date(timestamp * 1000); // لو timestamp بالثواني

  //   const options = {
  //       weekday: 'long',
  //       year: 'numeric',
  //       month: 'long',
  //       day: 'numeric',
  //       hour: 'numeric',
  //       minute: '2-digit',
  //       hour12: true,
  //   };

  //   return date.toLocaleString('en-US', options);
  //   },


  //   formatDate(timestamp) {
  //     const date = new Date(timestamp * 1000); // لو بالثواني
  //     const year = date.getFullYear();
  //     const month = String(date.getMonth() + 1).padStart(2, '0'); // شهر يبدأ من 0
  //     const day = String(date.getDate()).padStart(2, '0');

  //     return `${year}-${month}-${day}`;
  //   },

    formatDay(timestamp) {
    const store = useLocationStore();
    const timezone = store.time_zone || 'UTC';
    const dt = DateTime.fromSeconds(timestamp).setZone(timezone);
    return dt.toLocaleString({ weekday: 'long' });
  },

  formatHour(timestamp) {
    const store = useLocationStore();
    const timezone = store.time_zone || 'UTC';
    const dt = DateTime.fromSeconds(timestamp).setZone(timezone);
    return dt.toLocaleString(DateTime.TIME_SIMPLE); // مثل "11:30 AM"
  },

  formatFullDateTime(timestamp) {
    const store = useLocationStore();
    const timezone = store.time_zone || 'UTC';
    const dt = DateTime.fromSeconds(timestamp).setZone(timezone);
    return dt.toLocaleString(DateTime.DATETIME_MED); // مثل "Apr 20, 2024, 11:30 AM"
  },

  formatDate(timestamp) {
    const store = useLocationStore();
    const timezone = store.time_zone || 'UTC';
    const dt = DateTime.fromSeconds(timestamp).setZone(timezone);
    return dt.toISODate(); // مثل "2024-04-20"
  },

    
    getBootstrapIcon(openWeatherIcon) {
        const iconMap = {
            '01d': 'bi-sun',           // clear sky day
            '01n': 'bi-moon',          // clear sky night
            '02d': 'bi-cloud-sun',     // few clouds day
            '02n': 'bi-cloud-moon',    // few clouds night
            '03d': 'bi-cloud',         // scattered clouds
            '03n': 'bi-cloud',         // scattered clouds
            '04d': 'bi-clouds',        // broken clouds
            '04n': 'bi-clouds',        // broken clouds
            '09d': 'bi-cloud-drizzle', // shower rain
            '09n': 'bi-cloud-drizzle', // shower rain
            '10d': 'bi-cloud-rain',    // rain day
            '10n': 'bi-cloud-rain',    // rain night
            '11d': 'bi-cloud-lightning', // thunderstorm
            '11n': 'bi-cloud-lightning', // thunderstorm
            '13d': 'bi-cloud-snow',    // snow
            '13n': 'bi-cloud-snow',    // snow
            '50d': 'bi-cloud-haze',    // mist
            '50n': 'bi-cloud-haze'     // mist
        };

        return iconMap[openWeatherIcon] || 'bi-question-circle';
    }
};

export default formatters;
