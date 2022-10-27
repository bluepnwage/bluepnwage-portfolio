import type { ProjectObj } from "../../interfaces/index";
import { Badge } from "../Badge";
import styles from "../styles.module.css";
import Image from "next/image";

export function Project({ description, href, imgSrc, techStack, title }: ProjectObj) {
  return (
    <article className="flex flex-col-reverse md:flex-row items-start gap-2 ">
      <div className="basis-2/4 md:w-2/4 grow">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        {description}
        <a href={href} className="text-indigo-400 mb-2">
          Link to website
        </a>
        <strong className="my-2 block">Technologies used</strong>
        <div className="flex gap-4 mb-2 justify-center flex-wrap w-full">
          {techStack.map((skill, index) => {
            const bg = styles[`badge-${skill.color}`];
            return (
              <Badge key={index} bgColor={bg}>
                {skill.label}
              </Badge>
            );
          })}
        </div>
      </div>
      <figure className="basis-2/4 rounded-md overflow-hidden grow aspect-video">
        <Image className="w-full h-full" src={imgSrc} alt={`Home page for ${title}`} />
      </figure>
    </article>
  );
}
