import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
import useCartStore from "@/stores/use-cart-store";
import { toast } from "react-toastify";
import useProductStore from "@/stores/use-product-store";
import Loader from "@/components/Loader";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const store = useCartStore();
  const productStore = useProductStore();
  useEffect(() => {
    if (productId) {
      productStore.fetchProduct(parseInt(productId));
    }
  }, [productId]);

  if (productStore.loading) return <Loader />;
  if (productStore.product == null) return;
  const handleAddToCart = () => {
    store.addItem({
      product: productStore.product!,
      quantity: quantity,
    });
    toast.success("Thêm giỏ hàng thành công", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
          <ImageGallery images={productStore.product?.images} />
          <div className="p-5">
            <h2 className="text-2xl font-semibold">
              {productStore.product?.name}
            </h2>
            <div className="w-[100px] py-3">
              <Rating value={5} />
            </div>
            <p className="text-sm font-semibold text-green-500">
              {productStore.product?.status}
            </p>
            <p className="font-bold">
              {productStore.product?.discount
                ? formatCurrencyVND(productStore.product?.discount)
                : formatCurrencyVND(productStore.product?.price)}
            </p>
            <p className="text-xs line-through decoration-red-500 decoration-1 font-semibold">
              {productStore.product?.discount != null &&
                productStore.product?.discount != 0 &&
                formatCurrencyVND(productStore.product?.price)}
            </p>
            <div className="grid grid-cols-5 py-3 gap-10">
              <div className="col-span-2">
                <Input
                  type="number"
                  className="w-full h-auto py-3 self-center border-black"
                  style={{ fontSize: 18 }}
                  value={quantity}
                  onChange={(e) => {
                    if (parseInt(e.target.value) >= 1) {
                      setQuantity(parseInt(e.target.value));
                    }
                  }}
                ></Input>
              </div>
              <Button
                className="uppercase col-span-3 text-lg py-6 self-center"
                onClick={handleAddToCart}
              >
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
            {/* <hr className="border-black my-3" />
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
            </ScrollArea> */}
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
                  <TiptapView value={productStore.product?.description} />
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
