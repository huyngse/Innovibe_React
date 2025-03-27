import { getOrderById, getOrderByUserId, getPayment } from '@/lib/api/order-api';
import { Order } from '@/types/order';
import { Payment } from '@/types/payment';
import { create } from 'zustand';


interface OrderState {
    orders: Order[];
    order?: Order;
    payment?: Payment;
    loading: boolean;
    error: string | null;
    fetchOrdersByUserId: (userId: string) => Promise<void>;
    fetchOrder: (id: number) => Promise<void>;
    fetchPayment: (orderId: number) => Promise<void>;
    renderKey: number;
    rerender: () => void;
}

const useOrderStore = create<OrderState>((set) => ({
    orders: [],
    loading: false,
    order: undefined,
    error: null,
    renderKey: 0,
    rerender: () => {
        set(prev => ({ renderKey: prev.renderKey + 1 }))
    },
    fetchOrdersByUserId: async (userId: string) => {
        set({ loading: true, error: null });
        try {
            const response = await getOrderByUserId(userId);
            if (!response.error) {
                set({ orders: response.data, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
    fetchOrder: async (id: number) => {
        set({ loading: true, error: null });
        try {
            const response = await getOrderById(id);
            if (!response.error) {
                set({ order: response.data, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
    
    fetchPayment: async (orderId: number) => {
        set({ loading: true, error: null });
        try {
            const response = await getPayment(orderId);
            if (!response.error) {
                set({ payment: response.data, loading: false });
            } else {
                set({ loading: false, error: response.error });
            }
        } catch (error: any) {
            set({ loading: false, error: error.message });
        }
    },
}));

export default useOrderStore;