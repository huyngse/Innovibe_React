import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Rating } from "@smastrom/react-rating";
import { formatCurrencyVND } from "@/lib/currency";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { GrCompare } from "react-icons/gr";
import RecentlyViewed from "@/components/RecentlyViewed";
import TiptapView from "@/components/tiptap/TiptapView";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageGallery from "./ImageGallery";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { products } from "@/data/product-data";
const ProductDetailPage = () => {
  const [data, setData] = useState<Product>();
  const { productId } = useParams();
  useEffect(() => {
    const product = products.find((p) => p.id.toString() == productId);
    setData(product);
  }, []);

  if (data == null) return;
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Xem sản phẩm", href: "/search" },
        ]}
      />
      <MaxWidthWrapper>
        <div className="grid grid-cols-2">
          <ImageGallery images={data.images} />
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
                Thêm vào giỏ hàng
              </Button>
            </div>
            <hr className="border-black my-3" />
            <div className="flex justify-between">
              <Button
                variant={"outline"}
                className="py-5 px-6 flex items-center gap-3 shadow-none border-none"
              >
                <FaRegHeart style={{ width: 20, height: 20 }} />
                Lưu
              </Button>
              <Button
                variant={"outline"}
                className="py-5 px-6 flex items-center gap-3 shadow-none border-none"
              >
                <GrCompare style={{ width: 20, height: 20 }} />
                So sánh
              </Button>
              <Button
                variant={"outline"}
                className="py-5 px-6 flex items-center gap-3 shadow-none border-none"
              >
                <FaShareAlt style={{ width: 20, height: 20 }} />
                Chia sẻ
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
        <div className="grid grid-cols-12 py-5">
          <div className="col-span-8">
            <Accordion
              type="single"
              collapsible
              defaultValue="product-description"
            >
              <AccordionItem
                value="product-description"
                className="border-black"
              >
                <AccordionTrigger>
                  <h2 className="text-3xl font-extrabold">Mô tả sản phẩm</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <hr className="border-black my-2" />
                  <TiptapView value={data.description} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
