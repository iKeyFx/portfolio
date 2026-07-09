// Single edit point for every word, link, and asset path on the page.

export const site = {
  name: "Sodiq Abdulganiy",
  handle: "SODIQ.DEV",
  location: "ABJ · WAT",
  title: "Sodiq Abdulganiy — Frontend Engineer",
  description:
    "Frontend engineer with 3 years building precision web interfaces in React, Next.js, and TypeScript. Open to frontend roles.",
  url: "https://sodiq.dev", // TODO: update once the domain is bought
  email: "sodiqabdulganiy65@gmail.com",
  githubUser: "ikeyfx",
  github: "https://github.com/ikeyfx",
  linkedin: "https://www.linkedin.com/in/sodiq-abdulganiy",
};

export const hero = {
  eyebrow: "Frontend engineer",
  headline: "Precision interfaces for products people rely on.",
  subline:
    "3 years building fast, reliable web products with React, Next.js, and TypeScript. Currently open to frontend roles.",
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
};

export const experience: Experience[] = [
  {
    period: "Jun 2025 — Jan 2026",
    role: "Frontend Developer",
    company: "RunElection · Remote",
    summary:
      "Owned the core web application in Next.js, TypeScript, and Tailwind — shipped ahead of schedule with a reusable component architecture that lifted delivery speed ~30% and cut initial load times ~20% via code-splitting and asset optimization.",
  },
  {
    period: "Feb 2025 — Apr 2025",
    role: "Frontend Developer, Intern",
    company: "Terra Learning · Remote",
    summary:
      "Built and maintained modular Vue.js UI components that improved mobile usability ~40%, refactored legacy code to cut page load times, and resolved cross-browser issues while working in an Agile, Git-based team.",
  },
];

export type Project = {
  name: string;
  stack: string[];
  problem: string;
  built: string;
  hardPart: string;
  screenshot: string;
  screenshotAlt: string;
  demoUrl: string;
  codeUrl: string;
};

export const projects: Project[] = [
  {
    name: "ProLive",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Redux Toolkit",
      "Supabase",
      "Lightweight Charts",
    ],
    problem:
      "Trading UIs have to render fast-moving market data without jank, misordered updates, or stale portfolio state.",
    built:
      "A real-time simulated trading and portfolio dashboard — streaming prices, order tickets, P&L, and candlestick charts.",
    hardPart:
      "Keeping Redux state, chart series, and simulated fills consistent at high tick rates without re-render storms.",
    screenshot: "/screenshots/prolive.png",
    screenshotAlt:
      "ProLive market watchlist — live instrument prices, 24-hour change, and trend sparklines",
    demoUrl: "https://pro-live-sdz9.vercel.app",
    codeUrl: "https://github.com/iKeyFx/proLive"
  },
  {
    name: "Finance App",
    stack: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Recharts"],
    problem: "Personal spending is easy to record and hard to read at a glance.",
    built:
      "A full-stack finance dashboard — transactions, budgets, savings pots, and recurring bills, each with search, sorting, filtering, and paginated tables.",
    hardPart:
      "A single overview surfacing live balance, income, expenses, budget utilization, and upcoming bills — backed by Server Actions and secure CRUD against Supabase.",
    screenshot: "/screenshots/finance-app.png",
    screenshotAlt:
      "Finance App overview — balance, income, expenses, savings pots, budgets, and recurring bills",
    demoUrl: "https://finance-app-rose-ten.vercel.app",
    codeUrl: "https://github.com/iKeyFx/finance-App", 
  },
  {
    name: "UniEvent",
    stack: ["Next.js 14", "TypeScript", "Supabase"],
    problem:
      "Manual event check-in queues hundreds of attendees through a single clipboard.",
    built:
      "An event registration and attendance platform with QR check-in — roughly 80% faster than manual sign-in.",
    hardPart:
      "Preventing duplicate check-ins when several scanners hit the same ticket at once — atomic updates keyed on ticket state.",
    screenshot: "/screenshots/unievent.png",
    screenshotAlt:
      "UniEvents — campus event platform with browsable events, categories, and QR tickets",
    demoUrl: "https://unievents.dev/",
    codeUrl: "https://github.com/iKeyFx/UniEvent"
  },
  {
    name: "Quizy Go",
    stack: ["React", "Styled Components"],
    problem:
      "A quiz app has to stay fresh across attempts and give players clear, immediate feedback.",
    built:
      "An interactive quiz platform across Science, Math, Programming, and General Knowledge, with multiple-choice and true/false flows and randomized ordering.",
    hardPart:
      "Real-time score tracking and timed question mechanics with instant end-of-session results, kept smooth and navigable on mobile.",
    screenshot: "/screenshots/quizy-go.png",
    screenshotAlt:
      "Quizy Go landing page — Master Your Knowledge with Quick Quizzes",
    demoUrl: "https://quizy-go.vercel.app",
    codeUrl: "https://github.com/iKeyFx/Quizy-Go"
  },
  {
    name: "Shortly",
    stack: ["Vue.js", "Tailwind CSS", "TinyURL API"],
    problem:
      "Shortening a URL should be instant, validated, and remembered between visits.",
    built:
      "A responsive URL shortener on the TinyURL API, with link history persisted in Local Storage and one-click clipboard copy.",
    hardPart:
      "Client-side validation with contextual error handling, matching the Frontend Mentor design spec across every breakpoint.",
    screenshot: "/screenshots/shortly.png",
    screenshotAlt: "Shortly landing page — URL shortener, more than just shorter links",
    demoUrl: "https://shortly-five.vercel.app",
    codeUrl: "https://github.com/iKeyFx/Shortly"
  },
  {
    name: "Fast Pizza",
    stack: ["React", "Redux", "Tailwind CSS"],
    problem:
      "An ordering flow lives or dies on how fast a user gets from cart to checkout.",
    built:
      "An end-to-end pizza-ordering SPA with cart logic, address autofill, and geolocation to streamline the checkout.",
    hardPart:
      "A mobile-first checkout with real-time form validation feedback, order and cart state managed through Redux.",
    screenshot: "/screenshots/fast-pizza.png",
    screenshotAlt: "Fast React Pizza Co. — order start screen",
    demoUrl: "https://fast-pizza-project.vercel.app",
    codeUrl: "https://github.com/iKeyFx/Fast-Pizza-Project"
  },
];

export const approach = [
  "I've spent the last three years building interfaces for fintech products — screens where a stale price or a misplaced decimal isn't a cosmetic bug, it's money. That environment taught me to treat the frontend as an instrument: state is explicit, edge cases are handled on purpose, and what the user sees is always something the system can defend.",
  "I work typed and tested. TypeScript end to end, components small enough to reason about, and performance treated as a feature — measured with real tooling, not guessed at. If a screen re-renders too often or ships too much JavaScript, that's a bug and it gets fixed like one.",
  "I'm looking for a frontend role on a product team that ships. If you're building something where the interface has to earn trust, I'd like to hear about it.",
];
