import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import brandData from "@/mock-data/brands.json";
import categoriesData from "@/mock-data/categories.json";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { products } from "@/data/product-data";
import ProductCard from "@/components/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import RecentlyViewed from "@/components/RecentlyViewed";

const SearchPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tìm kiếm", href: "/search" },
        ]}
      />
      <MaxWidthWrapper className="pb-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3 py-14">
            <Accordion type="single" collapsible defaultValue="category">
              <AccordionItem value="category" className="border-none">
                <AccordionTrigger className="uppercase font-semibold">
                  Danh mục
                </AccordionTrigger>
                {categoriesData.map((category: any, index: number) => {
                  return (
                    <AccordionContent key={`filter-category-${index}`}>
                      <Link to={`/search?category=${category.id}`}>
                        {category.categoryName}
                      </Link>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
              <hr className="border-black" />
              <AccordionItem value="brand" className="border-none">
                <AccordionTrigger className="uppercase font-semibold">
                  Thương hiệu
                </AccordionTrigger>
                {brandData.map((brand: any, index: number) => {
                  return (
                    <AccordionContent key={`filter-brand-${index}`}>
                      <Link to={`/search?brand=${brand.id}`}>
                        {brand.brandName}
                      </Link>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
              <hr className="border-black" />
              <AccordionItem value="condition" className="border-none">
                <AccordionTrigger className="uppercase font-semibold">
                  Tình trạng
                </AccordionTrigger>
                <AccordionContent>
                  <Link to={`/search?condition=Very Good`}>Rất tốt</Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to={`/search?condition=Excellent`}>Tuyệt vời</Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to={`/search?condition=Brand New`}>Hàng mới</Link>
                </AccordionContent>
              </AccordionItem>
              <hr className="border-black" />
              <AccordionItem value="price" className="border-none">
                <AccordionTrigger className="uppercase font-semibold">
                  Giá
                </AccordionTrigger>
                <AccordionContent>
                  <Link to="/search?maxPrice=1000000">&lt; 1,000,000₫</Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to="/search?minPrice=1000000&maxPrice=5000000">
                    1,000,000₫ - 5,000,000₫
                  </Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to="/search?minPrice=5000000&maxPrice=15000000">
                    5,000,000₫ - 15,000,000₫
                  </Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to="/search?minPrice=15000000&maxPrice=50000000">
                    15,000,000₫ - 50,000,000₫
                  </Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to="/search?maxPrice=1000000">&gt; 50,000,000₫</Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <hr className="border-black" />
          </div>
          <div className="col-span-9">
            <h1 className="text-3xl font-extrabold uppercase text-center py-3">
              Search Products
            </h1>
            <hr className="border-black mb-3" />
            <div className="flex gap-5">
              <p className="font-semibold p-1">Trang 1 | 1-50 trong 500</p>
              <DropdownMenu>
                <DropdownMenuTrigger className="p-1 flex items-center gap-1 font-semibold">
                  Liên quan nhất <IoIosArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link to={"/search?sortBy=Most Relevant"}>
                    <DropdownMenuItem>Liên quan nhất</DropdownMenuItem>
                  </Link>
                  <Link to={"/search?sortBy=Featured"}>
                    <DropdownMenuItem>Nổi bật</DropdownMenuItem>
                  </Link>
                  <Link to={"/search?sortBy=Best Selling"}>
                    <DropdownMenuItem>Bán chạy nhất</DropdownMenuItem>
                  </Link>
                  <Link to={"/search?sortBy=Alphabetically"}>
                    <DropdownMenuItem>Thứ tự chữ cái, A-Z</DropdownMenuItem>
                  </Link>
                  <Link to={"/search?sortBy=Alphabetically Desc"}>
                    <DropdownMenuItem>Thứ tự chữ cái, Z-A</DropdownMenuItem>
                  </Link>
                  <Link to={"/search?sortBy=Price"}>
                    <DropdownMenuItem>Giá, thấp đến cao</DropdownMenuItem>
                  </Link>
                  <Link to={"/search?sortBy=Price Desc"}>
                    <DropdownMenuItem>Giá, Cao đến Thấp</DropdownMenuItem>
                  </Link>
                  <Link to={"/search?sortBy=Date"}>
                    <DropdownMenuItem>Ngày, Cũ Đến Mới</DropdownMenuItem>
                  </Link>
                  <Link to={"/search?sortBy=Date Desc"}>
                    <DropdownMenuItem>Ngày, Mới Đến Cũ</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-4 gap-5 py-5">
              {products.map((product, index: number) => {
                return (
                  <div key={`new-arrival-${index}`} className="px-3">
                    <ProductCard
                      productId={product.id}
                      productName={product.productName}
                      image={product.images[0].imageUrl}
                      price={product.price}
                      status={product.status}
                    />
                  </div>
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
        </div>

        <RecentlyViewed />
      </MaxWidthWrapper>
    </div>
  );
};

export default SearchPage;
