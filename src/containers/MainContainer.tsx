import { Route, Routes } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/Footer";
import NotFound from "@/components/shared/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "react-scroll-to-top";
import { IoIosArrowUp } from "react-icons/io";
import TunnerPage from "@/pages/main/tunner/TunnerPage";
import HomePage from "@/pages/main/home/HomePage";
import BlogsPage from "@/pages/main/blogs/BlogsPage";
import SearchPage from "@/pages/main/search/SearchPage";
import ComingSoon from "@/components/shared/ComingSoon";
import ChatButton from "@/components/ChatButton";
import ProductDetailPage from "@/pages/main/product-detail/ProductDetailPage";
import ViewCartPage from "@/pages/main/cart/ViewCartPage";
import CheckOutPage from "@/pages/main/check-out/CheckOutPage";
import AcousticTunerPage from "@/pages/main/tunner/acoustic-tuner-page";
import BassTunerPage from "@/pages/main/tunner/bass-tuner-page";
import ElectricTunerPage from "@/pages/main/tunner/electric-tuner-page";
import ProfileContainer from "./profile-container";
import BlogDetailPage from "@/pages/main/blog-detail/blog-detail-page";
import PaymentPage from "@/pages/main/check-out/Payment";

const MainContainer = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/tuner" element={<TunnerPage />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/blog/:blogId" element={<BlogDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/course" element={<ComingSoon />} />
            <Route path="/second-hand" element={<ComingSoon />} />
            <Route path="/cart" element={<ViewCartPage />} />
            <Route path="/check-out" element={<CheckOutPage />} />
            <Route path="/payment/:orderId" element={<PaymentPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/acoustic-tuner" element={<AcousticTunerPage />} />
            <Route path="/bass-tuner" element={<BassTunerPage />} />
            <Route path="/electric-tuner" element={<ElectricTunerPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ScrollToTopButton
        smooth
        className="flex justify-center items-center bg-orange-600"
        style={{ borderRadius: "100%", backgroundColor: "#ea580c" }}
        component={<IoIosArrowUp className="text-white" />}
      />
      <ChatButton />
    </div>
  );
};

export default MainContainer;
