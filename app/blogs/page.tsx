import { allBlogs } from "contentlayer/generated";
import { formatter } from "util/formatDate";
import Link from "next/link";

export default function Blogs() {
  return (
    <>
      <header className="flex flex-col mt-16 lg:mt-36 items-center">
        <h1 className="font-bold px-4 text-center md:text-start w-4/5 md:w-3/5 text-5xl mb-10 md:mb-5">
          Blogs
        </h1>
      </header>
      <section className="mb-20 flex flex-col items-center ">
        <ul className="flex md:flex-row w-4/5 md:w-3/5 flex-col-reverse mb-5">
          {allBlogs.map(blog => {
            return (
              <li
                key={blog.slug}
                className="border-b py-2 last-of-type:border-b-0 px-4 space-y-2 border-surface-variant-dark"
              >
                <h3 className="headline-small text-on-surface-dark">{blog.title}</h3>
                <time className="block body-medium mb-10 text-on-surface-variant-dark" dateTime={blog.date}>
                  {formatter(blog.date)}
                </time>
                <Link className="dark:text-primary-70 text-primary-40" href={`/blogs/${blog.slug}`}>
                  Read blog
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
