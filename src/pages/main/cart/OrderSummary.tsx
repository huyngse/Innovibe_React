import { FaCircleInfo } from "react-icons/fa6";
import { formatCurrencyVND } from "@/lib/currency";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const OrderSummary = ({ subtotal }: { subtotal: number }) => {
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
    </div>
  );
};

export default OrderSummary;
