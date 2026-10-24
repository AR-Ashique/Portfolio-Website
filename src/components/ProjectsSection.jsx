import { useState } from "react";
import { FolderGit2, ExternalLink, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "saas-hub",
      title: "Multi-Tenant SaaS Engine & Leads Hub",
      category: "saas",
      categoryLabel: "Multi-Tenant SaaS",
      tagline: "High-scale multi-tenant client pipeline & lead management suite",
      description:
        "Engineered a full-scale multi-tenant SaaS application that isolates tenant data, provides automated lead capture pipelines, supports real-time activity metrics, and handles high-volume CSV exports.",
      features: [
        "Multi-tenant database schema with strict data isolation",
        "Lead ingestion pipeline with automated status transitions",
        "Role-based permission matrix (Superadmin, Tenant Admin, Agent)",
        "Instant CSV export engine for data reporting and analysis",
      ],
      tech: ["React 19", "Node.js", "Express", "MongoDB", "Multi-Tenant SaaS", "Tailwind CSS"],
      github: "https://github.com/Fahim-Prodhan",
      demo: "https://github.com/Fahim-Prodhan",
      accent: "from-cyan-500/20 to-blue-500/5",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    {
      id: "studyflow",
      title: "StudyFlow - Collaborative Study & Task Platform",
      category: "fullstack",
      categoryLabel: "Productivity Platform",
      tagline: "Interactive productivity dashboard with Recharts analytics",
      description:
        "A feature-packed study companion and task tracking application designed for learners. Offers visual progress analytics, session goal tracking, and intuitive task management.",
      features: [
        "Interactive analytics dashboards using Recharts for visual progress",
        "Dynamic task categorization with status updates and filters",
        "Responsive UI built with React 19, Tailwind CSS, and DaisyUI",
        "Toast notification feedback system for seamless user interactions",
      ],
      tech: ["React 19", "Recharts", "React Router", "Tailwind CSS", "DaisyUI", "REST APIs"],
      github: "https://github.com/Fahim-Prodhan/study-flow",
      demo: "https://github.com/Fahim-Prodhan/study-flow",
      accent: "from-teal-500/20 to-emerald-500/5",
      badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
    },
    {
      id: "library",
      title: "Multi-Tenant Library Management System",
      category: "fullstack",
      categoryLabel: "Management System",
      tagline: "Digital cataloging, borrowing lifecycle & inventory tracking",
      description:
        "Comprehensive web platform for managing library collections, member records, and book loans. Built with robust REST APIs and instant UI feedback.",
      features: [
        "Real-time catalog searching and multi-category book filtering",
        "Borrowing lifecycle workflow with issue and return timestamps",
        "Instant feedback notifications via React Hot Toast",
        "Clean, responsive interface optimized for desktop and mobile",
      ],
      tech: ["React 19", "React Router", "Tailwind CSS", "React Hot Toast", "REST APIs"],
      github: "https://github.com/Fahim-Prodhan/library-management-react-frontend",
      demo: "https://github.com/Fahim-Prodhan/library-management-react-frontend",
      accent: "from-blue-500/20 to-indigo-500/5",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
    {
      id: "animated-portfolio",
      title: "Interactive Canvas Frame-Scrub Portfolio",
      category: "animation",
      categoryLabel: "Creative Development",
      tagline: "60FPS scroll-driven canvas animation with Lenis and GSAP",
      description:
        "The very site you are browsing right now! Features hardware-accelerated canvas frame sequencing, smooth inertia scrolling with Lenis, and responsive multi-resolution frame switching.",
      features: [
        "Optimized 144+ WebP frame playback linked to scroll distance",
        "Virtual smooth scrolling powered by Lenis and GSAP ScrollTrigger",
        "Sharp automation script for multi-device frame downsampling",
        "Modern dark-glass interface with Framer Motion transitions",
      ],
      tech: ["React 19", "GSAP ScrollTrigger", "Lenis", "Motion", "Tailwind CSS", "Sharp"],
      github: "https://github.com/Fahim-Prodhan",
      demo: "#",
      accent: "from-purple-500/20 to-pink-500/5",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-black relative border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Selected Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A showcase of production-ready SaaS architectures, interactive platforms, and modern web applications built by MD Fahim Prodhan.
          </p>

          {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "saas", label: "Multi-Tenant SaaS" },
              { id: "fullstack", label: "Full-Stack Web" },
              { id: "animation", label: "Creative & Animation" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === btn.id
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-zinc-900/60 border border-white/10 overflow-hidden backdrop-blur-sm hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group shadow-2xl"
            >
              {/* Card Header & Preview Banner */}
              <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.accent} border-b border-white/5 relative`}>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-black/40 text-zinc-300 hover:text-white hover:bg-black/80 transition-colors border border-white/10"
                      title="Project Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-cyan-200/80 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mt-5 space-y-2.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Key Capabilities:
                    </div>
                    {project.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Explore Repository & Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
