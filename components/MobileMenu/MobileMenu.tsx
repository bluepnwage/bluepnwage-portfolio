import SpotifySong from "../SpotifySong";
import { Drawer, Burger, Anchor, Container, Group, Center, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useStyles } from "./styles";

export default function MobileMenu() {
  const [opened, handler] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Burger opened={opened} onClick={handler.open} />
      <Drawer
        classNames={{ header: classes.drawerHeader }}
        title={"Navigation"}
        zIndex={505}
        size={"xl"}
        onClose={handler.close}
        opened={opened}
      >
        <Container>
          <Center mb={"lg"}>
            <Stack>
              <Anchor onClick={handler.close} href={"#"}>
                About
              </Anchor>
              <Anchor onClick={handler.close} href={"#projects"}>
                Projects
              </Anchor>
              <Anchor onClick={handler.close} href={"#contact"}>
                Contact
              </Anchor>
            </Stack>
          </Center>
          <Group>
            <SpotifySong mobile={true} />
          </Group>
        </Container>
      </Drawer>
    </>
  );
}
