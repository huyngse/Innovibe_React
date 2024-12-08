import { create } from 'zustand'
import axios from 'axios';
import { District, Province, Ward } from '@/types/vietnam-provinces';
const api = axios.create({
    baseURL: 'https://provinces.open-api.vn/api'
});

type ProvinceState = {
    provinces: Province[],
    districts: District[],
    wards: Ward[],
    loading: boolean,
    error: string | null;
    fetchProvinces: () => void;
    fetchDistricts: (provinceCode: number) => void;
    fetchWards: (districtCode: number) => void;
    clearDistricts: () => void;
    clearWards: () => void;
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
            set({
                provinces: response.data || [],
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

    fetchDistricts: async (provinceCode: number) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/d/search/?q=*&p=${provinceCode}`);
            set({
                districts: response.data || [],
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

    fetchWards: async (districtCode: number) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/w/search/?q=*&d=${districtCode}`);
            set({
                wards: response.data || [],
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

    clearDistricts: () => {
        set({ districts: [] });
    },

    clearWards: () => {
        set({ wards: [] });
    }
}));

export default useProvinceStore;