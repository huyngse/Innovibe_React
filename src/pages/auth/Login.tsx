import loginBackground from "@/assets/imgs/login-background.jpeg";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});
const LoginPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSubmit = () => {};
  return (
    <div className="h-screen grid grid-cols-12 overflow-hidden">
      <div className="hidden md:block md:col-span-4 lg:col-span-6 rounded-r-lg overflow-hidden">
        <img
          src={loginBackground}
          alt=""
          className="h-full object-left object-cover"
        />
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col items-center gap-5 max-h-[100vh] overflow-auto py-20 lg:px-40 px-20">
        <img src={logo2} alt="" />
        <div className="text-center">
          <h2 className="text-4xl font-extrabold uppercase">Welcome</h2>
          <p>Get the most from Innovibe</p>
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
                    placeholder="Email Address"
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
                  <FormLabel className="hidden">Password</FormLabel>
                  <PasswordInput
                    placeholder="Password"
                    className="py-6"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link
              to="/recover-password"
              className="text-gray-500 text-xs flex justify-center my-3 text-center w-full"
            >
              Forgot password?
            </Link>
            <Button className="rounded-full w-full px-5 py-6" type="submit">
              Sign In
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
        <p className="text-xs">Don’t have a Innovibe account? <Link to={"/sign-up"} className="underline">Sign up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
