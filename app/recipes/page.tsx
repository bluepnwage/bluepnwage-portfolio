import Link from "next/link";
import { getRecipes } from "util/recipes";

export default async function RecipesPage() {
  const recipes = await getRecipes();
  return (
    <div className="mt-16">
      <h2 className="text-3xl mb-12 font-bold">Recipes</h2>
      <div className="grid grid-cols-3">
        {recipes.map((recipe) => {
          return (
            <Link
              key={recipe.slug}
              href={`/recipes/${recipe.slug}`}
              className="bg-neutral-700 w-full p-8 rounded"
            >
              <h3 className="font-bold text-2xl rounded mb-2 text-gray-50">useMeasure</h3>
              <p>{recipe.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
