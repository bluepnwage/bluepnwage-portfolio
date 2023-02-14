"use client";
import NextLink from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import type { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cx } from "cva";

type PropTypes = Omit<ComponentPropsWithoutRef<"a">, "href"> & LinkProps;

export function Link({ children, ...anchorProps }: PropTypes) {
  const path = usePathname();

  return (
    <li>
      <NextLink
        {...anchorProps}
        className={cx(
          path === anchorProps.href ||
            (path?.includes("blog") && anchorProps.href.toString().includes("blog"))
            ? "bg-secondary-container text-on-secondary-container dark:bg-secondary-container-dark dark:text-on-secondary-container-dark"
            : "",
          "font-semibold px-4 py-1 rounded-full group block group-hover:text-secondary-dark"
        )}
      >
        {children}
      </NextLink>
    </li>
  );
}
