import { formatCurrencyVND } from "@/lib/currency";
import { Input } from "./ui/input";
import { Product } from "@/types/product";
import useCartStore from "@/stores/use-cart-store";
import { Link } from "react-router-dom";

const CartItem = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  const store = useCartStore();
  const handleRemoveItem = () => {
    store.removeItem(product.productId);
  };
  return (
    <div className="grid grid-cols-3 gap-5 pe-3">
      <Link to={`/product/${product.productId}`}>
        <img
          src={product.images[0].imageURL}
          alt={product.productId + "-" + product.name}
        />
      </Link>
      <div className="col-span-2 flex flex-col gap-3 items-start">
        <Link to={`/product/${product.productId}`}>
          <h5 className="font-semibold">{product.name}</h5>
        </Link>
        <div className="flex justify-between w-full">
          <Input
            type="number"
            value={quantity}
            className="w-16"
            onChange={(e) => {
              if (parseInt(e.target.value) == 0) {
                store.removeItem(product.productId);
              } else {
                store.updateQuantity(
                  product.productId,
                  parseInt(e.target.value)
                );
              }
            }}
          ></Input>
          <span className="font-bold">
            {formatCurrencyVND(product.price * quantity)}
          </span>
        </div>
        <button
          onClick={handleRemoveItem}
          className="uppercase text-orange-600 underline"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default CartItem;
