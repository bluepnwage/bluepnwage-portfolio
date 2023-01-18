import { cva } from "cva";
import type { ComponentPropsWithoutRef } from "react";
import type { VariantProps } from "cva";

const styles = cva(
  "rounded-3xl basis-3 grow px-6 py-1 min-w-max max-w-fit text-sm font-semibold uppercase text-center",
  {
    variants: {
      color: {
        orange: "dark:bg-orange-600/40 dark:text-orange-100 bg-orange-100 text-orange-600",
        indigo: "dark:bg-indigo-600/40 dark:text-indigo-100 bg-indigo-100 text-indigo-600",
        cyan: "dark:bg-cyan-600/40 dark:text-cyan-100 bg-cyan-100 text-cyan-600",
        yellow: "dark:bg-yellow-600/40 dark:text-yellow-100 bg-yellow-100 text-yellow-600",
        blue: "dark:bg-blue-600/40 dark:text-blue-100 bg-blue-100 text-blue-600",
        gray: "dark:bg-gray-600/40 dark:text-gray-100 bg-gray-100 text-gray-600",
        violet: "dark:bg-violet-600/40 dark:text-violet-100 bg-violet-100 text-violet-600",
        green: "dark:bg-green-600/40 dark:text-green-100 bg-green-100 text-green-600",
        fuchsia: "dark:bg-fuchsia-600/40 dark:text-fuchsia-100 bg-fuchsia-100 text-fuchsia-600"
      }
    }
  }
);

type PropTypes = Omit<ComponentPropsWithoutRef<"div">, "color"> & VariantProps<typeof styles>;
export type Colors = VariantProps<typeof styles>["color"];

export function Badge({ children, color, className }: PropTypes) {
  return (
    <div className={styles({ className, color })}>
      <p className="font-semibold text-sm uppercase text-center">{children}</p>
    </div>
  );
}
