import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import detailImage5 from "@/assets/imgs/detail_1.png";
import detailImage2 from "@/assets/imgs/detail_2.png";
import detailImage3 from "@/assets/imgs/detail_3.png";
import detailImage4 from "@/assets/imgs/detail_4.png";
import detailImage1 from "@/assets/imgs/detail_5.png";
import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Rating } from "@smastrom/react-rating";
import { formatCurrencyVND } from "@/lib/currency";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { GrCompare } from "react-icons/gr";
import RecentlyViewed from "@/components/RecentlyViewed";
import Tiptap from "@/components/tiptap/Tiptap";
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
  const [description, setDescription] = useState("");
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
            <div className="grid grid-cols-5 py-3 gap-10">
              <div className="col-span-2">
                <Input
                  type="number"
                  className="w-full h-auto py-3 self-center border-black"
                  style={{ fontSize: 18 }}
                  defaultValue={1}
                ></Input>
              </div>
              <Button className="uppercase col-span-3 text-lg py-6 self-center">
                Add to Cart
              </Button>
            </div>
            <hr className="border-black my-3" />
            <div className="flex justify-between">
              <Button
                variant={"outline"}
                className="py-5 px-6 flex items-center gap-3 shadow-none border-none"
              >
                <FaRegHeart style={{ width: 20, height: 20 }} />
                List
              </Button>
              <Button
                variant={"outline"}
                className="py-5 px-6 flex items-center gap-3 shadow-none border-none"
              >
                <GrCompare style={{ width: 20, height: 20 }} />
                Compare
              </Button>
              <Button
                variant={"outline"}
                className="py-5 px-6 flex items-center gap-3 shadow-none border-none"
              >
                <FaShareAlt style={{ width: 20, height: 20 }} />
                Share
              </Button>
            </div>
            <hr className="border-black my-3" />
            <p>
              <span className="font-semibold ">Style: </span> Stealth Black
            </p>
            <ScrollArea className="">
              <div className="flex py-5 gap-5">
                <div className="w-16 h-16 rounded-lg bg-[#5E1212]"></div>
                <div className="w-16 h-16 rounded-lg bg-[#E66432]"></div>
                <div className="w-16 h-16 rounded-lg bg-[#908B8B]"></div>
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <hr className="border-black my-3" />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <Tiptap
              value={description}
              onChange={(value) => {
                setDescription(value);
              }}
            />
            <Button onClick={() => {console.log(description)}}>Log result</Button>
          </div>
        </div>
        <div className="py-10">
          <RecentlyViewed />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProductDetailPage;
