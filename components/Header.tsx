import { Link } from "./Link";
export default function Header() {
  return (
    <header className="h-16 border-b sticky backdrop-blur-md bg-zinc-900 bg-opacity-60 top-0 left-0 w-full mb-10 items-center flex justify-center border-zinc-600 ">
      <nav className=" w-4/5 md:w-3/5 flex ">
        <div className="flex gap-10">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}
