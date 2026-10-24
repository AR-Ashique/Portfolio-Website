import {
  ArrowDownRight, ArrowUpRight, Activity, BrainCircuit, Code2,
  Mail, Menu, Microscope, Sparkles, Terminal, Users, X
} from "lucide-react";
import { useState } from "react";
import { GithubIcon, LinkedinIcon } from "./components/Icons";
import "./App.css";

const projects = [
  {
    number: "01",
    type: "PYTHON · LEARNING",
    title: "Python Projects",
    description:
      "A collection of programming practice and small projects as I build my skills in Python and problem-solving.",
    tags: ["Python", "Problem-solving", "Learning in public"],
    href: "https://github.com/AR-Ashique",
    icon: Terminal,
  },
  {
    number: "02",
    type: "BIOMEDICAL ENGINEERING",
    title: "Ideas at the intersection",
    description:
      "Exploring how engineering, data, and technology can support better healthcare. This space will grow as I develop and publish project work.",
    tags: ["Biomedical technology", "Data", "Research"],
    href: "https://github.com/AR-Ashique",
    icon: Microscope,
  },
];

const skills = [
  { name: "Python programming", group: "TECHNICAL", icon: Code2 },
  { name: "Data & spreadsheets", group: "TECHNICAL", icon: Activity },
  { name: "AI literacy", group: "TECHNICAL", icon: BrainCircuit },
  { name: "Canva design", group: "CREATIVE", icon: Sparkles },
  { name: "Problem-solving", group: "WORKING STYLE", icon: Terminal },
  { name: "Teamwork & leadership", group: "WORKING STYLE", icon: Users },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ashiqur Rahman home">
          <span className="brand-mark">AR<span>.</span></span>
          <span className="brand-label">BIOMEDICAL ENGINEERING</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {[["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"]].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-pulse" /> BIOMEDICAL ENGINEERING STUDENT</div>
            <h1>Curious mind.<br /><span className="gradient-text">Human-centered</span><br />technology.</h1>
            <p className="hero-intro">
              I'm <strong>MD. Ashiqur Rahman</strong> — a Biomedical Engineering student interested in the ways technology, data, and engineering can make a meaningful difference in healthcare.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="mailto:mdashiquer21@gmail.com"><Mail size={16} /> Get in touch</a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/AR-Ashique" target="_blank" rel="noreferrer"><GithubIcon size={17} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="https://www.linkedin.com/in/ashiqurrahman2/" target="_blank" rel="noreferrer"><LinkedinIcon size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract biomedical technology illustration">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="hero-core">
              <div className="core-cross"><span /><span /></div>
              <Activity className="core-icon" size={78} strokeWidth={1.1} />
              <span className="core-label">ENGINEERING<br />FOR LIFE</span>
            </div>
            <div className="float-card float-card-top"><span className="mini-icon"><Activity size={15} /></span><span><b>Human-first</b><small>Design mindset</small></span></div>
            <div className="float-card float-card-bottom"><span className="mini-icon mini-icon-purple"><Code2 size={15} /></span><span><b>Always learning</b><small>Python · Data · AI</small></span></div>
            <div className="art-caption">01 / SCIENCE × TECHNOLOGY</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO DISCOVER</a>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <div className="about-label"><span className="eyebrow"><span className="eyebrow-dot" /> A LITTLE ABOUT ME</span><span className="big-index">01</span></div>
          <div className="about-content">
            <SectionHeading eyebrow="ABOUT" title={<>Building skills to<br /><span className="muted-title">solve real problems.</span></>} />
            <p className="about-lead">I’m at the beginning of my journey in biomedical engineering, building a foundation in programming, data, and creative problem-solving.</p>
            <p className="body-copy">I enjoy learning how different disciplines can work together—from engineering principles to digital tools—to help address real-world challenges. I value teamwork, clear communication, and steady progress, and I’m keen to turn what I learn into practical projects.</p>
            <div className="principles">
              <div><span className="principle-number">01</span><b>Stay curious</b><p>Ask questions, explore ideas, keep learning.</p></div>
              <div><span className="principle-number">02</span><b>Build thoughtfully</b><p>Focus on useful, people-centered solutions.</p></div>
              <div><span className="principle-number">03</span><b>Grow together</b><p>Share knowledge and learn through teamwork.</p></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap section-pad" id="skills">
          <SectionHeading eyebrow="WHAT I'M LEARNING" title={<>My toolkit for <span className="gradient-text">what's next.</span></>} copy="A growing mix of technical tools, creative skills, and ways of working." />
          <div className="skills-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return <article className="skill-card" key={skill.name} style={{ animationDelay: `${i * 70}ms` }}>
                <div className="skill-icon"><Icon size={21} strokeWidth={1.6} /></div>
                <span className="skill-group">{skill.group}</span>
                <h3>{skill.name}</h3>
                <span className="skill-index">0{i + 1}</span>
              </article>;
            })}
          </div>
          <p className="skills-note"><span className="note-star">✳</span> This toolkit is a work in progress — I'm always learning something new.</p>
        </section>

        <section className="projects-section section-wrap section-pad" id="projects">
          <div className="projects-top">
            <SectionHeading eyebrow="SELECTED WORK & INTERESTS" title={<>Small steps.<br /><span className="muted-title">Meaningful progress.</span></>} copy="A snapshot of what I'm exploring now. More project details will be added as my work develops." />
            <a className="text-link" href="https://github.com/AR-Ashique" target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={16} /></a>
          </div>
          <div className="project-list">
            {projects.map((project) => {
              const Icon = project.icon;
              return <a className="project-card" href={project.href} key={project.number} target="_blank" rel="noreferrer">
                <div className="project-number">{project.number}</div>
                <div className="project-visual"><Icon size={34} strokeWidth={1.25} /><span className="project-visual-orbit" /></div>
                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title} <ArrowUpRight size={19} /></h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="project-arrow"><ArrowUpRight size={19} /></div>
              </a>;
            })}
          </div>
        </section>

        <section className="education-section section-wrap section-pad" id="education">
          <SectionHeading eyebrow="MY BACKGROUND" title={<>Learning with <span className="gradient-text">purpose.</span></>} copy="The foundation I'm building on, one step at a time." />
          <div className="education-timeline">
            <div className="timeline-line" />
            <article className="education-item current">
              <span className="timeline-dot" />
              <div className="education-date">UNDERGRADUATE</div>
              <div className="education-detail"><span className="education-badge">CURRENT FOCUS</span><h3>B.Sc. in Biomedical Engineering</h3><p className="school">Chittagong University of Engineering and Technology (CUET)</p><p>Chittagong, Bangladesh</p></div>
            </article>
            <article className="education-item">
              <span className="timeline-dot" />
              <div className="education-date">2023 — 2024</div>
              <div className="education-detail"><h3>Higher Secondary Certificate (HSC)</h3><p className="school">Shaheed Police Smrity College · Dhaka</p><p>Science · GPA 5.00</p></div>
            </article>
            <article className="education-item">
              <span className="timeline-dot" />
              <div className="education-date">2019 — 2020</div>
              <div className="education-detail"><h3>Secondary School Certificate (SSC)</h3><p className="school">Sher-e-Bangla Nagar Govt. Boys' High School · Dhaka</p><p>Science · GPA 5.00</p></div>
            </article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-orb contact-orb-one" /><div className="contact-orb contact-orb-two" />
            <span className="eyebrow"><span className="eyebrow-dot" /> OPEN TO CONNECTIONS</span>
            <h2>Good things start<br />with a <span className="gradient-text">conversation.</span></h2>
            <p>Have an idea, a project, or an opportunity to learn together? I'd be happy to connect.</p>
            <a className="button button-primary" href="mailto:mdashiquer21@gmail.com">Say hello <ArrowUpRight size={17} /></a>
            <div className="contact-links">
              <a href="mailto:mdashiquer21@gmail.com"><Mail size={16} /> mdashiquer21@gmail.com</a>
              <a href="https://github.com/AR-Ashique" target="_blank" rel="noreferrer"><GithubIcon size={16} /> GitHub</a>
              <a href="https://www.linkedin.com/in/ashiqurrahman2/" target="_blank" rel="noreferrer"><LinkedinIcon size={16} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">AR<span>.</span></span></a>
        <p>Designed with curiosity. Built one step at a time.</p>
        <span className="footer-copy">© {new Date().getFullYear()} MD. ASHIQUR RAHMAN</span>
      </footer>
    </div>
  );
}

export default App;
