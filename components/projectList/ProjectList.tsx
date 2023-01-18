import { Project } from "./Project";
import type { NotionContent } from "util/notion";

type PropTypes = {
  projects: NotionContent[];
};

export function ProjectList({ projects }: PropTypes) {
  return (
    <section id={"projects"} className="mb-20 flex flex-col items-center">
      <header className="mb-5">
        <h2 className="font-bold text-3xl">Personal Projects</h2>
      </header>
      <div className="flex w-4/5 md:w-3/5 flex-col gap-16">
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </section>
  );
}
