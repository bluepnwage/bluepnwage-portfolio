import { Anchor } from "../Anchor";

export function Bio() {
  return (
    <>
      <section
        id="about"
        className=" mt-20 mb-32 text-gray-200"
      >
        <div>
          <p className="leading-loose text-lg">
            My name is Agis Carty and I&apos;m an aspiring front-end developer. From the moment I discovered
            programming, which is an ever-growing topic in{" "}
            <Anchor
              rel={"noreferrer"}
              target={"_blank"}
              title={"Wikipedia page for Saint Martin"}
              href={"https://en.wikipedia.org/wiki/Saint_Martin_(island)"}
            >
              Saint Martin
            </Anchor>
            , I&apos;ve become dedicated to building performant and accessible websites, and hopefully
            introducing more people to the beauty of modern day web development.
          </p>
        </div>
      </section>
    </>
  );
}
