/*
  Contact.jsx — Cohesive contact section matching the WOW hero style
  - Tailwind-only UI, no external libs
  - Scroll-reveal + stagger animations (IntersectionObserver)
  - Mailto-based form + quick contact actions
  - Resume trust: achievements, skills, experience, certifications
*/

import { useEffect, useRef, useState } from "react";

export default function Contact() {
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

  const achievements = [
    "Increased website traffic by 200% through SEO strategies.",
    "Ranked top 5% in a web development course of 150 students.",
    "Successfully launched 10+ personal and academic projects.",
    "Executed end‑to‑end content strategy across platforms.",
  ];

  const skills = [
    "React",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
    "Django",
    "Java",
    "Node.js",
    "SEO",
    "UX Microcopy",
  ];

  const experiences = [
    { label: "Upwork", desc: "Freelancer — Front‑end & Content" },
    { label: "Foodsure", desc: "Content Writer" },
    { label: "Collegehai", desc: "Content Writer (Full‑Time)" },
  ];

  const certs = [
    "Software Engineer",
    "Apna College — DSA with Java",
    "Neo4j Graph Data Science Certification",
    "Neo4j Certified Professional",
    "Cutshort Certified React Native — Advanced",
  ];

  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") || "";
    const email = fd.get("email") || "";
    const subject = fd.get("subject") || "Portfolio Inquiry";
    const message = fd.get("message") || "";

    const body = `Hi Sparsh,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0A— ${encodeURIComponent(
      name
    )}%0D%0A${encodeURIComponent(email)}`;

    const mailto = `mailto:sparshsharma1409@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
    window.location.href = mailto;
  }

  const socials = [
    { label: "GitHub", href: "#", icon: GitHubIcon },
    { label: "LinkedIn", href: "#", icon: LinkedInIcon },
    { label: "LeetCode", href: "https://leetcode.com/", icon: LeetCodeIcon },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative isolate overflow-clip bg-slate-950 py-20 text-slate-100 sm:py-28">
      <BackgroundDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Contact
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
              Let's build something great
            </span>
          </h2>
          <p className="mt-4 text-pretty text-slate-300">
            Front‑end developer & content writer. Based remote‑friendly. Available for freelance and full‑time roles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Form */}
          <div className={`md:col-span-3 transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "120ms" }}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center gap-2 text-sm text-slate-300">
                <MailIcon className="h-4 w-4" /> Send a message
              </div>
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-xs text-slate-400">Name</label>
                  <input name="name" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none backdrop-blur focus:border-white/20" placeholder="Your name" />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-xs text-slate-400">Email</label>
                  <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none backdrop-blur focus:border-white/20" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs text-slate-400">Subject</label>
                  <input name="subject" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none backdrop-blur focus:border-white/20" placeholder="Project, collaboration, or role" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs text-slate-400">Message</label>
                  <textarea name="message" rows={5} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none backdrop-blur focus:border-white/20" placeholder="Describe what you need help with..." />
                </div>
                <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-3">
                  <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                    Send Message
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <a href="mailto:sparshsharma1409@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-white/10">
                    <MailIcon className="h-4 w-4" /> Email directly
                  </a>
                  <a href="tel:8130647877" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-white/10">
                    <PhoneIcon className="h-4 w-4" /> Call
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Trust / Resume */}
          <div className={`md:col-span-2 transition-all duration-700 ease-out ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: "160ms" }}>
            {/* Achievements */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-300"><TrophyIcon className="h-4 w-4" /> Achievements</div>
              <ul className="space-y-2 text-sm text-slate-300">
                {achievements.map((a, i) => (
                  <li key={i} className={`flex items-start gap-2 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`} style={{ transitionDelay: `${i * 60 + 180}ms` }}>
                    <CheckIcon className="mt-1 h-4 w-4 text-emerald-400" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
              <div className="mb-2 flex items-center gap-2 text-sm text-slate-300"><SparkleIcon className="h-4 w-4" /> Skills</div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <span key={s} className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`} style={{ transitionDelay: `${i * 30 + 200}ms` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience & Certifications */}
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-300"><BriefcaseIcon className="h-4 w-4" /> Experience</div>
                <div className="flex flex-wrap gap-2">
                  {experiences.map((e, i) => (
                    <span key={e.label} className={`rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`} style={{ transitionDelay: `${i * 40 + 200}ms` }}>
                      {e.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-300"><CertificateIcon className="h-4 w-4" /> Certifications</div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {certs.map((c, i) => (
                    <li key={c} className={`flex items-start gap-2 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`} style={{ transitionDelay: `${i * 40 + 220}ms` }}>
                      <BadgeIcon className="mt-0.5 h-4 w-4 text-indigo-300" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socials.map(({ label, href, icon: Icon }, i) => (
                <a
                  key={label}
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-all duration-700 ease-out hover:text-white ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
                  style={{ transitionDelay: `${i * 50 + 240}ms` }}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:block">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '260ms' }}>
          <a
            href="/resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Download Full Resume
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-white/10"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </section>
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
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function TrophyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M8 21h8" />
      <path d="M7 4h10v5a5 5 0 1 1-10 0V4Z" />
      <path d="M5 9a3 3 0 0 1-3-3V4h5v5H5Zm14 0a3 3 0 0 0 3-3V4h-5v5h2Z" />
    </svg>
  );
}
function SparkleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2l2.2 4.8L19 9l-4.8 2.2L12 16l-2.2-4.8L5 9l4.8-2.2L12 2Zm7 10 1.4 3 3 1.4-3 1.4L19 21l-1.4-3-3-1.4 3-1.4L19 12Z" />
    </svg>
  );
}
function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M10 6h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3V8a2 2 0 0 1 2-2Z" />
      <path d="M12 12v4" />
    </svg>
  );
}
function CertificateIcon(props) {
  return (
    <svg viewBox=" 0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 4h16v12H4z" />
      <path d="m8 16 4 4 4-4" />
    </svg>
  );
}
function BadgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2 2 7v10l10 5 10-5V7L12 2Zm0 4.7 6 3v6.6l-6 3-6-3V9.7l6-3Z" />
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
