import lessonImage1 from "@/assets/imgs/lesson_1.png";
import lessonImage2 from "@/assets/imgs/lesson_2.png";
import lessonImage3 from "@/assets/imgs/lesson_3.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const PlayLessons = () => {
  return (
    <section className="py-5">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold uppercase">
          Perfect Your Tuning
        </h1>
        <p className="my-2 text-lg font-semibold">
          Check out these free Innovibe Play lessons.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 py-5">
        <div>
          <img src={lessonImage1} alt="" className="rounded-lg" />
          <h3 className="font-bold text-center py-2">Hold the Note</h3>
          <p className="text-sm min-h-16">
            Don't be too plucky. For precise tuning, focus on sustaining the
            note.
          </p>
          <div className="flex justify-center py-3">
            <Link to="https://www.youtube.com/watch?v=Nl5XiKBxrZ0">
              <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
                Watch Now
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img src={lessonImage2} alt="" className="rounded-lg" />
          <h3 className="font-bold text-center py-2">Alternative Tunings</h3>
          <p className="text-sm min-h-16">
            Expand beyond standard tuning (EADGBE). Discover open, half-step,
            and drop tunings to create new sounds.
          </p>
          <div className="flex justify-center py-3">
            <Link to="https://www.youtube.com/watch?v=5jTsSvkBv60">
              <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
                Watch Now
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img src={lessonImage3} alt="" className="rounded-lg" />
          <h3 className="font-bold text-center py-2">
            Maintain Your Tune Longer
          </h3>
          <p className="text-sm min-h-16">
            How you turn the tuning pegs is important. Discover the best
            techniques for lasting tuning in this video.
          </p>
          <div className="flex justify-center py-3">
            <Link to="https://www.youtube.com/watch?v=fK7FYTZnN5c">
              <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
                Watch Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayLessons;
