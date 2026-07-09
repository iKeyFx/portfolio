import { approach } from "@/lib/content";

export default function Approach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="border-t border-ink/15"
    >
      <div className="mx-auto max-w-[1080px] px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
        <h2
          id="approach-heading"
          className="text-[20px] font-semibold uppercase tracking-[-0.01em] sm:text-[28px]"
        >
          Approach
        </h2>
        <div className="mt-8 max-w-[640px] space-y-6 text-[17px] leading-[1.6]">
          {approach.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
