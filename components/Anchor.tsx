import type { ComponentPropsWithoutRef } from "react";

type PropTypes = ComponentPropsWithoutRef<"a">;

export function Anchor({ children, ...anchorProps }: PropTypes) {
  return (
    <a {...anchorProps} target={"_blank"} className="dark:text-primary-70 text-primary-40 hover:underline">
      {children}
    </a>
  );
}
