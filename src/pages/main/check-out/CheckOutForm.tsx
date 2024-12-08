import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const formSchema = z.object({
  email: z.string().email("Địa chỉ email không hợp lệ"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải dài ít nhất 10 ký tự")
    .max(15, "Số điện thoại phải dài tối đa 15 ký tự"),
  fullName: z.string().min(1, "Họ tên đầy đủ là bắt buộc"),
  company: z.string().optional(),
  province: z.string().min(1, "Tỉnh/Thành phố là bắt buộc"),
  district: z.string().min(1, "Quận/Huyện là bắt buộc"),
  ward: z.string().min(1, "Phường/Xã là bắt buộc"),
  street: z.string().min(1, "Tên đường, Tòa nhà, Số nhà là bắt buộc"),
  shippingMethod: z.string().min(1, "Phương thức vận chuyển là bắt buộc"),
  paymentMethod: z.string().min(1, "Phương thức thanh toán là bắt buộc"),
  billingAddress: z.string().min(1, "Địa chỉ thanh toán là bắt buộc"),
});
const CheckOutForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h2 className="font-bold text-lg">Địa Chỉ Giao Hàng</h2>
        <div className="grid grid-cols-12 gap-3 py-3">
          {/* <Input
          placeholder="Country/Region"
          className="py-6 col-span-12"
        ></Input> */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" className="py-6" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="col-span-6">
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Số điện thoại"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel>Họ và tên đầy đủ</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Họ và tên đầy đủ"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel>Công ty (Không bắt buộc)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Công ty (Không bắt buộc)"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Input
          placeholder="Căn hộ, phòng, v.v. (Không bắt buộc)"
          className="py-6 col-span-12"
        ></Input> */}
          <Input
            placeholder="Thành phố/Tỉnh"
            className="py-6 col-span-4"
          ></Input>
          <Input placeholder="Huyện" className="py-6 col-span-4"></Input>
          <Input placeholder="Phường/Xã" className="py-6 col-span-4"></Input>
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="col-span-12">
                <FormLabel>Tên đường, Tòa nhà, Số nhà</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tên đường, Tòa nhà, Số nhà"
                    className="py-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center space-x-2 py-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lưu thông tin này cho lần sau
          </label>
        </div>
        <div>
          <h2 className="font-bold text-lg my-3">Phương Thức Vận Chuyển</h2>
          <RadioGroup
            defaultValue="shipping-method-1"
            className="border rounded-lg overflow-hidden gap-0"
          >
            <div className="flex items-center space-x-2 px-5 py-4 border">
              <RadioGroupItem
                value="shipping-method-1"
                id="shipping-method-1"
              />
              <Label htmlFor="shipping-method-1">Vận chuyển tiêu chuẩn</Label>
            </div>
            <div className="flex items-center space-x-2 px-5 py-4 border">
              <RadioGroupItem
                value="shipping-method-2"
                id="shipping-method-2"
              />
              <Label htmlFor="shipping-method-2">
                Vận chuyển đàn guitar và bass
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h2 className="font-bold text-lg my-3">Thanh Toán</h2>
          <RadioGroup
            defaultValue="payment-1"
            className="border rounded-lg overflow-hidden gap-0"
          >
            <div className="flex items-center space-x-2 px-5 py-4 border">
              <RadioGroupItem value="payment-1" id="payment-1" />
              <Label htmlFor="payment-1">Thanh toán khi nhận hàng (COD)</Label>
            </div>
            <div className="flex items-center space-x-2 px-5 py-4 border">
              <RadioGroupItem value="payment-2" id="payment-2" />
              <Label htmlFor="payment-2">Giao hàng trả trước (PPD)</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <h2 className="font-bold text-lg my-3">Địa chỉ thanh toán</h2>
          <RadioGroup
            defaultValue="billing-address-1"
            className="border rounded-lg overflow-hidden gap-0"
          >
            <div className="flex items-center space-x-2 px-5 py-4 border">
              <RadioGroupItem
                value="billing-address-1"
                id="billing-address-1"
              />
              <Label htmlFor="billing-address-1">
                Giống như địa chỉ giao hàng
              </Label>
            </div>
            <div className="flex items-center space-x-2 px-5 py-4 border">
              <RadioGroupItem
                value="billing-address-2"
                id="billing-address-2"
              />
              <Label htmlFor="billing-address-2">
                Sử dụng địa chỉ thanh toán khác
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Button className="my-5 w-full py-5" type="submit">
          Hoàn tất đơn hàng
        </Button>
      </form>
    </Form>
  );
};

export default CheckOutForm;
