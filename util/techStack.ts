import { TechType } from "../interfaces";

export function createStack(...args: TechType[]): string[] {
  const technologies: Record<TechType, string> = {
    javascript: "JavaScript",
    css: "CSS",
    next: "Next.Js",
    Remix: "Remix",
    supabase: "Supabase",
    tailwindcss: "TailwindCSS",
    TypeScript: "TypeScript"
  };

  const selectedStack = [];
  for (const selected of args) {
    selectedStack.push(technologies[selected]);
  }

  return selectedStack;
}
