import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import detailImage5 from "@/assets/imgs/detail_1.png";
import detailImage2 from "@/assets/imgs/detail_2.png";
import detailImage3 from "@/assets/imgs/detail_3.png";
import detailImage4 from "@/assets/imgs/detail_4.png";
import detailImage1 from "@/assets/imgs/detail_5.png";
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
import TiptapView from "@/components/tiptap/TiptapView";
import imagePlaceholder from "@/assets/imgs/image-placeholder.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const data = {
  id: 1,
  productName:
    "Sterling by Music Man JP60 John Petrucci Signature Electric Guitar - Stealth Black",
  averateRating: 10,
  price: 18_700_000,
  description: `<p><span>The Sterling by Music Man JP60 John Petrucci Signature Electric Guitar in Stealth Black is designed with the modern guitarist in mind, blending exceptional playability with high-end features inspired by John Petrucci’s iconic instrument. Created for versatility, precision, and style, the JP60 brings many of Petrucci’s signature elements into a more accessible, yet highly refined, format.</span></p><hr class="border-black my-5"><h2><span>Key Features:</span></h2><ul><li><p><span><strong>Body</strong>: Crafted from basswood, the body is lightweight and offers a balanced tonal response that’s perfect for high-gain and clean settings alike. The sleek Stealth Black finish gives it a dark, modern look.</span></p></li><li><p><span><strong>Neck &amp; Fingerboard</strong>: Featuring a maple neck and rosewood fingerboard with a 16" radius, the JP60 offers effortless playability across all frets, making it ideal for complex solos and intricate chord work. The 24 medium jumbo frets and John Petrucci’s custom inlays add to its professional touch.</span></p></li><li><p><span><strong>Pickups</strong>: Equipped with high-output humbucking pickups, this guitar delivers a powerful sound with excellent clarity and sustain, capturing everything from subtle nuances to aggressive riffs. The 3-way selector switch allows for a range of tones, making it adaptable for various music styles.</span></p></li><li><p><span><strong>Bridge</strong>: The JP60 features a Sterling Modern Tremolo bridge, allowing for expressive pitch bending while retaining tuning stability. This floating tremolo design is built to handle even the most intense performances.</span></p></li><li><p><span><strong>Ergonomic Contouring</strong>: Modeled after the contours of John Petrucci’s original Music Man guitar, the JP60 is designed for comfortable, extended play with its sleek design, forearm scoop, and easy access to higher frets.</span></p></li></ul><hr class="border-black my-5"><h2><span>Additional Specifications:</span></h2><ul><li><p><span><strong>Scale Length</strong>: 25.5 inches</span></p></li><li><p><span><strong>Nut Width</strong>: 42mm (1.65 inches)</span></p></li><li><p><span><strong>Controls</strong>: Volume, Tone, 3-way pickup selector switch</span></p></li><li><p><span><strong>Finish</strong>: Stealth Black</span></p></li></ul>`,
  images: [
    {
      id: 1,
      imageUrl: detailImage1,
      isPrimary: true,
    },
    {
      id: 2,
      imageUrl: detailImage2,
      isPrimary: false,
    },
    {
      id: 3,
      imageUrl: detailImage3,
      isPrimary: false,
    },
    {
      id: 4,
      imageUrl: detailImage4,
      isPrimary: false,
    },
    {
      id: 5,
      imageUrl: detailImage5,
      isPrimary: false,
    },
  ],
  status: "Available",
  salesPrice: null,
};
const ProductDetailPage = () => {
  // const [selectedImage, setselectedImage] = useState<any>(data.images[0]);
  const primaryImage = data.images.find(
    (image: any) => image.isPrimary == true
  );
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
                {data.images
                  .filter((image) => image.isPrimary == false)
                  .map((image: any, index: number) => {
                    return (
                      <AspectRatio ratio={1 / 1} key={index}>
                        <button
                          className={cn(
                            "overflow-hidden rounded-lg h-full w-full",
                            // selectedImage.id == image.id &&
                            "hover:border-2 hover:border-orange-600"
                          )}
                          // onMouseEnter={() => setselectedImage(image)}
                        >
                          <img src={image.imageUrl} alt="" />
                        </button>
                      </AspectRatio>
                    );
                  })}
              </div>
            </ScrollArea>
            <button className="col-span-3 p-3 h-[500px] flex justify-center items-center">
              <img
                src={primaryImage?.imageUrl ?? imagePlaceholder}
                alt=""
                className="w-full"
              />
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
                  <h2 className="text-3xl font-extrabold">
                    Product Description
                  </h2>
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
