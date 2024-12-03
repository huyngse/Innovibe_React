import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Blogs from "./Blogs";

const BlogsPage = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog Posts", href: "/blog" },
        ]}
      />
      <MaxWidthWrapper>
        <h1 className="text-3xl font-extrabold uppercase text-center py-5">
          Blog Posts
        </h1>
        <Blogs />
      </MaxWidthWrapper>
    </div>
  );
};

export default BlogsPage;
