import { Order } from "@/types/order";
import OrderCard from "./order-card";

const OrderList = ({ orders }: { orders: Order[] }) => {
  return (
    <div>
      {orders.map((order, index: number) => {
        return <OrderCard key={index} order={order} />;
      })}
    </div>
  );
};

export default OrderList;
