import BlogImage1 from "@/assets/imgs/blog_1.png";
import BlogImage2 from "@/assets/imgs/blog_2.png";
import BlogImage3 from "@/assets/imgs/blog_3.png";
import BlogImage4 from "@/assets/imgs/blog_4.png";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
const data = [
  {
    id: 1,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: BlogImage1,
  },
  {
    id: 2,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: BlogImage2,
  },
  {
    id: 3,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: BlogImage3,
  },
  {
    id: 4,
    title:
      "Fractal Audio Systems Launches VP4 A Direct Competitor to HX Effect, Eventide H90",
    content:
      "Fractal Audio Systems has just officially introduced VP4, a compact but powerful virtual pedalboard...",
    createdAt: "2024-10-16",
    thumbnail: BlogImage4,
  },
];
const Blogs = () => {
  return (
    <div className="my-16">
      <h2 className="text-center font-extrabold text-3xl my-5 uppercase">
        Blog posts
      </h2>
      <div className="grid grid-cols-12 gap-5">
        {data.map((blog: any, index: number) => {
          return (
            <div key={`blog-${index}`} className="col-span-3">
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
      <div className="text-center my-10">
        <Button className="uppercase rounded-xl px-5">View more</Button>
      </div>
    </div>
  );
};

export default Blogs;
