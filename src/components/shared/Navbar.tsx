import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <div className="bg-orange-600 transition-all duration-300">
      <MaxWidthWrapper className="p-3 flex justify-evenly gap-5 items-center">
        <Link to={"/search"} className="uppercase font-bold text-white">
          Shop by category
        </Link>
        <Link to={"/search"} className="uppercase font-bold text-white">
          Shop by branch
        </Link>
        <Link to={"/search"} className="uppercase font-bold text-white">
          Second hand
        </Link>
        <Link to={"/course"} className="uppercase font-bold text-white">
          Guitar courses
        </Link>
        <Link to={"/tuner"} className="uppercase font-bold text-white">
          Guitar tuner
        </Link>
        <Link to={"/blog"} className="uppercase font-bold text-white">
          Blog posts
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
