import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

const ProfileMenu = () => {
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
          <p className="text-zinc-500 text-sm font-normal">customer@gmail.com</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to={"/profile"}>
            <DropdownMenuItem className="cursor-pointer">
              <CircleUser />
              Hồ sơ
            </DropdownMenuItem>
          </Link>
          <Link to={"/profile/transaction-history"}>
            <DropdownMenuItem  className="cursor-pointer">
              <Heart />
              Danh sách yêu thích
            </DropdownMenuItem>
          </Link>
          <Link to={"/profile/transaction-history"}>
            <DropdownMenuItem  className="cursor-pointer">
              <ClipboardList />
              Đơn hàng
            </DropdownMenuItem>
          </Link>
          <Link to={"/profile/order-history"}>
            <DropdownMenuItem  className="cursor-pointer">
              <History />
              Lịch sử giao dịch
            </DropdownMenuItem>
          </Link>
          <Link to={"/profile/order-history"}>
            <DropdownMenuItem  className="cursor-pointer">
              <Bell />
              Thông báo
            </DropdownMenuItem>
          </Link>
          <Link to={"/profile/settings"}>
            <DropdownMenuItem  className="cursor-pointer">
              <Settings />
              Cài đặt
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={handleLogout}>
          <DoorOpen />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
