import HeroBanner from "@/assets/imgs/hero.png";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return (
    <div className="my-16 grid grid-cols-12 gap-5">
      <div className="col-span-6">
        <h2 className="font-extrabold text-3xl uppercase">Chúng tôi là ai</h2>
        <p className="pe-5 my-5 font-semibold">
          Chúng tôi không chỉ là người bán nhạc cụ—chúng tôi là ngọn lửa đằng
          sau âm nhạc, là sức mạnh thúc đẩy sự nổi loạn của bạn. Chúng tôi là
          những người phá vỡ ranh giới, phá vỡ các quy tắc và tạo ra tiếng ồn.
          Chúng tôi là những kẻ ngoài vòng pháp luật của âm thanh, là những con
          quỷ của nhịp điệu và chúng tôi sát cánh cùng những người dám khác
          biệt. Bạn không chơi nhạc. Bạn sống với âm nhạc.
        </p>
        <Button className="uppercase rounded-xl px-5">Đọc thêm</Button>
      </div>
      <img src={HeroBanner} alt="" className="col-span-6" />
    </div>
  );
};

export default Hero;
