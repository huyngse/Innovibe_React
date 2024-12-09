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
          Hoàn thiện việc lên dây của bạn
        </h1>
        <p className="my-2 text-lg font-semibold">
          Hãy xem những bài học miễn phí của Innovibe Play.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 py-5">
        <div>
          <img src={lessonImage1} alt="" className="rounded-lg" />
          <h3 className="font-bold text-center py-2">Giữ nốt nhạc</h3>
          <p className="text-sm min-h-16">
            Đừng quá liều lĩnh. Để lên dây chính xác, hãy tập trung vào việc duy
            trì nốt nhạc.
          </p>
          <div className="flex justify-center py-3">
            <Link to="https://www.youtube.com/watch?v=Nl5XiKBxrZ0">
              <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
                Xem ngay
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img src={lessonImage2} alt="" className="rounded-lg" />
          <h3 className="font-bold text-center py-2">Lên dây thay thế</h3>
          <p className="text-sm min-h-16">
            Mở rộng hơn cả cách lên dây chuẩn (EADGBE). Khám phá cách lên dây
            mở, nửa bước và thả để tạo ra âm thanh mới.
          </p>
          <div className="flex justify-center py-3">
            <Link to="https://www.youtube.com/watch?v=5jTsSvkBv60">
              <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
                Xem ngay
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img src={lessonImage3} alt="" className="rounded-lg" />
          <h3 className="font-bold text-center py-2">
            Duy trì giai điệu của bạn lâu hơn
          </h3>
          <p className="text-sm min-h-16">
            Cách bạn xoay chốt lên dây đàn rất quan trọng. Khám phá các kỹ thuật
            tốt nhất để lên dây đàn lâu dài trong video này.
          </p>
          <div className="flex justify-center py-3">
            <Link to="https://www.youtube.com/watch?v=fK7FYTZnN5c">
              <Button className="bg-orange-600 hover:bg-orange-500 uppercase font-bold">
                Xem ngay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayLessons;
