import { Anchor, Badge, Grid, Group, Space, Text, Title } from "@mantine/core";
import { useStyles } from "./styles";
import { ProjectObj } from "interfaces";
import { Image } from "components/Image";

interface PropTypes {
  project: ProjectObj;
}

export function Project({ project }: PropTypes) {
  const { classes } = useStyles();
  return (
    <Grid className={classes.projectGrid} grow mb={85}>
      <Grid.Col className={classes.descriptionCol} lg={6}>
        <Title mb={"md"} order={3}>
          {project.title}
        </Title>
        <article className={classes.article}>{project.description}</article>
        <Anchor target={"_blank"} href={project.href}>
          Link to website
        </Anchor>
        <Space mb={"md"} />
        <Text component={"strong"} mb={"md"}>
          Technologies used:
        </Text>
        <Space mb={"sm"} />
        <Group className={classes.badgeContainer}>
          {project.techStack.map((tech, index) => {
            return (
              <Badge key={index} color={tech.color}>
                {tech.label}
              </Badge>
            );
          })}
        </Group>
      </Grid.Col>
      <Grid.Col className={classes.imgCol} lg={6}>
        <figure className={classes.imgContainer}>
          <Image className={classes.img} alt={project.title} src={project.imgSrc} />
        </figure>
      </Grid.Col>
    </Grid>
  );
}
