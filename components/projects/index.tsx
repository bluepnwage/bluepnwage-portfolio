import Image, { StaticImageData } from "next/image";
import sxmQuiz from "public/sxm-quiz.png";
import sxmAirport from "public/sxm-airport.png";
import sxmPoi from "public/sxm-pois.png";
import { createStack } from "util/techStack";

const projects = [
  {
    title: "SXM Quiz",
    stack: createStack("next", "supabase", "tailwindcss"),
    img: sxmQuiz,
    description:
      "Elit proident esse adipisicing quis id consectetur non enim qui laborum exercitation nulla deserunt. Duis enim minim deserunt deserunt consectetur. Velit cupidatat consectetur labore eu amet irure elit consectetur. Et proident duis voluptate anim non."
  },
  {
    title: "SXM Airport",
    stack: createStack("next", "supabase", "css"),
    img: sxmAirport,
    description:
      "Minim voluptate voluptate eu nisi commodo voluptate eu labore eu elit labore. Laborum amet laboris ad cillum consequat consectetur deserunt dolore aute enim. Dolor cillum anim minim est Lorem deserunt aliquip enim magna ut pariatur labore occaecat. Cillum duis eu sit dolore ea commodo deserunt elit aliquip voluptate nisi officia ipsum. Minim irure sunt cillum tempor pariatur ex est minim laboris esse Lorem commodo est elit."
  },
  {
    title: "SXM POI",
    stack: createStack("next", "supabase", "css"),
    img: sxmPoi,
    description:
      "Consectetur quis aute aliquip consectetur veniam ex aliquip irure elit amet nisi occaecat. Et sint ipsum officia do dolor duis aliqua. Amet et fugiat sit cillum quis elit aliquip amet aliqua deserunt ea esse aliqua. Occaecat ex mollit aliquip commodo minim et esse velit adipisicing do do qui cillum. Do commodo in deserunt esse irure fugiat duis magna veniam. Excepteur non non occaecat non occaecat ut exercitation aute occaecat quis ea. Consequat proident aute nisi quis deserunt ad velit minim."
  }
];

export function Projects() {
  return (
    <section className="mb-36">
      <h1 className="text-4xl font-bold mb-16">Projects</h1>
      <ul className="grid grid-cols-1 gap-28">
        {projects.map((project) => {
          return (
            <Project
              key={project.title}
              {...project}
            />
          );
        })}
      </ul>
    </section>
  );
}

type PropTypes = {
  title: string;
  description: string;
  stack: string[];
  img: StaticImageData;
};

function Project({ description, title, stack, img }: PropTypes) {
  return (
    <li className="flex gap-8">
      <figure className="aspect-video rounded overflow-hidden w-2/4">
        <Image
          src={img}
          className="w-full h-full object-cover"
          alt=""
        />
      </figure>
      <div className="basis-1/2 flex justify-between flex-col p-2">
        <div>
          <p className="font-semibold text-2xl mb-4 text-gray-50">{title}</p>
          <p className="text-gray-200 leading-relaxed">{description}</p>
        </div>
        <div className="flex gap-6">
          {stack.map((tech) => {
            return (
              <div
                key={tech}
                className="bg-neutral-700 rounded-md px-4 py-1 w-fit text-sm text-gray-300 font-medium"
              >
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </li>
  );
}
