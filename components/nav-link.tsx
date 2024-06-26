"use client";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type PropTypes = LinkProps & { children: React.ReactNode };

export function NavLink({ children, ...props }: PropTypes) {
  const path = usePathname();
  return (
    <li>
      <Link
        {...props}
        className="relative text-gray-100 font-semibold block px-2 py-1"
      >
        <span className="relative block z-50">{children}</span>
        {path === props.href && (
          <motion.span
            className="rounded block absolute inset-0 w-full h-full bg-neutral-700"
            layoutId="navlink"
          />
        )}
      </Link>
    </li>
  );
}
