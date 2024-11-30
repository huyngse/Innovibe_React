import AdminLayout from "@/layouts/AdminLayout";
import CategoriesPage from "@/pages/admin/category/CategoriesPage";
import CreateCategoryPage from "@/pages/admin/category/CreateCategoryPage";
import UpdateCategoryPage from "@/pages/admin/category/UpdateCategoryPage";
import DashboardPage from "@/pages/admin/dashboard/DashboardPage";
import OrderDetailPage from "@/pages/admin/order/OrderDetailPage";
import OrdersPage from "@/pages/admin/order/OrdersPage";
import CreateProductPage from "@/pages/admin/product/CreateProductPage";
import ProductDetailPage from "@/pages/admin/product/ProductDetailPage";
import ProductsPage from "@/pages/admin/product/ProductsPage";
import UpdateProductPage from "@/pages/admin/product/UpdateProductPage";
import CreateUserPage from "@/pages/admin/user/CreateUserPage";
import UpdateUserPage from "@/pages/admin/user/UpdateUserPage";
import UserDetail from "@/pages/admin/user/UserDetail";
import UsersPage from "@/pages/admin/user/UsersPage";
import { Route, Routes } from "react-router-dom";

const AdminContainer = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/user" element={<UsersPage />} />
        <Route path="/user/:userId" element={<UserDetail />} />
        <Route path="/user/create" element={<CreateUserPage />} />
        <Route path="/user/update" element={<UpdateUserPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/product/create" element={<CreateProductPage />} />
        <Route path="/product/update" element={<UpdateProductPage />} />
        <Route path="/order" element={<OrdersPage />} />
        <Route path="/order/order:id" element={<OrderDetailPage />} />
        <Route path="/category" element={<CategoriesPage />} />
        <Route path="/category/create" element={<CreateCategoryPage />} />
        <Route path="/category/update" element={<UpdateCategoryPage />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminContainer;
