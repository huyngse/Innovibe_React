import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Checkbox } from "@/components/ui/checkbox";

const SearchPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Search", href: "/search" },
        ]}
      />
      <MaxWidthWrapper className="grid grid-cols-12">
        <div className="col-span-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </div>
        <div className="col-span-10">
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
