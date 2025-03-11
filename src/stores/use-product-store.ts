
import { getAllProduct } from '@/lib/api/product-api';
import { Product } from '@/types/product';
import { create } from 'zustand';


interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
    renderKey: number;
    rerender: () => void;
}

const useProductStore = create<ProductState>((set) => ({
    products: [],
    loading: false,
    error: null,
    renderKey: 0,
    rerender: () => {
        set(prev => ({ renderKey: prev.renderKey + 1 }))
    },
    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const response = await getAllProduct();
            if (!response.error) {
                set({ products: response.data, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
}));

export default useProductStore;