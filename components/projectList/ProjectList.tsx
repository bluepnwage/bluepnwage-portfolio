import { Anchor, Title, List, Text } from "@mantine/core";
import { ProjectObj } from "interfaces";
import { Project } from "./Project";
import { createStack } from "util/techStack";
import { useStyles } from "./styles";
import blogSocial from "../../public/blog-social.png";
import chatApp from "../../public/chat-app.png";
import cryptoTracker from "../../public/crypto-tracker.png";
import sxmPois from "../../public/sxm-pois.png";
import restaurantBooker from "../../public/restaurant-booker.png";

export function ProjectList() {
  const { classes, cx } = useStyles();
  return (
    <>
      <section id={"projects"} className={classes.container}>
        <Title my={"xl"} order={2}>
          Personal Projects
        </Title>
        <div className={cx(classes.flex, classes.projects)}>
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

const projects: ProjectObj[] = [
  {
    title: "SXM POI Locator",
    description: (
      <Text component="p" mb={"sm"}>
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
      </Text>
    ),
    href: "https://sxm-pois.vercel.app/",
    techStack: createStack(false, "Next.Js", "JavaScript", "Postgres"),
    imgSrc: sxmPois
  },
  {
    title: "Crypto Tracker",
    description: (
      <Text component="p" mb={"sm"}>
        This project was made in order to showcase my data visualization skills. It was built using Next.js with server
        side rendering, to always display the latest articles and price data related to cryptocurrenies. The charts were
        built thanks to{" "}
        <Anchor href={"https://developers.google.com/chart"} target={"_blank"}>
          Google charts.
        </Anchor>
      </Text>
    ),
    href: "https://bluepnwage-crypto-tracker.vercel.app/",
    imgSrc: cryptoTracker,
    techStack: createStack(false, "Next.Js", "TypeScript")
  },
  {
    title: "Blog Social",
    description: (
      <Text component="p">
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
      </Text>
    ),
    href: "https://blog-social-jade.vercel.app/",
    imgSrc: blogSocial,
    techStack: createStack(false, "TypeScript", "Next.Js", "Postgres")
  },
  {
    title: "Chat App",
    description: (
      <>
        <Text component="p" mb={"sm"}>
          In this project, I practiced implementing CRUD operations by being able to:
        </Text>
        <List spacing={"xs"} mb={"sm"}>
          <List.Item>Create an account and chat rooms.</List.Item>
          <List.Item>
            Read messages from other users in <strong>realtime</strong> thanks to{" "}
            <Anchor title={"Website for Ably"} href={"https://ably.com/"} target={"_blank"}>
              Ably.
            </Anchor>
          </List.Item>
          <List.Item>Update your profile picture, username, password and more.</List.Item>
          <List.Item>Delete chatrooms that you own and deleting your profile permanently.</List.Item>
        </List>
        <Text component={"p"} mb={"md"}>
          The chatrooms created are all stored in a Postgres database hosted on Heroku.
        </Text>
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
      <>
        <Text component="p">
          This project was built so that I could practise optimizing performance when dealing with large images, setting
          up scroll animations with{" "}
          <Anchor href={"https://www.framer.com/motion/"} target={"_blank"}>
            Framer motion
          </Anchor>
          , and allowing users to set up reservations online and storing the information in a MongoDB database.
        </Text>
      </>
    ),
    techStack: createStack(false, "Next.Js", "TypeScript", "MongoDB", "TailwindCSS")
  }
];
