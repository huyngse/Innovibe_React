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
import guitarImage1 from "@/assets/imgs/guitar_1.png";
import guitarImage2 from "@/assets/imgs/guitar_2.png";
import CartItem from "../CartItem";
import { ScrollArea } from "../ui/scroll-area";
import { formatCurrencyVND } from "@/lib/currency";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const items = [
  {
    id: 1,
    productName:
      "Sterling by Music Man JP60 John Petrucci Signature Electric Guitar - Stealth Black",
    price: 18_700_000,
    quantity: 1,
    imageUrl: guitarImage1,
  },
  {
    id: 2,
    productName:
      "Sterling by Music Man JP60 John Petrucci Signature Electric Guitar - Stealth Black",
    price: 18_700_000,
    quantity: 1,
    imageUrl: guitarImage2,
  },
];
const ShoppingCartButton = () => {
  const totalValue = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <FaShoppingCart className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent className="min-w-[450px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-3xl uppercase font-extrabold">
            Giỏ Hàng
          </SheetTitle>
          <SheetDescription>2 sản phẩm</SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="flex flex-col gap-5 py-5">
            {items.map((item, index: number) => {
              return (
                <CartItem
                  key={index}
                  id={item.id}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  productName={item.productName}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
        </ScrollArea>
        <div>
          <div className="flex justify-between items-center">
            <h5 className="font-bold text-2xl">Tổng cộng giỏ hàng</h5>
            <p className="font-bold">{formatCurrencyVND(totalValue)}</p>
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
