import { HandCoins, MapPin } from "lucide-react";
import { guitarOrders } from "@/mock-data/orders";
import { Link, useParams } from "react-router-dom";
import OrderNotfound from "./order-not-found";
import { formatCurrencyVND } from "@/lib/currency";
import { formatDateTime } from "@/utils/date";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
const OrderDetailPage = () => {
  const { orderId } = useParams();
  const order = guitarOrders.find((i) => i.id.toString() == orderId);
  if (order == null) {
    return <OrderNotfound />;
  }
  const subtotal = order.items.reduce(
    (accumlator, currentValue) =>
      accumlator + currentValue.price * currentValue.quantity,
    0
  );
  const total = subtotal + order.shippingFee;
  const copyToClipboard = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast("Đã sao chép!", {
          description: value,
        });
      })
      .catch((_) => {
        toast("Không thể sao chép!");
      });
  };
  return (
    <>
      <div className="my-3 p-3 rounded bg-white drop-shadow">
        <h1 className="text-xl font-semibold text-center pb-3">
          Thông tin đơn hàng
        </h1>
        <hr />
        <div className="p-3">
          <div className="flex justify-between text-lg font-semibold">
            <p>Mã đơn hàng:</p>
            <p>
              {order.orderId}{" "}
              <button
                className="ms-3 text-blue-500 bg-blue-50 px-3 rounded"
                onClick={() => {
                  copyToClipboard(order.orderId);
                }}
              >
                Sao chép
              </button>
            </p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Thời gian đặt hàng:</p>
            <p>{formatDateTime(new Date(order.orderDate))}</p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Thời gian thanh toán:</p>
            {order.paymentDate ? (
              <p>{formatDateTime(new Date(order.paymentDate))}</p>
            ) : (
              <p>--/--/---- --:--</p>
            )}
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Thời gian giao hàng cho vận chuyển:</p>
            {order.shippingDate ? (
              <p>{formatDateTime(new Date(order.shippingDate))}</p>
            ) : (
              <p>--/--/---- --:--</p>
            )}
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Thời gian hoàn thành:</p>
            {order.deliveryDate ? (
              <p>{formatDateTime(new Date(order.deliveryDate))}</p>
            ) : (
              <p>--/--/---- --:--</p>
            )}
          </div>
        </div>
        <hr />
        <div className="flex gap-3 py-3">
          <MapPin className="mt-1" />
          <div className="flex-1">
            <div className="flex">
              <p className="flex-1 font-semibold text-lg">Địa chỉ nhận hàng</p>
              <button
                className="text-blue-500 bg-blue-50 px-3 rounded font-semibold"
                onClick={() => {
                  copyToClipboard(`${order.customerName}; ${order.phone}; ${order.shippingAddress}`);
                }}
              >
                Sao chép
              </button>
            </div>
            <div className="text-gray-500">
              <p>{order.customerName}</p>
              <p>{order.phone}</p>
              <p>{order.shippingAddress}</p>
            </div>
          </div>
        </div>
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
                  <div className="text-gray-500">
                    Phân loại: {item.category}
                  </div>
                  <div>Số lượng: {item.quantity}</div>
                  <p className="font-semibold">
                    {formatCurrencyVND(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-semibold p-3">
          <div className="flex justify-between text-gray-500">
            <p>Tổng tiền hàng:</p>
            <p>{formatCurrencyVND(subtotal)}</p>
          </div>
          <div className="flex justify-between  text-gray-500">
            <p>Phí vận chuyển:</p>
            <p>{formatCurrencyVND(order.shippingFee)}</p>
          </div>
          <div className="flex justify-between text-lg">
            <p>Thành tiền:</p>
            <p className="text-orange-500">{formatCurrencyVND(total)}</p>
          </div>
        </div>
        <hr />
        <div className="flex gap-3 py-3">
          <HandCoins className="mt-1" />
          <div>
            <p className="text-lg font-semibold">Phương thức thanh toán</p>
            <p className="text-gray-500">Thanh toán khi nhận hàng</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-3 mb-3">
        <Button variant={"outline"}>Hủy đơn hàng</Button>
        <Button>Mua lại</Button>
      </div>
    </>
  );
};

export default OrderDetailPage;
