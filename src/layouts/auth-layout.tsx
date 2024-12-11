import { ReactNode } from "react";
import loginBackground from "@/assets/imgs/login-background.jpeg";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen grid grid-cols-12 overflow-hidden">
      <div className="hidden md:block md:col-span-4 lg:col-span-6 rounded-r-lg overflow-hidden">
        <img
          src={loginBackground}
          alt=""
          className="h-full object-left object-cover"
        />
      </div>
      <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col items-center gap-5 max-h-[100vh] overflow-auto py-20 lg:px- px-20">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
