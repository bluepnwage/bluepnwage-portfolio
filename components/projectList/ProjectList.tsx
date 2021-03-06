import { Anchor, Title, List, Text } from "@mantine/core";
import { ProjectObj } from "interfaces";
import { Project } from "./Project";
import { createStack } from "util/techStack";
import { useStyles } from "./styles";

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
    imgSrc: "/sxm-pois.png"
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
    imgSrc: "/crypto-tracker.png",
    techStack: createStack(false, "Next.Js", "TypeScript")
  },
  {
    title: "News App",
    description: (
      <Text component="p">
        This was a simple project to practice using TypeScript with{" "}
        <Anchor title={"Website for Redux"} href={"https://redux.js.org/"} target={"_blank"}>
          Redux
        </Anchor>{" "}
        and{" "}
        <Anchor href={"https://mantine.dev/"} target={"_blank"} title={"Website for Mantine.dev"}>
          Mantine
        </Anchor>
        . I was able to fetch news articles from the <em>New York Times</em> thanks to their{" "}
        <Anchor
          title={"Website for New York Times Developers"}
          href={"https://developer.nytimes.com/"}
          target={"_blank"}
        >
          API.
        </Anchor>
      </Text>
    ),
    href: "https://news-app-mauve-seven.vercel.app/",
    imgSrc: "/news-app.png",
    techStack: createStack(false, "React", "JavaScript")
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
    imgSrc: "/chat-app.png",
    techStack: createStack(false, "Next.Js", "TypeScript", "Postgres")
  }
];
