import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Breadcrumb from "./Breadcrumb";
import OnlineGuitarTuner from "./OnlineGuitarTuner";

const Tunner = () => {
  return (
    <div>
      <Breadcrumb />
      <MaxWidthWrapper>
        <OnlineGuitarTuner />
      </MaxWidthWrapper>
    </div>
  );
};

export default Tunner;
