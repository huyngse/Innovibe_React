import guitarImage1 from "@/assets/imgs/guitar_1.png";
import guitarImage2 from "@/assets/imgs/guitar_2.png";
import guitarImage3 from "@/assets/imgs/guitar_3.png";
import guitarImage4 from "@/assets/imgs/guitar_4.png";
import guitarImage5 from "@/assets/imgs/guitar_5.png";
import guitarImage6 from "@/assets/imgs/guitar_6.png";
import ProductCard from "@/components/ProductCard";
import Slider from "react-slick";
const data = [
  {
    id: 1,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: guitarImage1,
  },
  {
    id: 2,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: guitarImage2,
  },
  {
    id: 3,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: guitarImage3,
  },
  {
    id: 4,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: guitarImage4,
  },
  {
    id: 5,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: guitarImage5,
  },
  {
    id: 6,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: guitarImage6,
  },
];
const NewArrivals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="my-5">
      <h2 className="text-center font-extrabold text-3xl my-5">New Arrivals</h2>
      <div className="slider-container mt-5">
        <Slider {...settings} arrows={true}>
          {data.map((product: any, index: number) => {
            return (
              <div key={`new-arrival-${index}`} className="px-3">
                <ProductCard
                  productId={product.id}
                  productName={product.productName}
                  image={product.image}
                  price={product.price}
                  status={product.status}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
