"use client";
import NextLink from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import type { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "cva";
import { motion } from "framer-motion";

type PropTypes = Omit<ComponentPropsWithoutRef<"a">, "href"> & LinkProps;

export function Link({ children, ...anchorProps }: PropTypes) {
  const path = usePathname();
  const isActive =
    path === anchorProps.href || (path?.includes("blog") && anchorProps.href.toString().includes("blog"));
  return (
    <li>
      <NextLink
        {...anchorProps}
        className={cx("font-semibold px-4 py-1  group block group-hover:text-secondary-dark relative")}
      >
        <span className="relative z-10">{children}</span>
        {isActive && (
          <motion.span
            layout
            layoutId="nav-bar"
            className="absolute rounded-full top-0 left-0 w-full h-full bg-secondary-container  text-on-secondary-container dark:bg-secondary-container-dark dark:text-on-secondary-container-dark"
          ></motion.span>
        )}
      </NextLink>
    </li>
  );
}
