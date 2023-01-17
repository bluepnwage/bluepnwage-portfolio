import { ProjectList } from "../components/projectList/ProjectList";
import { Bio } from "../components/bio/Bio";
import { Contact } from "../components/contact/Contact";
import { testNotion } from "util/notion";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await testNotion();
  return (
    <>
      <Bio />
      <ProjectList projects={projects} />
      <Contact />
    </>
  );
}
