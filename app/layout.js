import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Agis Carty | Front-end developer</title>
      </head>
      <body className="bg-zinc-900 flex flex-col items-center">
        <Header />
        <main className="w-3/5">{children}</main>
      </body>
    </html>
  );
}
