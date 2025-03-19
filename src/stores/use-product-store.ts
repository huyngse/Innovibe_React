
import { getAllProduct, getProductById } from '@/lib/api/product-api';
import { Product } from '@/types/product';
import { create } from 'zustand';


interface ProductState {
    products: Product[];
    product?: Product;
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
    fetchProduct: (id: number) => Promise<void>;
    setProduct: (products: Product[]) => void;
    renderKey: number;
    rerender: () => void;
}

const useProductStore = create<ProductState>((set) => ({
    products: [],
    loading: false,
    product: undefined,
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
                const avaialbeProducts = response.data.filter((product: Product) => product.status == "In Stock");
                set({ products: avaialbeProducts, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
    fetchProduct: async (id: number) => {
        set({ loading: true, error: null });
        try {
            const response = await getProductById(id);
            if (!response.error) {
                set({ product: response.data, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
    setProduct: (products) => {
        set({ products: products });
    }
}));

export default useProductStore;