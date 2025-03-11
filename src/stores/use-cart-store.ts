import { Product } from "@/types/product";
import { create } from "zustand";

interface CartItem {
    product: Product;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    total: number;
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
}

const CART_KEY = 'cart';

const loadCartFromLocalStorage = (): CartItem[] => {
    const storedCart = localStorage.getItem(CART_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
};

const useCartStore = create<CartState>((set) => ({
    items: loadCartFromLocalStorage(),
    total: loadCartFromLocalStorage().reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.product.productId === item.product.productId);
        const items = existingItem
            ? state.items.map(i =>
                i.product.productId === item.product.productId
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
            )
            : [...state.items, item];
        const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
        localStorage.setItem(CART_KEY, JSON.stringify(items));
        return { items, total };
    }),

    removeItem: (id) => set((state) => {
        const items = state.items.filter(item => item.product.productId !== id);
        const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
        localStorage.setItem(CART_KEY, JSON.stringify(items));
        return { items, total };
    }),

    updateQuantity: (id, quantity) => set((state) => {
        const items = state.items.map(item =>
            item.product.productId === id ? { ...item, quantity } : item
        );
        const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
        localStorage.setItem(CART_KEY, JSON.stringify(items));
        return { items, total };
    }),

    clearCart: () => {
        localStorage.removeItem(CART_KEY);
        return { items: [], total: 0 };
    },
}));

export default useCartStore;