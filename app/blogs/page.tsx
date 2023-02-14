import { allBlogs } from "contentlayer/generated";
import { formatter } from "util/formatDate";
import Link from "next/link";
export default function Blogs() {
  return (
    <>
      <h1 className="font-bold text-6xl text-center">Blogs</h1>
      {allBlogs.map(blog => {
        return (
          <div key={blog.slug}>
            {formatter(blog.date)}
            <h3 className="">{blog.title}</h3>
            <Link href={`/blogs/${blog.slug}`}>Read post</Link>
          </div>
        );
      })}
    </>
  );
}
