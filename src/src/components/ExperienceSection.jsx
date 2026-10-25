import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowDown } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Lead Full-Stack Developer",
      company: "SaaS & Cloud Solutions",
      period: "2024 - Present",
      location: "Bangladesh / Remote",
      badge: "Full-Stack Architecture",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      description:
        "Leading the development of modern cloud software and multi-tenant SaaS ecosystems. Overseeing end-to-end architecture, from data isolation models to rich interactive user experiences.",
      achievements: [
        "Architected multi-tenant SaaS frameworks with isolated databases and role-based permissions.",
        "Built client lead management pipelines with automated exports and real-time activity metrics.",
        "Engineered smooth, modern interfaces using React 19, Tailwind CSS, and state-of-the-art animations.",
      ],
      skills: ["Multi-Tenant SaaS", "React 19", "Node.js", "Express", "System Design", "MongoDB"],
    },
    {
      role: "Web Development Instructor & Mentor",
      company: "Tech Community & Conceptual Sessions",
      period: "2024 - Present",
      location: "Online / Bangladesh",
      badge: "Education & Leadership",
      badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
      description:
        "Conducting in-depth conceptual sessions and mentorship programs for aspiring software engineers. Guiding students through modern JavaScript concepts, React patterns, and full-stack project building.",
      achievements: [
        "Conducted targeted conceptual sessions breaking down complex frontend and backend concepts.",
        "Mentored dozens of students in code quality, debugging techniques, and Git workflows.",
        "Reviewed student codebases and provided actionable architectural feedback.",
      ],
      skills: ["React", "JavaScript", "Instruction", "Code Reviews", "Mentorship", "Git"],
    },
    {
      role: "Full Stack Web Developer",
      company: "Independent Projects & Open Source",
      period: "2023 - Present",
      location: "Remote",
      badge: "Engineering",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      description:
        "Building interactive, performant web applications with responsive design and modern UX practices. Developing full-stack solutions with clean code architecture and optimized data flow.",
      achievements: [
        "Created StudyFlow, a comprehensive task and study management suite with interactive visual charts.",
        "Developed a multi-tenant library management system with real-time borrowing logs and book catalogs.",
        "Designed high-performance canvas scroll animations using Lenis and GSAP ScrollTrigger.",
      ],
      skills: ["React", "Tailwind CSS", "REST APIs", "GSAP", "Lenis", "Node.js"],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-black relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Career & Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Leadership</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A track record of founding tech initiatives, mentoring the next generation of engineers, and engineering scalable web applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-white/10 before:-translate-x-1/2 before:hidden md:before:block">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div className="rounded-2xl bg-zinc-900/70 border border-white/10 p-6 sm:p-8 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-zinc-900/90 transition-all duration-300 group shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.badgeColor}`}
                      >
                        {exp.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 font-normal flex items-center gap-1 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="mt-4 space-y-2">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Central Node for Timeline */}
                <div className="hidden md:flex items-center justify-center w-16 shrink-0 relative mt-8">
                  <div className="w-5 h-5 rounded-full bg-cyan-400 border-4 border-black shadow-lg shadow-cyan-500/50" />
                </div>

                {/* Empty opposite half for spacing */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>

        {/* Transition prompt to About Canvas */}
        <div className="mt-16 text-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-all shadow-lg"
          >
            <span>Discover Vision & Philosophy</span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
