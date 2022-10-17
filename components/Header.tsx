import { Anchor, createStyles, Group, ActionIcon, Burger, Loader } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { MoonStars, Sun } from "tabler-icons-react";
import { checkTheme } from "util/theme";
import { Suspense, lazy } from "react";

const MobileMenu = lazy(() => import("./MobileMenu/MobileMenu"));
const SpotifySong = lazy(() => import("./SpotifySong"));

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: checkTheme(theme, theme.white, theme.colors.dark[6]),
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    left: 0,
    borderBottom: `1px solid ${checkTheme(theme, theme.colors.gray[2], theme.colors.gray[7])}`,
    zIndex: 500,
    transition: "all 250ms ease-out"
  },
  nav: {
    minWidth: "60%",
    justifyContent: "space-between",
    gap: theme.spacing.xl,
    [theme.fn.smallerThan("sm")]: {
      width: "85%",
      gap: 0
    }
  },
  flex: {
    display: "flex"
  },
  spotifyDisplay: {
    gap: theme.spacing.sm,
    color: checkTheme(theme, theme.colors.dark[7], theme.colors.gray[4])
  },
  links: {
    color: checkTheme(theme, theme.colors.dark[7], theme.colors.gray[4]),
    fontWeight: 600,
    "&:hover": {
      color: checkTheme(theme, theme.colors.blue[6], theme.colors.blue[4])
    }
  },
  desktop: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  }
}));

interface PropTypes {
  onToggle: () => void;
}

export default function Header({ onToggle }: PropTypes) {
  const { classes, cx, theme } = useStyles();
  const matches = useMediaQuery("(max-width:768px)", false);
  return (
    <>
      <Suspense fallback={null}>
        <header className={cx(classes.container, classes.flex)}>
          <nav className={cx(classes.nav, classes.flex)}>
            <Suspense fallback={<Burger opened={false} />}>{matches && <MobileMenu />}</Suspense>
            <Group className={classes.desktop}>
              <Anchor href={"#"} className={classes.links}>
                About
              </Anchor>
              <Anchor href={"#projects"} className={classes.links}>
                Projects
              </Anchor>
              <Anchor href={"#contact"} className={classes.links}>
                Contact
              </Anchor>
            </Group>
            <Group spacing={"xl"}>
              <div className={cx(classes.flex, classes.spotifyDisplay, classes.desktop)}>
                <Suspense fallback={<Loader size={"sm"} />}>{!matches && <SpotifySong />}</Suspense>
              </div>
              <ActionIcon
                onClick={onToggle}
                aria-label={checkTheme(theme, "Toggle dark mode", "Toggle light mode")}
                variant="outline"
              >
                {checkTheme(theme, <MoonStars />, <Sun />)}
              </ActionIcon>
            </Group>
          </nav>
        </header>
      </Suspense>
    </>
  );
}
