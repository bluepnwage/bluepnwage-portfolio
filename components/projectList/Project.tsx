import Image from "next/image";
import { Anchor } from "../Anchor";
import { Badge } from "../Badge";
import type { NotionContent } from "util/notion";

type PropTypes = {
  project: NotionContent;
};

export function Project({ project }: PropTypes) {
  return (
    <article className="flex flex-col-reverse md:flex-row items-start gap-2 ">
      <div className="basis-2/4 md:w-2/4 grow">
        <h3 className="font-bold text-2xl mb-2">{project.title}</h3>
        <p className="basis-2/4" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        <Anchor href={project.url!} target={"_blank"}>
          Link to project
        </Anchor>
        <strong className="my-2 block">Technologies used</strong>
        <div className="flex gap-4 mb-2 justify-center flex-wrap w-full">
          {project.tags.map((skill, index) => {
            return (
              <Badge key={index} color={skill.color}>
                {skill.label}
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
