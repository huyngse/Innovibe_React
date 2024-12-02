import LogoImg from "@/assets/imgs/logo.png";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
      if (window.scrollY > 60) {
          setIsSticky(true);
      } else {
          setIsSticky(false);
      }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <header className={cn("bg-gray-900 text-white transition-all duration-300 z-50 -top-10 backdrop-blur-md", isSticky && "sticky top-0 shadow bg-gray-900/70")}>
      <MaxWidthWrapper className="flex justify-between p-4 items-center">
        <div>
          <div className="bg-white rounded-md flex items-center py-1 px-2 gap-2">
            <input
              type="text"
              className="text-gray-500 text-xs px-3 py-2 bg-transparent flex-1 focus:outline-double rounded"
              placeholder="SEARCH..."
            />
            <button className="focus:outline-double p-1 rounded">
              <CiSearch className="text-gray-500 h-4 w-4 " />
            </button>
          </div>
        </div>
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
              <IoMdPerson className="h-5 w-5"/>
            </button>
            <button className="flex items-center">
              <FaShoppingCart className="h-5 w-5"/>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
