import { ProjectList } from "../components/projectList/ProjectList";
import { Bio } from "../components/bio/Bio";
import { Contact } from "../components/contact/Contact";

export default async function Home() {
  return (
    <>
      <Bio />
      <ProjectList />
      <Contact />
    </>
  );
}
