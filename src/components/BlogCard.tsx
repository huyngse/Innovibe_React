import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { formatDate } from "@/utils/date";

const BlogCard = ({
  blogId,
  thumbnail,
  createdAt,
  title,
  content,
  variant = "default",
}: {
  blogId: number;
  thumbnail: string;
  createdAt: string;
  title: string;
  content: string;
  variant?: "small" | "default";
}) => {
  if (variant == "default") {
    return (
      <div>
        <AspectRatio ratio={16 / 10}>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </AspectRatio>
        <p className="my-2 text-sm">{formatDate(new Date(createdAt))}</p>
        <Link to={`/blog/${blogId}`}>
          <h3 className="font-bold my-2">{title}</h3>
        </Link>
        <p className="text-sm text-gray-500">{content}</p>
        <Link
          to={`/blog/${blogId}`}
          className="my-3 text-sm font-semibold underline"
        >
          Xem thêm
        </Link>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <AspectRatio ratio={16 / 10}>
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
          </AspectRatio>
        </div>

        <div className="col-span-2">
          <Link to={`/blog/${blogId}`}>
            <h3 className="font-bold text-sm">{title}</h3>
          </Link>
          <p className="text-sm">{formatDate(new Date(createdAt))}</p>
          <Link
            to={`/blog/${blogId}`}
            className="text-sm font-semibold underline"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    );
  }
};

export default BlogCard;
