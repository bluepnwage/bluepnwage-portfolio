import fs from "fs/promises";
import path from "path";

const recipesPath = path.join(process.cwd(), "app", "recipes");

export async function getRecipes() {
  const folders = (await fs.readdir(recipesPath, { withFileTypes: true })).filter((t) => t.isDirectory());
  const recipes = [];
  for (const folder of folders) {
    const data = await import(`app/recipes/${folder.name}/page.mdx`);
    recipes.push({
      title: data.frontmatter.title,
      description: data.frontmatter.description,
      slug: data.frontmatter.slug
    });
  }
  return recipes;
}
