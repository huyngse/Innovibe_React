import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import guitarImage1 from "@/assets/imgs/guitar_1.png";
import guitarImage2 from "@/assets/imgs/guitar_2.png";
import CartItem from "./CartItem";
import React from "react";
import RecentlyViewed from "@/components/RecentlyViewed";
import OrderSummary from "./OrderSummary";

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
const ViewCartPage = () => {
  const subtotal = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
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
            <h1 className="text-4xl uppercase font-extrabold ">
              Shopping Cart
            </h1>
            <div className="flex flex-col gap-5 py-5">
              <hr className="border-black" />
              {items.map((item, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <CartItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      price={item.price}
                      productName={item.productName}
                      model={item.model}
                      quantity={item.quantity}
                      status={item.status}
                    />
                    <hr className="border-black" />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="col-span-4">
            <OrderSummary subtotal={subtotal}/>
          </div>
        </div>
        <RecentlyViewed />
      </MaxWidthWrapper>
    </div>
  );
};

export default ViewCartPage;
