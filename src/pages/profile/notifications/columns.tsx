import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Notification } from "@/types/notification";
import { formatDateTime } from "@/utils/date";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Check, Trash2 } from "lucide-react";

export const columns: ColumnDef<Notification>[] = [
  {
    accessorKey: "message",
    header: "Nội dung",
    cell: ({ row }) => {
      const notification = row.original;
      return (
        <div
          className={notification.status == "unread" ? "text-orange-600" : ""}
        >
          <p className="mb-2">{notification.message}</p>
          <p className="text-gray-500">{notification.type}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "timestamp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 m-0 w-full justify-start"
        >
          Thời gian
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const notification = row.original;
      return <div>{formatDateTime(new Date(notification.timestamp))}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const notification = row.original;
      return (
        <div className="flex gap-3">
          <Button
            className="rounded-full text-red-500 hover:text-red-500"
            variant={"outline"}
            onClick={() => {
              console.log(notification);
            }}
          >
            <Trash2 />
          </Button>
          <Button
            className={cn(
              "rounded-full",
              notification.status == "unread"
                ? "bg-orange-500 text-white hover:bg-orange-600 hover:text-white"
                : ""
            )}
            variant={"outline"}
            onClick={() => {
              console.log(notification);
            }}
            disabled={notification.status == "read"}
          >
            <Check />
          </Button>
        </div>
      );
    },
  },
];
