import logo2 from "@/assets/imgs/logo_2.png";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AuthLayout from "@/layouts/auth-layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";
const formSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
});
const SignUpPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const handleSubmit = () => {};
  return (
    <AuthLayout>
      <Link to={"/"}>
        <img src={logo2} alt="" />
      </Link>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold uppercase">Đăng ký</h2>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Email</FormLabel>
                <Input
                  placeholder="Địa chỉ email"
                  type="email"
                  className="py-6"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-3 rounded-full w-full px-5 py-6" type="submit">
            Tiếp theo
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
