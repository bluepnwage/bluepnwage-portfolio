import Head from "next/head";
import { Bio } from "components/bio/Bio";
import { Suspense, lazy } from "react";
import { ProjectList } from "components/projectList/ProjectList";

const ClientProjects = lazy(() => import("components/clientProjects/ClientProjectList"));
const Contact = lazy(() => import("components/contact/Contact"));

function Home() {
  return (
    <>
      <Head>
        <title>Agis Carty | Front-end Developer</title>
        <link rel="canonical" href="https://bluepnwage-portfolio.vercel.app/" />
        <meta name="description" content="Aspiring JavaScript developer who loves building websites." />
        <meta property="og:title" content="Agis Carty | Front-end Developer" />
        <meta property="og:description" content="Aspiring JavaScript developer who loves building websites." />
        <meta name="keywords" content="JavaScript, React, Portfolio, Next.Js" />
        <meta property="og:site_name" content="Agis Carty" />
        <meta property="og:image" content="https://bluepnwage-portfolio.vercel.app/bluepnwage.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Suspense fallback={null}>
        <Bio />
      </Suspense>
      <Suspense fallback={null}>
        <ProjectList />
      </Suspense>
      <Suspense fallback={null}>
        <ClientProjects />
      </Suspense>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;
