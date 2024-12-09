import tipImage1 from "@/assets/imgs/tip_1.png";
import tipImage2 from "@/assets/imgs/tip_2.png";
import tipImage3 from "@/assets/imgs/tip_3.png";
const GettingStarted = () => {
  return (
    <section className="py-5">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold uppercase">Bắt đầu lên dây?</h1>
        <p className="my-2 text-lg font-semibold">
          3 Mẹo đơn giản cho người mới bắt đầu
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 py-5">
        <div>
          <img src={tipImage1} alt="" />
          <h3 className="font-bold text-center py-2">
            Mẹo lên dây #1: Bắt đầu với tiêu chuẩn
          </h3>
          <p className="text-sm">
            Lên dây chuẩn, EADGBE, là nơi lý tưởng để bắt đầu. Bắt đầu bằng cách
            lên dây E thấp (dây dày nhất), và tiếp tục lên từng dây cho đến khi
            bạn đạt đến dây E cao (dây mỏng nhất).
          </p>
        </div>
        <div>
          <img src={tipImage2} alt="" />
          <h3 className="font-bold text-center py-2">
            Mẹo lên dây #2: Pick & Pluck
          </h3>
          <p className="text-sm">
            Khi lên dây, hãy dùng miếng gảy hoặc ngón tay cái để chơi dây đàn.
            Hãy nhắm đến lực cân bằng—không quá mạnh hoặc quá nhẹ—để có được âm
            thanh tốt nhất khi gảy chắc.
          </p>
        </div>
        <div>
          <img src={tipImage3} alt="" />
          <h3 className="font-bold text-center py-2">
            Mẹo lên dây #3: Cao vs. Thấp
          </h3>
          <p className="text-sm">
            Nếu nốt nhạc quá cao, hãy xoay chốt về phía bạn để hạ cao độ. Nếu
            nốt nhạc quá thấp, hãy xoay chốt ra xa bạn để nâng cao cao độ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
