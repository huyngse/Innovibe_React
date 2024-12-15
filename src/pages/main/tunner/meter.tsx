import tunerClockImage from "@/assets/vectors/tuner-meter.svg";
import tunerHandImage from "@/assets/vectors/meter-hand.svg";
const Meter = ({ value }: { value: number }) => {
  // const rotation = Math.max(-120, Math.min(120, (value / 100) * 120));
  const rotation = (value / 100) * 120;
  return (
    <div className="pb-20">
      <div className="relative">
        <img src={tunerClockImage} />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <div className="relative p-3 duration-100" style={{ rotate: `${rotation}deg` }}>
            <img
              src={tunerHandImage}
              alt=""
              className="absolute -bottom-3.5 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
        <div className="absolute top-24 left-1/2 -translate-x-1/2">
          <h2 className="text-5xl text-zinc-500 font-semibold">
            {value.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Meter;
