import { Projects } from "components/projects";
import { Bio } from "../components/bio/Bio";
import { Contact } from "../components/contact/Contact";

export default async function Home() {
  return (
    <>
      <Bio />
      <Projects />
      <Contact />
    </>
  );
}
