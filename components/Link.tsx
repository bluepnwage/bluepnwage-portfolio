import type { AnchorHTMLAttributes, ReactNode } from "react";

interface PropTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function Link({ children, ...anchorProps }: PropTypes) {
  return (
    <a {...anchorProps} className="font-semibold hover:text-indigo-400">
      {children}
    </a>
  );
}
