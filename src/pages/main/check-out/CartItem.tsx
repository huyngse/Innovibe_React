import { formatCurrencyVND } from "@/lib/currency";
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
  return (
    <div className="grid grid-cols-4 gap-5">
      <img
        src={imageUrl}
        alt={id + "-" + productName}
        className="col-span-1 w-full object-cover"
      />
      <div className="col-span-3 items-start flex flex-col">
        <Link to={`/product/${id}`}>
          <h5 className="font-semibold">{productName}</h5>
        </Link>
        <div className="flex justify-between w-full">
          <p className="text-sm text-gray-500">Model #: {model}</p>
          <p className="text-sm text-orange-500 underline">Qty: {quantity}</p>
        </div>
        <div className="flex justify-between w-full">
          <p className="font-bold text-green-500 uppercase">{status}</p>
          <div className="flex justify-between font-bold">
            {formatCurrencyVND(price)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
