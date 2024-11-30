import TrustSignal1 from "@/assets/imgs/Truck.png";
import TrustSignal2 from "@/assets/imgs/Natural User Interface 2.png";
import TrustSignal3 from "@/assets/imgs/Magnetic Card.png";
import TrustSignal4 from "@/assets/imgs/Transaction.png";
const TrustSignals = () => {
  return (
    <div className="my-5 grid grid-cols-12 gap-5">
      <div className="col-span-3 flex justify-center items-center flex-col gap-1">
        <img src={TrustSignal1} alt="" />
        <h3 className="text-orange-600 text-lg uppercase font-bold">
          Free inner-city shipping
        </h3>
        <p className="text-sm text-center">
          <span className="font-bold">Free shipping</span> within the city,
          nationwide for orders over a certain amount.
        </p>
      </div>
      <div className="col-span-3 flex justify-center items-center flex-col gap-1">
        <img src={TrustSignal2} alt="" />
        <h3 className="text-orange-600 text-lg uppercase font-bold">
          Free click & collect
        </h3>
        <p className="text-sm text-center">Just 10% deposit required.</p>
      </div>
      <div className="col-span-3 flex justify-center items-center flex-col gap-1">
        <img src={TrustSignal3} alt="" />
        <h3 className="text-orange-600 text-lg uppercase font-bold">
          Guarantee payment
        </h3>
        <p className="text-sm text-center">Online shopping easy and fast</p>
      </div>
      <div className="col-span-3 flex justify-center items-center flex-col gap-1">
        <img src={TrustSignal4} alt="" />
        <h3 className="text-orange-600 text-lg uppercase font-bold">
          14 days return
        </h3>
        <p className="text-sm text-center">
          Enjoy flexible polices when you change your mind
        </p>
      </div>
    </div>
  );
};

export default TrustSignals;
