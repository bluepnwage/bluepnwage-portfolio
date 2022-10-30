import Image from "next/image";
import { createStack } from "util/techStack";
import { Badge } from "../Badge";

export function Bio() {
  const skills = createStack(true);
  return (
    <>
      <header className="flex flex-col items-center">
        <h1 className="font-bold text-center md:text-start w-4/5 md:w-3/5 text-5xl mb-10 md:mb-5">Agis Carty</h1>
      </header>
      <section id='about' className="mb-20 flex flex-col items-center">
        <div className="flex md:flex-row w-4/5 md:w-3/5 flex-col-reverse mb-5">
          <div className="basis-3/5 grow">
            <h2 className="font-bold text-center md:text-start text-3xl mb-5">Up and coming Front-end Developer</h2>
            <p className="leading-loose">
              My name is Agis Carty and I&apos;m an aspiring front-end developer. Having been born in the island of{" "}
              <a href={"#"} title={"Wikipedia page for Saint Martin"} className="text-indigo-400 hover:underline">
                Saint Martin
              </a>
              , where programming isn&apos;t a popular topic, I didn&apos;t discover web development until October 2021.
              Now I&apos;m dedicated to building <strong>performant</strong> and <strong>accessible</strong> websites,
              and hopefully introducing more people to the beauty of modern day web development.
            </p>
          </div>
          <figure className="basis-2/5 grow mb-2 md:mb-0 flex items-start justify-center">
            <Image className="rounded-full" src={"/bluepnwage.jpg"} alt={"Profile image"} width={80} height={80} />
          </figure>
        </div>
        <div className="w-4/5 md:w-3/5">
          <p className="font-semibold mb-5">Here are a few skills I&apos;ve picked up so far.</p>
          <div className="flex w-full md:w-2/4 flex-wrap gap-4">
            {skills.map((skill, index) => {
              return (
                <Badge color={skill.color} key={index}>
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
