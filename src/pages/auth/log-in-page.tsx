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
import { PasswordInput } from "@/components/ui/password-input";
import AuthLayout from "@/layouts/auth-layout";
import { login } from "@/lib/api/auth-api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(5, "Mật khẩu phải chứa ít nhất 5 ký tự"),
});
// FORM ĐĂNG NHẬP
const LoginPage = () => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setError("");
    setIsSubmitting(true);
    const result = await login(values.email, values.password);
    if (result.error) {
      setError(
        result.error == "Request failed with status code 401"
          ? "Sai email hoặc mật khẩu"
          : result.error
      );
    } else {
      localStorage.setItem("accessToken", result.data);
      toast.success("Đăng nhập thành công", {
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
        navigate("/");
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
        <h2 className="text-4xl font-extrabold uppercase">Chào mừng</h2>
        <p>Khai thác tối đa từ Innovibe</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel className="hidden">Mật khẩu</FormLabel>
                <PasswordInput
                  placeholder="Mật khẩu"
                  className="py-6"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <div className="text-red-500">{error}</div>}
          <Link
            to="/recover-password"
            className="text-gray-500 text-xs flex justify-center my-3 text-center w-full"
          >
            Quên mật khẩu?
          </Link>
          <Button
            className="rounded-full w-full px-5 py-6"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Loader className="animate-spin" /> : "Đăng nhập"}
          </Button>
        </form>
      </Form>
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
      <p className="text-xs">
        Bạn chưa có tài khoản Innovibe?{" "}
        <Link to={"/sign-up"} className="underline">
          Đăng ký
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
