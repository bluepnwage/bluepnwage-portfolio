import "../styles/globals.css";
import Header from "../components/Header";
import "react-toastify/dist/ReactToastify.css";
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className="bg-background dark:bg-background-dark duration-200 ease-out dark:text-on-background-dark text-gray-900">
        <Header />
        <main className="lg:ml-24">{children}</main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
