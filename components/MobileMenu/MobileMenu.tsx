"use client";
// import SpotifySong from "../SpotifySong";
import { useState } from "react";
import { Menu2, X } from "tabler-icons-react";

export default function MobileMenu() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer((prev) => !prev);
  };

  return (
    <>
      <button aria-label="Open navigation" onClick={toggleDrawer}>
        {drawer ? <X /> : <Menu2 />}
      </button>
    </>
  );
}
