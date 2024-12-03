import blogImage1 from "@/assets/imgs/blog_1.png";
import blogImage2 from "@/assets/imgs/blog_2.png";
import blogImage3 from "@/assets/imgs/blog_3.png";
import blogImage4 from "@/assets/imgs/blog_4.png";
import blogImage5 from "@/assets/imgs/blog_5.png";
import blogImage6 from "@/assets/imgs/blog_6.png";
import blogImage7 from "@/assets/imgs/blog_7.png";
import blogImage8 from "@/assets/imgs/blog_8.png";
import blogImage9 from "@/assets/imgs/blog_9.png";
import blogImage10 from "@/assets/imgs/blog_10.png";
import blogImage11 from "@/assets/imgs/featured_1.png";
import blogImage12 from "@/assets/imgs/featured_2.png";
import BlogCard from "@/components/BlogCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

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
  {
    id: 4,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage4,
  },
  {
    id: 5,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage5,
  },
  {
    id: 6,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage6,
  },
  {
    id: 7,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage7,
  },
  {
    id: 8,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage8,
  },
  {
    id: 9,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage9,
  },
  {
    id: 10,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage10,
  },
  {
    id: 11,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage11,
  },
  {
    id: 12,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: blogImage12,
  },
];
const Blogs = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {data.map((blog: any, index: number) => {
          return (
            <div key={`blog-${index}`} className="mb-5">
              <BlogCard
                blogId={blog.id}
                content={blog.content}
                createdAt={blog.createdAt}
                thumbnail={blog.thumbnail}
                title={blog.title}
              />
            </div>
          );
        })}
      </div>
      <Pagination className="my-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Blogs;
