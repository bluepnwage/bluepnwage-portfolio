import "../styles/globals.css";
import Header from "../components/Header";
import "react-toastify/dist/ReactToastify.css";
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";
import { Metadata } from "next";

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
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://bluepnwage-portfolio.vercel.app/" />
      </head>
      <body className="bg-background dark:bg-background-dark duration-200 ease-out dark:text-on-background-dark text-gray-900">
        <Header />
        <main className="lg:ml-24">{children}</main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
