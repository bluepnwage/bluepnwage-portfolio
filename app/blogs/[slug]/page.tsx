import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDX } from "components/MDX";
export function getStaticParams() {
  const slugs = allBlogs.filter(blog => blog.published);
  return slugs.map(blog => blog.slug) as unknown as string[];
}

export default function Blog({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find(blog => blog.slug === params.slug);
  if (!blog) notFound();
  return <MDX blog={blog} />;
}
