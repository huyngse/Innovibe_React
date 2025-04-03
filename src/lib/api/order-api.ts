import { axiosClient } from './config/axios-client';

export const handleApiError = (error: any) => {
    try {
        const errorMessage = error.response?.data.message || error?.message || 'An unexpected error occurred.';
        const data = null;
        return { error: errorMessage, data };
    } catch (err) {
        throw new Error('An unexpected error occurred.');
    }
};

export const getOrderByUserId = async (id: string) => {
    try {
        const { data } = await axiosClient.get(`/api/orders/account/${id}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}
export const getOrderById = async (id: number) => {
    try {
        const { data } = await axiosClient.get(`/api/orders/${id}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}
type CreateOrderRequest = {
    accountId: string,
    email: string,
    phone: string,
    orderStatus: string,
    total: number,
    shippingAddress: string,
    couponId?: number,
    orderItems: {
        productId: number,
        quantity: number
    }[]
}

export const createOrder = async (request: CreateOrderRequest) => {
    try {
        const { data } = await axiosClient.post(`/api/orders`, request);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}

type PaymentResult = {
    bin: string,
    accountNumber: string,
    amount: number,
    description: string,
    orderCode: number,
    currency: string,
    paymentLinkId: string,
    status: string,
    expiredAt: number,
    checkoutUrl: string,
    qrCode: string
}

export const payOrder = async (orderId: number) => {
    try {
        const { data } = await axiosClient.post(`/api/payments/payos?orderId=${orderId}`);
        return { error: null, data: data as PaymentResult, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}

export const updateOrderStatus = async (id: number, status: string) => {
    try {
        const { data } = await axiosClient.put(`/api/orders/${id}/status?status=${status}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
};

export const getPayment = async (orderId: number) => {
    try {
        const { data } = await axiosClient.get(`/api/payments/payos/info?orderId=${orderId}`);
        return { error: null, data: data, success: true };
    } catch (error) {
        return handleApiError(error);
    }
}