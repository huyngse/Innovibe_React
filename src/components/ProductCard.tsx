import { formatCurrencyVND } from "@/lib/currency";
import { cn } from "@/lib/utils";
import useCartStore from "@/stores/use-cart-store";
import { Product } from "@/types/product";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const store = useCartStore();
  const handleAddToCart = () => {
    store.addItem({
      product: product,
      quantity: 1,
    });
    toast.success("Thêm giỏ hàng thành công", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="text-sm">
        <img src={product.images[0].imageURL} alt="Product image" />
        <Link to={`/product/${product.productId}`}>
          <p className="font-semibold my-3">{product.name}</p>
        </Link>
        <p className="text-xs font-bold text-green-500">{status}</p>
        <p className="font-bold">
          {product.discount
            ? formatCurrencyVND(product.discount)
            : formatCurrencyVND(product.price)}
        </p>
        <p className="text-xs line-through decoration-red-500 decoration-1 font-semibold">
          {product.discount != 0 && formatCurrencyVND(product.price)}
        </p>
      </div>
      <div className="text-center absolute top-40 z-10 left-1/2 w-full -translate-x-1/2">
        <button
          className={cn(
            "bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600 text-sm text-white uppercase font-semibold px-4 py-2 rounded-full transition-all duration-100",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          onClick={handleAddToCart}
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
