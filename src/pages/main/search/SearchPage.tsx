import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link, useSearchParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from "@/components/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious, 
} from "@/components/ui/pagination";
import RecentlyViewed from "@/components/RecentlyViewed";
import { useEffect, useCallback } from "react";
import useProductStore from "@/stores/use-product-store";
import Loader from "@/components/Loader";
import useBrandStore from "@/stores/use-brand-store";
import useCategoryStore from "@/stores/use-category-store";

const SearchPage = () => {
  const { 
    products, 
    loading: productLoading, 
    fetchProducts, 
    error: productError, 
    totalProducts 
  } = useProductStore();
  
  const { brands, loading: brandLoading, fetchBrands, error: brandError } = useBrandStore();
  const { categories, loading: categoryLoading, fetchCategories, error: categoryError } = useCategoryStore();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryId = searchParams.get("category");
  const brandId = searchParams.get("brand");
  const pageNumber = parseInt(searchParams.get("page") || "1");
  const pageSize = 50;

  const fetchInitialData = useCallback(async () => {
    try {
      await Promise.all([fetchBrands(), fetchCategories()]);
    } catch (error) {
      console.error("Error fetching initial data:", error);
    }
  }, [fetchBrands, fetchCategories]);

  const fetchFilteredProducts = useCallback(async () => {
    try {
      const selectedCategory = categoryId 
        ? categories.find((cat) => String(cat.categoryId) === categoryId)
        : undefined;
      const selectedBrand = brandId 
        ? brands.find((brand) => String(brand.brandId) === brandId)
        : undefined;

      await fetchProducts({
        categoryName: selectedCategory?.name,
        brandName: selectedBrand?.name,
        pageNumber,
        pageSize,
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [categories, brands, categoryId, brandId, pageNumber, pageSize, fetchProducts]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  useEffect(() => {
    if (categories.length > 0 && brands.length > 0) {
      fetchFilteredProducts();
    }
  }, [categories, brands, categoryId, brandId, pageNumber, fetchFilteredProducts]);

  if (productLoading || brandLoading || categoryLoading) {
    return <Loader />;
  }

  if (productError || brandError || categoryError) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{productError || brandError || categoryError}</p>
      </div>
    );
  }

  const safeTotalProducts = totalProducts || 0;
  const totalPages = Math.ceil(safeTotalProducts / pageSize);

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
                <AccordionTrigger className="uppercase font-semibold">Danh mục</AccordionTrigger>
                {categories.map((category, index) => (
                  <AccordionContent key={`filter-category-${index}`}>
                    <Link
                      to={`/search?category=${category.categoryId}`}
                      onClick={() => setSearchParams({ category: String(category.categoryId) })}
                    >
                      {category.name}
                    </Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
              <hr className="border-black" />
              <AccordionItem value="brand" className="border-none">
                <AccordionTrigger className="uppercase font-semibold">Thương hiệu</AccordionTrigger>
                {brands.map((brand, index) => (
                  <AccordionContent key={`filter-brand-${index}`}>
                    <Link
                      to={`/search?brand=${brand.brandId}`}
                      onClick={() => setSearchParams({ brand: String(brand.brandId) })}
                    >
                      {brand.name}
                    </Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
              <hr className="border-black" />
              <AccordionItem value="condition" className="border-none">
                <AccordionTrigger className="uppercase font-semibold">Tình trạng</AccordionTrigger>
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
                <AccordionTrigger className="uppercase font-semibold">Giá</AccordionTrigger>
                <AccordionContent>
                  <Link to="/search?maxPrice=1000000"> 1,000,000đ</Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to="/search?minPrice=1000000&maxPrice=5000000">1,000,000đ - 5,000,000đ</Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to="/search?minPrice=5000000&maxPrice=15000000">5,000,000đ - 15,000,000đ</Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to="/search?minPrice=15000000&maxPrice=50000000">15,000,000đ - 50,000,000đ</Link>
                </AccordionContent>
                <AccordionContent>
                  <Link to="/search?minPrice=50000000"> 50,000,000đ</Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <hr className="border-black" />
          </div>
          <div className="col-span-9">
            <h1 className="text-3xl font-extrabold uppercase text-center py-3">Tìm kiếm sản phẩm</h1>
            <hr className="border-black mb-3" />
            <div className="flex gap-5">
              <p className="font-semibold p-1">
                Trang {pageNumber} | {(pageNumber - 1) * pageSize + 1}-
                {Math.min(pageNumber * pageSize, safeTotalProducts)} trong {safeTotalProducts}
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger className="p-1 flex items-center gap-1 font-semibold">
                  Liên quan nhất <IoIosArrowDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link to={"/search?sortBy=Most Relevant"}><DropdownMenuItem>Liên quan nhất</DropdownMenuItem></Link>
                  <Link to={"/search?sortBy=Featured"}><DropdownMenuItem>Nổi bật</DropdownMenuItem></Link>
                  <Link to={"/search?sortBy=Best Selling"}><DropdownMenuItem>Bán chạy nhất</DropdownMenuItem></Link>
                  <Link to={"/search?sortBy=Alphabetically"}><DropdownMenuItem>Thứ tự chữ cái, A-Z</DropdownMenuItem></Link>
                  <Link to={"/search?sortBy=Alphabetically Desc"}><DropdownMenuItem>Thứ tự chữ cái, Z-A</DropdownMenuItem></Link>
                  <Link to={"/search?sortBy=Price"}><DropdownMenuItem>Giá, thấp đến cao</DropdownMenuItem></Link>
                  <Link to={"/search?sortBy=Price Desc"}><DropdownMenuItem>Giá, cao đến thấp</DropdownMenuItem></Link>
                  <Link to={"/search?sortBy=Date"}><DropdownMenuItem>Ngày, cũ đến mới</DropdownMenuItem></Link>
                  <Link to={"/search?sortBy=Date Desc"}><DropdownMenuItem>Ngày, mới đến cũ</DropdownMenuItem></Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="grid grid-cols-4 gap-5 py-5">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <div key={`new-arrival-${index}`} className="px-3">
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <p className="col-span-4 text-center">Không tìm thấy sản phẩm nào.</p>
              )}
            </div>
            <div className="py-5">
              <Pagination>
                <PaginationContent>
                  {pageNumber > 1 && (
                    <>
                      <PaginationItem>
                        <PaginationPrevious href={`/search?page=${pageNumber - 1}`} />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href={`/search?page=${pageNumber - 1}`}>{pageNumber - 1}</PaginationLink>
                      </PaginationItem>
                    </>
                  )}
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                  {pageNumber < totalPages && (
                    <PaginationItem>
                      <PaginationLink href={`/search?page=${pageNumber + 1}`}>{pageNumber + 1}</PaginationLink>
                    </PaginationItem>
                  )}
                  {pageNumber < totalPages - 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {pageNumber < totalPages && (
                    <PaginationItem>
                      <PaginationNext href={`/search?page=${pageNumber + 1}`} />
                    </PaginationItem>
                  )}
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