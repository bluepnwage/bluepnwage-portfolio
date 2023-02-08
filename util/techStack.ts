import { TechStack, TechType } from "../interfaces";

export function createStack(includeAll: boolean, ...args: TechType[]) {
  const technologies: TechStack[] = [
    {
      label: "HTML",
      color: "orange"
    },
    {
      label: "CSS",
      color: "cyan"
    },
    {
      label: "JavaScript",
      color: "yellow"
    },
    {
      label: "TailwindCSS",
      color: "indigo"
    },
    {
      label: "React",
      color: "blue"
    },
    {
      label: "Next.js",
      color: "gray"
    },
    {
      label: "TypeScript",
      color: "violet"
    },
    {
      label: "MongoDB",
      color: "green"
    },
    {
      label: "Postgres",
      color: "fuchsia"
    },
    {
      label: "Svelte",
      color: "orange"
    }
  ];
  if (includeAll) return technologies;

  return technologies.filter((tech) => args.some((entry) => entry === tech.label));
}
