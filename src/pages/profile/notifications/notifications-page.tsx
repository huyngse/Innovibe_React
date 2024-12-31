import { Notification } from "@/types/notification";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import notifications from "@/mock-data/notifications.json";
const NotificationsPage = () => {
  const data = notifications as Notification[];
  return (
    <div className="py-3">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default NotificationsPage;
