import { NavLink } from "./nav-link";

export function MobileHeader() {
  return (
    <div>
      <header className={`block md:hidden w-full fixed bottom-0 left-0 bg-neutral-900 z-50`}>
        <div className="w-full  flex items-center justify-between px-4 border-t-neutral-600 border-t">
          <nav className="   h-16 flex items-center">
            <ul className="flex md:hidden lg:flex gap-4 overflow-hidden">
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/blogs"}>Blogs</NavLink>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
