import NotFound from "@/components/shared/NotFound";
import ProfileLayout from "@/layouts/profile-layout";
import ProfilePage from "@/pages/profile/profile-page";
import { Route, Routes } from "react-router-dom";

const ProfileContainer = () => {
  return (
    <ProfileLayout>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ProfileLayout>
  );
};

export default ProfileContainer;
