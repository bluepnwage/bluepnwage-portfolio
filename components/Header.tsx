import { Link } from "./Link";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Suspense } from "react";
import { SpotifySong } from "./SpotifySong";

export default function Header() {
  return (
    <header className="h-16 border-b sticky backdrop-blur-md bg-opacity-60 bg-white dark:bg-zinc-900 dark:bg-opacity-60 top-0 left-0 w-full mb-10 items-center flex justify-center dark:border-zinc-600 ">
      <nav className="w-4/5 md:min-w-3/5 flex justify-between items-center">
        <MobileMenu />
        <div className="md:flex gap-10 hidden">
          <Link href={"#about"}>About</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact"}>Contact</Link>
        </div>
        <div className="flex gap-5 items-center">
          <Suspense fallback={null}>
            <SpotifySong />
          </Suspense>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
