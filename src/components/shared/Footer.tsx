import { Link } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <div className="bg-zinc-700">
      <MaxWidthWrapper className="text-white p-16">
        <div className="grid grid-cols-12 my-5 gap-5">
          <div className="col-span-2">
            <h4 className="uppercase font-extrabold">Shop</h4>
            <hr className="my-2" />
            <ul className="text-sm flex flex-col gap-2">
              <Link to={"/about-us"}>
                <li>Về chúng tôi</li>
              </Link>
              <Link to={"/our-team"}>
                <li>Đội ngũ của chúng tôi</li>
              </Link>
              <Link to={"/flagship-store"}>
                <li>Cửa hàng hàng đầu</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="uppercase font-extrabold">Dịch vụ khách hàng</h4>
            <hr className="my-2" />
            <ul className="text-sm flex flex-col gap-2">
              <Link to={"/faq/contact"}>
                <li>Liên hệ</li>
              </Link>
              <Link to={"/faq/services-and-maintenance"}>
                <li>Dịch vụ & Bảo trì</li>
              </Link>
              <Link to={"/faq/wholesale"}>
                <li>Bán buôn</li>
              </Link>
              <Link to={"/faq/sell-your-gear"}>
                <li>Bán thiết bị của bạn</li>
              </Link>
              <Link to={"/faq/shipping-policies"}>
                <li>Chính sách vận chuyển</li>
              </Link>
              <Link to={"/faq/terms-of-service"}>
                <li>Điều khoản dịch vụ</li>
              </Link>
              <Link to={"/faq/return-policies"}>
                <li>Chính sách trả hàng</li>
              </Link>
              <Link to={"/faq/privacy-policies"}>
                <li>Chính sách bảo mật</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="uppercase font-extrabold">Ghé thăm chúng tôi</h4>
            <hr className="my-2" />
            <div className="text-sm">
              <div>
                <h5 className="font-bold">Giờ mở</h5>
                <p>Thứ Hai - Chủ Nhật</p>
                <p>10:00 AM - 08:30 PM</p>
              </div>
              <div className="mt-5">
                <h5 className="font-bold">Reverb</h5>
                <p>Ghé thăm cửa hàng trên Reverb</p>
              </div>
              <div className="mt-5">
                <h5 className="font-bold">Vintage & Rare</h5>
                <p>
                  Ghé thăm cửa hàng trên{" "}
                  <span className="font-bold">Vintage & Rare</span>
                </p>
              </div>
              <div className="mt-5">
                <h5 className="font-bold">Lab's Shopee</h5>
                <p>
                  Ghé thăm cửa hàng trên{" "}
                  <span className="font-bold">Shopee</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <div>
              <p className="text-3xl uppercase font-extrabold">
                Hãy giữ liên lạc
              </p>
              <p className="text-xs text-center my-5">
                Cập nhật tin tức, ưu đãi và sự kiện mới nhất của chúng tôi
              </p>
              <Input
                placeholder="Nhập địa chỉ email của bạn"
                className="bg-white placeholder:text-center text-gray-900"
                type="email"
              ></Input>
            </div>
          </div>
        </div>
        <p className="text-xs mt-2">© Innovibe 2024</p>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
