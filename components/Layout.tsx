import Header from "./Header";
import { ReactNode, useState, useEffect } from "react";
import { MantineProvider, Paper, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

interface PropTypes {
  children: ReactNode;
}

export default function Layout({ children }: PropTypes) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");

  useEffect(() => {
    const html = document.documentElement;
    html.className = colorScheme;
  }, [colorScheme]);

  const toggleTheme = (theme?: ColorScheme) => {
    if (theme !== "dark") {
      setColorScheme(colorScheme === "light" ? "dark" : "light");
      return;
    }
    setColorScheme(theme);
  };

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleTheme}>
        <MantineProvider
          withCSSVariables
          withNormalizeCSS
          theme={{
            colorScheme,
            fontFamily: "Kumbh Sans, Segoe UI, sans-serif",
            headings: { fontFamily: "Kumbh Sans, Segoe UI, sans-serif" }
          }}
        >
          <NotificationsProvider>
            <Header onToggle={toggleTheme} />
            <Paper sx={() => ({ borderRadius: 0, minHeight: "100vh", transition: "all 250ms ease-out" })}>
              <main className="section-container">{children}</main>
            </Paper>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
