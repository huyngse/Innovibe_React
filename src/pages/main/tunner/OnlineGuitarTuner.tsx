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
          Tune your acoustic, electric, bass guitar
        </p>
        <p className="text-xs">
          Pick an instrument and start tuning right away. Choose from 22 tuning
          options.
        </p>
      </div>
      <div className="grid grid-cols-3 my-5">
        <div className="text-center flex flex-col items-center">
          <img src={acousticTunnerImage} alt="" className="h-[320px]" />
          <h3 className="font-bold uppercase my-5">Acoustic Guitar Tuner</h3>
          <Link to="/tuner/acoustic">
            <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
              Tune Acoustic
            </Button>
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src={electricunnerImage} alt="" className="h-[320px]" />
          <h3 className="font-bold uppercase my-5">Electric Guitar Tuner</h3>
          <Link to="/tuner/electric">
            <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
              Tune Electric
            </Button>
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src={bassTunnerImage} alt="" className="h-[320px]" />
          <h3 className="font-bold uppercase my-5">Bass Guitar Tuner</h3>
          <Link to="/tuner/bass">
            <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
              Tune Bass
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OnlineGuitarTuner;
