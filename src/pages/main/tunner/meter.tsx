import tunerClockImage from "@/assets/vectors/tuner-meter.svg";
import tunerHandImage from "@/assets/vectors/meter-hand.svg";
function mapValueToRange(value: number, min: number, max: number) {
  if (min >= max) {
    throw new Error("Invalid range: min should be less than max.");
  }
  const mappedValue = ((value - min) / (max - min)) * 100;
  return Math.max(0, Math.min(100, mappedValue));
}

const Meter = ({ value }: { value: number }) => {
  // const rotation = Math.max(-120, Math.min(120, (value / 100) * 120));

  const rotation = (mapValueToRange(value, 207.65, 233.08) / 100) * 120;
  return (
    <div className="pb-20">
      <div className="relative">
        <img src={tunerClockImage} />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-50">
          <div
            className="relative p-3 duration-500"
            style={{ rotate: `${rotation}deg` }}
          >
            <img
              src={tunerHandImage}
              alt=""
              className="absolute -bottom-3.5 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
        <div className="absolute text-2xl left-1/2 -translate-x-1/2 top-10 text-zinc-500">
          A3
        </div>
        <div className="text-2xl flex justify-between absolute w-[320px] left-1/2 -translate-x-1/2">
          <p>G3#</p>
          <p>A3#</p>
        </div>
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10">
          <h2 className="text-5xl text-zinc-500 font-semibold">
            {value.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Meter;
