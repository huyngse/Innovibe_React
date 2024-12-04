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
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SearchPage;
