import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  CircleUser,
  ClipboardList,
  DoorOpen,
  Heart,
  History,
  Settings,
} from "lucide-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
const navItems = [
  {
    title: "Hồ sơ",
    icon: CircleUser,
    href: "/profile",
  },
  {
    title: "Danh sách ưa thích",
    icon: Heart,
    href: "/profile/favourite",
  },
  {
    title: "Đơn hàng",
    icon: ClipboardList,
    href: "/profile/order",
  },
  {
    title: "Lịch sử giao dịch",
    icon: History,
    href: "/profile/transaction-history",
  },
  {
    title: "Thông báo",
    icon: Bell,
    href: "/profile/notification",
  },
  {
    title: "Cài đặt",
    icon: Settings,
    href: "/profile/settings",
  },
];

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <MaxWidthWrapper className="bg-zinc-100">
      <div className="grid grid-cols-12">
        <div className="col-span-3 py-5">
          <div className="mb-5 flex gap-3 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-lg">@shadcn</div>
              <div className="text-zinc-500 text-sm">customer@gmail.com</div>
            </div>
          </div>
          <ul className="flex flex-col">
            {navItems.map((item, index: number) => {
              return (
                <li key={index}>
                  <button
                    className="flex gap-3 p-3 w-full hover:bg-zinc-200 active:bg-zinc-300"
                    onClick={() => {
                      navigate(item.href);
                    }}
                  >
                    <item.icon />
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
          <hr className="my-3" />
          <button className="flex gap-3 p-3 w-full hover:bg-zinc-200 active:bg-zinc-300 text-red-500">
            <DoorOpen />
            Đăng xuất
          </button>
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProfileLayout;
