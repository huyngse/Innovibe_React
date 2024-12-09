import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("vi-VN", options);
}

const BlogCard = ({
  blogId,
  thumbnail,
  createdAt,
  title,
  content,
}: {
  blogId: number;
  thumbnail: string;
  createdAt: string;
  title: string;
  content: string;
}) => {
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
};

export default BlogCard;
