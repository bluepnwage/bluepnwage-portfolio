"use client";
import { useState } from "react";
import { Sun, MoonStars } from "tabler-icons-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const toggleTheme = () => {
    const html = document.documentElement;
    const nextTheme = theme === "light" ? "dark" : "light";
    html.className = nextTheme;
    setTheme(nextTheme);
  };
  return (
    <>
      <button
        aria-label="Toggle theme"
        className="border relative border-zinc-600 rounded-md p-2 active:top-[2px]"
        onClick={toggleTheme}
      >
        {theme === "dark" && <Sun size={16} className="light-icon text-yellow-600" />}
        {theme === "light" && <MoonStars size={16} className="dark-icon text-blue-900" />}
      </button>
    </>
  );
}
