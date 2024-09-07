import { Blogs } from "@/components/shared/blogs";
import { Categories } from "@/components/shared/categories";
import globalApi from "@/services/global.api";
import { IBlog } from "@/types";

export type IBlogItem = Omit<IBlog, "content">;

async function getBlogs() {
  const resp = await globalApi.getBlogs();
  return resp.sort((a: IBlogItem, b: IBlogItem) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
}

async function getCategories() {
  return await globalApi.getCategories();
}

export default async function Page() {
  const blogs = await getBlogs();
  const categories = await getCategories();
  return (
    <div className="w-11/12 sm:w-3/4 lg:w-2/5 mx-auto flex flex-col gap-20 pt-20 pb-40">
      {/* <Categories categories={categories} /> */}
      <Blogs blogs={blogs} />
    </div>
  );
}
