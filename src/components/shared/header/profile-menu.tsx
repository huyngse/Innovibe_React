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
  CircleUser,
  DoorOpen,
  HandCoins,
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
        <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to={"/profile"}>
            <DropdownMenuItem>
              <CircleUser />
              Hồ sơ
            </DropdownMenuItem>
          </Link>
          <Link to={"/profile/transaction-history"}>
            <DropdownMenuItem>
              <HandCoins />
              Lịch sử giao dịch
            </DropdownMenuItem>
          </Link>
          <Link to={"/profile/order-history"}>
            <DropdownMenuItem>
              <History />
              Lịch sử đơn đặt
            </DropdownMenuItem>
          </Link>
          <Link to={"/profile/settings"}>
            <DropdownMenuItem>
              <Settings />
              Cài đặt
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-500" onClick={handleLogout}>
          <DoorOpen />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
