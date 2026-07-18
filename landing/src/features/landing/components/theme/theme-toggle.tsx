"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));

    if (!window.localStorage.getItem("prosperify-theme")) {
      const isDark = document.documentElement.classList.contains("dark");
      window.localStorage.setItem(
        "prosperify-theme",
        isDark ? "dark" : "light",
      );
    }
  }, []);

  useEffect(() => {
    const handleThemeChange = () => {
      setDark(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("prosperify-theme-change", handleThemeChange);
    return () =>
      window.removeEventListener("prosperify-theme-change", handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("prosperify-theme", next ? "dark" : "light");
    setDark(next);
    window.dispatchEvent(
      new CustomEvent("prosperify-theme-change", { detail: { dark: next } }),
    );
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center border border-neutral-200 bg-white/85 text-neutral-700 shadow-sm backdrop-blur transition-colors hover:border-orange-200 hover:text-orange-600 dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-neutral-200"
      aria-label={dark ? "Use light mode" : "Use dark mode"}
    >
      {mounted && dark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
