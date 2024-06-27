import { NavLink } from "./nav-link";

export default function Header() {
  return (
    <header className={`w-full backdrop-blur-md sticky top-0 left-0 bg-neutral-900/50 z-50`}>
      <nav className="md:w-3/5 max-w-screen-lg mx-auto border-b-neutral-600 border-b  h-20 flex items-center">
        <ul className="hidden lg:flex gap-4 overflow-hidden">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/blogs"}>Blogs</NavLink>
        </ul>
      </nav>
    </header>
  );
}
