import { ProjectList } from "../components/projectList/ProjectList";
import { Bio } from "../components/bio/Bio";
import { Contact } from "../components/contact/Contact";
import { getContent } from "util/notion";

export const revalidate = 30;

export default async function Home() {
  const projects = await getContent();
  return (
    <>
      <Bio />
      <ProjectList projects={projects} />
      <Contact />
    </>
  );
}
