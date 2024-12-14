import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import guitarImage from "@/assets/imgs/tuner-bass-lg.png";
import ToolsPanel from "./tools-panel";

const BassTunerPage = () => {
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
          Online Electric Guitar Tuner
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
      </MaxWidthWrapper>
    </div>
  );
};

export default BassTunerPage;
