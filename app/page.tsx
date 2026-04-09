"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const skills = [
  "Rust",
  "Actix Web",
  "Axum",
  "PostgreSQL",
  "MySQL/MariaDB",
  "Docker",
  "Linux",
  "Java",
  "SpringBoot",
  "And more...",
];

const projects = [
  {
    title: "ReAmped",
    blurb: {
      en: "A music player focused on visuals and performance.",
      es: "Un reproductor de musica centrado en visuales y rendimiento.",
    },
    stack: "Rust, Egui, RubatoFFT, Cpal",
    github: true,
    img: "reamped-img.png",
    repoURL: "https://github.com/XxAlexplosivoxX/ReAmped"
  },
  {
    title: "rusty-auth-api",
    blurb: {
      en: "An API built in Rust for secure login using Time-based One-Time Passwords (TOTP), featuring JSON Web Token validation and an example of use",
      es: "Una API hecha en Rust para un inicio de sesión seguro con contraseña de un solo uso y basada en el tiempo, con validación de Json Web Tokens y un ejemplo de uso",
    },
    stack: "Rust with Axum, Tokio, Sqlx, libsodium and google authenticator",
    github: true,
    img: "",
    repoURL: "https://github.com/XxAlexplosivoxX/rusty-auth-api"
  },
  {
    title: "in_progress...",
    blurb: {
      en: "space for upcomimg projects",
      es: "espacio para próximos proyectos",
    },
    stack: "-",
    github: false,
    img: "",
    repoURL: ""
  },
];

const copy = {
  en: {
    navAbout: "about",
    navProjects: "projects",
    navContact: "contact",
    role: "Hi, I'm a Backend Developer",
    intro:
      "I build secure and high-performance backend systems in Rust and other languages. My work focuses on hardening APIs, reducing latency, and keeping operations predictable under load.",
    ctaProjects: "view_projects",
    ctaContact: "contact",
    aboutBody:
      "I prioritize threat-aware architecture, principled authentication, safe defaults, and measurable performance. I like boring infrastructure, clear runbooks, and reproducible deployments.",
    contactBody:
      "Available for backend engineering, API hardening, and performance optimization work.",
    stackLabel: "stack",
    languageLabel: "language",
  },
  es: {
    navAbout: "sobre_mi",
    navProjects: "proyectos",
    navContact: "contacto",
    role: "Hola, soy un Desarrollador Backend",
    intro:
      "Construyo sistemas backend seguros y de alto rendimiento en Rust y otros lenguajes. Mi trabajo se enfoca en reforzar APIs, reducir latencia y mantener operaciones predecibles bajo carga.",
    ctaProjects: "ver_proyectos",
    ctaContact: "contacto",
    aboutBody:
      "Priorizo arquitectura orientada a amenazas, autenticacion con principios, configuraciones seguras por defecto y rendimiento medible. Me gusta infraestructura estable, runbooks claros y despliegues reproducibles.",
    contactBody:
      "Disponible para ingenieria backend, hardening de APIs y optimizacion de rendimiento.",
    stackLabel: "stack",
    languageLabel: "idioma",
  },
} as const;
type Language = keyof typeof copy;

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  const reveal = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35 },
    },
  };

  const mobileMenu = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.2,
        when: "afterChildren",
        staggerChildren: prefersReducedMotion ? 0 : 0.03,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: prefersReducedMotion ? 0 : 0.28,
        when: "beforeChildren",
        staggerChildren: prefersReducedMotion ? 0 : 0.06,
      },
    },
  };

  const mobileItem = {
    closed: { opacity: 0, y: prefersReducedMotion ? 0 : -6 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border nice-header">
        <div className="mx-auto flex w-[min(980px,94vw)] items-center justify-between gap-4 text-sm">
          <p className="font-semibold text-accent">al3x@portfolio:~$</p>
          <button
            type="button"
            className="tui-button -skew-x-12 px-3 py-2 md:!hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            <motion.span
              className="inline-block skew-x-12"
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 4 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            >
              {menuOpen ? "close" : "menu"}
            </motion.span>
          </button>

          <nav className="hidden items-center gap-5 text-muted md:flex">
            <a href="#about" className="hover:text-background hover:bg-accent py-4 px-2 -skew-x-12">
              {t.navAbout}
            </a>
            <a href="#projects" className="hover:text-background hover:bg-accent py-4 px-2 -skew-x-12">
              {t.navProjects}
            </a>
            <a href="#contact" className="hover:text-background hover:bg-accent py-4 px-2 -skew-x-12">
              {t.navContact}
            </a>
            <div className="ml-2 inline-flex items-center gap-2 rounded border border-border language-selector px-2 py-1 text-xs">
              <span className="text-muted">{t.languageLabel}:</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded lang-button px-2 py-0.5 ${language === "en" ? "bg-accent text-black" : "text-muted hover:text-accent"}`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`rounded lang-button px-2 py-0.5 ${language === "es" ? "bg-accent text-black" : "text-muted hover:text-accent"}`}
                aria-label="Cambiar a espanol"
              >
                ES
              </button>
            </div>
          </nav>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="mobile-nav"
              className="mx-auto w-[min(980px,94vw)] overflow-hidden border-t border-border py-3 md:hidden"
              variants={mobileMenu}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.nav className="flex flex-col items-start gap-2 text-muted">
                <motion.a
                  variants={mobileItem}
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-background hover:bg-accent px-2 py-2 -skew-x-12"
                >
                  {t.navAbout}
                </motion.a>
                <motion.a
                  variants={mobileItem}
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-background hover:bg-accent px-2 py-2 -skew-x-12"
                >
                  {t.navProjects}
                </motion.a>
                <motion.a
                  variants={mobileItem}
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-background hover:bg-accent px-2 py-2 -skew-x-12"
                >
                  {t.navContact}
                </motion.a>

                <motion.div
                  variants={mobileItem}
                  className="mt-2 inline-flex items-center gap-2 rounded border border-border language-selector px-2 py-1 text-xs"
                >
                  <span className="text-muted">{t.languageLabel}:</span>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`rounded lang-button px-2 py-0.5 ${language === "en" ? "bg-accent text-black" : "text-muted hover:text-accent"}`}
                    aria-label="Switch to English"
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("es")}
                    className={`rounded lang-button px-2 py-0.5 ${language === "es" ? "bg-accent text-black" : "text-muted hover:text-accent"}`}
                    aria-label="Cambiar a espanol"
                  >
                    ES
                  </button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mx-auto w-[min(980px,94vw)] py-8 md:py-12 content">
        <motion.section
          initial="hidden"
          animate="show"
          variants={reveal}
          className="terminal-panel"
        >
          <p className="terminal-line">$ whoami</p>
          <h1 className="mt-3 text-2xl font-semibold text-accent md:text-4xl">{t.role}</h1>
          <p className="mt-4 text-muted">
            {t.intro}
          </p>
          <div className="mt-6 grid gap-2 text-sm text-muted md:grid-cols-2">
            <p>{'> primary_focus = ["security", "performance", "reliability"]'}</p>
            <p>{'> preferred_stack = ["rust", "postgres", "linux", "docker"]'}</p>
            <p>{'> current_role = "backend engineer"'}</p>
            <p>{'> location = "remote / async-first"'}</p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center align-center gap-3">
            <a href="#projects" className="tui-button">
              {t.ctaProjects}
            </a>
            <a href="#contact" className="tui-button">
              {t.ctaContact}
            </a>
          </div>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="terminal-panel mt-8"
        >
          <p className="terminal-line">$ cat about.txt</p>
          <p className="mt-4 text-muted">{t.aboutBody}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                className="rounded border border-border bg-panel px-3 py-2 text-sm skill-badge"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section id="projects" className="mt-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={reveal}
            className="terminal-panel"
          >
            <p className="terminal-line">$ ls projects/</p>
            <div className="mt-5 grid gap-4">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="rounded border border-border bg-panel p-4 project-badge"
                >
                  <div className="grid gap-3 sm:grid-cols-2 place-items-stretch">
                    <div>
                      <h3 className="text-base font-semibold text-accent">{project.title}</h3>
                      <p className="mt-2 text-sm text-muted">{project.blurb[language]}</p>
                      <p className="mt-3 text-xs text-muted">
                        {t.stackLabel}: {project.stack}
                      </p>
                    </div>
                    <div className="items-center flex content-center justify-center">

                      {project.github ? <a href={project.repoURL} target='_blank' rel='noreferrer' className='tui-button'>{project.title} repo</a> : "no repo"}
                    </div>
                  </div>
                  {project.img.length !== 0 ? <img src="reamped-img.png" className="mt-2 rounded" /> : ""}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={reveal}
          className="terminal-panel mt-8"
        >
          <p className="terminal-line">$ contact --secure</p>
          <p className="mt-4 text-muted">{t.contactBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:Alex_plosivo_777@proton.me" className="tui-button">
              Alex_plosivo_777@proton.me
            </a>
            <a href="https://github.com/XxAlexplosivoxX" target="_blank" rel="noreferrer" className="tui-button">
              github
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
