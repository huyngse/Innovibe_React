import { create } from 'zustand'
import axios from 'axios';
import { District, Province, Ward } from '@/types/vietnam-provinces';
const api = axios.create({
    baseURL: 'https://provinces.open-api.vn/api' // Replace with your base URL
  });
  
type ProvinceState = {
    provinces: Province[],
    districts: District[],
    wards: Ward[],
    loading: boolean,
    error: string | null;
}
const useProvinceStore = create<ProvinceState>((set) => ({
    provinces: [],
    districts: [],
    wards: [],
    loading: false,
    error: null,

    fetchProvinces: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get("/p");
            console.log("reponse: ", response)
            const data = response.data;
            set({
                provinces: data.provinces || [],
            });
        } catch (error) {
            let message = 'Unknown Error'
            if (error instanceof Error) {
                message = error.message
            }
            set({ error: message });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useProvinceStore;