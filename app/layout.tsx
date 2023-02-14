import "../styles/globals.css";
import Header from "../components/Header";
import "react-toastify/dist/ReactToastify.css";
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Agis Carty | Front-end Developer</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="canonical" href="https://bluepnwage-portfolio.vercel.app/" />
        <meta name="description" content="Aspiring JavaScript developer who loves building websites." />
        <meta property="og:title" content="Agis Carty | Front-end Developer" />
        <meta
          property="og:description"
          content="Aspiring JavaScript developer who loves building websites."
        />
        <meta name="keywords" content="JavaScript, React, Portfolio, Next.Js, Saint Martin, SXM" />
        <meta property="og:site_name" content="Agis Carty" />
        <meta property="og:image" content="https://bluepnwage-portfolio.vercel.app/bluepnwage.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark:bg-background-dark duration-200 ease-out dark:text-gray-300 text-gray-900">
        <Header />
        <main className="lg:ml-24">{children}</main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
