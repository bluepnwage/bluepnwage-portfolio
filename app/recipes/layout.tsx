export default function RecipeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-16 prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12 space-y-4 mb-4">
      {children}
    </div>
  );
}
