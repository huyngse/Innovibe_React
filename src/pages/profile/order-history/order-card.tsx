import { Order } from "@/types/order";
import { formatDate } from "@/utils/date";

const OrderCard = ({ order }: { order: Order }) => {
  return (
    <div className="">
      <div>Đơn {order.orderId}</div>
      <div>Ngày đặt: {formatDate(new Date(order.orderDate))}</div>
    </div>
  );
};

export default OrderCard;
