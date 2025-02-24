import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product-data";
import Slider from "react-slick";

const NewArrivals = () => {
  const filteredProducts = products.slice(0, 6);
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
    <div className="my-16">
      <h2 className="text-center font-extrabold text-3xl my-5 uppercase">
        Hàng mới về
      </h2>
      <div className="slider-container mt-5">
        <Slider {...settings} arrows={true}>
          {filteredProducts.map((product, index: number) => {
            return (
              <div key={`new-arrival-${index}`} className="px-3">
                <ProductCard product={product} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
