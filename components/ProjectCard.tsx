import Image from "next/image";
import type { Project } from "@/lib/content";

const rows = (project: Project): Array<[string, string]> => [
  ["Problem", project.problem],
  ["Built", project.built],
  ["Hard part", project.hardPart],
];

// "#" is a not-yet-known URL placeholder — skip it rather than ship a dead link.
const isReal = (url: string) => url.length > 0 && url !== "#";

export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group flex min-w-0 flex-col border border-ink/15 transition-colors duration-200 hover:border-ink">
      <div className="border-b border-ink/15">
        <Image
          src={project.screenshot}
          alt={project.screenshotAlt}
          width={1280}
          height={800}
          sizes="(min-width: 640px) 50vw, 100vw"
          priority={priority}
          unoptimized={project.screenshot.endsWith(".svg")}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{project.name}</h3>
        <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.08em] text-graphite">
          {project.stack.join(" · ")}
        </p>

        <dl className="mt-6 space-y-4 text-[16px] leading-[1.6]">
          {rows(project).map(([label, value]) => (
            <div key={label} className="grid grid-cols-[92px_1fr] gap-x-3">
              <dt className="pt-[4px] font-mono text-[12px] uppercase tracking-[0.08em] text-graphite">
                {label}
              </dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-auto flex gap-7 pt-7 font-mono text-[13px] font-medium uppercase tracking-[0.08em]">
          {isReal(project.demoUrl) && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-signal"
            >
              Live demo ↗
            </a>
          )}
          {isReal(project.codeUrl) && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline"
            >
              Code ↗
            </a>
          )}
        </p>
      </div>
    </article>
  );
}
