import { Order } from "@/types/order";

const OrderList = ({ orders }: { orders: Order[] }) => {
  return (
    <div>
      {orders.map((order, index: number) => {
        return <div key={index}>Đơn {order.orderId}</div>;
      })}
    </div>
  );
};

export default OrderList;
