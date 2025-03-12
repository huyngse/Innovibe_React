import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import CheckOutForm from "./CheckOutForm";
import OrderSummary from "../cart/OrderSummary";
import CartItem from "./CartItem";
import useCartStore from "@/stores/use-cart-store";
import useAuthStore from "@/stores/use-auth-store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const CheckOutPage = () => {
  const store = useCartStore();
  const authStore = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (authStore.user == null) {
      toast.error("Vui lòng đăng nhập để tiếp tục", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/log-in");
      }, 1000);
    }
  }, []);

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
                  ({store.items.length} mặt hàng)
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
