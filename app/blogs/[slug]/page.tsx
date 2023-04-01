import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDX } from "components/MDX";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  const slugs = allBlogs.filter(blog => blog.published);
  return slugs.map(blog => ({ slug: blog.slug }));
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const blog = allBlogs.find(blog => params.slug === blog.slug);
  if (!blog) notFound();
  return {
    title: `${blog.title}`,
    openGraph: {
      title: `${blog.title}`
    }
  };
};
export default function Blog({ params }: Props) {
  const blog = allBlogs.find(blog => blog.slug === params.slug);
  if (!blog) notFound();
  return <MDX content={blog} />;
}
