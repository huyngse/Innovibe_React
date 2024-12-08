import FreeShippingImage from "@/assets/imgs/Free Shipping.png";
import OnlineShoppingImage from "@/assets/imgs/Online Shopping.png";
import HeadsetImage from "@/assets/imgs/Headset.png";
const Features = () => {
  return (
    <div className="my-16 grid grid-cols-12 gap-10">
      <div className="col-span-4 text-center">
        <div className="flex justify-center">
          <img src={FreeShippingImage} alt="" />
        </div>
        <hr className="border-orange-600 my-2" />
        <h5 className="uppercase text-orange-600 font-extrabold text-lg">
          Miễn phí vận chuyển
        </h5>
        <p className="font-semibold">
          Giao hàng miễn phí trên toàn quốc để mang lại sự tiện lợi tối đa.
        </p>
      </div>
      <div className="col-span-4 text-center">
        <div className="flex justify-center">
          <img src={OnlineShoppingImage} alt="" />
        </div>
        <hr className="border-orange-600 my-2" />
        <h5 className="uppercase text-orange-600 font-extrabold text-lg">
          Mua sắm trực tuyến an toàn
        </h5>
        <p className="font-semibold">
          Hệ thống thanh toán an toàn đảm bảo sự an tâm khi mua sắm trực tuyến.
        </p>
      </div>
      <div className="col-span-4 text-center">
        <div className="flex justify-center">
          <img src={HeadsetImage} alt="" />
        </div>
        <hr className="border-orange-600 my-2" />
        <h5 className="uppercase text-orange-600 font-extrabold text-lg">
          Hỗ trợ khách hàng tận tâm
        </h5>
        <p className="font-semibold">
          Đội ngũ chuyên nghiệp luôn sẵn sàng hỗ trợ, dù bạn mua sắm trực tuyến
          hay tại cửa hàng.
        </p>
      </div>
    </div>
  );
};

export default Features;
