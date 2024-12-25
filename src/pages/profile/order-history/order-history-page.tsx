import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const OrderHistoryPage = () => {
  return (
    <div className="py-5">
      <Tabs defaultValue="All" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="All" className="px-5 py-3">
            Tất cả
          </TabsTrigger>
          <TabsTrigger value="Pending" className="px-5 py-3">
            Chờ thanh toán
          </TabsTrigger>
          <TabsTrigger value="Shipped" className="px-5 py-3">
            Chờ giao hàng
          </TabsTrigger>
          <TabsTrigger value="Delivered" className="px-5 py-3">
            Hoàn thành
          </TabsTrigger>
          <TabsTrigger value="Cancelled" className="px-5 py-3">
            Đã hủy
          </TabsTrigger>
          <TabsTrigger value="Returned" className="px-5 py-3">
            Trả hàng/Hoàn tiền
          </TabsTrigger>
        </TabsList>
        <TabsContent value="All">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="Pending">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default OrderHistoryPage;
