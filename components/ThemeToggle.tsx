"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

// Hairline-stroke glyphs sized and weighted to match the ticker's mono rules
// and 1px borders — not a stock icon-set import.
function SunGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
      <circle cx="6.5" cy="6.5" r="2.75" stroke="currentColor" strokeWidth="1.1" />
      <path
        d="M6.5 0.5V2M6.5 11V12.5M12.5 6.5H11M2 6.5H0.5M10.65 2.35L9.6 3.4M3.4 9.6L2.35 10.65M10.65 10.65L9.6 9.6M3.4 3.4L2.35 2.35"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
      <path
        d="M11.5 8.1A5 5 0 1 1 5.4 1.5 3.9 3.9 0 0 0 11.5 8.1Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  // null until mounted — the server can't know the visitor's theme.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

    // Keep following the OS while the visitor hasn't made an explicit choice.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const followSystem = (e: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {}
      if (stored) return;
      const next: Theme = e.matches ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    mq.addEventListener("change", followSystem);
    return () => mq.removeEventListener("change", followSystem);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-full w-11 shrink-0 items-center justify-center border-l border-ink/15 text-graphite transition-colors duration-200 hover:text-signal"
    >
      {theme === "dark" ? <MoonGlyph /> : theme === "light" ? <SunGlyph /> : null}
    </button>
  );
}
