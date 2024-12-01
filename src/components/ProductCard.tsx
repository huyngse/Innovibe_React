import { formatCurrencyVND } from "@/lib/currency";

const ProductCard = ({
  productId,
  productName,
  status,
  price,
  image,
}: {
  productId: number;
  productName: string;
  status: string;
  price: number;
  image: string;
}) => {
  return (
    <div className="text-sm cursor-pointer active:cursor-grabbing">
      <img src={image} alt="Product image" />
      <p className="font-semibold my-3">{productName}</p>
      <p className="text-xs font-bold text-green-500">{status}</p>
      <p className="font-bold">{formatCurrencyVND(price)}</p>
    </div>
  );
};

export default ProductCard;
