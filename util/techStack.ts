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
      label: "React",
      color: "blue"
    },
    {
      label: "Next.Js",
      color: "gray"
    },
    {
      label: "TypeScript",
      color: "indigo"
    },
    {
      label: "MongoDB",
      color: "green"
    },
    {
      label: "Postgres",
      color: "grape"
    }
  ];
  if (includeAll) return technologies;

  return technologies.filter((tech) => args.some((entry) => entry === tech.label));
}
