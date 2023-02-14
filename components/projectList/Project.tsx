import Image from "next/image";
import { Anchor } from "../Anchor";
import { Badge } from "../Badge";
import { useMDXComponent } from "next-contentlayer/hooks";
import { createStack } from "util/techStack";
import type { Project } from "contentlayer/generated";

type PropTypes = {
  project: Project;
};

export function Project({ project }: PropTypes) {
  const MDX = useMDXComponent(project.body.code);
  if (!project.tags) throw new Error();
  const stack = createStack(false, ...project.tags);
  return (
    <article className="flex flex-col-reverse md:flex-row items-start gap-2 ">
      <div className="basis-2/4 md:w-2/4 grow">
        <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
        <MDX components={{ a: Anchor }} />
        <Anchor href="https://sxm-airport.vercel.app">Link to project</Anchor>
        <strong className="my-2 block">Technologies used:</strong>
        <div className="flex gap-4 mb-2 justify-center flex-wrap w-full">
          {stack.map(tech => {
            return (
              <Badge key={tech.color} color={tech.color}>
                {tech.label}
              </Badge>
            );
          })}
        </div>
      </div>

      <figure className="basis-2/4 rounded-md overflow-hidden grow aspect-video">
        <Image
          className="w-full h-full object-cover"
          src={project.image}
          width={1366}
          height={695}
          alt={`Home page for ${project.title}`}
        />
      </figure>
    </article>
  );
}
