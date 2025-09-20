/*
  Projects.jsx — WOW-level projects section matching the new Hero style
  - Tailwind-only UI, React state for simple tag filter
  - Injects resume projects with periods, summaries, and tech tags
  - Glass cards, gradient accents, subtle grid background
*/

import { useMemo, useState, useEffect, useRef } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Video Parser",
      period: "Feb 2025",
      summary:
        "Django-based app to upload videos, extract subtitles via ccextractor, and search keywords in transcripts. Celery for async tasks, AWS DynamoDB for storage and querying.",
      tags: ["Django", "Celery", "AWS", "DynamoDB", "Video", "Python"],
      href: "https://github.com/adamofarch/video_parser",
      featured: true,
    },
    {
      title: "Car Showcase Website",
      period: "Nov 2024 – Dec 2024",
      summary:
        "Sleek, responsive platform to display a car collection with specs, high-quality images, and smooth interactions.",
      tags: ["React", "TailwindCSS", "UI", "Frontend"],
      href: "https://github.com/Mrshelby0/car-showcase-website",
    },
    {
      title: "Apple Website Clone",
      period: "Oct 2024 – Nov 2024",
      summary:
        "iPhone-style home screen clone to learn React fundamentals with components, layout, and transitions.",
      tags: ["React", "Learning", "UI"],
      href: "https://github.com/Mrshelby0/Iphone_clone_Reactjs",
    },
    {
      title: "Java Intermediate Projects",
      period: "Oct 2024 – Nov 2024",
      summary:
        "Collection of intermediate Java projects covering OOP, file handling, multithreading, and data structures.",
      tags: ["Java", "OOP", "Multithreading", "Data Structures"],
      href: "https://github.com/Mrshelby0/Java-advance-projects-",
    },
    {
      title: "Resume Generator",
      period: "Oct 2024 – Nov 2024",
      summary:
        "Interactive resume builder with responsive design and real-time preview. Built with HTML, Tailwind CSS, and JavaScript.",
      tags: ["HTML", "CSS", "TailwindCSS", "JavaScript", "Tool"],
      href: "https://github.com/Mrshelby0/Resume_Generator",
    },
    {
      title: "Valorant Esports Assistant",
      period: "Sep 2024",
      summary:
        "Digital assistant for scouting and recruitment using Amazon Bedrock and S3. Fetches data and provides insights on players and teams.",
      tags: ["AWS", "Bedrock", "S3", "Assistant", "AI"],
      href: "https://github.com/Mrshelby0/VALORANT-Esports-Assistant",
    },
    {
      title: "Project Idea Hub",
      period: "Jun 2024 – Sep 2025",
      summary:
        "Final-year project: a platform to discover and shape creative project ideas across levels and domains.",
      tags: ["Platform", "Web", "Ideas"],
      href: "https://github.com/Mrshelby0/college_project",
    },
  ];

  const allTags = useMemo(() => {
    const set = new Set(["All"]);
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [projects]);

  const [active, setActive] = useState("All");
  const sectionRef = useRef(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntered(true);
        obs.disconnect();
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const visible = projects.filter((p) => active === "All" || p.tags.includes(active));

  return (
    <section id="projects" ref={sectionRef} className="relative isolate overflow-clip bg-slate-950 py-20 text-slate-100 sm:py-28">
      <BackgroundDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" />
            Projects
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
              Selected work & experiments
            </span>
          </h2>
          <p className="mt-4 text-pretty text-slate-300">
            A mix of web apps, tools, and learning builds — focusing on clean UIs, performance, and practical value.
          </p>
        </div>

        {/* Filter */}
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-2 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '120ms' }}>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-3 py-1 text-xs transition backdrop-blur ${
                active === t
                  ? "border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, idx) => (
            <ProjectCard key={p.title + idx} project={p} delay={idx * 80 + 160} entered={entered} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Collaborate on a project
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay = 0, entered = false }) {
  const { title, period, summary, tags, href, featured } = project;
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-700 ease-out hover:-translate-y-1 ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${
        featured ? 'lg:col-span-2' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-transparent to-indigo-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="inline-flex items-center gap-1"><CalendarIcon className="h-3.5 w-3.5" /> {period}</span>
        {featured ? (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-amber-500/10 px-2 py-0.5 text-[10px] text-amber-200">
            <StarIcon className="h-3 w-3" /> Featured
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-slate-300">
            <TagIcon className="h-3 w-3" /> Project
          </span>
        )}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{summary}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <a
          href={href}
          target={href?.startsWith("http") ? "_blank" : undefined}
          rel={href?.startsWith("http") ? "noreferrer" : undefined}
          className="group/btn inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-slate-100 transition hover:bg-white/15"
        >
          View Project <ExternalIcon className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-fuchsia-500/40 to-indigo-500/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-cyan-400/40 to-teal-400/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/70" />
    </div>
  );
}

// Icons
function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
function ExternalIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}
function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M8 2v3M16 2v3M3 9h18M5 6h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
function TagIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M20.59 13.41 12 22l-8-8 8.59-8.59A2 2 0 0 1 14 5h6v6a2 2 0 0 1-.59 1.41Z" />
      <circle cx="7.5" cy="14.5" r="1.5" />
    </svg>
  );
}
function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="m12 2 2.5 6.8 7 .6-5.3 4.4 1.7 6.7L12 17.7 6 20.5l1.7-6.7L2.3 9.4l7-.6L12 2Z" />
    </svg>
  );
}
