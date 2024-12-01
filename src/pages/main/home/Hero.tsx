import HeroBanner from "@/assets/imgs/hero.png";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <div className="my-16 grid grid-cols-12 gap-5">
      <div className="col-span-6">
        <h2 className="font-extrabold text-3xl uppercase">Who are we</h2>
        <p className="pe-5 my-5 font-semibold">
          We’re not just sellers of instruments—we’re the fire behind the music,
          the force that fuels your rebellion. We are the ones who push
          boundaries, break the rules, and make noise. We are the outlaws of
          sound, the demons of rhythm, and we stand with those who dare to be
          different. You don’t play music. You live it.
        </p>
        <Button className="uppercase rounded-xl px-5">Read more</Button>
      </div>
      <img src={HeroBanner} alt="" className="col-span-6" />
    </div>
  );
};

export default Hero;
