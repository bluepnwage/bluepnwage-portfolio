import NextLink from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import type { LinkProps } from "next/link";

type PropTypes = Omit<ComponentPropsWithoutRef<"a">, "href"> & LinkProps;

export function Link({ children, ...anchorProps }: PropTypes) {
  return (
    <NextLink {...anchorProps} className="font-semibold hover:text-indigo-400">
      {children}
    </NextLink>
  );
}
