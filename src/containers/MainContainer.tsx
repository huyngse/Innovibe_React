import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/main/Home";
import Navbar from "../components/shared/Navbar";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainContainer = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainContainer;
