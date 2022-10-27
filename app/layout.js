import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Agis Carty | Front-end Developer</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="canonical" href="https://bluepnwage-portfolio.vercel.app/" />
        <meta name="description" content="Aspiring JavaScript developer who loves building websites." />
        <meta property="og:title" content="Agis Carty | Front-end Developer" />
        <meta property="og:description" content="Aspiring JavaScript developer who loves building websites." />
        <meta name="keywords" content="JavaScript, React, Portfolio, Next.Js, Saint Martin, SXM" />
        <meta property="og:site_name" content="Agis Carty" />
        <meta property="og:image" content="https://bluepnwage-portfolio.vercel.app/bluepnwage.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-zinc-900 flex flex-col items-center">
        <Header />
        <main className="w-3/5">{children}</main>
      </body>
    </html>
  );
}
