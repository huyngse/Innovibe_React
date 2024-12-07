import { Input } from "@/components/ui/input";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { FaTicket } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const CouponCodeForm = () => {
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
  );
};

export default CouponCodeForm;
