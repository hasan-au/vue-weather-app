import axios from 'axios';

const apiKey = '';
const baseUrl = 'https://api.openweathermap.org/data/3.0/onecall';
const geocodingUrl = 'https://api.openweathermap.org/geo/1.0';

// Main Axios instance
const weatherApi = axios.create({
  baseURL: baseUrl,
  params: {
    appid: apiKey,
  },
});

// Another instance for geocoding
const geocodingApi = axios.create({
  baseURL: geocodingUrl,
  params: {
    appid: apiKey,
  },
});

export { weatherApi, geocodingApi };
