import { Input } from "@/components/ui/input";
import { formatCurrencyVND } from "@/lib/currency";
import useCartStore from "@/stores/use-cart-store";
import { Product } from "@/types/product";
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
    <div className="grid grid-cols-5 gap-5 p-5">
      <img
        src={product.images[0].imageURL}
        alt={product.productId + "-" + product.name}
        className="col-span-1 w-full h-full object-cover"
      />
      <div className="col-span-4 items-start flex flex-col">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <Link to={`/product/${product.productId}`}>
              <h5 className="font-semibold text-xl">{product.name}</h5>
            </Link>
            {/* <p className="text-sm text-gray-500 pb-3">Model #: {model}</p> */}
            <p className="font-bold text-green-500 uppercase">
              {product.status}
            </p>
            <p className="text-sm text-gray-500 pb-3">Available To Ship</p>
          </div>
          <div className="flex flex-col gap-5 py-2 items-end col-span-3">
            <span className="font-bold text-lg">
              {formatCurrencyVND(product.price * quantity)}
            </span>
            <Input
              type="number"
              value={quantity}
              className="w-20"
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
            />
          </div>
        </div>
        <div className="flex justify-between w-full"></div>
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
