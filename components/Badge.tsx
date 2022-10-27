import type { ReactNode } from "react";
import styles from "./badge.module.css";
interface PropTypes {
  children: ReactNode;
  color: string;
}

export function Badge({ children, color }: PropTypes) {
  const badgeClass = styles[`badge-${color}`];
  return (
    <div className={`rounded-3xl basis-3 grow px-6 py-1 min-w-max max-w-fit ${badgeClass}`}>
      <p className="font-semibold text-sm uppercase text-center">{children}</p>
    </div>
  );
}
