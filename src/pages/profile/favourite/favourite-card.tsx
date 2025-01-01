import { Button } from "@/components/ui/button";
import { formatCurrencyVND } from "@/lib/currency";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FavouriteCard = ({
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
  const [isFavourite, setIsFavourite] = useState(true);
  return (
    <div className="text-sm bg-white p-3">
      <img src={image} alt="Product image" />
      <Link to={`/product/${productId}`}>
        <p className="font-semibold my-3">{productName}</p>
      </Link>
      <p className="text-xs font-bold text-green-500">{status}</p>
      <div className="flex items-center">
        <div className="flex-1">
          <p className="font-bold">
            {salesPrice
              ? formatCurrencyVND(salesPrice)
              : formatCurrencyVND(price)}
          </p>
          <p className="text-xs line-through decoration-red-500 decoration-1 font-semibold">
            {salesPrice && formatCurrencyVND(price)}
          </p>
        </div>
        <button
          onClick={() => {
            setIsFavourite(!isFavourite);
          }}
        >
          <Heart
            fill={isFavourite ? "red" : "transparent"}
            className={isFavourite ? "text-red-500" : ""}
          />
        </button>
      </div>
      <Button className="mt-2 w-full rounded-none" variant={"outline"}>Thêm vào giỏ</Button>
    </div>
  );
};

export default FavouriteCard;
