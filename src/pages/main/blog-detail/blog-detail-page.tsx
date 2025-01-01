import Breadcrumb from "@/components/shared/Breadcrumb";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import TiptapView from "@/components/tiptap/TiptapView";
import { mockBlog } from "./mock-blog";
import { formatDateTime } from "@/utils/date";
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
        <div className="grid grid-cols-12">
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
          </div>
          <div></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BlogDetailPage;
