import { formatCurrencyVND } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  productId,
  productName,
  status,
  price,
  salesPrice,
  image,
}: {
  productId: number;
  productName: string;
  status: string;
  price: number;
  salesPrice?: number;
  image: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
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
        <img src={image} alt="Product image" />
        <Link to={`/product/${productId}`}>
          <p className="font-semibold my-3">{productName}</p>
        </Link>
        <p className="text-xs font-bold text-green-500">{status}</p>
        <p className="font-bold">
          {salesPrice
            ? formatCurrencyVND(salesPrice)
            : formatCurrencyVND(price)}
        </p>
        <p className="text-xs line-through decoration-red-500 decoration-1 font-semibold">{salesPrice && formatCurrencyVND(price)}</p>
      </div>
      <div className="text-center absolute top-40 z-10 left-1/2 w-full -translate-x-1/2">
        <button
          className={cn(
            "bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-500 text-sm text-white uppercase font-semibold px-4 py-2 rounded-full transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
