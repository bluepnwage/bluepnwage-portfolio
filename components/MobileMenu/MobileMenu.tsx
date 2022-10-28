import { Drawer } from "./Drawer";
import { Suspense } from "react";

export function MobileMenu() {
  return (
    <>
      <Suspense>
        <Drawer />
      </Suspense>
    </>
  );
}
