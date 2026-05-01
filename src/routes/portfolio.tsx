import { useEffect, useState } from "react";

/* ============================ DATA (edit me) ============================ */

const PROFILE = {
  name: "Alex Rivera",
  role: "CS Intern · Frontend Developer",
  location: "Karachi, PK",
  blurb:
    "I build small, careful interfaces and learn out loud. Currently interning at Lime Light TechLead while finishing my CS degree.",
  email: "alex@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

const PROJECTS = [
  {
    title: "Beyond the Veil",
    year: "2026",
    tag: "Parallax · React",
    desc: "A four-chapter parallax scrolling experience with hand-composed cosmic layers, fireflies, and cherry blossoms.",
    link: "/",
  },
  {
    title: "StudyPulse",
    year: "2025",
    tag: "PWA · IndexedDB",
    desc: "Offline-first study tracker with spaced repetition, focus timer, and weekly insights for university students.",
    link: "#",
  },
  {
    title: "ChaiOps",
    year: "2025",
    tag: "Node · CLI",
    desc: "A tiny CLI that times your chai brew, tracks tea-leaf inventory, and roasts you for over-steeping. Genuinely useful, mostly silly.",
    link: "#",
  },
  {
    title: "Karachi Transit Map",
    year: "2024",
    tag: "Leaflet · OpenData",
    desc: "Interactive bus & BRT route explorer using community-maintained GTFS data. My first real-world map project.",
    link: "#",
  },
];

const ACADEMICS = [
  {
    when: "2023 — Present",
    where: "NED University of Engineering & Technology",
    what: "BS Computer Science",
    notes:
      "Coursework: Data Structures, OS, DBMS, Web Engineering. Member of the ACM student chapter. Currently writing my undergrad thesis on offline-first PWAs for low-bandwidth campuses.",
  },
  {
    when: "2021 — 2023",
    where: "Adamjee Govt. Science College",
    what: "Pre-Engineering, A-Grade",
    notes:
      "Captained the inter-college quiz team. First wrote HTML in a dusty computer lab and never recovered.",
  },
  {
    when: "Summer 2024",
    where: "Lime Light TechLead — Internship",
    what: "Frontend Intern",
    notes:
      "Built RWD landing pages, learned parallax scrolling, shipped a small design system. Mentored by senior devs who were patient with my many questions.",
  },
];

const SERVICES = [
  {
    icon: "◐",
    title: "Responsive Web Design",
    desc: "Mobile-first layouts that hold up from 320px to ultrawide, with semantic HTML and real accessibility.",
  },
  {
    icon: "◇",
    title: "React Interfaces",
    desc: "Component-driven UIs with Tailwind, sensible state, and a focus on perceived performance.",
  },
  {
    icon: "✦",
    title: "Micro-interactions",
    desc: "Parallax, scroll-driven animation, and the small moments that make a site feel handmade.",
  },
  {
    icon: "◈",
    title: "Static Site Builds",
    desc: "Fast portfolios, docs, and landing pages — deployed to GitHub Pages or Lovable in an afternoon.",
  },
];

const FAVOURITES = {
  food: ["Karahi", "Ramen (shoyu)", "Aloo paratha", "Mango — only Sindhri"],
  activity: ["Night cycling", "Bookshop crawls", "Pixel art", "Open-source Sundays"],
  sport: ["Cricket (left-arm spin)", "Table tennis", "Long walks count, right?"],
  music: ["Lo-fi while coding", "Nusrat Fateh Ali Khan", "Phoebe Bridgers"],
  tools: ["VS Code + Vim mode", "Figma", "Excalidraw", "A 0.38mm gel pen"],
  reading: ["The Pragmatic Programmer", "Refactoring UI", "Anything by Ursula K. Le Guin"],
};

/* ============================ COMPONENTS ============================ */

export default function PortfolioPage() {
  useEffect(() => {
    document.title = "Alex Rivera — Developer, Student, Coffee Optimist";
    let m = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!m) {
      m = document.createElement("meta");
      m.name = "description";
      document.head.appendChild(m);
    }
    m.content =
      "Personal portfolio of Alex Rivera: projects, academic journey, services, and favourites. Built with responsive web design.";
  }, []);
  return (
    <div className="portfolio-root min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <Academics />
      <Services />
      <Favourites />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Academics", "#academics"],
    ["Services", "#services"],
    ["Favourites", "#favourites"],
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-[var(--ink)]/10 bg-[var(--cream)]/85 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/portfolio" className="font-display text-xl tracking-tight text-[var(--ink)]">
          {PROFILE.name.split(" ")[0]}
          <span className="text-[var(--accent)]">.</span>
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-xs uppercase tracking-widest text-[var(--ink)]/70 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-[var(--accent)]">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${PROFILE.email}`}
          className="rounded-full border border-[var(--ink)] px-4 py-2 font-mono text-xs uppercase tracking-widest text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-[var(--cream)]"
        >
          Say hi
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* gradient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.78 0.16 45), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-32">
        <div className="md:col-span-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--ink)]/60">
            {PROFILE.location} · Available for summer 2026
          </p>
          <h1 className="font-display mt-5 text-5xl leading-[0.95] text-[var(--ink)] sm:text-7xl md:text-8xl">
            Hi, I'm{" "}
            <span className="italic text-[var(--accent)]">{PROFILE.name.split(" ")[0]}</span>.
            <br />
            I make the web feel <span className="italic">smaller</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--ink)]/80">
            {PROFILE.blurb}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--ink)] px-6 py-3 font-mono text-xs uppercase tracking-widest text-[var(--cream)] transition hover:bg-[var(--accent)]"
            >
              See projects →
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--ink)]/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-[var(--ink)] transition hover:border-[var(--ink)]"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--ink)]/30 px-6 py-3 font-mono text-xs uppercase tracking-widest text-[var(--ink)] transition hover:border-[var(--ink)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="md:col-span-4">
          <div className="rounded-3xl border border-[var(--ink)]/15 bg-[var(--paper)] p-6 shadow-[0_30px_60px_-30px_oklch(0.3_0.05_60/0.3)]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink)]/50">
              Currently
            </p>
            <ul className="mt-3 space-y-3 text-sm text-[var(--ink)]/85">
              <li>
                <span className="text-[var(--accent)]">→</span> Interning at Lime Light TechLead
              </li>
              <li>
                <span className="text-[var(--accent)]">→</span> Final year, BS Computer Science
              </li>
              <li>
                <span className="text-[var(--accent)]">→</span> Building tiny tools, mostly in React
              </li>
              <li>
                <span className="text-[var(--accent)]">→</span> Reading "Refactoring UI" again
              </li>
            </ul>
            <div className="mt-6 border-t border-[var(--ink)]/10 pt-4 font-mono text-[11px] text-[var(--ink)]/60">
              {PROFILE.role}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-[var(--ink)]/10 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              {eyebrow}
            </p>
            <h2 className="font-display mt-3 text-4xl leading-tight text-[var(--ink)] sm:text-5xl md:text-6xl">
              {title}
            </h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="01 — Work" title="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group relative flex flex-col justify-between rounded-3xl border border-[var(--ink)]/15 bg-[var(--paper)] p-7 transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_25px_50px_-25px_oklch(0.55_0.18_45/0.5)]"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[var(--ink)]/55">
                <span>{p.tag}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="font-display mt-4 text-2xl text-[var(--ink)] sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/75">{p.desc}</p>
            </div>
            <div className="mt-6 font-mono text-xs uppercase tracking-widest text-[var(--ink)]/50 transition group-hover:text-[var(--accent)]">
              View →
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Academics() {
  return (
    <Section id="academics" eyebrow="02 — Education" title="Where I've been learning">
      <ol className="relative space-y-10 border-l border-[var(--ink)]/15 pl-6 md:pl-10">
        {ACADEMICS.map((a) => (
          <li key={a.where} className="relative">
            <span className="absolute -left-[33px] top-2 h-3 w-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--cream)] md:-left-[45px]" />
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--ink)]/55">
              {a.when}
            </p>
            <h3 className="font-display mt-2 text-2xl text-[var(--ink)] sm:text-3xl">{a.where}</h3>
            <p className="mt-1 text-sm font-medium text-[var(--accent)]">{a.what}</p>
            <p className="mt-3 max-w-2xl text-[var(--ink)]/75">{a.notes}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" eyebrow="03 — What I do" title="Services & strengths">
      <div className="grid gap-px overflow-hidden rounded-3xl border border-[var(--ink)]/15 bg-[var(--ink)]/15 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="bg-[var(--paper)] p-7 transition hover:bg-[var(--cream)]"
          >
            <div className="text-3xl text-[var(--accent)]">{s.icon}</div>
            <h3 className="font-display mt-4 text-2xl text-[var(--ink)]">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]/75">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Favourites() {
  const groups: [string, string[]][] = [
    ["Food", FAVOURITES.food],
    ["Activity", FAVOURITES.activity],
    ["Sport", FAVOURITES.sport],
    ["Music", FAVOURITES.music],
    ["Tools", FAVOURITES.tools],
    ["Reading", FAVOURITES.reading],
  ];
  return (
    <Section id="favourites" eyebrow="04 — Off the clock" title="A few of my favourite things">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([label, items]) => (
          <div
            key={label}
            className="rounded-3xl border border-[var(--ink)]/15 bg-[var(--paper)] p-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)]">
              {label}
            </p>
            <ul className="mt-4 space-y-2 text-[var(--ink)]/85">
              {items.map((it) => (
                <li key={it} className="flex gap-3">
                  <span className="text-[var(--ink)]/40">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--ink)]/10 bg-[var(--ink)] px-5 py-16 text-[var(--cream)] md:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--cream)]/60">
            05 — Let's talk
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
            Got a small idea worth building?
          </h2>
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-6 inline-block font-display text-2xl italic text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {PROFILE.email}
          </a>
        </div>
        <div className="flex flex-col justify-end gap-4 font-mono text-xs uppercase tracking-widest text-[var(--cream)]/70 md:items-end">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            GitHub ↗
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            LinkedIn ↗
          </a>
          <Link to="/" className="hover:text-[var(--accent)]">
            ← Back to parallax
          </Link>
          <p className="mt-6 text-[var(--cream)]/40">
            © {new Date().getFullYear()} {PROFILE.name}. Built with care, RWD, and too much chai.
          </p>
        </div>
      </div>
    </footer>
  );
}
