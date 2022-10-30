import type { AnchorHTMLAttributes, ReactNode } from "react";

interface PropTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function Anchor({ children, ...anchorProps }: PropTypes) {
  return (
    <a {...anchorProps} className="dark:text-indigo-400 text-indigo-600 hover:underline">
      {children}
    </a>
  );
}
