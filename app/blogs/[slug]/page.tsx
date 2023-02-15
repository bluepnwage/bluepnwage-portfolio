import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDX } from "components/MDX";

export function generateStaticParams() {
  const slugs = allBlogs.filter(blog => blog.published);
  return slugs.map(blog => ({ slug: blog.slug }));
}

export default function Blog({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find(blog => blog.slug === params.slug);
  if (!blog) notFound();
  return <MDX content={blog} />;
}
