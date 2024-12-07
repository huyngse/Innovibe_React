import { FaCircleInfo, FaTicket } from "react-icons/fa6";
import { formatCurrencyVND } from "@/lib/currency";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
const OrderSummary = ({ subtotal }: { subtotal: number }) => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [couponMessage, setCouponMessage] = useState<string | undefined>();
  const applyCoupon = () => {
    if (!couponCode) return;
    if (couponCode === "SAVE10") {
      setDiscount(10);
      setCouponMessage("Coupon applied! You saved $10.");
      setOpenMenu(false);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid coupon code.",
      });
    }
  };
  return (
    <div>
      <h1 className="text-2xl uppercase font-extrabold pb-5">Order Summary</h1>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p className="font-bold text-lg">{formatCurrencyVND(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p className="font-bold text-lg text-orange-500">Free</p>
        </div>
        <div className="flex justify-between">
          <TooltipProvider>
            <Tooltip>
              <div className="flex items-baseline gap-1">
                Tax{" "}
                <TooltipTrigger>
                  <FaCircleInfo className="w-3 h-3" />
                </TooltipTrigger>
              </div>
              <TooltipContent>
                <p>1% for VAT and 0.5% for PIT</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="font-bold text-lg">{formatCurrencyVND(0)}</p>
        </div>
      </div>
      <hr className="border-black my-3" />
      <div className="flex justify-between">
        <p className="font-bold">Estimated Total:</p>
        <p className="font-bold text-lg">{formatCurrencyVND(subtotal)}</p>
      </div>
      <Button className="w-full my-5">Check Out</Button>
      <div className="py-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold">
            <FaTicket className="h-5 w-5" /> Add A Discount Code
          </div>
          {discount == 0 ? (
            <button
              onClick={() => {
                setOpenMenu(true);
              }}
              className="active:rotate-12 duration-100"
            >
              <FaPlus />
            </button>
          ) : (
            <button
              onClick={() => {
                setCouponMessage(undefined);
                setDiscount(0);
                setCouponCode("");
              }}
            >
              <FaMinus />
            </button>
          )}
        </div>
        <p className="text-green-500">{couponMessage}</p>
        {openMenu && (
          <div className="py-5 flex flex-col gap-3">
            <Input
              placeholder="Enter Discount Code Here"
              className="text-center"
              value={couponCode}
              onChange={(e) => {
                setCouponCode(e.target.value);
              }}
            ></Input>
            <Button onClick={applyCoupon}>Save</Button>
            <Button
              variant={"outline"}
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
