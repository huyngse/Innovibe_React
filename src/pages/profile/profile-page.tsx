import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1, "Họ tên đầy đủ là bắt buộc"),
  phoneNumber: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
    .regex(/^\d+$/, "Số điện thoại phải là số"),
});

const ProfilePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "customer@gmail.com",
      fullName: "Nguyễn Văn A",
      phoneNumber: "0987776666",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="py-5">
      <div className="bg-white p-5 drop-shadow">
        <h1 className="text-xl font-semibold">Hồ sơ của tôi</h1>
        <p className="text-sm text-zinc-500">Quản lý thông tin hồ sơ</p>
        <hr className="my-3" />
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-3"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          readOnly
                          placeholder="Nhập địa chỉ email"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Email sử dụng để đăng nhập (không thể thay đổi).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Họ và tên</FormLabel>
                      <FormControl>
                        <Input
                          readOnly
                          placeholder="Nhập họ và tên"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Số điện thoại</FormLabel>
                      <FormControl>
                        <Input
                          readOnly
                          placeholder="Nhập số điện thoại"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Họ tên và số điện thoại sẽ được tự động điền vào đơn
                        mua. Người dùng có thể chỉnh sửa.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-400"
                >
                  Lưu thay đổi
                </Button>
              </form>
            </Form>
          </div>
          <div className="col-span-4">
            <div className="flex justify-center">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
