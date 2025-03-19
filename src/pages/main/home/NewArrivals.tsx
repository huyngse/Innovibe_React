import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import useProductStore from "@/stores/use-product-store";
import { Product } from "@/types/product";
import Slider from "react-slick";

const NewArrivals = () => {
  const productStore = useProductStore();
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
  function getLatestProducts(products: Product[]) {
    const availableProducts = products.filter(
      (product) => product.status == "In Stock"
    );
    const sortedProducts = availableProducts.sort(
      (a, b) => new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
    );
    return sortedProducts.slice(0, 6);
  }
  const latestProducts = getLatestProducts(productStore.products);
  return (
    <div className="my-16">
      <h2 className="text-center font-extrabold text-3xl my-5 uppercase">
        Hàng mới về
      </h2>
      <div className="slider-container mt-5">
        {productStore.loading ? (
          <Loader />
        ) : (
          <Slider {...settings} arrows={true}>
            {latestProducts.map((product, index: number) => {
              return (
                <div key={`new-arrival-${index}`} className="px-3">
                  <ProductCard product={product} />
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
