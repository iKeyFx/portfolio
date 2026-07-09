import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-ink/15"
    >
      <div className="mx-auto max-w-[1080px] px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
        <h2
          id="experience-heading"
          className="text-[20px] font-semibold uppercase tracking-[-0.01em] sm:text-[28px]"
        >
          Experience
        </h2>
        <div className="mt-10 space-y-10">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-6"
            >
              <p className="pt-[5px] font-mono text-[12px] uppercase tracking-[0.08em] text-graphite">
                {job.period}
              </p>
              <div className="min-w-0">
                <h3 className="text-[17px] font-semibold tracking-[-0.01em]">
                  {job.role} — {job.company}
                </h3>
                <p className="mt-2 max-w-[560px] text-[16px] leading-[1.6] text-graphite">
                  {job.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
