import acousticIcon from "@/assets/imgs/acoustic-guitar-icon.webp";
import electricIcon from "@/assets/imgs/electric-guitar-icon.webp";
import bassIcon from "@/assets/imgs/bass-guitar-icon.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
const instruments = [
  {
    id: 1,
    name: "Acoustic",
    image: acousticIcon,
    path: "/acoustic-tuner",
  },
  {
    id: 2,
    name: "Electric",
    image: electricIcon,
    path: "/electric-tuner",
  },
  {
    id: 3,
    name: "Bass",
    image: bassIcon,
    path: "/bass-tuner",
  },
];
const tuningOptions = [
  {
    id: 1,
    name: "Standard Tuning",
    chord: "E A D G B e",
    description: "The most common tuning for guitar.",
  },
  {
    id: 2,
    name: "Drop D Tuning",
    chord: "D A D G B e",
    description: "Lowers the sixth string to D, useful for power chords.",
  },
  {
    id: 3,
    name: "Open D Tuning",
    chord: "D A D F# A D",
    description: "Creates a D major chord when strummed open.",
  },
  {
    id: 4,
    name: "Open G Tuning",
    chord: "D G D G B D",
    description: "Creates a G major chord when strummed open.",
  },
  {
    id: 5,
    name: "DADGAD Tuning",
    chord: "D A D G A D",
    description:
      "Popular in folk and Celtic music; offers drone-like qualities.",
  },
  {
    id: 6,
    name: "Half-Step Down Tuning",
    chord: "Eb Ab Db Gb Bb eb",
    description: "Lowers all strings by a half step.",
  },
  {
    id: 7,
    name: "Whole-Step Down Tuning",
    chord: "D G C F A D",
    description: "Lowers all strings by a whole step.",
  },
  {
    id: 8,
    name: "C6 Tuning",
    chord: "C E G A C E",
    description: "Common in Hawaiian and slide guitar.",
  },
  {
    id: 9,
    name: "Baritone Tuning",
    chord: "B E A D F# B",
    description: "Lowered tuning for baritone guitars.",
  },
  {
    id: 10,
    name: "Nashville Tuning",
    chord: "E A D G B e",
    description:
      "Uses lighter strings for the higher pitches, mimicking a 12-string guitar.",
  },
  {
    id: 11,
    name: "Double Drop D Tuning",
    chord: "D A D G B D",
    description: "Lowers both the sixth and first strings to D.",
  },
  {
    id: 12,
    name: "Celtic Tuning",
    chord: "C G D G B D",
    description: "Similar to DADGAD, but with a C bass.",
  },
];
const ToolsPanel = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="bg-white drop-shadow rounded-lg px-5 w-5/6 mx-auto py-10">
      <h3 className="uppercase font-bold text-orange-600 pb-5 text-lg">
        Thay đổi nhạc cụ
      </h3>
      <div className="grid grid-cols-3 gap-5">
        {instruments.map((i, index: number) => {
          return (
            <button
              key={index}
              className={cn(
                "text-center overflow-hidden rounded-lg",
                location.pathname == i.path ? "border-2 border-orange-600" : ""
              )}
              onClick={() => {
                navigate(i.path);
              }}
            >
              <AspectRatio ratio={1 / 1}>
                <img
                  src={i.image}
                  alt="Go to acoustic guitar tuner"
                  className="hover:scale-105 hover:rotate-3 duration-100"
                />
              </AspectRatio>
              <p className="font-bold">{i.name}</p>
            </button>
          );
        })}
      </div>
      <div className="mt-10">
        <h3 className="uppercase font-bold text-orange-600 pb-5 text-lg">
          Chọn điều chỉnh
        </h3>
        <ScrollArea className="h-[150px] border-y-2 pe-5">
          {tuningOptions.map((option, index: number) => {
            return (
              <button key={index} className="w-full py-1 border-y font-semibold hover:bg-zinc-100 active:bg-zinc-200">
                {option.chord}
              </button>
            );
          })}
        </ScrollArea>
      </div>
    </div>
  );
};

export default ToolsPanel;
