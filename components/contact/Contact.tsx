import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section
      id={"contact"}
      className="mb-20 grid grid-cols-2 gap-12"
    >
      <header>
        <h2 className="font-bold text-3xl mb-5">Contact</h2>
        <p className="text-gray-200">
          Corem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </header>
      <div className="flex flex-col gap-12">
        <Link
          href={"/"}
          className="bg-neutral-700 w-2/3 ml-auto  rounded flex flex-col justify-center gap-4 p-6"
        >
          <p className="text-gray-100 font-semibold text-xl">Github</p>
          <p className="flex items-center text-gray-200">
            bluepnwage{" "}
            <ArrowUpRight
              // color="inherit"
              className="inline-block ml-2 text-gray-300"
              size={16}
            />
          </p>
        </Link>
        <Link
          href={"/"}
          className="bg-neutral-700 w-2/3 ml-auto  rounded flex flex-col justify-center gap-4 p-6"
        >
          <p className="text-gray-100 font-semibold text-xl">Email</p>
          <p className="flex items-center text-gray-200">
            a.carty2555@gmail.com{" "}
          </p>
        </Link>
      </div>
    </section>
  );
}

interface PropTypes {
  label: string;
  icon: ReactNode;
  contact: string;
  href: string;
}

function ContactInfo({ label, contact, icon, href }: PropTypes) {
  return (
    <div className="flex gap-2 items-center">
      {icon}
      <div>
        <span className="text-sm block">{label}</span>
        <a
          href={href}
          rel="noreferrer"
          target={"_blank"}
          className="font-semibold"
        >
          {contact}
        </a>
      </div>
    </div>
  );
}
