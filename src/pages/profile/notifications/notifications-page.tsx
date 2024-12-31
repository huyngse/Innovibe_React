import { Notification } from "@/types/notification";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import notifications from "@/mock-data/notifications.json";
import { Button } from "@/components/ui/button";
const NotificationsPage = () => {
  const data = notifications as Notification[];
  return (
    <div className="py-3">
      <div className="flex gap-3 justify-end py-3">
        <Button variant={"ghost"}>Đánh dấu đã đọc tất cả</Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default NotificationsPage;
