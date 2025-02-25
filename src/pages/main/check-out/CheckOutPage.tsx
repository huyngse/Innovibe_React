import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import CheckOutForm from "./CheckOutForm";
import OrderSummary from "../cart/OrderSummary";
import CartItem from "./CartItem";
import useCartStore from "@/stores/use-cart-store";

const CheckOutPage = () => {
  const store = useCartStore();
  return (
    <MaxWidthWrapper className="py-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <h1 className="text-3xl font-extrabold uppercase">Shipping</h1>
          <hr className="w-24 border-2 border-orange-600 my-3 rounded" />
          <CheckOutForm />
        </div>
        <div className="col-span-4">
          <OrderSummary subtotal={store.total} />
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
            {store.items.map((item, index: number) => {
              return (
                <CartItem
                  key={index}
                  product={item.product}
                  quantity={item.quantity}
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
