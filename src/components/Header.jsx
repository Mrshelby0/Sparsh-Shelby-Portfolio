/*
  Header.jsx — Sticky glass navbar matching the WOW hero style
  - Tailwind-only UI, no external libs
  - Active section highlight via IntersectionObserver
  - Scroll progress bar + mobile menu
*/

import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const links = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "blog", label: "Blog" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Active section observer
    const observers = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [links]);

  useEffect(() => {
    // Scroll progress bar
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      const pct = height > 0 ? Math.min(100, Math.max(0, (scrolled / height) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (id) =>
    `relative rounded-full px-3 py-2 text-sm transition-colors ${
      active === id ? "text-white" : "text-slate-300 hover:text-white"
    }`;

  const underline = (id) => (
    <span
      className={`pointer-events-none absolute inset-x-1 -bottom-0.5 h-px rounded-full bg-gradient-to-r from-indigo-400/0 via-indigo-400/70 to-fuchsia-400/0 transition-opacity ${
        active === id ? "opacity-100" : "opacity-0"
      }`}
    />
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Progress bar */}
      <div
        className="h-0.5 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"
        style={{ width: `${progress}%` }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-3">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-900/40 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          {/* Brand */}
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white">
              SS
            </div>
            <span className="text-sm font-semibold text-slate-200">
              Sparsh Sharma
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={navLinkClass(id)}>
                {label}
                {underline(id)}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="mailto:sparshsharma1409@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold text-fuchsia-200 hover:bg-fuchsia-500/15"
            >
              <MailIcon className="h-4 w-4" /> Hire me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`md:hidden transition-all duration-300 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur">
            <nav className="grid gap-1">
              {links.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`rounded-md px-3 py-2 text-sm ${active === id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="mt-3">
              <a
                href="mailto:sparshsharma1409@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold text-fuchsia-200 hover:bg-fuchsia-500/15"
              >
                <MailIcon className="h-4 w-4" /> Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
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
