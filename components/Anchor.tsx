import type { AnchorHTMLAttributes, ReactNode } from "react";

interface PropTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export function Anchor({ children, ...anchorProps }: PropTypes) {
  return (
    <a {...anchorProps} className="text-indigo-400 hover:underline">
      {children}
    </a>
  );
}
