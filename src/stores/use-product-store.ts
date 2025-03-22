import { create } from 'zustand';
import { getAllProduct, getProductById, searchProducts } from '@/lib/api/product-api';
import { Product } from '@/types/product';
// 
interface ProductState {
    products: Product[];
    product?: Product;
    loading: boolean;
    error: string | null;
    totalProducts: number;  
    fetchProducts: (filters?: {
        categoryName?: string;
        brandName?: string;
        pageNumber?: number;
        pageSize?: number;
    }) => Promise<void>;
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
    totalProducts: 0, 
    renderKey: 0,
    rerender: () => {
        set(prev => ({ renderKey: prev.renderKey + 1 }));
    },
    fetchProducts: async (filters = {}) => {
        set({ loading: true, error: null });
        try {
            let response;
            console.log("Filters applied:", filters);
            
            if (filters.categoryName || filters.brandName) {
                response = await searchProducts(
                    filters.brandName,
                    filters.categoryName,
                    filters.pageNumber,
                    filters.pageSize
                );
            } else {
                response = await getAllProduct();
            }

            if (!response.error) {
                const fetchedProducts = response.data.items || response.data || [];
                const availableProducts = fetchedProducts.filter(
                    (product: Product) => product.status === "In Stock"
                );
                console.log("Fetched products in store:", availableProducts);
                
                set({ 
                    products: availableProducts, 
                    totalProducts: response.data.total || fetchedProducts.length,
                    loading: false 
                });
            } else {
                set({ 
                    loading: false, 
                    error: response.error,
                    totalProducts: 0 
                });
            }
        } catch (error: any) {
            set({ 
                loading: false, 
                error: error.message,
                totalProducts: 0 
            });
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
    },
}));

export default useProductStore;