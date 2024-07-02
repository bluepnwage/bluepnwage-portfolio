import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { formatter } from "./formatDate";

export async function getBlogs() {
  const folders = (await fs.readdir(path.join(process.cwd(), "app", "blogs"))).filter(
    (value) => !value.endsWith(".tsx")
  );
  const blogs = [];
  for (const folder of folders) {
    const markdown = await fs.readFile(path.join(process.cwd(), "app", "blogs", folder, "page.mdx"), "utf-8");
    const { data } = matter(markdown);
    blogs.push({
      title: data.title,
      slug: folder,
      date: formatter(data.date)
    });
  }

  return blogs;
}
