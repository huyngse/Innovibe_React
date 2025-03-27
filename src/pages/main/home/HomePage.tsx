import Carousel from "@/components/Carousel";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Featured1 from "@/assets/imgs/featured_1.png";
import Featured2 from "@/assets/imgs/featured_2.png";
import TrustSignals from "./TrustSignals";
import NewArrivals from "./NewArrivals";
// import SpecialOffer from "./SpecialOffer";
import Hero from "./Hero";
import Blogs from "./Blogs";
import Features from "./Features";
import useProductStore from "@/stores/use-product-store";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// ?code=00&id=197320e3cad34a4a8faab1f934c3e073&cancel=true&status=CANCELLED&orderCode=44
const HomePage = () => {
  const productStore = useProductStore();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const orderCode = searchParams.get("orderCode");
    if (orderCode != null) {
      navigate(`/profile/order/${orderCode}`);
    }
  }, [searchParams]);
  useEffect(() => {
    productStore.fetchProducts();
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="mt-5 mb-10">
        <Carousel />
      </div>
      <div className="my-5 grid grid-cols-12 gap-5">
        <img
          src={Featured1}
          alt=""
          className="col-span-6 h-[330px] w-full object-cover"
        />
        <img
          src={Featured2}
          alt=""
          className="col-span-6 h-[330px] w-full object-cover"
        />
      </div>
      <TrustSignals />
      <NewArrivals />
      {/* <SpecialOffer /> */}
      <Hero />
      <Blogs />
      <Features />
    </MaxWidthWrapper>
  );
};

export default HomePage;
