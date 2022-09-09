import { createStyles } from "@mantine/core";
import { checkTheme } from "util/theme";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "60%",
    marginBottom: theme.spacing.xl,
    [theme.fn.smallerThan("sm")]: {
      width: "85%"
    }
  },
  imgContainer: {
    height: "100%",
    width: "100%"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  flex: {
    display: "flex"
  },
  projects: {
    flexDirection: "column"
  },
  badgeContainer: {
    justifyContent: "space-evenly",
    [theme.fn.smallerThan("sm")]: {
      marginBottom: theme.spacing.md
    }
  },
  descriptionCol: {
    gridColumnStart: 1
  },
  imgCol: {
    gridColumnStart: 7
  },
  projectGrid: {
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse"
    }
  },
  article: {
    color: checkTheme(theme, theme.colors.gray[7], theme.colors.gray[5])
  }
}));
