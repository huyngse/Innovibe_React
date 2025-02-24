import ProductCard from "@/components/ProductCard";
import { products } from "@/data/product-data";
const SpecialOffer = () => {
  return (
    <div className="my-16">
      <h2 className="text-center font-extrabold text-3xl my-5 uppercase">
        Khuyến mại đặc biệt
      </h2>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <ProductCard product={products[8]} />
        </div>
        <div className="col-span-3">
          <ProductCard product={products[9]} />
        </div>
        <div className="col-span-3">
          <ProductCard product={products[10]} />
        </div>
        <div className="col-span-3">
          <ProductCard product={products[11]} />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
