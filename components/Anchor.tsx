import type { ComponentPropsWithoutRef } from "react";
import { cx } from "cva";
type PropTypes = ComponentPropsWithoutRef<"a">;

export function Anchor({ children, ...anchorProps }: PropTypes) {
  return (
    <a
      {...anchorProps}
      target={"_blank"}
      className={cx("dark:text-primary-70 text-primary-40 hover:underline", anchorProps.className)}
    >
      {children}
    </a>
  );
}
