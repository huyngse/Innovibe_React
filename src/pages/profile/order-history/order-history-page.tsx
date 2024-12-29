import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { guitarOrders } from "@/mock-data/orders";
import OrderList from "./order-list";
import { orderStatus } from "@/constants/order-status";

const OrderHistoryPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  return (
    <div className="py-5">
      <div className="overflow-auto flex">
        {orderStatus.map((item, index: number) => {
          const numOfOrders = guitarOrders.filter(
            (order) => order.status == item.value
          ).length;
          return (
            <Button
              key={index}
              onClick={() => {
                setSelectedStatus(item.value);
              }}
              className={cn(
                "px-5 rounded-none",
                selectedStatus == item.value &&
                  "bg-orange-500 hover:bg-orange-400 hover:text-white text-white"
              )}
              variant={"outline"}
            >
              {item.label}
              {numOfOrders > 0 && ` (${numOfOrders})`}
            </Button>
          );
        })}
      </div>
      <div>
        <OrderList orders={guitarOrders} />
      </div>
    </div>
  );
};

export default OrderHistoryPage;
