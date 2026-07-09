import { projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-ink/15">
      <div className="mx-auto max-w-[1080px] px-5 py-16 sm:px-8 sm:py-24 lg:py-32">
        <h2
          id="projects-heading"
          className="text-[20px] font-semibold uppercase tracking-[-0.01em] sm:text-[28px]"
        >
          Projects
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
