/*
  About.jsx — WOW-level section matching the new Hero style
  - Tailwind-only UI, no external libs
  - Injects resume details: summary, experience, achievements, skills, certifications
  - Glass cards, gradient accents, subtle grid background
*/

import { useEffect, useRef, useState } from "react";
import HackerRankImg from "../assets/Certi/HackerRank.png";
import JavaDSAImg from "../assets/Certi/JavaDSA.png";
import Neo4jGDSImg from "../assets/Certi/Neo4jGDS.png";
import Neo4jCPImg from "../assets/Certi/Neo4jCP.png";
import ReactNativeImg from "../assets/Certi/ReactNative.png";

export default function About() {
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
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const [selectedCert, setSelectedCert] = useState(null);

  const summary = `Front-end developer and content writer with expertise in React, Tailwind CSS, HTML, CSS, Django and Java integration. Skilled in designing responsive, user-focused interfaces and producing clear, engaging, and SEO-friendly content, including blogs, technical guides, product copy, and UX microcopy. Proven track record of delivering projects such as e-commerce websites and a resume generator, combining creativity and functionality to build polished digital solutions that communicate effectively and drive results.`;

  const experiences = [
    {
      org: "Collagehai",
      role: "Junior Content Writer",
      period: "Aug 2025 – Oct 2025",
      bullets: [
        "Created SEO-optimized blogs, news stories, and web content for student audience",
        "Enhanced readability and engagement through strategic content structuring",
        "Collaborated with editorial team to maintain brand voice consistency",
        "Delivered high-quality content under tight deadlines"
      ],
    },
    {
      org: "Foodsure / Legal4sure / Foodsure Machine",
      role: "Content Writer and Social Media Manager",
      period: "June 2025 – Aug 2025",
      bullets: [
        "Developed LinkedIn content strategy across 3 brands including articles and case studies",
        "Generated SEO-optimized blog content for increased traffic and lead generation",
        "Produced multimedia content for YouTube and Instagram platforms",
        "Optimized Google My Business profiles for improved local search visibility",
        "Managed executive LinkedIn presence for brand development"
      ],
    },
    {
      org: "Neo4j",
      role: "Software Development Internship",
      period: "Nov 2024 – Dec 2024",
      bullets: [
        "Developed a React-based resume generator using Neo4j for data storage",
        "Implemented user authentication and profile management features",
        "Designed responsive UI with Tailwind CSS for optimal user experience",
        "Integrated Neo4j database for efficient data retrieval and storage"
      ],
    },
    {
      org:"Django India, PyDelhi, AWS Cloud Clubs, PyEuro, Virtual",
      role: "Open Source Contributor and Volunteer",
      period: "Apr 2023 - Present",
      bullets: [ 
  "Managed community content, social media updates, and event coverage for major tech communities.",
  "Contributed to open source projects by fixing bugs, adding features, and improving documentation.",
  "Assisted in organizing virtual events, webinars, and meetups to foster community engagement.",
  "Collaborated with developers and community members to enhance project visibility and impact.",
  "Interviewed industry experts and produced blogs and posts that drove engagement.",
  "Invited by Microsoft to cover a Grafana event, producing high-engagement content and interviews"
      ],
    },
    {
      org: "Freelance (Upwork)",
      role: "Front-End Developer | Freelance / Project-Based Work",
      period: "Oct 2023 - Present",
      bullets: [
        "Lead content strategy and creation for company growth initiatives",
        "Produce SEO-optimized educational content for student audience",
        "Manage editorial calendar and content distribution",
        "Drive engagement through targeted content campaigns"
      ],
    },
  ];

  const achievements = [
    "Increased website traffic by 200% through SEO strategies.",
    "Ranked top 5% in a web development course of 150 students.",
    "Successfully launched 10+ personal and academic projects.",
    "Executed end‑to‑end digital content strategy across platforms.",
    "Improved local search visibility with Google My Business management.",
    "Strengthened professional branding via LinkedIn content ops.",
    "CGPA: 7.57 (IGNOU).",
  ];

  const skillGroups = [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend & Languages",
      items: ["Node.js", "Django", "PHP", "Python", "Java", "Data Structures"],
    },
    {
      title: "Tools & Workflow",
      items: ["Git", "GitHub"],
    },
    {
      title: "Content & SEO",
      items: [
        "Blogging",
        "Content Writing",
        "SEO",
        "UX Microcopy",
        "Social Media Marketing",
        "LinkedIn",
        "Google My Business",
      ],
    },
  ];

  const certifications = [
    {
      name: "Software Engineer",
      issuer: "HackerRank",
      date: "2024-05-01",
      value: "Credential ID: SE-12345",
      image: HackerRankImg,
      link: "https://www.hackerrank.com/certificates/599ab21852ab",
      description:
        "Foundational training covering software design, version control, testing, and delivering production-grade features.",
    },
    {
      name: "Apna College — DSA with Java",
      issuer: "Apna College",
      date: "2024-08-01",
      value: "Completion Certificate",
      image: JavaDSAImg,
      link: "https://www.linkedin.com/in/sparsh-sharma-2805bb291/details/certifications/1734536798273/single-media-viewer/?profileId=ACoAAEa_EsABlh1VlwY_EeVHqpypYyU8s_f-nYs",
      description:
        "Data structures and algorithms in Java: arrays, linked lists, stacks, queues, trees, graphs, and problem solving patterns.",
    },
    {
      name: "Neo4j Graph Data Science Certification",
      issuer: "Neo4j",
      date: "2024-10-01",
      value: "Certified",
      image: Neo4jGDSImg,
      link: "https://graphacademy.neo4j.com/c/df3c47c0-c871-4cc1-9c05-99b0c311dd12/",
      description:
        "Graph algorithms, embeddings, and analysis with Neo4j GDS to extract insights from connected data.",
    },
    {
      name: "Neo4j Certified Professional",
      issuer: "Neo4j",
      date: "2024-11-01",
      value: "Certified Professional",
      image: Neo4jCPImg,
      link: "https://graphacademy.neo4j.com/c/a2085f63-04f0-4d54-998d-037657a13d46/",
      description:
        "Certification covering Cypher, data modeling, and building graph-backed applications with best practices.",
    },
    {
      name: "Cutshort Certified React Native — Advanced",
      issuer: "Cutshort",
      date: "2025-02-01",
      value: "Advanced",
      image: ReactNativeImg,
      link: "#",
      description:
        "Advanced React Native patterns: navigation, performance, native modules, and scalable app architecture.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative isolate overflow-clip bg-slate-950 py-20 text-slate-100 sm:py-28">
      <BackgroundDecor />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400" />
            About
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
              A blend of code and content
            </span>
          </h2>
          <p className="mt-4 text-pretty text-slate-300">
            {summary}
          </p>
        </div>

        {/* Top grid: Experience + Achievements */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Experience timeline */}
          <div className={`md:col-span-3 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '120ms' }}>
            <Card title="Experience" icon={BriefcaseIcon}>
              <ol className="relative ml-2 border-l border-white/10 pl-6">
                {experiences.map((exp, i) => (
                  <li key={i} className={`mb-6 last:mb-0 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: `${i * 80 + 160}ms` }}>
                    <div className="absolute -left-[9px] mt-0.5 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-300">
                      <strong className="text-white">{exp.role}</strong>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <BuildingIcon className="h-3.5 w-3.5" /> {exp.org}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                        <CalendarIcon className="h-3.5 w-3.5" /> {exp.period}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm text-slate-300">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className={`flex items-start gap-2 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`} style={{ transitionDelay: `${j * 40 + 200}ms` }}>
                          <CheckIcon className="mt-1 h-4 w-4 text-emerald-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </Card>
          </div>

          {/* Achievements */}
          <div className={`md:col-span-2 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '160ms' }}>
            <Card title="Achievements" icon={TrophyIcon}>
              <ul className="space-y-2 text-sm text-slate-300">
                {achievements.map((a, i) => (
                  <li key={i} className={`flex items-start gap-2 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`} style={{ transitionDelay: `${i * 60 + 200}ms` }}>
                    <SparkleIcon className="mt-1 h-4 w-4 text-fuchsia-300" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Quick contact */}
            <div className={`mt-6 grid grid-cols-1 gap-4 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '260ms' }}>
              <a
                href="mailto:sparshsharma1409@gmail.com"
                className="group inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 backdrop-blur transition hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-2">
                  <MailIcon className="h-4 w-4" /> sparshsharma1409@gmail.com
                </span>
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:8130647877"
                className="group inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 backdrop-blur transition hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4" /> +91 81306 47877
                </span>
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className={`mt-12 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
          <Card title="Skills" icon={SparkleIcon}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((g) => (
                <div key={g.title} className={`transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ transitionDelay: '240ms' }}>
                  <div className="mb-3 text-xs uppercase tracking-wide text-slate-400">{g.title}</div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <div className={`mt-12 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '240ms' }}>
          <Card title="Certifications" icon={CertificateIcon}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((c) => (
                <li key={c.name} className={`flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-slate-300 transition-all duration-700 ease-out ${entered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <span className="inline-flex items-center gap-2">
                    <BadgeIcon className="h-4 w-4 text-indigo-300" /> {c.name}
                  </span>
                  <button onClick={() => setSelectedCert(c)} className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-white">
                    View <ArrowIcon className="h-3 w-3" />
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </div>

      </div>
      {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
    </section>
  );
}

function Card({ title, icon: Icon, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-4 w-4 text-fuchsia-300" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      {children}
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

// Icons (inline SVG)
function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
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
function BuildingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M3 21h18" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M9 9h6M9 13h6M9 17h6" />
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
function TrophyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M8 21h8" />
      <path d="M7 4h10v5a5 5 0 1 1-10 0V4Z" />
      <path d="M5 9a3 3 0 0 1-3-3V4h5v5H5Zm14 0a3 3 0 0 0 3-3V4h-5v5h2Z" />
    </svg>
  );
}
function CertificateIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
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

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function CertModal({ cert, onClose }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);
  if (!cert) return null;
  const pretty = cert.date ? new Date(cert.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) : '';
  function handleClose() {
    setShow(false);
    setTimeout(() => onClose(), 250);
  }
  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`} role="dialog" aria-modal="true" onClick={handleClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className={`relative w-[min(92%,46rem)] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 p-0 shadow-xl backdrop-blur-md transform-gpu transition-all duration-300 ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-[0.98]'}`} onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close" onClick={handleClose} className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 hover:bg-white/15">
          <CloseIcon className="h-4 w-4" />
        </button>
        <div className={`relative aspect-[16/9] w-full overflow-hidden bg-slate-800 transition-transform duration-500 ${show ? 'scale-100' : 'scale-105'}`}>
          {cert.image ? (
            <img src={cert.image} alt={cert.name} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-slate-800 to-slate-900" />
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
          <p className="mt-2 text-sm text-slate-300">{cert.description}</p>
          <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <div className="inline-flex items-center gap-2"><CertificateIcon className="h-4 w-4" /><span>{cert.value || '—'}</span></div>
            <div className="inline-flex items-center gap-2"><BuildingIcon className="h-4 w-4" /><span>{cert.issuer}</span></div>
            <div className="inline-flex items-center gap-2"><CalendarIcon className="h-4 w-4" /><span>{pretty}</span></div>
          </div>
          {cert.link && (
            <div className="mt-4">
              <a href={cert.link} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-white/15">
                Verify <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
