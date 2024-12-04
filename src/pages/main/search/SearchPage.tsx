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

const SearchPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Search", href: "/search" },
        ]}
      />
      <MaxWidthWrapper className="grid grid-cols-12 gap-5">
        <div className="col-span-3 py-14">
          <Accordion type="single" collapsible defaultValue="category">
            <AccordionItem value="category" className="border-none">
              <AccordionTrigger className="uppercase font-semibold">
                Categories
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
                Brands
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
                Condition
              </AccordionTrigger>
              <AccordionContent>
                <Link to={`/search?condition=Very Good`}>Very Good</Link>
              </AccordionContent>
              <AccordionContent>
                <Link to={`/search?condition=Excellent`}>Excellent</Link>
              </AccordionContent>
              <AccordionContent>
                <Link to={`/search?condition=Brand New`}>Brand New</Link>
              </AccordionContent>
            </AccordionItem>
            <hr className="border-black" />
            <AccordionItem value="price" className="border-none">
              <AccordionTrigger className="uppercase font-semibold">
                Price
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
            <p className="font-semibold p-1">Page 1 | 1-50 of 500</p>
            <DropdownMenu>
              <DropdownMenuTrigger className="p-1 flex items-center gap-1 font-semibold">
                Most Relevant <IoIosArrowDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link to={"/search?sortBy=Most Relevant"}>
                  <DropdownMenuItem>Most Relevant</DropdownMenuItem>
                </Link>
                <Link to={"/search?sortBy=Featured"}>
                  <DropdownMenuItem>Featured</DropdownMenuItem>
                </Link>
                <Link to={"/search?sortBy=Best Selling"}>
                  <DropdownMenuItem>Best Selling</DropdownMenuItem>
                </Link>
                <Link to={"/search?sortBy=Alphabetically"}>
                  <DropdownMenuItem>Alphabetically, A-Z</DropdownMenuItem>
                </Link>
                <Link to={"/search?sortBy=Alphabetically Desc"}>
                  <DropdownMenuItem>Alphabetically, Z-A</DropdownMenuItem>
                </Link>
                <Link to={"/search?sortBy=Price"}>
                  <DropdownMenuItem>Price, Low to High</DropdownMenuItem>
                </Link>
                <Link to={"/search?sortBy=Price Desc"}>
                  <DropdownMenuItem>Price, High to Low</DropdownMenuItem>
                </Link>
                <Link to={"/search?sortBy=Date"}>
                  <DropdownMenuItem>Date, Old To New</DropdownMenuItem>
                </Link>
                <Link to={"/search?sortBy=Date Desc"}>
                  <DropdownMenuItem>Date, New To Old</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SearchPage;
