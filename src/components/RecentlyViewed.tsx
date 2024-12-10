import toolImage5 from "@/assets/imgs/tool_5.png";
import toolImage6 from "@/assets/imgs/tool_6.png";
import toolImage7 from "@/assets/imgs/tool_7.png";
import toolImage8 from "@/assets/imgs/tool_8.png";
import toolImage9 from "@/assets/imgs/tool_9.png";
import ProductCard from "./ProductCard";
const data = [
  {
    id: 1,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: toolImage5,
  },
  {
    id: 2,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: toolImage6,
  },
  {
    id: 3,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: toolImage7,
  },
  {
    id: 4,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: toolImage8,
  },
  {
    id: 5,
    productName:
      "Ibanez Prestige AZ2204N Electric Guitar Prussian Blue Metallic",
    status: "Available",
    price: 10_000_000,
    image: toolImage9,
  },
];
const RecentlyViewed = () => {
  return (
    <div className="py-5">
      <h1 className="text-3xl font-extrabold uppercase text-center py-3">
        Đã xem gần đây
      </h1>
      <div className="grid grid-cols-5">
        {data.map((product: any, index: number) => {
          return (
            <div key={`special-offer-${index}`}>
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

export default RecentlyViewed;
