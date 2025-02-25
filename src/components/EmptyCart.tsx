import emptyCartImage from "@/assets/imgs/empty_cart.png";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 gap-3">
      <img src={emptyCartImage} alt="" width={200} />
      <h1 className="text-lg font-bold">Giỏ Hàng Trống</h1>
      <p className="text-gray-500">
        Hiện tại bạn chưa có sản phẩm nào trong giỏ hàng.
      </p>
      <Link to="/search">
        <Button>Tiếp tục mua sắm</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
