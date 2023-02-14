import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default function Head({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find(blog => params.slug === blog.slug);
  if (!blog) notFound();
  return (
    <>
      <title>{`Agis Carty | ${blog.title}`}</title>
      <link rel="canonical" href={`https://bluepnwage-portfolio.vercel.app/blogs/${blog.slug}`} />
      <meta name="description" content="Aspiring JavaScript developer who loves building websites." />
      <meta property="og:title" content={`Agis Carty | ${blog.title}`} />
      <meta property="og:description" content="Aspiring JavaScript developer who loves building websites." />
    </>
  );
}
