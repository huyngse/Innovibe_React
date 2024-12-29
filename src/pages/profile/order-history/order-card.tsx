import { Button } from "@/components/ui/button";
import { orderStatus } from "@/constants/order-status";
import { formatCurrencyVND } from "@/lib/currency";
import { Order } from "@/types/order";
import { formatDate } from "@/utils/date";
import { Link } from "react-router-dom";

const OrderCard = ({ order }: { order: Order }) => {
  let status =
    orderStatus.find((i) => i.value == order.status)?.label ?? order.status;
  return (
    <div className="bg-white rounded p-3">
      <div className="text-lg font-semibold">Đơn {order.orderId}</div>
      <div className="text-gray-500">
        Ngày đặt: {formatDate(new Date(order.orderDate))}
      </div>
      <div>Trạng thái: {status}</div>
      <div className="flex flex-col py-3">
        {order.items.map((item, i: number) => {
          return (
            <div key={i} className="flex justify-between gap-3 p-3 border-y">
              <img
                src={item.image}
                alt="product image"
                width={75}
                height={75}
                className="object-cover"
              />
              <div className="flex-1">
                <Link to={`/product/${item.id}`}>
                  <div>{item.productName}</div>
                </Link>
                <div className="text-gray-500">Phân loại: {item.category}</div>
                <div>Số lượng: {item.quantity}</div>
                <Link
                  to={`/product/${item.id}`}
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
        <Button variant={"outline"}>Hủy Đơn Hàng</Button>
        <Button variant={"default"}>Xem chi tiết</Button>
      </div>
    </div>
  );
};

export default OrderCard;
