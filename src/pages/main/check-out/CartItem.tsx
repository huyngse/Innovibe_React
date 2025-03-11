import { formatCurrencyVND } from "@/lib/currency";
import { Product } from "@/types/product";
import { Link } from "react-router-dom";

const CartItem = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <img
        src={product.images[0].imageURL}
        alt={product.productId + "-" + product.name}
        className="col-span-1 w-full object-cover"
      />
      <div className="col-span-3 items-start flex flex-col">
        <Link to={`/product/${product.productId}`}>
          <h5 className="font-semibold">{product.name}</h5>
        </Link>
        <div className="flex justify-between w-full">
          {/* <p className="text-sm text-gray-500">Model #: {model}</p> */}
          <p className="text-sm text-orange-500 underline">
            Số lượng: {quantity}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <p className="font-bold text-green-500 uppercase">
            {product.status == "In Stock" ? "Còn hàng" : "Hết hàng"}
          </p>
          <div className="flex justify-between font-bold">
            {formatCurrencyVND(product.price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
