import { hero, site } from "@/lib/content";

export default function Hero() {
  return (
    <header className="mx-auto w-full max-w-[1080px] px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-24 lg:pb-32">
      <div className="fade-up flex items-baseline justify-between gap-4 font-mono text-[13px] uppercase tracking-[0.08em]">
        <span className="font-medium">{site.name}</span>
        <span className="text-graphite">{site.location}</span>
      </div>

      <p
        className="fade-up mt-16 font-mono text-[13px] uppercase tracking-[0.08em] text-graphite sm:mt-24"
        style={{ animationDelay: "60ms" }}
      >
        {hero.eyebrow}
      </p>

      <h1
        className="fade-up mt-5 max-w-[820px] text-[clamp(2.25rem,5vw+1rem,4rem)] font-semibold leading-[1.05] tracking-[-0.02em]"
        style={{ animationDelay: "120ms" }}
      >
        {hero.headline}
      </h1>

      <p
        className="fade-up mt-7 max-w-[560px] text-[17px] leading-[1.6] text-graphite"
        style={{ animationDelay: "180ms" }}
      >
        {hero.subline}
      </p>

      <nav
        aria-label="Primary"
        className="fade-up mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-4 font-mono text-[13px] font-medium uppercase tracking-[0.08em]"
        style={{ animationDelay: "240ms" }}
      >
        <a href={`mailto:${site.email}`} className="link-underline text-signal">
          Email ↗
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="link-underline"
        >
          GitHub
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="link-underline"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
}
