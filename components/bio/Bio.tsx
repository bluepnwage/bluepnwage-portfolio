import { Image } from "../Image";
import { createStack } from "util/techStack";
import styles from "../styles.module.css";
import { Badge } from "../Badge";

export function Bio() {
  const skills = createStack(true);
  return (
    <>
      <h1 className="font-bold text-5xl mb-5">Agis Carty</h1>
      <section className="mb-20 w-full">
        <div className="flex mb-5">
          <div className="basis-3/5 grow">
            <h2 className="font-bold text-3xl mb-5">Up and coming Front-end Developer</h2>
            <p className="leading-loose">
              My name is Agis Carty and I'm an aspiring front-end developer. Having been born in the island of{" "}
              <a href={"#"} title={"Wikipedia page for Saint Martin"} className="text-indigo-400 hover:underline">
                Saint Martin
              </a>
              , where programming isn't a popular topic, I didn't discover web development until October 2021. Now I'm
              dedicated to building <strong>performant</strong> and <strong>accessible</strong> websites, and hopefully
              introducing more people to the beauty of modern day web development.
            </p>
          </div>
          <figure className="basis-2/5 grow flex items-start justify-center">
            <Image className="rounded-full" src={"/bluepnwage.jpg"} alt={"Profile image"} width={80} height={80} />
          </figure>
        </div>
        <p className="font-semibold mb-5">Here are a few skills I've picked up so far.</p>
        <div className="flex w-2/4 gap-4 flex-wrap">
          {skills.map((skill, index) => {
            const bg = styles[`badge-${skill.color}`];
            return (
              <Badge bgColor={bg} key={index}>
                {skill.label}
              </Badge>
            );
          })}
        </div>
      </section>
    </>
  );
}
