import { createStyles, ThemeIcon, Text, Group, Box, Anchor } from "@mantine/core";
import { At, BrandLinkedin, BrandGithub } from "tabler-icons-react";

type ContactIconVariant = "white" | "gradient";

interface ContactIconStyles {
  variant: ContactIconVariant;
}

const useStyles = createStyles((theme, { variant }: ContactIconStyles) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    color: theme.white
  },

  icon: {
    marginRight: theme.spacing.md,
    backgroundImage:
      variant === "gradient"
        ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
          } 100%)`
        : "none",
    backgroundColor: "transparent"
  },

  title: {
    color: variant === "gradient" ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0]
  },

  description: {
    color: variant === "gradient" ? theme.black : theme.white
  }
}));

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
  href: string;
  variant?: ContactIconVariant;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = "gradient",
  className,
  href,
  ...others
}: ContactIconProps) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === "gradient" ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size={24} />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size={24} />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Anchor href={href} target={"_blank"} className={classes.description}>
          {description}
        </Anchor>
      </div>
    </div>
  );
}

interface ContactIconsListProps {
  data?: ContactIconProps[];
  variant?: ContactIconVariant;
}

const MOCKDATA = [
  { title: "Email", description: "a.carty2555@gmail.com", icon: At, href: "#" },
  {
    title: "Linkedin",
    description: "Agis Carty",
    icon: BrandLinkedin,
    href: "https://www.linkedin.com/in/agis-carty-a49505230/"
  },
  { title: "Github", description: "bluepnwage", icon: BrandGithub, href: "https://github.com/bluepnwage" }
];

export function ContactIconsList({ data = MOCKDATA, variant }: ContactIconsListProps) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Group direction="column">{items}</Group>;
}
