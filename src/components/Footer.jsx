/*
  Footer.jsx — Cohesive footer matching the WOW hero style
  - Tailwind-only UI, no external libs
  - Social icons, quick nav, contact details
*/

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "GitHub", href: "https://github.com/Mrshelby0", icon: GitHubIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sparsh-sharma-2805bb291/", icon: LinkedInIcon },
    { label: "HackerRank", href: "https://www.hackerrank.com/profile/sparshsharma1409", icon: LeetCodeIcon },
  ];
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="relative isolate overflow-clip bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px]" />
      <div className="absolute -top-28 -left-28 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/40 to-indigo-500/30 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-400/40 to-teal-400/30 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold">
                SS
              </div>
              <div className="text-sm font-semibold text-slate-200">Sparsh Sharma</div>
            </a>
            <p className="mt-3 max-w-sm text-sm text-slate-300">
              Front‑end developer & content writer crafting clean UIs and content that connects.
            </p>
            <div className="mt-4 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:block">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div className="sm:mx-auto">
            <div className="text-xs uppercase tracking-wide text-slate-400">Navigate</div>
            <nav className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {links.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className="rounded-md px-2 py-1 text-slate-300 hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs uppercase tracking-wide text-slate-400">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><MailIcon className="h-4 w-4" /> sparshsharma1409@gmail.com</li>
              <li className="flex items-center gap-2"><PhoneIcon className="h-4 w-4" /> +91 81306 47877</li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a href="SparshResume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-xs font-semibold text-fuchsia-200 hover:bg-fuchsia-500/15">
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <div>© {year} Sparsh Sharma. All rights reserved.</div>
          <div className="flex items-center gap-3">
          </div>
        </div>
      </div>
    </footer>
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
