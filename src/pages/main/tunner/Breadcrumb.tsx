import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="p-3 uppercase font-bold border-b border-black">
      <MaxWidthWrapper className="flex gap-3 justify-center items-center">
        <Link to={"/"}>Home</Link>
        <MdKeyboardArrowRight className="h-5 w-5"/>
        <div>
            Online tuner
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Breadcrumb;
