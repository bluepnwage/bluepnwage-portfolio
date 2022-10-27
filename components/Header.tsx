import { Link } from "./Link";
import { ThemeToggle } from "./ThemeToggle";
import MobileMenu from "./MobileMenu/MobileMenu";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="h-16 border-b sticky backdrop-blur-md bg-opacity-60 bg-white dark:bg-zinc-900 dark:bg-opacity-60 top-0 left-0 w-full mb-10 items-center flex justify-center dark:border-zinc-600 ">
      <nav className="w-4/5 md:w-3/5 flex justify-between items-center">
        <Suspense fallback={null}>
          <MobileMenu />
        </Suspense>
        <div className="md:flex gap-10 hidden">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Contact</Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
