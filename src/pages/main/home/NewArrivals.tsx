import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
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
    const sortedProducts = products.sort(
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
        <Slider {...settings} arrows={true}>
          {productStore.loading ? (
            <>
              <Skeleton className="w-full h-[200px] rounded-full" />
              <Skeleton className="w-full h-[200px] rounded-full" />
              <Skeleton className="w-full h-[200px] rounded-full" />
              <Skeleton className="w-full h-[200px] rounded-full" />
              <Skeleton className="w-full h-[200px] rounded-full" />
            </>
          ) : (
            latestProducts.map((product, index: number) => {
              return (
                <div key={`new-arrival-${index}`} className="px-3">
                  <ProductCard product={product} />
                </div>
              );
            })
          )}
        </Slider>
      </div>
    </div>
  );
};

export default NewArrivals;
