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
    aspectRatio: "16 / 9",
    backgroundColor: theme.colors.blue[3],
    position: "relative"
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
  article: {
    color: checkTheme(theme, theme.colors.gray[7], theme.colors.gray[5])
  }
}));
