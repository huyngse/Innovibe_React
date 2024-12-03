import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Breadcrumb from "./Breadcrumb";
import OnlineGuitarTuner from "./OnlineGuitarTuner";
import GettingStarted from "./GettingStarted";

const Tunner = () => {
  return (
    <div>
      <Breadcrumb />
      <MaxWidthWrapper>
        <OnlineGuitarTuner />
        <hr className="border-black my-5" />
        <GettingStarted />
      </MaxWidthWrapper>
    </div>
  );
};

export default Tunner;
