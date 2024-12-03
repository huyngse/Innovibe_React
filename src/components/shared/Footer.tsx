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
                <li>About us</li>
              </Link>
              <Link to={"/our-team"}>
                <li>Our team</li>
              </Link>
              <Link to={"/flagship-store"}>
                <li>Flagship store</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="uppercase font-extrabold">Customer service</h4>
            <hr className="my-2" />
            <ul className="text-sm flex flex-col gap-2">
              <Link to={"/faq/contact"}>
                <li>Contact</li>
              </Link>
              <Link to={"/faq/services-and-maintenance"}>
                <li>Services & Maintenance</li>
              </Link>
              <Link to={"/faq/wholesale"}>
                <li>Wholesale</li>
              </Link>
              <Link to={"/faq/sell-your-gear"}>
                <li>Sell your gear</li>
              </Link>
              <Link to={"/faq/shipping-policies"}>
                <li>Shipping policies</li>
              </Link>
              <Link to={"/faq/terms-of-service"}>
                <li>Terms of Service</li>
              </Link>
              <Link to={"/faq/return-policies"}>
                <li>Returns policies</li>
              </Link>
              <Link to={"/faq/privacy-policies"}>
                <li>Privacy policies</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="uppercase font-extrabold">Visit us</h4>
            <hr className="my-2" />
            <div className="text-sm">
              <div>
                <h5 className="font-bold">Store Hours</h5>
                <p>Monday - Sunday</p>
                <p>10:00 AM - 08:30 PM</p>
              </div>
              <div className="mt-5">
                <h5 className="font-bold">Reverb</h5>
                <p>Visit our store on Reverb</p>
              </div>
              <div className="mt-5">
                <h5 className="font-bold">Vintage & Rare</h5>
                <p>
                  Visit our store on{" "}
                  <span className="font-bold">Vintage & Rare</span>
                </p>
              </div>
              <div className="mt-5">
                <h5 className="font-bold">Lab's Shopee</h5>
                <p>
                  Visit our store on <span className="font-bold">Shopee</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-6 flex justify-center">
            <div>
              <p className="text-3xl uppercase font-extrabold">
                Let's be in touch
              </p>
              <p className="text-xs text-center my-5">
                Keep up with our latest news, offers and events
              </p>
              <Input
                placeholder="Enter Your Email Address"
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
