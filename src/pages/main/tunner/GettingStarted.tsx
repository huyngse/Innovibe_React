import tipImage1 from "@/assets/imgs/tip_1.png";
import tipImage2 from "@/assets/imgs/tip_2.png";
import tipImage3 from "@/assets/imgs/tip_3.png";
const GettingStarted = () => {
  return (
    <section className="py-5">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold uppercase">
          Getting Started with Tuning?
        </h1>
        <p className="my-2 text-lg font-semibold">
          3 Simple Tips for Beginners
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 py-5">
        <div>
            <img src={tipImage1} alt="" />
            <h3 className="font-bold text-center py-2">Tuning Tip #1: Start With Standard</h3>
            <p className="text-sm">Standard tuning, EADGBE, is an ideal place to begin. Start by tuning the low E string (the thickest), and continue up through each string until you reach the high E (the thinnest).</p>
        </div>
        <div>
            <img src={tipImage2} alt="" />
            <h3 className="font-bold text-center py-2">Tuning Tip #2: Pick & Pluck</h3>
            <p className="text-sm">When tuning, use a pick or your thumb to play the string. Aim for a balanced pressure—not too hard or too soft—to get the best tone with a firm pluck.</p>
        </div>
        <div>
            <img src={tipImage3} alt="" />
            <h3 className="font-bold text-center py-2">Tuning Tip #3: Sharp vs. Flat</h3>
            <p className="text-sm">If the note is too sharp, turn the peg toward you to lower the pitch. If it's too flat, turn the peg away from you to raise the pitch.</p>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
