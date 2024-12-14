import acousticIcon from "@/assets/imgs/acoustic-guitar-icon.webp";
import electricIcon from "@/assets/imgs/electric-guitar-icon.webp";
import bassIcon from "@/assets/imgs/bass-guitar-icon.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";
const ToolsPanel = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white drop-shadow rounded-lg p-5 w-5/6 mx-auto">
      <h3 className="uppercase font-bold text-orange-600 pb-5 text-lg">
        Thay đổi nhạc cụ
      </h3>
      <div className="grid grid-cols-3 gap-5">
        <button
          className="text-center"
          onClick={() => {
            navigate("/acoustic-tuner");
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <img
              src={acousticIcon}
              alt="Go to acoustic guitar tuner"
              className="hover:scale-105 hover:rotate-3 duration-100"
            />
          </AspectRatio>
          <p className="font-bold">Acoustic</p>
        </button>
        <button
          className="text-center border-2 border-orange-500 overflow-hidden rounded-lg"
          onClick={() => {
            navigate("/electric-tuner");
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <img
              src={electricIcon}
              alt="Go to eletric guitar tuner"
              className="hover:scale-105 hover:rotate-3 duration-100"
            />
          </AspectRatio>
          <p className="font-bold">Electric</p>
        </button>
        <button
          className="text-center"
          onClick={() => {
            navigate("/bass-tuner");
          }}
        >
          <AspectRatio ratio={1 / 1}>
            <img
              src={bassIcon}
              alt="Go to bass guitar tuner"
              className="hover:scale-105 hover:rotate-3 duration-100"
            />
          </AspectRatio>
          <p className="font-bold">Bass</p>
        </button>
      </div>
      <div>
        <h3>Chọn điều chỉnh</h3>
      </div>
    </div>
  );
};

export default ToolsPanel;
