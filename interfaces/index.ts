import { MantineColor } from "@mantine/core";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ProjectObj {
  title: string;
  description: ReactNode;
  href: string;
  techStack: TechStack[];
  imgSrc: StaticImageData;
}

export interface TechStack {
  label: TechType;
  color: MantineColor;
}

export type TechType =
  | "Next.Js"
  | "JavaScript"
  | "HTML"
  | "CSS"
  | "Postgres"
  | "MongoDB"
  | "React"
  | "TypeScript"
  | "TailwindCSS";

export interface ClientProjectObj extends Omit<ProjectObj, "techStack" | "href"> {
  status: "In progress" | "Completed";
  websiteType: string;
}

export interface EmailForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
