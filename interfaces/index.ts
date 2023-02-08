import type { Colors } from "components/Badge";

export interface TechStack {
  label: TechType;
  color: Colors;
}

export type TechType =
  | "Next.js"
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "Postgres"
  | "MongoDB"
  | "React"
  | "TypeScript"
  | "Svelte"
  | "TailwindCSS";

export interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
