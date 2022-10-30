"use client";
import { Menu2, X } from "tabler-icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileSpotify } from "./MobileSpotify";
export function Drawer() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <>
      <button className="md:hidden text-gray-300 px-4 py-2" onClick={toggleMenu}>
        {menu ? <X /> : <Menu2 />}
      </button>
      <AnimatePresence>
        {menu && (
          <motion.div
            key={"modal"}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 bg-white dark:bg-zinc-900 z-[9999]  w-screen h-screen"
            role={"dialog"}
            aria-labelledby="navigation"
          >
            <div className="flex justify-between items-center mb-4">
              <p id="navigation" className="text-gray-900 dark:text-gray-300 ml-2">
                Navigation
              </p>
              <button
                aria-label="Close modal"
                className="  block text-black dark:text-gray-300 px-4 py-2"
                onClick={() => setMenu(false)}
              >
                X
              </button>
            </div>
            <div className="flex flex-col gap-10 items-center">
              <ul onClick={() => setMenu(false)} className="text-center space-y-2">
                <li>
                  <a href={"#about"}>About</a>
                </li>
                <li>
                  <a href={"#projects"}>Projects</a>
                </li>
                <li>
                  <a href={"#contact"}>Contact</a>
                </li>
              </ul>
              <MobileSpotify />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
