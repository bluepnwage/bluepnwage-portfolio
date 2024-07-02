import type { ComponentPropsWithoutRef } from "react";

type PropTypes = ComponentPropsWithoutRef<"a">;

export function Anchor({ children, ...anchorProps }: PropTypes) {
  return (
    <a
      {...anchorProps}
      target={"_blank"}
      className={"font-medium text-gray-100 underline"}
    >
      {children}
    </a>
  );
}
