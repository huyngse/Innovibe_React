import guitarImage1 from "@/assets/imgs/guitar_1.png";
import guitarImage2 from "@/assets/imgs/guitar_2.png";
import { Order } from "@/types/order";
export const guitarOrders: Order[] = [
    {
        id: 1,
        orderId: "ORD-20240115-0001",
        customerName: "Alice Johnson",
        orderDate: "2024-01-15",
        items: [
            {
                id: 1,
                productName:
                    "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
                status: "Available",
                price: 10_000_000,
                image: guitarImage1,
                quantity: 1,
            }
        ],
        status: "Shipped"
    },
    {
        id: 2,
        orderId: "ORD-20240120-0002",
        customerName: "Bob Smith",
        orderDate: "2024-01-20",
        items: [
            {
                id: 2,
                productName:
                    "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
                status: "Available",
                price: 10_000_000,
                image: guitarImage2,
                quantity: 1,
            }
        ],
        status: "Processing"
    }
];
