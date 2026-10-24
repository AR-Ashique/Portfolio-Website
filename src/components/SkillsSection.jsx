import { useState } from "react";
import { Cpu, Layout, Server, Database, Wrench } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend", icon: Layout },
    { id: "backend", label: "Backend & SaaS", icon: Server },
    { id: "database", label: "Databases & Data", icon: Database },
    { id: "tools", label: "DevOps & Tools", icon: Wrench },
  ];

  const skillGroups = [
    {
      category: "frontend",
      title: "Frontend Engineering",
      icon: Layout,
      color: "from-cyan-500/20 to-blue-500/10",
      borderColor: "hover:border-cyan-500/40",
      skills: [
        { name: "React 19", level: "Expert", desc: "Hooks, Server/Client components, Concurrent rendering" },
        { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, Closures, DOM APIs, Modular JS" },
        { name: "Tailwind CSS v4", level: "Expert", desc: "Modern styling, design systems, dark modes" },
        { name: "GSAP & ScrollTrigger", level: "Advanced", desc: "Canvas sequences, scrub animations, pinning" },
        { name: "Framer Motion", level: "Advanced", desc: "Smooth layout transitions, spring physics, gesture UI" },
        { name: "Responsive UI/UX", level: "Expert", desc: "Mobile-first layouts, accessible markup, typography" },
      ],
    },
    {
      category: "backend",
      title: "Backend & Multi-Tenant SaaS",
      icon: Server,
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "hover:border-emerald-500/40",
      skills: [
        { name: "Multi-Tenant Architecture", level: "Specialist", desc: "Tenant data isolation, domain routing, scalability" },
        { name: "Node.js & Express", level: "Advanced", desc: "Robust microservices, modular middleware, async handlers" },
        { name: "RESTful API Design", level: "Expert", desc: "Clean endpoints, payload validation, status codes" },
        { name: "Authentication & RBAC", level: "Advanced", desc: "JWT, session security, multi-role permissions" },
        { name: "Data Pipelines & Export", level: "Advanced", desc: "CSV generation, automated lead management workflows" },
        { name: "API Security & Rate Limiting", level: "Advanced", desc: "CORS, sanitize inputs, attack mitigation" },
      ],
    },
    {
      category: "database",
      title: "Databases & Data Analytics",
      icon: Database,
      color: "from-purple-500/20 to-indigo-500/10",
      borderColor: "hover:border-purple-500/40",
      skills: [
        { name: "MongoDB & Mongoose", level: "Advanced", desc: "Document schemas, aggregations, indexing" },
        { name: "PostgreSQL & SQL", level: "Proficient", desc: "Relational data schema, joins, transactions" },
        { name: "Recharts & Visual Data", level: "Advanced", desc: "Interactive charts, trend analysis dashboards" },
        { name: "State Architecture", level: "Advanced", desc: "React Context, LocalStorage persistence, optimistics" },
      ],
    },
    {
      category: "tools",
      title: "DevOps, Tools & Workflow",
      icon: Wrench,
      color: "from-amber-500/20 to-orange-500/10",
      borderColor: "hover:border-amber-500/40",
      skills: [
        { name: "Git & GitHub", level: "Expert", desc: "Version control, branching, PR reviews, merge workflows" },
        { name: "Vite & Sharp", level: "Advanced", desc: "Ultra-fast bundling, frame optimization scripts" },
        { name: "Linux & Bash", level: "Advanced", desc: "Terminal automation, shell scripting, server administration" },
        { name: "Postman", level: "Advanced", desc: "API testing, environment variables, documentation" },
      ],
    },
  ];

  const filteredGroups =
    activeCategory === "all"
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Technologies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            A comprehensive toolkit designed for building production-grade web systems, high-speed interfaces, and resilient SaaS architectures.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/25 scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl bg-zinc-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 ${group.borderColor} group`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {group.title}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {group.skills.length} core competencies
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/20 hover:bg-black/60 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-zinc-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1.5 leading-snug">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
