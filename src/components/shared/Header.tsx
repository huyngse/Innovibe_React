import LogoImg from "@/assets/imgs/logo.png";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import ShoppingCartButton from "./ShoppingCartButton";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
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
            placeholder="SEARCH..."
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
          <div>
            <Link to={"/sign-up"} className="text-sm">
              SIGN UP
            </Link>
            /
            <Link to={"/log-in"} className="text-sm">
              LOG IN
            </Link>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center">
              <IoMdPerson className="h-5 w-5" />
            </button>
            <ShoppingCartButton />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
