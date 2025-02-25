import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import CartItem from "./CartItem";
import React from "react";
import RecentlyViewed from "@/components/RecentlyViewed";
import OrderSummary from "./OrderSummary";
import CouponCodeForm from "./CouponCodeForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useCartStore from "@/stores/use-cart-store";
import EmptyCart from "@/components/EmptyCart";
const ViewCartPage = () => {
  const store = useCartStore();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "View Cart", href: "/cart" },
        ]}
      />
      <MaxWidthWrapper className="pb-10">
        <div className="grid grid-cols-12 py-10 gap-10">
          <div className="col-span-8">
            <h1 className="text-4xl uppercase font-extrabold ">Giỏ hàng</h1>
            {store.items.length == 0 && (
              <div className="py-10">
                <EmptyCart />
              </div>
            )}
            <div className="flex flex-col gap-5 py-5">
              <hr className="border-black" />
              {store.items.map((item, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <CartItem product={item.product} quantity={item.quantity} />
                    <hr className="border-black" />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="col-span-4">
            <OrderSummary subtotal={store.total} />
            <Link to={"/check-out"}>
              <Button className="w-full my-5">Check Out</Button>
            </Link>
            <CouponCodeForm />
          </div>
        </div>
        <RecentlyViewed />
      </MaxWidthWrapper>
    </div>
  );
};

export default ViewCartPage;
