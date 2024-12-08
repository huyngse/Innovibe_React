import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import CheckOutForm from "./CheckOutForm";
import OrderSummary from "../cart/OrderSummary";
import guitarImage1 from "@/assets/imgs/guitar_1.png";
import guitarImage2 from "@/assets/imgs/guitar_2.png";
import CartItem from "./CartItem";
const items = [
  {
    id: 1,
    productName:
      "Sterling by Music Man JP60 John Petrucci Signature Electric Guitar - Stealth Black",
    model: "0119181790",
    price: 18_700_000,
    quantity: 1,
    imageUrl: guitarImage1,
    status: "In Stock",
  },
  {
    id: 2,
    productName:
      "Sterling by Music Man JP60 John Petrucci Signature Electric Guitar - Stealth Black",
    model: "0119181790",
    price: 18_700_000,
    quantity: 1,
    imageUrl: guitarImage2,
    status: "In Stock",
  },
];
const CheckOutPage = () => {
  const subtotal = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  return (
    <MaxWidthWrapper className="py-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <h1 className="text-3xl font-extrabold uppercase">Shipping</h1>
          <hr className="w-24 border-2 border-orange-600 my-3 rounded" />
          <CheckOutForm />
        </div>
        <div className="col-span-4">
          <OrderSummary subtotal={subtotal} />
          <div className="py-5">
            <div className="flex justify-between">
              <p className="text-lg font-bold">
                Giỏ hàng của bạn{" "}
                <span className="text-sm font-normal text-gray-500">
                  (2 mặt hàng)
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {items.map((item, index: number) => {
              return (
                <CartItem
                  id={item.id}
                  key={index}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  productName={item.productName}
                  model={item.model}
                  quantity={item.quantity}
                  status={item.status}
                />
              );
            })}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CheckOutPage;
