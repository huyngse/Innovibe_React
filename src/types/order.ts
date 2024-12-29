export type Order = {
    id: number,
    orderId: string,
    customerName: string,
    orderDate: string,
    items: {
        id: number,
        productName: string,
        status: string,
        price: number,
        category: string,
        image: string,
        quantity: number,

    }[],
    status: "Shipped" | "Pending" | "Processing" | "Delivered" | "Cancelled" | "Returned"
}