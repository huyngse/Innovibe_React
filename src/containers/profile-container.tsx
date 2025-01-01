import NotFound from "@/components/shared/NotFound";
import ProfileLayout from "@/layouts/profile-layout";
import FavouritePage from "@/pages/profile/favourite/favourite-page";
import NotificationsPage from "@/pages/profile/notifications/notifications-page";
import OrderDetailPage from "@/pages/profile/order-detail/order-detail-page";
import OrderHistoryPage from "@/pages/profile/order-history/order-history-page";
import ProfilePage from "@/pages/profile/profile-page";
import { Route, Routes } from "react-router-dom";

const ProfileContainer = () => {
  return (
    <ProfileLayout>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/notification" element={<NotificationsPage />} />
        <Route path="/order" element={<OrderHistoryPage />} />
        <Route path="/order/:orderId" element={<OrderDetailPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ProfileLayout>
  );
};

export default ProfileContainer;
