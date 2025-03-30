import { Button } from "@/components/ui/button";
import { formatCurrencyVND } from "@/lib/currency";
import { Order } from "@/types/order";
import { formatDate } from "@/utils/date";
import { Link } from "react-router-dom";
import OrderStatus from "./order-status";
import CancelOrderButton from "@/components/cancel-order-button";

const OrderCard = ({ order }: { order: Order }) => {
  return (
    <div className="bg-white rounded p-3">
      <div className="text-lg font-semibold">Đơn {order.orderNumber}</div>
      <div className="text-gray-500">
        Ngày đặt: {formatDate(new Date(order.orderDate))}
      </div>
      <div>
        Trạng thái: <OrderStatus status={order.orderStatus} />
      </div>
      <div className="flex flex-col py-3">
        {order.orderItems.map((item, i: number) => {
          return (
            <div key={i} className="flex justify-between gap-3 p-3 border-y">
              <img
                src={item.images[0].imageURL}
                alt="product image"
                width={75}
                height={75}
                className="object-cover"
              />
              <div className="flex-1">
                <Link to={`/product/${item.productId}`}>
                  <div>{item.name}</div>
                </Link>
                <div className="text-gray-500">
                  Phân loại: {item.category.name}
                </div>
                <div>Số lượng: {item.quantity}</div>
                <Link
                  to={`/product/${item.productId}`}
                  className="text-blue-500 underline text-sm"
                >
                  Xem sản phẩm
                </Link>
              </div>
              <div className="flex items-center">
                <p>{formatCurrencyVND(item.price * item.quantity)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end gap-3">
        {order.orderStatus != "Cancelled" && (
          <CancelOrderButton order={order} />
        )}
        <Link to={`/profile/order/${order.orderId}`}>
          <Button variant={"default"}>Xem chi tiết</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderCard;
