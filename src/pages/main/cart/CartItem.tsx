import { Input } from "@/components/ui/input";
import { formatCurrencyVND } from "@/lib/currency";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({
  id,
  productName,
  model,
  quantity,
  price,
  imageUrl,
  status,
}: {
  id: number;
  productName: string;
  model: string;
  quantity: number;
  price: number;
  imageUrl: string;
  status: string;
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  return (
    <div className="grid grid-cols-5 gap-5 p-5">
      <img
        src={imageUrl}
        alt={id + "-" + productName}
        className="col-span-1 w-full h-full object-cover"
      />
      <div className="col-span-4 items-start flex flex-col">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <Link to={`/product/${id}`}>
              <h5 className="font-semibold text-xl">{productName}</h5>
            </Link>
            <p className="text-sm text-gray-500 pb-3">Model #: {model}</p>
            <p className="font-bold text-green-500 uppercase">{status}</p>
            <p className="text-sm text-gray-500 pb-3">Available To Ship</p>
          </div>
          <div className="flex flex-col gap-5 py-2 items-end col-span-3">
            <span className="font-bold text-lg">
              {formatCurrencyVND(price)}
            </span>
            <Input
              type="number"
              value={currentQuantity}
              className="w-20"
              onChange={(e) => setCurrentQuantity(parseInt(e.target.value))}
            ></Input>
          </div>
        </div>
        <div className="flex justify-between w-full"></div>
        <button className="uppercase text-orange-600 underline">Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
