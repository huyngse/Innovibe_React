import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "../CartItem";
import { ScrollArea } from "../ui/scroll-area";
import { formatCurrencyVND } from "@/lib/currency";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import useCartStore from "@/stores/use-cart-store";
import EmptyCart from "../EmptyCart";

const ShoppingCartButton = () => {
  const store = useCartStore();
  const totalItems = store.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger className="flex items-center relative">
        {store.items.length > 0 && (
          <p
            className="bg-red-500 text-white rounded-full size-4 -top-2 -right-2 absolute font-semibold"
            style={{ fontSize: "10px" }}
          >
            {totalItems}
          </p>
        )}

        <FaShoppingCart className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent className="min-w-[450px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-3xl uppercase font-extrabold">
            Giỏ Hàng
          </SheetTitle>
          <SheetDescription>{store.items.length} sản phẩm</SheetDescription>
        </SheetHeader>
        {store.items.length == 0 && <EmptyCart />}
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-5 py-5">
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
        </ScrollArea>
        <div>
          <div className="flex justify-between items-center">
            <h5 className="font-bold text-2xl">Tổng cộng giỏ hàng</h5>
            <p className="font-bold">{formatCurrencyVND(store.total)}</p>
          </div>
          <p className="text-gray-500 text-sm">
            Không bao gồm thuế và giao hàng
          </p>
          <Link to={"/cart"}>
            <SheetClose asChild>
              <Button className="uppercase font-bold w-full mt-5 rounded-xl">
                Xem giỏ hàng
              </Button>
            </SheetClose>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartButton;
