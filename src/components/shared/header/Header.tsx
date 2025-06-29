import LogoImg from "@/assets/imgs/logo.png";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../../ui/input";
import ShoppingCartButton from "../ShoppingCartButton";
import ProfileMenu from "./profile-menu";
import useAuthStore from "@/stores/use-auth-store";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const token = localStorage.getItem("accessToken");
  const authStore = useAuthStore();
  const navigate = useNavigate();
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, []);
  const fetchProfile = async () => {
    const result = await authStore.fetchUserInfo();
    if (result.error) {
      authStore.logout();
    }
  }
  return (
    <header
      className={cn(
        "bg-gray-900 text-white transition-all duration-300 z-50 -top-10 backdrop-blur-md",
        isSticky && "sticky top-0 shadow bg-gray-900/70"
      )}
    >
      <MaxWidthWrapper className="flex justify-between p-4 items-center">
        <form
          className="relative"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search?keyword=${searchInputRef.current?.value}`);
          }}
        >
          <Input
            type="text"
            placeholder="TÌM KIẾM..."
            className="bg-white pe-8 text-black text-sm placeholder:text-xs"
            ref={searchInputRef}
          />
          <button className="focus:outline-double p-1 rounded absolute right-2 top-1/2 -translate-y-1/2">
            <CiSearch className="text-gray-500 h-4 w-4 " />
          </button>
        </form>
        <div>
          <Link to={"/"}>
            <img src={LogoImg} alt="" width={100} />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {!token && (
            <div>
              <Link to={"/sign-up"} className="text-sm uppercase">
                Đăng Ký
              </Link>
              /
              <Link to={"/log-in"} className="text-sm uppercase">
                Đăng Nhập
              </Link>
            </div>
          )}
          <div className="flex gap-4">
            {token && authStore.user && <ProfileMenu />}
            <ShoppingCartButton />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
