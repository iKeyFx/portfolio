import { site } from "@/lib/content";

const links = [
  { label: site.email, href: `mailto:${site.email}`, external: false },
  { label: "github.com/ikeyfx", href: site.github, external: true },
  { label: "linkedin.com/in/sodiq-abdulganiy", href: site.linkedin, external: true },
];

export default function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="border-t border-ink/15">
      <div className="mx-auto max-w-[1080px] px-5 py-16 sm:px-8 sm:py-24">
        <h2
          id="contact-heading"
          className="text-[20px] font-semibold uppercase tracking-[-0.01em] sm:text-[28px]"
        >
          Contact
        </h2>
        <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-[13px]">
          {links.map((link, index) => (
            <span key={link.href} className="flex items-baseline gap-x-3">
              {index > 0 && (
                <span className="text-graphite" aria-hidden>
                  ·
                </span>
              )}
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="link-underline transition-colors duration-200 hover:text-signal"
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
