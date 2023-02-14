import { Project } from "./Project";
import { allProjects } from "contentlayer/generated";

export function ProjectList() {
  const projects = allProjects.slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  return (
    <section id={"projects"} className="mb-20 flex flex-col items-center">
      <header className="mb-10">
        <h2 className="font-bold text-3xl">Personal Projects</h2>
      </header>
      <div className="flex w-4/5 md:w-3/5 flex-col gap-16">
        {projects.map(project => {
          return <Project project={project} key={project.title} />;
        })}
      </div>
    </section>
  );
}
