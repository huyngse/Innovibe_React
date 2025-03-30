const OrderStatus = ({
  status,
}: {
  status:
    | "Shipped"
    | "Pending"
    | "Processing"
    | "Delivered"
    | "Cancelled"
    | "Returned";
}) => {
  if (status == "Cancelled") {
    return <span className="font-semibold text-red-500">Đã hủy</span>;
  } else if (status == "Delivered") {
    return <span className="font-semibold text-green-500">Đã giao hàng</span>;
  } else if (status == "Pending") {
    return (
      <span className="font-semibold text-orange-500">Đợi thanh toán</span>
    );
  } else if (status == "Processing") {
    return <span className="font-semibold text-blue-500">Đang chuẩn bị hàng</span>;
  } else if (status == "Returned") {
    return <span className="font-semibold text-orange-500">Đã trả hàng</span>;
  } else if (status == "Shipped") {
    return <span className="font-semibold text-blue-500">Đang giao hàng</span>;
  }
};

export default OrderStatus;
