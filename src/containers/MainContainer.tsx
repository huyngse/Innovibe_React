import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/main/home/Home";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import NotFound from "@/components/shared/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

const MainContainer = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col">
        <Header />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainContainer;
