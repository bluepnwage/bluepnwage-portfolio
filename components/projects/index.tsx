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
      "A quiz-based website that educates users about the culture of Saint Martin, tests their knowledge about the island, and allows the community to share their insights by writing and uploading articles. "
  },
  {
    title: "SXM Airport",
    stack: createStack("next", "firebase", "css"),
    img: sxmAirport,
    description:
      "A project that displays arrivals and departures for Princess Juliana Airport, featuring an interactive map for live flight tracking."
  },
  {
    title: "SXM POI",
    stack: createStack("next", "postgres", "css"),
    img: sxmPoi,
    description:
      "This was my first major project after learning React and Next.js. It features an interactive map showcasing various points of interest around the island."
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
