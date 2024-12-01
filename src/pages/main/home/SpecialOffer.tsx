import toolImage1 from "@/assets/imgs/tool_1.png";
import toolImage2 from "@/assets/imgs/tool_2.png";
import toolImage3 from "@/assets/imgs/tool_3.png";
import toolImage4 from "@/assets/imgs/tool_4.png";
import ProductCard from "@/components/ProductCard";

const data = [
  {
    id: 1,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 240_000,
    salesPrice: 169_000,
    image: toolImage1,
  },
  {
    id: 2,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 240_000,
    salesPrice: 169_000,
    image: toolImage2,
  },
  {
    id: 3,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 240_000,
    salesPrice: 169_000,
    image: toolImage3,
  },
  {
    id: 4,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 240_000,
    salesPrice: 169_000,
    image: toolImage4,
  },
];
const SpecialOffer = () => {
  return (
    <div className="my-5">
      <h2 className="text-center font-extrabold text-3xl my-5">Special Offer</h2>
      <div className="grid grid-cols-12">
        {data.map((product: any, index: number) => {
          return (
            <div key={`special-offer-${index}`} className="col-span-3">
              <ProductCard
                productId={product.id}
                productName={product.productName}
                image={product.image}
                price={product.price}
                salesPrice={product.salesPrice}
                status={product.status}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialOffer;
