import { ProjectObj } from "interfaces";
import { createStack } from "util/techStack";
import { Anchor } from "../Anchor";
import { Project } from "./Project";
import sxmAirport from "../../public/sxm-airport.png";
import sxmPOI from "../../public/sxm-pois.png";
import chatApp from "../../public/chat-app.png";
import restaurantBooker from "../../public/restaurant-booker.png";
import cryptoTracker from "../../public/crypto-tracker.png";
import blogSocial from "../../public/blog-social.png";

export function ProjectList() {
  return (
    <section id={"projects"} className="mb-20 flex flex-col items-center">
      <header className="mb-5">
        <h2 className="font-bold text-3xl">Personal Projects</h2>
      </header>
      <div className="flex w-4/5 md:w-3/5 flex-col gap-16">
        {projects.map((project, index) => {
          return <Project {...project} key={index} />;
        })}
      </div>
    </section>
  );
}

const projects: ProjectObj[] = [
  {
    title: "SXM Airport",
    techStack: createStack(false, "Next.Js", "TypeScript"),
    description: (
      <p className="mb-2">
        This project allows you to view the daily schedule for all arrivals and departures concerning{" "}
          Princess Juliana Airport
        . There is also an interactive map, powered by{" "}
        <Anchor
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://www.mapbox.com/"}
          title={"Official website for mapbox"}
        >
          mapbox
        </Anchor>
        , which can be used to track live flights that are currently flying towards Sint Maarten. Finally, there is a
        gallery to view images of the airport. Users can sign up and upload their own images to the gallery if they wish
        to do so. Everything from authentication, to storing images and saving data is handled thanks to{" "}
        <Anchor
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://firebase.google.com/"}
          title={"Official website for firebase"}
        >
          Firebase
        </Anchor>
        . I made use of caching responses by setting HTTP headers combined with{" "}
        <Anchor target={"_blank"} rel={"noreferrer"} href={"https://redis.io/"} title={"Official website for redis"}>
          Redis
        </Anchor>
        , to ensure the server does not make any unecessary requests knowing the airport schedule is most likely updated
        only once a day. Rate limiting has also been set up to prevent users from uploading more than 25 images a day.
        Doing this gives me time to review and approve of all uploaded images.
      </p>
    ),
    href: "https://sxm-airport.vercel.app",
    imgSrc: sxmAirport
  },
  {
    title: "SXM POI Locator",
    description: (
      <p className="mb-2">
        This was my first major project after learning{" "}
        <Anchor title={"Website for React.Js"} target={"_blank"} href={"https://reactjs.org/"}>
          React
        </Anchor>{" "}
        and{" "}
        <Anchor title={"Website for Next.Js"} target={"_blank"} href={"https://nextjs.org/"}>
          Next.js.
        </Anchor>{" "}
        I made use of the{" "}
        <Anchor target={"_blank"} href={"https://www.mapbox.com/"} title={"Mapbox website"}>
          mapbox API
        </Anchor>{" "}
        in order to display an interactive map, a postgres database hosted on{" "}
        <Anchor href={"https://www.heroku.com/"} target={"_blank"}>
          Heroku
        </Anchor>{" "}
        to store geoJSON data of differents points of interests, and{" "}
        <Anchor href={"https://www.prisma.io/"} target={"_blank"}>
          Prisma
        </Anchor>{" "}
        to help interact with the database.
      </p>
    ),
    href: "https://sxm-pois.vercel.app/",
    techStack: createStack(false, "Next.Js", "JavaScript", "Postgres"),
    imgSrc: sxmPOI
  },
  {
    title: "Crypto Tracker",
    description: (
      <p className="mb-2">
        This project was made in order to showcase my data visualization skills. It was built using Next.js with server
        side rendering, to always display the latest articles and price data related to cryptocurrenies. The charts were
        built thanks to{" "}
        <Anchor href={"https://developers.google.com/chart"} target={"_blank"}>
          Google charts.
        </Anchor>
      </p>
    ),
    href: "https://bluepnwage-crypto-tracker.vercel.app/",
    imgSrc: cryptoTracker,
    techStack: createStack(false, "Next.Js", "TypeScript")
  },
  {
    title: "Blog Social",
    description: (
      <p>
        This project was created so I can practise using a Backend-as-a-Service with{" "}
        <Anchor title={"Website supabase"} href={"https://supabase.com/"} target={"_blank"}>
          Supabase
        </Anchor>{" "}
        for the first time, and make use of the newest features for Next.js such as{" "}
        <Anchor
          title={"Website for Next.js"}
          target={"_blank"}
          href={
            "https://nextjs.org/blog/next-12-2?utm_source=next-site&utm_medium=banner&utm_campaign=next-website#on-demand-incremental-static-regeneration-stable"
          }
        >
          On-demand incremental static regeneration
        </Anchor>{" "}
        , which allows me to update certain pages on a website without needing to redeploy. In this website, users are
        allowed to sign up, write and publish blogs, update their profile, and view other users&apos; profiles.
      </p>
    ),
    href: "https://blog-social-jade.vercel.app/",
    imgSrc: blogSocial,
    techStack: createStack(false, "TypeScript", "Next.Js", "Postgres")
  },
  {
    title: "Chat App",
    description: (
      <>
        <p className="mb-2">In this project, I practiced implementing CRUD operations by being able to:</p>
        <ul className="mb-2 list-disc space-y-2">
          <li>Create an account and chat rooms.</li>
          <li>
            Read messages from other users in <strong>realtime</strong> thanks to{" "}
            <Anchor title={"Website for Ably"} href={"https://ably.com/"} target={"_blank"}>
              Ably.
            </Anchor>
          </li>
          <li>Update your profile picture, username, password and more.</li>
          <li>Delete chatrooms that you own and deleting your profile permanently.</li>
        </ul>
        <p className="mb-2">The chatrooms created are all stored in a Postgres database hosted on Heroku.</p>
      </>
    ),
    href: "https://chat-app2-nu.vercel.app/",
    imgSrc: chatApp,
    techStack: createStack(false, "Next.Js", "TypeScript", "Postgres")
  },
  {
    title: "Feliciano Restaurant",
    href: "https://restaurant-booker.vercel.app/",
    imgSrc: restaurantBooker,
    description: (
      <p className="mb-2">
        This project was built so that I could practise optimizing performance when dealing with large images, setting
        up scroll animations with{" "}
        <Anchor href={"https://www.framer.com/motion/"} target={"_blank"}>
          Framer motion
        </Anchor>
        , and provide users the option to reserve a table online, then storing the information in a MongoDB database. I
        also practiced using scheduled functions to <strong>automatically</strong> remove all passed reservations in the
        database.
      </p>
    ),
    techStack: createStack(false, "Next.Js", "TypeScript", "MongoDB", "TailwindCSS")
  }
];
