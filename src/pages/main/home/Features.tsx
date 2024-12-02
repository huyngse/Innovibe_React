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
          Free shipping
        </h5>
        <p className="font-semibold">
          Nationwide free delivery for maximum convenience.
        </p>
      </div>
      <div className="col-span-4 text-center">
        <div className="flex justify-center">
          <img src={OnlineShoppingImage} alt="" />
        </div>
        <hr className="border-orange-600 my-2" />
        <h5 className="uppercase text-orange-600 font-extrabold text-lg">
          Secure Online Shopping
        </h5>
        <p className="font-semibold">
          A secure payment system ensures peace of mind when shopping online.
        </p>
      </div>
      <div className="col-span-4 text-center">
        <div className="flex justify-center">
          <img src={HeadsetImage} alt="" />
        </div>
        <hr className="border-orange-600 my-2" />
        <h5 className="uppercase text-orange-600 font-extrabold text-lg">
          Dedicated Customer Support
        </h5>
        <p className="font-semibold">
          A professional team is always ready to assist, whether shopping online
          or in-store.
        </p>
      </div>
    </div>
  );
};

export default Features;
