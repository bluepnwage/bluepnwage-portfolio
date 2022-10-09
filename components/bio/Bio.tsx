import { Title, createStyles, Text, Badge, Grid, Avatar, Anchor } from "@mantine/core";
import { TechStack } from "interfaces";
import { createStack } from "util/techStack";
import { checkTheme } from "util/theme";

const useStyles = createStyles((theme) => ({
  container: {
    width: "60%",
    marginBottom: theme.spacing.xl * 2,
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      width: "85%"
    }
  },
  bioContainer: {
    width: "60%",
    [theme.fn.smallerThan("sm")]: {
      width: "100%"
    }
  },
  flex: {
    display: "flex"
  },
  badge: {
    width: "100%"
  },
  iconContainer: {
    width: "80%",
    [theme.fn.smallerThan("sm")]: {
      width: "100%"
    }
  },
  avatarContainer: {
    justifyContent: "center",
    flexGrow: 1,
    [theme.fn.smallerThan("sm")]: {
      margin: `${theme.spacing.lg}px 0px`,
      justifyContent: "flex-start"
    }
  },
  article: {
    color: checkTheme(theme, theme.colors.gray[7], theme.colors.gray[5])
  },
  header: {
    width: "60%"
  }
}));

export function Bio() {
  const { classes, cx } = useStyles();
  const skills: TechStack[] = createStack(true);

  return (
    <>
      <header className={classes.header}>
        <Title mt={"xl"} mb={"sm"} order={1}>
          Agis Carty
        </Title>
      </header>
      <section className={cx(classes.container, classes.flex)}>
        <div className={classes.bioContainer}>
          <Title mb={"md"} order={2}>
            Up and coming Front-end Developer
          </Title>
          <article className={classes.article}>
            <Text component="p" mb={"md"}>
              My name is Agis Carty and I&apos;m an aspiring front-end developer. Having been born in the island of{" "}
              <Anchor
                target={"_blank"}
                title={"Wikipedia page for Saint Martin"}
                href={"https://en.wikipedia.org/wiki/Saint_Martin_(island)"}
              >
                Saint Martin
              </Anchor>
              , where programming isn&apos;t a popular topic, I didn&apos;t discover web development until{" "}
              <time dateTime="2021-10">October 2021</time>. Now I&apos;m dedicated to building fully scalable websites
              and hopefully introducing more people to the beauty of web development.
            </Text>
          </article>
          <div>
            <Text component="strong">Here are a few skills I&apos;ve picked up so far:</Text>
            <Grid mt={"md"} grow className={classes.iconContainer}>
              {skills.map((skill, index) => {
                return (
                  <Grid.Col span={3} key={index}>
                    <Badge size="lg" className={classes.badge} color={skill.color}>
                      {skill.label}
                    </Badge>
                  </Grid.Col>
                );
              })}
            </Grid>
          </div>
        </div>
        <figure className={cx(classes.avatarContainer, classes.flex)}>
          <Avatar alt={"Kirby"} src={"/bluepnwage.jpg"} radius={(1 / 2) * 100} size={90} />
        </figure>
      </section>
    </>
  );
}
