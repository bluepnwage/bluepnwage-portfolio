import { Title, ThemeIcon, Text, Anchor } from "@mantine/core";
import { Clock, Check } from "tabler-icons-react";
import { ClientProjectObj } from "interfaces";
import { ClientProject } from "./ClientProject";
import { useStyles } from "./styles";

export default function ClientProjects() {
  const { classes, cx } = useStyles();
  return (
    <>
      <section className={cx(classes.container, classes.flex)}>
        <Title align="center" mb={"xl"} order={2}>
          Client Projects
        </Title>
        {clientProjects.map((project) => {
          const pending = (
            <ThemeIcon color={"orange"} size={"sm"} className={cx(classes.badge, classes.flex)}>
              <Clock />
            </ThemeIcon>
          );

          const completed = (
            <ThemeIcon color={"teal"} size={"sm"} className={cx(classes.badge, classes.flex)}>
              <Check />
            </ThemeIcon>
          );

          const icon = project.status === "Completed" ? completed : pending;

          return <ClientProject icon={icon} {...project} key={project.title} />;
        })}
      </section>
    </>
  );
}

const clientProjects: ClientProjectObj[] = [
  {
    title: "TM Enterprises",
    description: (
      <Text component="p" mb={"md"}>
        A good friend of mine was trying to build a website for his startup company, however, he didn&apos;t posess the
        time to work on it as much as he would like. Knowing that this would have been a perfect opportunity to gain
        experience working for someone, I quickly offered my help. After explaining to him that a website built with
        Next.js and hosted on{" "}
        <Anchor title={"Website for Vercel"} href={"https://vercel.com/"} target={"_blank"}>
          Vercel
        </Anchor>{" "}
        would be the quickest and cheapest way to get started, he was immediately on board. Since then we have made a
        considerable amount of progress, and my friend already has several clients lined up thanks to how professional
        and performant the website is so far.
      </Text>
    ),
    imgSrc: "/tm-enterprises.png",
    status: "In progress",
    websiteType: "Marketing"
  },
  {
    title: "SHMK-Camp",
    description: (
      <Text component="p" mb={"md"}>
        This website is currently being worked on for a client who has been wanting an E-commerce website for over 2
        years. After the previous developer was unable to build the website using Shopify, I was introduced to my client
        thanks to a mutual friend. Within a month of us working together, I&apos;ve managed to build a fully functioning
        website for his store using Next.js, Vercel and{" "}
        <Anchor href={"https://stripe.com/en-ca"} target={"_blank"} title={"Website for stripe"}>
          Stripe
        </Anchor>{" "}
        for payments.
      </Text>
    ),
    imgSrc: "/shmk-camp.png",
    status: "In progress",
    websiteType: "E-commerce"
  }
];
