export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-headings:font-bold prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-16 space-y-4">
      {children}
    </div>
  );
}
