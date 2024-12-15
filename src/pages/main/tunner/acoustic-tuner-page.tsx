import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import guitarImage from "@/assets/imgs/tuner-acoustic-lg.png";
import ToolsPanel from "./tools-panel";
import useMicrophone from "@/hooks/use-microphone";
import Meter from "./meter";
import { Button } from "@/components/ui/button";

const AcousticTunerPage = () => {
  const { volume, getMicrophoneAccess, removeMicrophoneAccess } =
    useMicrophone();
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Online Tuner", href: "/tuner" },
        ]}
      />
      <MaxWidthWrapper className="py-5">
        <h1 className="text-3xl font-extrabold uppercase">
          Online Acoustic Guitar Tuner
        </h1>
        <p className="font-semibold pb-10">
          Chạm vào nốt nhạc, lên dây đàn theo đúng âm điệu.
        </p>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 flex justify-center">
            <div className="w-[300px]">
              <img src={guitarImage} alt="" className="w-full" />
            </div>
          </div>
          <div className="col-span-6">
            <ToolsPanel />
          </div>
        </div>
        <div className="flex flex-col items-center py-20">
          <Meter value={volume} />
          <h5 className="font-extrabold uppercase text-3xl py-5">Tuner</h5>
          <div className="flex gap-5 py-5">
            <Button
              variant={"destructive"}
              onClick={() => removeMicrophoneAccess()}
            >
              Stop
            </Button>
            <Button onClick={() => getMicrophoneAccess()}>Start</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AcousticTunerPage;
