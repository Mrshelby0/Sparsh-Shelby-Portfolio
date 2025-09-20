/*
  WOW-level Hero for portfolio
  - Cursor spotlight gradient + animated gradient blobs
  - Orbiting tech badges, impact stats, skill chips
  - Social/contact row with mail and phone
  - Glass card with resume highlights
  - Tailwind-only, no external libs
  - Scroll-reveal + stagger animations (IntersectionObserver)
*/

import { useEffect, useRef, useState } from "react";

export default function Hero({
  name = "Sparsh Sharma",
  title = "Front‑End Developer & Content Writer",
  tagline = "React • Tailwind CSS • Django • Java • SEO-friendly content",
  ctas = {
    primary: { label: "View Projects", href: "#projects" },
    secondary: { label: "Email Me", href: "mailto:sparshsharma1409@gmail.com" },
  },
  socials = [
    { label: "GitHub", href: "https://github.com/Mrshelby0", icon: GitHubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sparsh-sharma-2805bb291/", icon: LinkedInIcon },
    { label: "HackerRank", href: "https://www.hackerrank.com/profile/sparshsharma1409", icon: LeetCodeIcon },
    { label: "Email", href: "mailto:sparshsharma1409@gmail.com", icon: MailIcon },
    { label: "Call", href: "tel:8130647877", icon: PhoneIcon },
  ],
  highlights = [
    { value: "10+", label: "Projects launched" },
    { value: "200%", label: "Traffic growth via SEO" },
    { value: "Top 5%", label: "of 150 students" },
    { value: "7.57", label: "CGPA" },
  ],
  skills = [
    "React",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Django",
    "Java",
    "Node.js",
    "SEO",
    "UX Microcopy",
  ],
  experiences = [
    { label: "Upwork", desc: "Freelancer — Front‑end & Content" },
    { label: "Foodsure", desc: "Content Writer" },
    { label: "Collegehai", desc: "Content Writer (Full‑Time)" },
  ],
}) {
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef(null);

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

  function onMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x, y });
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-clip bg-slate-950 text-slate-100"
      onMouseMove={onMove}
    >
      <BackgroundDecor x={spot.x} y={spot.y} />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-y-10 px-6 pt-28 md:grid-cols-2 md:gap-10 md:pt-32 lg:px-10">
        {/* Left: Intro */}
        <div className={`transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {/* Availability & quick tags */}
          <div className={`mb-5 flex flex-wrap items-center gap-2 transition-all duration-700 ease-out`} style={{ transitionDelay: entered ? "80ms" : "0ms" }}>
            <Pill className="border-emerald-400/30 text-emerald-300">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Open to freelance & full‑time
            </Pill>
            <Pill>Remote friendly</Pill>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <p className="mt-3 text-lg text-slate-300 sm:text-xl">{title}</p>
          <p className="mt-2 max-w-xl text-base text-slate-400">{tagline}</p>

          {/* Skill chips */}
          <div className="mt-5 flex max-w-2xl flex-wrap gap-2">
            {skills.map((s, i) => (
              <span
                key={s}
                className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                style={{ transitionDelay: `${i * 40 + 140}ms` }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className={`mt-7 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`} style={{ transitionDelay: "220ms" }}>
            <a
              href={ctas.primary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(0,0,0,0.0)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {ctas.primary.label}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={ctas.secondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-white/10"
            >
              {ctas.secondary.label}
            </a>
            <a
              href="src/assets/Sparsh_Sharma_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-6 py-3 text-sm font-semibold text-fuchsia-200 hover:bg-fuchsia-500/15"
            >
              Download Resume
            </a>
          </div>

          {/* Socials */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-300">
            {socials.map(({ label, href, icon: Icon }, i) => (
              <a
                key={label}
                href={href}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition-all duration-700 ease-out hover:text-white ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                style={{ transitionDelay: `${i * 60 + 260}ms` }}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:block">{label}</span>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg sm:grid-cols-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                style={{ transitionDelay: `${i * 80 + 320}ms` }}
              >
                <div className="bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
                  {h.value}
                </div>
                <div className="mt-1 text-[11px] text-slate-400">{h.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Orbit + Glass card */}
        <div
          className={`relative mx-auto flex w-full max-w-xl items-center justify-center transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Tech Orbit */}
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur" />
            {/* rotating ring */}
            <div className="absolute inset-0 animate-[spin_22s_linear_infinite]">
              <OrbitIcon className="-top-2 left-1/2 h-8 w-8 -translate-x-1/2" Icon={ReactLogo} />
              <OrbitIcon className="top-1/2 -right-2 h-8 w-8 -translate-y-1/2" Icon={TailwindLogo} />
              <OrbitIcon className="-bottom-2 left-1/2 h-7 w-7 -translate-x-1/2" Icon={DjangoLogo} />
              <OrbitIcon className="top-1/2 -left-2 h-8 w-8 -translate-y-1/2" Icon={JavaLogo} />
            </div>
            {/* inner ring */}
            <div className="absolute inset-7 animate-[spin_18s_linear_reverse_infinite]">
              <OrbitIcon className="-top-1 left-1/2 h-6 w-6 -translate-x-1/2" Icon={NodeLogo} />
              <OrbitIcon className="-left-1 top-1/2 h-6 w-6 -translate-y-1/2" Icon={SeoIcon} />
            </div>

            {/* Center avatar */}
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-gradient-to-br from-slate-800 to-slate-900 p-1 shadow-inner sm:h-32 sm:w-32">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_40%)] text-2xl font-bold">
               SS
              </div>
            </div>
          </div>

          {/* Glass highlight card */}
          <div className="pointer-events-auto absolute -bottom-10 right-0 w-[min(92%,22rem)] rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:-bottom-12 sm:right-2">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-transparent to-indigo-500/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/90" />
              Resume highlights
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-400" /> Increased website traffic by 200% through SEO.</li>
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-400" /> Ranked top 5% in course of 150 students.</li>
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-400" /> 10+ personal and academic projects launched.</li>
              <li className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-400" /> End‑to‑end content strategy across platforms.</li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {experiences.map((e) => (
                <span key={e.label} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">
                  {e.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className={`col-span-full mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 md:mt-2 transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`} style={{ transitionDelay: "380ms" }}>
          <MouseIcon className="h-4 w-4" />
          <span>Scroll to explore projects and work</span>
        </div>
      </div>
    </section>
  );
}

function Pill({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur ${className}`}>
      {children}
    </span>
  );
}

function OrbitIcon({ className = "", Icon }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="rounded-xl border border-white/10 bg-white/10 p-2 backdrop-blur">
        <Icon className="h-4 w-4 text-white" />
      </div>
    </div>
  );
}

function BackgroundDecor({ x = 50, y = 50 }) {
  const spotlight = {
    background: `radial-gradient(600px 300px at ${x}% ${y}%, rgba(99,102,241,0.25), transparent 60%)`,
  };
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Spotlight follows cursor */}
      <div className="absolute inset-0" style={spotlight} />

      {/* Gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/40 to-indigo-500/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-cyan-400/40 to-teal-400/30 blur-3xl" />

      {/* Subtle grid + vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/70" />
    </div>
  );
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

function MouseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden {...props}>
      <rect x="8" y="3" width="8" height="18" rx="4" />
      <path d="M12 7v4" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.6-1.5-2-1.5-2-1.2-.8.1-.8.1-.8 1.3.1 2 .1 3 1.6 1.2 2.1 3.3 1.5 4.1 1.1.1-.9.5-1.5.9-1.9-2.7-.3-5.5-1.4-5.5-6a4.6 4.6 0 0 1 1.2-3.2 4.2 4.2 0 0 1 .1-3.1s1-.3 3.3 1.2a11.7 11.7 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.5 1 .4 2.1.1 3.1a4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .5.4 1 1.3 1 2.6v3.8c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 8.98h4v12H3zM9 8.98h3.8v1.7h.1c.5-.9 1.8-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.7v6.4h-4v-5.7c0-1.4 0-3.2-2-3.2-2 0-2.3 1.5-2.3 3.1v5.8H9z" />
    </svg>
  );
}

function LeetCodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.7 3.6a1.3 1.3 0 1 1 1.8 1.8l-6.8 6.8 6.9 6.9a1.3 1.3 0 0 1-1.8 1.8l-7.8-7.8a1.3 1.3 0 0 1 0-1.8l7.7-7.7Z" />
      <path d="M19.7 9.5a1.9 1.9 0 1 1 0 3.8h-6.1a1.9 1.9 0 1 1 0-3.8h6.1Z" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.77.65 2.6a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.57-.2a2 2 0 0 1 2.11.45c.83.31 1.7.53 2.6.65A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// Tech brand mini icons
function ReactLogo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden {...props}>
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    </svg>
  );
}
function TailwindLogo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 6c-2.7 0-4.4 1.4-5 4 1-1.3 2.1-1.8 3.3-1.5.7.2 1.2.7 1.8 1.3.8.9 1.7 1.8 3.7 1.8 2.7 0 4.4-1.4 5-4-1 1.3-2.1 1.8-3.3 1.5-.7-.2-1.2-.7-1.8-1.3C14.9 6.9 14 6 12 6Zm-5 8c-2.7 0-4.4 1.4-5 4 1-1.3 2.1-1.8 3.3-1.5.7.2 1.2.7 1.8 1.3.8.9 1.7 1.8 3.7 1.8 2.7 0 4.4-1.4 5-4-1 1.3-2.1 1.8-3.3 1.5-.7-.2-1.2-.7-1.8-1.3-.8-.9-1.7-1.8-3.7-1.8Z" />
    </svg>
  );
}
function DjangoLogo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M9 3h3v15.5c0 2.8-1.7 3.9-4.5 3.9-.9 0-1.9-.1-2.5-.4v-2.5c.6.2 1.3.3 2 .3 1.1 0 1.9-.5 1.9-1.7V3Zm6 4.9c.7-.6 1.6-.9 2.6-.9 3 0 4.4 2 4.4 5.2v8.6h-3.1V12c0-1.7-.6-2.6-2-2.6-1.1 0-1.9.7-1.9 2.5v8.9H12V7.2h3V7.9Z" />
    </svg>
  );
}
function JavaLogo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12.1 2.3c2.4 2.2-2.5 3.2-.8 5.6 0 0 1-1.1 2.4-1.5 1.7-.6 2.6-.2 3.6-1.3-2.7-.2-3.7-1.8-5.2-2.8Z" />
      <path d="M7 17.3c2.7.6 9.4.5 10.3-1.4.8-1.7-2.1-1.9-2.1-1.9 1.6 1.2-5.7 2-8.2 1.4Zm-.5 2.7c3.4 1 12.2.8 13.5-1.6 1.1-2.2-2.9-2.5-2.9-2.5 2.3 1.7-7.5 2.7-10.6 2.1Z" />
    </svg>
  );
}
function NodeLogo(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 1.7 3 6.8v10.4l9 5.1 9-5.1V6.8L12 1.7Zm6.2 14.7-6.2 3.5-6.2-3.5V7.6L12 4.2l6.2 3.4v8.8Z" />
    </svg>
  );
}
function SeoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      <path d="M9 11h4" />
      <path d="M11 9v4" />
    </svg>
  );
}
