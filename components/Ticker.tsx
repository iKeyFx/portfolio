"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

function relativeTime(from: Date): string {
  const minutes = Math.max(1, Math.round((Date.now() - from.getTime()) / 60_000));
  if (minutes < 60) return `${minutes}M AGO`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}H AGO`;
  return `${Math.round(hours / 24)}D AGO`;
}

export default function Ticker() {
  // Both values render as placeholders on the server and resolve after
  // mount, so the initial client render matches the server HTML.
  const [time, setTime] = useState<string | null>(null);
  const [commit, setCommit] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://api.github.com/users/${site.githubUser}/repos?sort=pushed&per_page=1`,
      { signal: controller.signal },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`${res.status}`))))
      .then((repos: Array<{ pushed_at?: string }>) => {
        const pushed = repos?.[0]?.pushed_at;
        if (pushed) setCommit(relativeTime(new Date(pushed)));
      })
      .catch(() => {
        // Rate-limited or offline — the fallback copy below already covers it.
      });
    return () => controller.abort();
  }, []);

  const items = [
    { text: `${site.handle} ▲ AVAILABLE FOR HIRE`, positive: true },
    { text: `LOCAL TIME ${time ?? "--:--"} WAT`, positive: false },
    { text: commit ? `LAST COMMIT ${commit}` : "LAST COMMIT — SEE GITHUB", positive: false },
    { text: "STACK REACT/NEXT/TS ▲", positive: true },
    { text: "PROLIVE v1.0 LIVE", positive: true },
  ];

  const strip = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item.text} className="flex items-center whitespace-nowrap">
          <span className={item.positive ? "text-signal" : "text-ink"}>{item.text}</span>
          <span className="px-6 text-graphite" aria-hidden>
            ·
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      aria-label="Live status"
      className="ticker sticky top-0 z-50 flex h-[34px] border-b border-ink/15 bg-panel font-mono text-[12px] font-medium uppercase tracking-[0.08em]"
    >
      <div className="h-full min-w-0 flex-1 overflow-hidden">
        <div className="ticker-track h-full items-center">
          {strip(false)}
          {strip(true)}
        </div>
      </div>
      <ThemeToggle />
    </aside>
  );
}
