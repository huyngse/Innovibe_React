import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const CheckOutPage = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-8">
          <h1 className="text-3xl font-extrabold uppercase">Shipping</h1>
          <hr className="w-24 border-2 border-orange-600 my-3 rounded" />
          <h2 className="font-bold text-lg">Shipping Address</h2>
          <div className="grid grid-cols-12 gap-3 py-3">
            <Input
              placeholder="Country/Region"
              className="py-6 col-span-12"
            ></Input>
            <Input placeholder="Email" className="py-6 col-span-6"></Input>
            <Input
              placeholder="Phone Number"
              className="py-6 col-span-6"
            ></Input>
            <Input placeholder="Full Name" className="py-6 col-span-12"></Input>
            <Input placeholder="Address" className="py-6 col-span-12"></Input>
            <Input
              placeholder="Company (Optional)"
              className="py-6 col-span-12"
            ></Input>
            <Input
              placeholder="Apt, suite, etc. (Optional)"
              className="py-6 col-span-12"
            ></Input>
            <Input
              placeholder="City/Province"
              className="py-6 col-span-4"
            ></Input>
            <Input placeholder="District" className="py-6 col-span-4"></Input>
            <Input placeholder="Zip Code" className="py-6 col-span-4"></Input>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Save this information for next time
            </label>
          </div>
          <div>
            <h2 className="font-bold text-lg my-3">Shipping Method</h2>
            <RadioGroup defaultValue="shipping-method-1" className="border rounded-lg overflow-hidden gap-0">
              <div className="flex items-center space-x-2 px-5 py-4 border">
                <RadioGroupItem value="shipping-method-1" id="shipping-method-1" />
                <Label htmlFor="shipping-method-1">Standard Shipping</Label>
              </div>
              <div className="flex items-center space-x-2 px-5 py-4 border">
                <RadioGroupItem value="shipping-method-2" id="shipping-method-2" />
                <Label htmlFor="shipping-method-2">Guitars And Basses Shipping</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <h2 className="font-bold text-lg my-3">Payment</h2>
            <RadioGroup defaultValue="payment-1" className="border rounded-lg overflow-hidden gap-0">
              <div className="flex items-center space-x-2 px-5 py-4 border">
                <RadioGroupItem value="payment-1" id="payment-1" />
                <Label htmlFor="payment-1">Cash on Delivery (COD)</Label>
              </div>
              <div className="flex items-center space-x-2 px-5 py-4 border">
                <RadioGroupItem value="payment-2" id="payment-2" />
                <Label htmlFor="payment-2">Prepaid Delivery (PPD)</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <h2 className="font-bold text-lg my-3">Billing address</h2>
            <RadioGroup defaultValue="billing-address-1" className="border rounded-lg overflow-hidden gap-0">
              <div className="flex items-center space-x-2 px-5 py-4 border">
                <RadioGroupItem value="billing-address-1" id="billing-address-1" />
                <Label htmlFor="billing-address-1">Same as shipping address</Label>
              </div>
              <div className="flex items-center space-x-2 px-5 py-4 border">
                <RadioGroupItem value="billing-address-2" id="billing-address-2" />
                <Label htmlFor="billing-address-2">Use a different billing address</Label>
              </div>
            </RadioGroup>
          </div>
          <Button className="my-5 w-full py-5">Complete Order</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CheckOutPage;
