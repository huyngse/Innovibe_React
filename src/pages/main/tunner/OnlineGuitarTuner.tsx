import acousticTunnerImage from "@/assets/imgs/tuner_acoustic.png";
import bassTunnerImage from "@/assets/imgs/tuner_bass.png";
import electricunnerImage from "@/assets/imgs/tuner_electric.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const OnlineGuitarTuner = () => {
  return (
    <section className="py-5">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold uppercase">
          Online Guitar Tuner
        </h1>
        <p className="my-2 text-lg font-semibold">
          Lên dây đàn guitar acoustic, điện, bass của bạn
        </p>
        <p className="text-xs">
          Chọn một nhạc cụ và bắt đầu lên dây ngay. Chọn từ 22 tùy chọn lên dây.
        </p>
      </div>
      <div className="grid grid-cols-3 my-5">
        <div className="text-center flex flex-col items-center">
          <img src={acousticTunnerImage} alt="" className="h-[320px]" />
          <h3 className="font-bold uppercase my-5">Acoustic Guitar Tuner</h3>
          <Link to="/acoustic-tuner">
            <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
              Lên dây Acoustic
            </Button>
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src={electricunnerImage} alt="" className="h-[320px]" />
          <h3 className="font-bold uppercase my-5">Electric Guitar Tuner</h3>
          <Link to="/electric-tuner">
            <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
              Lên dây Electric
            </Button>
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src={bassTunnerImage} alt="" className="h-[320px]" />
          <h3 className="font-bold uppercase my-5">Bass Guitar Tuner</h3>
          <Link to="/bass-tuner">
            <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
              Lên dây Bass
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OnlineGuitarTuner;
