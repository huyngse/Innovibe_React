import Carousel from "@/components/Carousel";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Hero1 from "@/assets/imgs/hero_1.png";
import Hero2 from "@/assets/imgs/hero_2.png";
import TrustSignals from "./TrustSignals";
import NewArrivals from "./NewArrivals";
import SpecialOffer from "./SpecialOffer";
const HomePage = () => {
  return (
    <MaxWidthWrapper>
      <div className="mt-5 mb-10">
        <Carousel />
      </div>
      <div className="my-5 grid grid-cols-12 gap-5">
        <img
          src={Hero1}
          alt=""
          className="col-span-6 h-[330px] w-full object-cover"
        />
        <img
          src={Hero2}
          alt=""
          className="col-span-6 h-[330px] w-full object-cover"
        />
      </div>
      <TrustSignals />
      <NewArrivals />
      <SpecialOffer />
    </MaxWidthWrapper>
  );
};

export default HomePage;
