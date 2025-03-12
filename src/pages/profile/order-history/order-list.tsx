import { Order } from "@/types/order";
import OrderCard from "./order-card";

const OrderList = ({ orders }: { orders: Order[] }) => {
  console.log(orders)
  return (
    <div className="flex flex-col gap-3 mt-3">
      {orders.map((order, index: number) => {
        return <OrderCard key={index} order={order} />;
      })}
    </div>
  );
};

export default OrderList;
