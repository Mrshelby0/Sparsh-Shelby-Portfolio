/*
  Blog.jsx — Cohesive blog section matching the WOW hero style
  - Tailwind-only UI, no external libs
  - Scroll-reveal + stagger animations (IntersectionObserver)
  - Search + tag filter, glass cards, gradient accents
*/

import { useEffect, useMemo, useRef, useState } from "react";

export default function Blog() {
  const posts = [
    {
      title: "Designing delightful UIs with React and Tailwind",
      summary:
        "A practical guide to building clean, scalable, and accessible interfaces using component patterns and utility-first styling.",
      date: "2025-08-01",
      read: "6 min",
      tags: ["React", "TailwindCSS", "UI"],
      href: "#",
    },
    {
      title: "SEO writing that actually helps users (and ranks)",
      summary:
        "From intent research to information architecture: how to write content that is useful, readable, and search-friendly.",
      date: "2025-07-10",
      read: "7 min",
      tags: ["SEO", "Content", "Writing"],
      href: "#",
    },
    {
      title: "Micro‑interactions that make products feel alive",
      summary:
        "Using motion, feedback, and state to guide users — without overwhelming the experience.",
      date: "2025-06-16",
      read: "5 min",
      tags: ["UX", "Animation", "Frontend"],
      href: "#",
    },
    {
      title: "From idea to shipped project: a lightweight workflow",
      summary:
        "Track ideas, scope features, and maintain momentum with a simple repeatable process.",
      date: "2025-05-01",
      read: "4 min",
      tags: ["Product", "Workflow"],
      href: "#",
    },
    {
      title: "React performance tips for real apps",
      summary:
        "Memoization, list virtualization, and practical patterns to keep UIs snappy.",
      date: "2025-04-12",
      read: "8 min",
      tags: ["React", "Performance"],
      href: "#",
    },
    {
      title: "Structuring content that converts",
      summary:
        "How to combine UX microcopy, hierarchy, and clarity to reduce friction and increase action.",
      date: "2025-03-02",
      read: "6 min",
      tags: ["UX", "Content"],
      href: "#",
    },
  ];

  const allTags = useMemo(() => {
    const set = new Set(["All"]);
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [posts]);

  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");

  const sectionRef = useRef(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const q = query.trim().toLowerCase();
  const visible = posts.filter((p) => {
    const tagOk = activeTag === "All" || p.tags.includes(activeTag);
    if (!q) return tagOk;
    const hay = `${p.title} ${p.summary} ${p.tags.join(" ")}`.toLowerCase();
    return tagOk && hay.includes(q);
  });

  return (
    <section id="blog" ref={sectionRef} className="relative isolate overflow-clip bg-slate-950 py-20 text-slate-100 sm:py-28">
      <BackgroundDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
            Blog
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
              Notes on building, writing, and shipping
            </span>
          </h2>
          <p className="mt-4 text-pretty text-slate-300">
            Short, practical posts on frontend development, UX microcopy, and content that connects.
          </p>
        </div>

        {/* Controls */}
        <div className={`mx-auto mt-8 flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`} style={{ transitionDelay: "120ms" }}>
          <div className="relative w-full sm:w-[26rem]">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-white/10 bg-white/5 py-2 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-400 outline-none backdrop-blur transition focus:border-white/20 focus:bg-white/10"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`rounded-full border px-3 py-1 text-xs transition backdrop-blur ${
                  activeTag === t
                    ? "border-fuchsia-400/40 bg-fuchsia-500/10 text-fuchsia-200"
                    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, idx) => (
            <BlogCard key={p.title + idx} post={p} delay={idx * 80 + 160} entered={entered} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            View All Articles
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-white/10"
          >
            Pitch a topic
          </a>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post, delay = 0, entered = false }) {
  const { title, summary, date, read, tags, href } = post;
  const dt = new Date(date);
  const pretty = dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-700 ease-out hover:-translate-y-1 ${
        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-transparent to-indigo-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Cover */}
      <div className="relative h-36 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12)_0%,transparent_40%)]" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] text-slate-300 backdrop-blur">
          <PenIcon className="h-3 w-3" /> Article
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{summary}</p>

        <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
          <span className="inline-flex items-center gap-1"><CalendarIcon className="h-3.5 w-3.5" /> {pretty}</span>
          <span className="inline-flex items-center gap-1"><ClockIcon className="h-3.5 w-3.5" /> {read}</span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <a
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noreferrer" : undefined}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-slate-100 transition hover:bg-white/15"
          >
            Read Article <ExternalIcon className="h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-white/10"
          >
            Share
          </a>
        </div>
      </div>
    </article>
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
function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
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
function PenIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" />
    </svg>
  );
}
