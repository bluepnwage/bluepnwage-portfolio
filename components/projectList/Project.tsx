import type { ProjectObj } from "../../interfaces/index";
import { Badge } from "../Badge";
import Image from "next/image";
import { Anchor } from "../Anchor";
import { NotionResponse } from "util/notion";

type PropTypes = {
  project: NotionResponse;
};

export function Project({ project }: PropTypes) {
  const title = project.properties.Name.title[0].text.content;
  return (
    <article className="flex flex-col-reverse md:flex-row items-start gap-2 ">
      <div className="basis-2/4 md:w-2/4 grow">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        {/* {description} */}
        <Anchor href={project.properties.URL.url!} target={"_blank"}>
          Link to project
        </Anchor>
        <strong className="my-2 block">Technologies used</strong>
        <div className="flex gap-4 mb-2 justify-center flex-wrap w-full">
          {project.properties.Tags.multi_select.map((skill, index) => {
            return (
              <Badge key={index} color={skill.color}>
                {skill.name}
              </Badge>
            );
          })}
        </div>
      </div>
      <figure className="basis-2/4 rounded-md overflow-hidden grow aspect-video">
        <Image
          className="w-full h-full object-cover"
          src={
            project.properties.Thumbnail.files[0].type === "file" ? project.properties.Thumbnail.files[0].file.url! : ""
          }
          width={1200}
          height={800}
          alt={`Home page for ${title}`}
        />
      </figure>
    </article>
  );
}
