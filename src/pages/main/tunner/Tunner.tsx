import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Breadcrumb from "./Breadcrumb";
import OnlineGuitarTuner from "./OnlineGuitarTuner";
import GettingStarted from "./GettingStarted";
import PlayLessons from "./PlayLessons";

const Tunner = () => {
  return (
    <div>
      <Breadcrumb />
      <MaxWidthWrapper>
        <OnlineGuitarTuner />
        <hr className="border-black my-5" />
        <GettingStarted />
        <hr className="border-black my-5" />
        <PlayLessons />
      </MaxWidthWrapper>
    </div>
  );
};

export default Tunner;
