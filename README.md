# sodiq.dev — portfolio

Single-page portfolio for Sodiq Abdulganiy, frontend engineer. "Daylight Terminal" design: a light instrument-panel counterpart to ProLive's dark trading UI.

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · IBM Plex via `next/font`. No component libraries.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Before deploying

All copy, links, and asset paths live in [`lib/content.ts`](lib/content.ts):

1. Fill the `// TODO` demo and repo URLs (ProLive, UniEvent, Finance Dashboard).
2. Replace the placeholder screenshots in `public/` (`prolive.svg`, `unievent.svg`, `finance.svg`) with real captures (1280×800) and update the `screenshot` paths.
3. Update `site.url` once the domain is live.

Deploy target: Vercel.

## Design notes

- Five color tokens per theme, defined in [`app/globals.css`](app/globals.css). Light `signal` is `#0B7A4F` — darkened from the spec's `#0B8F5C` so small green text on the panel passes WCAG AA (4.96:1). Dark theme brightens `signal`/`graphite` to keep AA on `#0F1418`.
- Theme follows the system preference on first visit; the ticker's toggle stores an explicit choice in `localStorage` that overrides it. An inline script in `app/layout.tsx` applies the theme before first paint.
- Motion budget is exactly three: ticker marquee, hero fade-up (once, on load), and hover states. All respect `prefers-reduced-motion`.
- The ticker fetches the last-commit time from the public GitHub API client-side and falls back to `LAST COMMIT — SEE GITHUB` on failure.
# portfolio
