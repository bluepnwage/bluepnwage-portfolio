import { TechType } from "../interfaces";

export function createStack(...args: TechType[]): string[] {
  const technologies: Record<TechType, string> = {
    javascript: "JavaScript",
    css: "CSS",
    next: "Next.Js",
    remix: "Remix",
    supabase: "Supabase",
    tailwindcss: "TailwindCSS",
    TypeScript: "TypeScript",
    postgres: "PostgreSQL",
    firebase: "Firebase"
  };

  const selectedStack = [];
  for (const selected of args) {
    selectedStack.push(technologies[selected]);
  }

  return selectedStack;
}
