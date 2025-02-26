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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import useProvinceStore from "@/stores/use-province-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { DistrictType, WardType, isWardType } from "@/types/address";
import addresses from "@/data/vietnamAddress.json";
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
  const [districts, setDistricts] = useState<DistrictType[]>([]);
  const [wards, setWards] = useState<Array<WardType | { Level: string }>>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const provinceStore = useProvinceStore((state) => state);
  useEffect(() => {
    provinceStore.fetchProvinces();
  }, []);
  const onCityChange = (e: any) => {
    const selectedCity = addresses.find((addr) => addr.Name == e);
    if (selectedCity == null) return;
    setDistricts(selectedCity.Districts);
    form.setValue("district", "");
    form.setValue("ward", "");
    setWards([]);
  };
  const onDistrictChange = (e: any) => {
    const selectedDistrict = districts.find((addr) => addr.Name == e);
    if (selectedDistrict == null) return;
    form.setValue("ward", "");
    setWards(selectedDistrict.Wards);
  };
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
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Thành phố/Tỉnh</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange("value");
                    form.resetField("district");
                    form.resetField("ward");
                    onCityChange(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="py-6">
                      <SelectValue placeholder="Chọn Thành phố/Tỉnh" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {addresses.map((province, index: number) => {
                      return (
                        <SelectItem value={province.Name} key={index}>
                          {province.Name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Quận/Huyện</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.resetField("ward");
                    onDistrictChange(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="py-6">
                      <SelectValue placeholder="Chọn Quận/Huyện" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {districts.map((district, index: number) => {
                      return (
                        <SelectItem value={district.Name} key={index}>
                          {district.Name}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ward"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Phường/Xã</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="py-6">
                      <SelectValue placeholder="Chọn Phường/Xã" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {wards.map((ward, index: number) => {
                      if (isWardType(ward)) {
                        return (
                          <SelectItem value={ward.Name} key={index}>
                            {ward.Name}
                          </SelectItem>
                        );
                      }
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
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
        <FormField
          control={form.control}
          name="shippingMethod"
          render={({ field }) => (
            <FormItem className="py-2">
              <Label className="font-bold text-lg my-3">
                Phương Thức Vận Chuyển
              </Label>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="border rounded-lg overflow-hidden gap-0"
                >
                  <FormItem
                    className={cn(
                      "flex items-center space-x-2 px-5 py-4 border space-y-0",
                      field.value == "shipping-method-1" && "bg-orange-100"
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem value="shipping-method-1" />
                    </FormControl>
                    <FormLabel>Vận chuyển tiêu chuẩn</FormLabel>
                  </FormItem>
                  <FormItem
                    className={cn(
                      "flex items-center space-x-2 px-5 py-4 border space-y-0",
                      field.value == "shipping-method-2" && "bg-orange-100"
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem value="shipping-method-2" />
                    </FormControl>
                    <FormLabel>Vận chuyển đàn guitar và bass</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem className="py-2">
              <Label className="font-bold text-lg my-3">
                Phương Thức Thanh Toán
              </Label>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="border rounded-lg overflow-hidden gap-0"
                >
                  <FormItem
                    className={cn(
                      "flex items-center space-x-2 px-5 py-4 border space-y-0",
                      field.value == "payment-1" && "bg-orange-100"
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem value="payment-1" />
                    </FormControl>
                    <FormLabel>Thanh toán khi nhận hàng (COD)</FormLabel>
                  </FormItem>
                  <FormItem
                    className={cn(
                      "flex items-center space-x-2 px-5 py-4 border space-y-0",
                      field.value == "payment-2" && "bg-orange-100"
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem value="payment-2" />
                    </FormControl>
                    <FormLabel>Giao hàng trả trước (PPD)</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="billingAddress"
          render={({ field }) => (
            <FormItem className="py-2">
              <Label className="font-bold text-lg my-3">
                Địa chỉ thanh toán
              </Label>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="border rounded-lg overflow-hidden gap-0"
                >
                  <FormItem
                    className={cn(
                      "flex items-center space-x-2 px-5 py-4 border space-y-0",
                      field.value == "billing-address-1" && "bg-orange-100"
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem value="billing-address-1" />
                    </FormControl>
                    <FormLabel>Giống như địa chỉ giao hàng</FormLabel>
                  </FormItem>
                  <FormItem
                    className={cn(
                      "flex items-center space-x-2 px-5 py-4 border space-y-0",
                      field.value == "billing-address-2" && "bg-orange-100"
                    )}
                  >
                    <FormControl>
                      <RadioGroupItem value="billing-address-2" />
                    </FormControl>
                    <FormLabel>Sử dụng địa chỉ thanh toán khác</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="my-5 w-full py-6" type="submit">
          Hoàn tất đơn hàng
        </Button>
      </form>
    </Form>
  );
};

export default CheckOutForm;
