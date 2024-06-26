import Image from "next/image";
import sxm from "public/sxm-quiz.png";
export function Projects() {
  return (
    <section className="mb-36">
      <h1 className="text-4xl font-bold mb-16">Projects</h1>
      <ul className="grid grid-cols-1 gap-28">
        <Project />
        <Project />
        <Project />
      </ul>
    </section>
  );
}

function Project() {
  return (
    <li className="flex gap-8">
      <figure className="aspect-video rounded overflow-hidden w-2/4">
        <Image
          src={sxm}
          className="w-full h-full object-cover"
          alt=""
        />
      </figure>
      <div className="basis-1/2 flex justify-between flex-col p-2">
        <div>
          <p className="font-semibold text-2xl mb-4 text-gray-50">SXM Quiz</p>
          <p className="text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            integer eget aliquet nibh praesent tristique magna. Aliquet risus
            feugiat in ante metus.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="bg-neutral-700 rounded-md px-4 py-1 w-fit text-sm text-gray-300 font-medium">
            Next.js
          </div>
          <div className="bg-neutral-700 rounded-md px-4 py-1 w-fit text-sm text-gray-300 font-medium">
            TailwindCSS
          </div>
          <div className="bg-neutral-700 rounded-md px-4 py-1 w-fit text-sm text-gray-300 font-medium">
            Supabase
          </div>
        </div>
      </div>
    </li>
  );
}
