import { IoIosArrowUp } from "react-icons/io";

const BackToTopButton = () => {
  return (
    <button className="absolute right-4 -mt-20 p-4 z-20 border-none rounded-full bg-orange-600 drop-shadow">
      <IoIosArrowUp className="text-white" />
    </button>
  );
};

export default BackToTopButton;
