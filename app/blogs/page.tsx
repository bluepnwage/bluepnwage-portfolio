import Link from "next/link";
import { getBlogs } from "util/get-blogs";

export default async function Page() {
  const blogs = await getBlogs();

  return (
    <div className="mt-16">
      <h2 className="text-3xl mb-12">Blogs</h2>
      <ul className="space-y-8">
        {blogs.map((blog) => {
          return (
            <li key={blog.slug}>
              <Link href={`/blogs/${blog.slug}`}>
                <h3 className="text-xl mb-2 block text-gray-100">{blog.title}</h3>
                <p className="">{blog.date}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
