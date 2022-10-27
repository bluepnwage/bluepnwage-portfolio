import type { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  bgColor: string;
}

export function Badge({ children, bgColor }: PropTypes) {
  return (
    <div className={`rounded-3xl basis-3 grow px-6 py-1 min-w-max max-w-fit ${bgColor}`}>
      <p className="font-semibold text-sm uppercase text-center">{children}</p>
    </div>
  );
}
