import { Link } from "./Link";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { Suspense } from "react";
import { SpotifySong } from "./SpotifySong";

export default function Header() {
  return (
    <header
      className={`w-full items-center px-4 py-2 lg:py-0 lg:px-0 justify-between flex lg:block lg:w-1/6
     lg:space-y-4 border-b lg:border-b-0 border-zinc-300 dark:border-zinc-700 bg-background dark:bg-background-dark sticky lg:fixed top-0 left-0 lg:top-36 lg:left-16`}
    >
      <nav>
        <MobileMenu />
        <ul className="space-y-2 hidden lg:block">
          <Link href={"/"}>Home</Link>
          <Link href={"/blogs"}>Blogs</Link>
        </ul>
      </nav>
      <Suspense fallback={null}>
        <div className="hidden lg:block">
          <SpotifySong />
        </div>
      </Suspense>
      <ThemeToggle />
    </header>
  );
}
