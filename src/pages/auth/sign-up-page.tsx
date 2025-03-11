import logo2 from "@/assets/imgs/logo_2.png";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AuthLayout from "@/layouts/auth-layout";
import { register } from "@/lib/api/auth-api";
import { cn } from "@/lib/utils";
import { formatDate } from "@/utils/date";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
const formSchema = z.object({
  fullName: z.string({ required_error: "Vui lòng nhập họ và tên" }),
  email: z
    .string({ required_error: "Vui lòng nhập email" })
    .email("Email không hợp lệ."),
  password: z
    .object({
      password: z.string({ required_error: "Vui lòng nhập mật khẩu" }),
      confirm: z.string({ required_error: "Vui lòng nhập lại mật khẩu" }),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Mật khẩu không khớp",
      path: ["confirm"],
    }),
  address: z.string({ required_error: "Vui lòng nhập địa chỉ" }),
  birthDate: z
    .date({ required_error: "Vui lòng nhập ngày sinh" })
    .refine((date) => date <= new Date(), {
      message: "Ngày sinh không hợp lệ",
    }),
});
// FORM ĐĂNG KÝ TÀI KHOẢN
const SignUpPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      address: "",
      birthDate: undefined,
      fullName: "",
      password: {
        password: "",
        confirm: "",
      },
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const result = await register({
      ...values,
      password: values.password.password,
    });
    if (result.error) {
      toast.error("Đăng ký thất bại", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Đăng ký thành công", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigate("/log-in");
      }, 1000);
    }
    setIsSubmitting(false);
  }
  return (
    <AuthLayout>
      <Link to={"/"}>
        <img src={logo2} alt="" />
      </Link>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold uppercase">Đăng ký</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Nhập địa chỉ email"
                  type="email"
                  className="py-6"
                  {...field}
                />
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
                <Input
                  placeholder="Nhập họ và tên"
                  className="py-6"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Địa chỉ</FormLabel>
                <Input placeholder="Nhập địa chỉ" className="py-6" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem className="flex flex-col my-3">
                <FormLabel>Ngày sinh</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          formatDate(field.value)
                        ) : (
                          <span>Chọn ngày sinh</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password.password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <PasswordInput
                  placeholder="Nhập mật khẩu"
                  className="py-6"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password.confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nhập lại mật khẩu</FormLabel>
                <PasswordInput
                  placeholder="Nhập lại mật khẩu mật khẩu"
                  className="py-6"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mt-3 rounded-full w-full px-5 py-6"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader className="animate-spin" /> : "Đăng Ký"}
          </Button>
        </form>
      </Form>
      <div className="flex gap-5 items-center justify-center w-full">
        <hr className="flex-1" />
        <p className="uppercase text-sm">hoặc</p>
        <hr className="flex-1" />
      </div>
      <div className="grid grid-cols-3 w-full gap-3">
        <Button className="rounded-full w-full px-5 py-6" variant={"outline"}>
          <FaGoogle />
        </Button>
        <Button className="rounded-full w-full px-5 py-6" variant={"outline"}>
          <FaFacebook />
        </Button>
        <Button className="rounded-full w-full px-5 py-6" variant={"outline"}>
          <FaApple />
        </Button>
      </div>
      <p className="text-sm text-center">
        Bằng việc đăng kí, bạn đã đồng ý với Innovibe về{" "}
        <Link to={"/terms-of-service"} className="text-orange-600">
          Điều khoản dịch vụ
        </Link>{" "}
        &{" "}
        <Link to={"/privacy-policy"} className="text-orange-600">
          Chính sách bảo mật
        </Link>
      </p>

      <p className="text-xs">
        Bạn đã có tài khoản Innovibe?{" "}
        <Link to={"/log-in"} className="underline">
          Đăng nhập
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignUpPage;
