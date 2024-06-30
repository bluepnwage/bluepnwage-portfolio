import { Anchor } from "../Anchor";

export function Bio() {
  return (
    <>
      <section
        id="about"
        className=" mt-20 mb-32 text-gray-200"
      >
        <header>
          <h1 className="font-bold text-4xl mb-16">Agis Carty</h1>
        </header>
        <div>
          <p className="leading-loose text-lg">
            I&apos;m a frontend developer based in{" "}
            <Anchor href="https://en.wikipedia.org/wiki/Collectivity_of_Saint_Martin">Saint-Martin</Anchor>. Currently,
            I work for the Collectivity of Saint-Martin, where I&apos;m focused on developing their new website.
            I&apos;m passionate about creating rich, accessible user interfaces and enjoy building side projects that
            showcase the beauty and culture of Saint Martin.
          </p>
        </div>
      </section>
    </>
  );
}
