import { MobileMenu } from "./MobileMenu/MobileMenu";
import { NavLink } from "./nav-link";

export default function Header() {
  return (
    <header
      className={`w-full  backdrop-blur-md sticky top-0 left-0 bg-neutral-900/50`}
    >
      <nav className="w-3/5 container mx-auto border-b-neutral-600 border-b  h-20 flex items-center">
        {/* <MobileMenu /> */}
        <ul className="hidden lg:flex gap-4">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/blogs"}>Blogs</NavLink>
        </ul>
      </nav>
    </header>
  );
}
