import { getCityName, getLatLonOfCity } from "@/services/locationService";
import { ref } from "vue";


export function useLocation() {

    const loading = ref(false);
    const errors = ref(null);
    const location = ref({});


    const getCityNameByLatLon = async (lat, lon) => {
        try{
            loading.value = true;
    
            const response = await getCityName(lat, lon);
            location.value = response.data[0];
            
            loading.value = false;
        }catch(err){
            errors.value = err;
            throw err;
        }
        finally{
            loading.value = false;
        }
    }

    const getLatLonByCityName = async (city) => {
        try{
            loading.value = true;
    
            const response = await getLatLonOfCity(city);
            location.value = response.data[0];
            
            loading.value = false;
        }catch(err){
            errors.value = err;
            throw err;
        }
        finally{
            loading.value = false;
        }
    
    }
    

    return {
        getCityNameByLatLon,
        getLatLonByCityName,
        loading,
        errors,
        location,
    
    }

}