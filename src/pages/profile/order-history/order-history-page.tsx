import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const filterItems = [
  {
    value: "All",
    label: "Tất cả",
  },
  {
    value: "Pending",
    label: "Chờ thanh toán",
  },
  {
    value: "Shipped",
    label: "Vận chuyển",
  },
  {
    value: "Delivered",
    label: "Hoàn thành",
  },
  {
    value: "Cancelled",
    label: "Đã hủy",
  },
  {
    value: "Returned",
    label: "Trả hàng/Hoàn tiền",
  },
];
const OrderHistoryPage = () => {
  const [orderStatus, setOrderStatus] = useState<string>("All");

  return (
    <div className="py-5">
      <div className="overflow-auto flex">
        {filterItems.map((item, index: number) => {
          return (
            <Button
              key={index}
              onClick={() => {
                setOrderStatus(item.value);
              }}
              className={cn(
                "px-5 rounded-none",
                orderStatus == item.value &&
                  "bg-orange-500 hover:bg-orange-400 hover:text-white text-white"
              )}
              variant={"outline"}
            >
              {item.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
