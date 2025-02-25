import { formatCurrencyVND } from "@/lib/currency";
import { Input } from "./ui/input";
import { useState } from "react";
import { Product } from "@/types/product";

const CartItem = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  return (
    <div className="grid grid-cols-3 gap-5 pe-3">
      <img
        src={product.images[0].imageUrl}
        alt={product.id + "-" + product.productName}
      />
      <div className="col-span-2 flex flex-col gap-3 items-start">
        <h5 className="font-semibold">{product.productName}</h5>
        <div className="flex justify-between w-full">
          <Input
            type="number"
            value={currentQuantity}
            className="w-16"
            onChange={(e) => setCurrentQuantity(parseInt(e.target.value))}
          ></Input>
          <span className="font-bold">{formatCurrencyVND(product.price)}</span>
        </div>
        <button className="uppercase text-orange-600 underline">Xóa</button>
      </div>
    </div>
  );
};

export default CartItem;
