import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import TiptapView from "@/components/tiptap/TiptapView";
import { mockBlog } from "./mock-blog";
import { formatDateTime } from "@/utils/date";
import blogImage1 from "@/assets/imgs/blog_1.png";
import blogImage2 from "@/assets/imgs/blog_2.png";
import blogImage3 from "@/assets/imgs/blog_3.png";
import BlogCard from "@/components/BlogCard";
const data = [
  {
    id: 1,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage1,
  },
  {
    id: 2,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage2,
  },
  {
    id: 3,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage3,
  },
];
const BlogDetailPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Bài đăng", href: "/blog" },
        ]}
      />
      <MaxWidthWrapper className="py-10">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <div className="pb-5">
              <h1 className="text-4xl font-bold">{mockBlog.title}</h1>
              <p className="py-3 text-sm text-gray-500">
                Đăng {formatDateTime(new Date(mockBlog.createdAt))}, bởi{" "}
                <span className="font-bold">{mockBlog.createdBy}</span>
              </p>
              <img src={mockBlog.thumbnail} className="w-full" />
            </div>
            <TiptapView value={mockBlog.content} />
            <div className="py-10">
              <h3 className="text-xl font-bold border-b border-orange-500 py-3">
                Các bài đăng liên quan
              </h3>
              <div className="grid grid-cols-3 py-3 gap-3">
                {data.map((blog, index: number) => {
                  return (
                    <BlogCard
                      blogId={blog.id}
                      content={blog.content}
                      createdAt={blog.createdAt}
                      title={blog.title}
                      thumbnail={blog.thumbnail}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h3 className="text-xl font-bold border-b border-orange-500 py-3">
              Bài viết nổi bật
            </h3>
            <div className="flex flex-col gap-3 py-3">
              {data.map((blog, index: number) => {
                return (
                  <BlogCard
                    blogId={blog.id}
                    content={blog.content}
                    createdAt={blog.createdAt}
                    title={blog.title}
                    thumbnail={blog.thumbnail}
                    key={index}
                    variant="small"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BlogDetailPage;
