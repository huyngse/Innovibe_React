import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return <div style={{ minHeight: "100vh" }}>{children}</div>;
};

export default AdminLayout;
