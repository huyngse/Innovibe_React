import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import OnlineGuitarTuner from "./OnlineGuitarTuner";
import GettingStarted from "./GettingStarted";
import PlayLessons from "./PlayLessons";
import Breadcrumb from "@/components/shared/Breadcrumb";

const TunnerPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Online Tuner", href: "/tuner" },
        ]}
      />
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

export default TunnerPage;
