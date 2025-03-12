import TechnicalIssuePage from "@/components/TechnicalIssuePage";
import NotFound from "@/components/shared/NotFound";
import ProfileLayout from "@/layouts/profile-layout";
import FavouritePage from "@/pages/profile/favourite/favourite-page";
import NotificationsPage from "@/pages/profile/notifications/notifications-page";
import OrderDetailPage from "@/pages/profile/order-detail/order-detail-page";
import OrderHistoryPage from "@/pages/profile/order-history/order-history-page";
import ProfilePage from "@/pages/profile/profile-page";
import SettingsPage from "@/pages/profile/settings/settings-page";
import useAuthStore from "@/stores/use-auth-store";
import { Route, Routes, useNavigate } from "react-router-dom";

const ProfileContainer = () => {
  const authStore = useAuthStore();
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  if (!token || !authStore) {
    navigate("/log-in");
  }
  if (authStore.error) return <TechnicalIssuePage />;
  return (
    <ProfileLayout>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/notification" element={<NotificationsPage />} />
        <Route path="/order" element={<OrderHistoryPage />} />
        <Route path="/order/:orderId" element={<OrderDetailPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ProfileLayout>
  );
};

export default ProfileContainer;
