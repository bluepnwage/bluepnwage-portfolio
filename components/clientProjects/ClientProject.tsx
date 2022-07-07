import Image from "next/image";
import { Badge, Stack, Text, Title } from "@mantine/core";
import { useStyles } from "./styles";
import { ClientProjectObj } from "interfaces";

export interface PropTypes extends ClientProjectObj {
  icon: JSX.Element;
}

export function ClientProject({ title, description, imgSrc, status, icon, websiteType }: PropTypes) {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.projectContainer}>
        <figure className={classes.imgContainer}>
          <Image src={imgSrc} layout={"fill"} alt={`${websiteType} website`} />
        </figure>
        <Title order={3} mb={"md"}>
          {title}
        </Title>
        <article>{description}</article>
        <Stack>
          <Text>Status:</Text>
          <Badge
            color={status === "Completed" ? "teal" : "orange"}
            size="xl"
            rightSection={icon}
            style={{ width: "fit-content" }}
          >
            {status}
          </Badge>
        </Stack>
      </div>
    </>
  );
}
