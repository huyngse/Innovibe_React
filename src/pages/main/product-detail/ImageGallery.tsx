import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import imagePlaceholder from "@/assets/imgs/image-placeholder.webp";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
const ImageGallery = ({
  images,
}: {
  images: { id: number; imageUrl: string; isPrimary: boolean }[];
}) => {
  const [imageIndex, setImageIndex] = useState(-1);
  const primaryImage = images.find(
    (image: any) => image.isPrimary == true
  );
  return (
    <>
      <div className="grid grid-cols-4 p-5">
        <ScrollArea className="h-[500px]">
          <div className="flex flex-col gap-3 p-3">
            {images
              .filter((image) => image.isPrimary == false)
              .map((image: any, index: number) => {
                return (
                  <AspectRatio ratio={1 / 1} key={index}>
                    <button
                      className={cn(
                        "overflow-hidden rounded-lg h-full w-full",
                        "hover:border-2 hover:border-orange-600"
                      )}
                      onClick={() => {
                        setImageIndex(index + 1);
                      }}
                    >
                      <img src={image.imageUrl} alt="" />
                    </button>
                  </AspectRatio>
                );
              })}
          </div>
        </ScrollArea>
        <button
          className="col-span-3 p-3 h-[500px] flex justify-center items-center"
          onClick={() => {
            setImageIndex(0);
          }}
        >
          <img
            src={primaryImage?.imageUrl ?? imagePlaceholder}
            alt=""
            className="w-full"
          />
        </button>
      </div>
      <Lightbox
        open={imageIndex > -1}
        close={() => setImageIndex(-1)}
        index={imageIndex}
        slides={[
          primaryImage,
          ...images.filter((image) => image.isPrimary == false),
        ].map((image) => ({ src: image?.imageUrl ?? "" }))}
      />
    </>
  );
};

export default ImageGallery;
