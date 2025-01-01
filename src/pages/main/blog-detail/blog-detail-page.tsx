import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import TiptapView from "@/components/tiptap/TiptapView";
import { mockBlog } from "./mock-blog";
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
        <TiptapView value={mockBlog}/>
      </MaxWidthWrapper>
    </div>
  );
};

export default BlogDetailPage;
