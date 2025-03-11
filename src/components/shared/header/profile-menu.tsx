import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthStore from "@/stores/use-auth-store";
import {
  Bell,
  CircleUser,
  ClipboardList,
  DoorOpen,
  Heart,
  History,
  Settings,
} from "lucide-react";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
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
const ProfileMenu = () => {
  const authStore = useAuthStore();
  const handleLogout = () => {
    console.log("Log out");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center">
          <IoMdPerson className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div>Tài khoản của tôi</div>
          <p className="text-zinc-500 text-sm font-normal">
            {authStore.user?.email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item, index) => {
            return (
              <Link to={item.href} key={index}>
                <DropdownMenuItem className="cursor-pointer">
                  <item.icon />
                  {item.title}
                </DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500 cursor-pointer"
          onClick={handleLogout}
        >
          <DoorOpen />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
