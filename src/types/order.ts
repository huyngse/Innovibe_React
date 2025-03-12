import { Product } from "./product"

export type Order = {
    id: number,
    orderId: string,
    customerName: string,
    orderDate: string,
    paymentDate?: string,
    shippingDate?: string,
    deliveryDate?: string,
    shippingAddress: string,
    shippingFee: number,
    phone: string,
    paymentMethod: string,
    items: Product[],
    status: "Shipped" | "Pending" | "Processing" | "Delivered" | "Cancelled" | "Returned"
}