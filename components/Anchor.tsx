import type { ComponentPropsWithoutRef } from "react";
import { cx } from "cva";
type PropTypes = ComponentPropsWithoutRef<"a">;

export function Anchor({ children, ...anchorProps }: PropTypes) {
  return (
    <a
      {...anchorProps}
      target={"_blank"}
      className={cx(
        "font-semibold text-gray-100 underline",
        anchorProps.className
      )}
    >
      {children}
    </a>
  );
}
