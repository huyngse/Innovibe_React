import LogoImg from "@/assets/imgs/logo.png";
import { Input } from "antd";
import { SearchProps } from "antd/es/input";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const { Search } = Input;
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <div className="bg-gray-900 text-white">
      <MaxWidthWrapper className="flex justify-between p-4 items-center">
        <div>
          <Search
            placeholder="SEARCH"
            onSearch={onSearch}
            style={{ width: 200 }}
          />
        </div>
        <div>
          <img src={LogoImg} alt="" width={100} />
        </div>
        <div className="flex items-center gap-5">
          <div>
            <Link to={"/sign-up"} className="text-sm">SIGN UP</Link>/
            <Link to={"/login-in"} className="text-sm">LOG IN</Link>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center"><IoMdPerson /></button>
            <button className="flex items-center"><FaShoppingCart /></button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
