import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <MaxWidthWrapper className="p-3 bg-orange-600 flex justify-evenly gap-5 items-center">
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
  );
};

export default Navbar;
