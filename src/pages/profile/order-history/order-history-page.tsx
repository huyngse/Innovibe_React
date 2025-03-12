import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import OrderList from "./order-list";
import { orderStatus } from "@/constants/order-status";
import useOrderStore from "@/stores/use-order-store";
import useAuthStore from "@/stores/use-auth-store";
import Loader from "@/components/Loader";

const OrderHistoryPage = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const orderStore = useOrderStore();
  const authStore = useAuthStore();
  useEffect(() => {
    if (authStore.user) {
      orderStore.fetchOrdersByUserId(authStore.user.accountId);
    }
  }, [authStore.user]);

  if (orderStore.loading) return <Loader />;
  return (
    <div className="py-5">
      <div className="overflow-auto flex">
        {orderStatus.map((item, index: number) => {
          const numOfOrders = orderStore.orders.filter(
            (order) => order.orderStatus == item.value
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
        <OrderList orders={orderStore.orders} />
      </div>
    </div>
  );
};

export default OrderHistoryPage;
