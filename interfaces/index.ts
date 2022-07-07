import { MantineColor } from "@mantine/core";
import { ReactNode } from "react";

export interface ProjectObj {
  title: string;
  description: ReactNode;
  href: string;
  techStack: TechStack[];
  imgSrc: string;
}

export interface TechStack {
  label: TechType;
  color: MantineColor;
}

export type TechType = "Next.Js" | "JavaScript" | "HTML" | "CSS" | "Postgres" | "MongoDB" | "React" | "TypeScript";

export interface ClientProjectObj {
  title: string;
  description: ReactNode;
  imgSrc: string;
  status: "In progress" | "Completed";
  websiteType: string;
}

export interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
