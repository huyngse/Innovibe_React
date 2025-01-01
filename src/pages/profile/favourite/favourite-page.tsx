import { productsData } from "@/mock-data/products";
import FavouriteCard from "./favourite-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
const FavouritePage = () => {
  return (
    <div className="py-3">
      <h1 className="text-2xl font-semibold py-3">Sản phẩm đã thích</h1>
      <div className="grid grid-cols-4 gap-3">
        {productsData.map((product, index: number) => {
          return (
            <FavouriteCard
              productId={product.id}
              productName={product.productName}
              image={product.image}
              price={product.price}
              status={product.status}
              key={index}
            />
          );
        })}
      </div>
      <div className="py-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default FavouritePage;
