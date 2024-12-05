import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import detailImage5 from "@/assets/imgs/detail_1.png";
import detailImage2 from "@/assets/imgs/detail_2.png";
import detailImage3 from "@/assets/imgs/detail_3.png";
import detailImage4 from "@/assets/imgs/detail_4.png";
import detailImage1 from "@/assets/imgs/detail_5.png";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Rating } from "@smastrom/react-rating";
import { formatCurrencyVND } from "@/lib/currency";
const data = {
  id: 1,
  productName:
    "Sterling by Music Man JP60 John Petrucci Signature Electric Guitar - Stealth Black",
  averateRating: 10,
  price: 18_700_000,
  description: "",
  images: [
    {
      id: 1,
      imageUrl: detailImage1,
    },
    {
      id: 2,
      imageUrl: detailImage2,
    },
    {
      id: 3,
      imageUrl: detailImage3,
    },
    {
      id: 4,
      imageUrl: detailImage4,
    },
    {
      id: 5,
      imageUrl: detailImage5,
    },
  ],
  status: "Available",
  salesPrice: null,
};
const ProductDetailPage = () => {
  const [selectedImage, setselectedImage] = useState<any>(data.images[0]);
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "View Product", href: "/search" },
        ]}
      />
      <MaxWidthWrapper>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-4 p-5">
            <ScrollArea className="h-[500px]">
              <div className="flex flex-col gap-3 p-3">
                {data.images.map((image: any, index: number) => {
                  return (
                    <AspectRatio ratio={1 / 1} key={index}>
                      <button
                        className={cn(
                          "overflow-hidden rounded-lg h-full w-full",
                          selectedImage.id == image.id &&
                            "border-2 border-orange-600"
                        )}
                        onMouseEnter={() => setselectedImage(image)}
                      >
                        <img src={image.imageUrl} alt="" />
                      </button>
                    </AspectRatio>
                  );
                })}
              </div>
            </ScrollArea>
            <button className="col-span-3 p-3 h-[500px] flex justify-center items-center">
              <img src={selectedImage.imageUrl} alt="" className="w-full" />
            </button>
          </div>
          <div className="p-5">
            <h2 className="text-2xl font-semibold">{data.productName}</h2>
            <div className="w-[100px] py-3">
              <Rating value={5} />
            </div>
            <p className="text-sm font-semibold text-green-500">
              {data.status}
            </p>
            <p className="font-semibold text-lg">
              {data.salesPrice
                ? formatCurrencyVND(data.salesPrice)
                : formatCurrencyVND(data.price)}
            </p>
            <p className="text-xs line-through decoration-red-500 decoration-1 font-semibold">
              {data.salesPrice && formatCurrencyVND(data.price)}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductDetailPage;
