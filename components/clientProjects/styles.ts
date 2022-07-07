import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "60%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing.xl,
    [theme.fn.smallerThan("sm")]: {
      width: "85%"
    }
  },
  imgContainer: {
    aspectRatio: "16 / 9",
    marginBottom: theme.spacing.lg,
    position: "relative"
  },
  projectContainer: {
    width: "80%",
    marginBottom: 85,
    [theme.fn.smallerThan("sm")]: {
      width: "100%"
    }
  },
  flex: {
    display: "flex"
  },
  badge: {
    alignItems: "center"
  }
}));
