import "../styles/globals.css";
import Header from "../components/Header";
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";
import { Metadata } from "next";
import { SpotifyWidget } from "components/spotify-widget";
import { MobileHeader } from "components/mobile-header";
import { MobileSpotifyWidget } from "components/spotify-widget/mobile-spotify-widget";

export const metadata: Metadata = {
  title: {
    template: "Agis Carty | %s",
    default: "Agis Carty | Front-end Developer"
  },
  description: "Aspiring JavaScript developer who loves building websites.",
  openGraph: {
    title: "Agis Carty | %s",
    description: "Aspiring JavaScript developer who loves building websites.",
    images: [{ url: "https://bluepnwage-portfolio.vercel.app/bluepnwage.jpg" }],
    siteName: "Agis Carty"
  },
  keywords: ["JavaScript", "React", "Portfolio", "Next.Js", "Saint Martin", "SXM"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <head>
        <link
          rel="canonical"
          href="https://bluepnwage-portfolio.vercel.app/"
        />
      </head>
      <body className="bg-background  dark:bg-neutral-900 duration-200 ease-out dark:text-gray-200 text-gray-900">
        <Header />
        <MobileHeader />
        <MobileSpotifyWidget />
        <main className="pb-16 md:pb-0 w-11/12 md:w-3/5 max-w-screen-lg mx-auto">
          {children}
          <SpotifyWidget />
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
