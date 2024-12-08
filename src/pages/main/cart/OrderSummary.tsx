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
    <div className="p-3 bg-zinc-50 rounded-lg">
      <h1 className="text-2xl uppercase font-extrabold pb-5">
        Tóm tắt đơn hàng
      </h1>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p>Tổng cộng:</p>
          <p className="font-bold text-lg">{formatCurrencyVND(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p>Vận chuyển:</p>
          <p className="font-bold text-lg text-orange-500">Miễn phí</p>
        </div>
        <div className="flex justify-between">
          <TooltipProvider>
            <Tooltip>
              <div className="flex items-baseline gap-1">
                Thuế
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
        <p className="font-bold">Tổng chi phí ước tính:</p>
        <p className="font-bold text-lg">{formatCurrencyVND(subtotal)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
