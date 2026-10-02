'use client'

import { useState } from 'react'
import { ArrowUpRight, GitBranch, Mail, Menu, MoveUpRight, X } from 'lucide-react'

const skills = [
  { label: 'Front-end', value: 'TypeScript / React / Next.js / Vue.js / TailwindCSS / JavaScript (ES6+)' },
  { label: 'Back-end & DB', value: 'Python / Golang / Java / PostgreSQL / MongoDB / REST APIs' },
  { label: 'Tools & QA', value: 'Git / Postman / Technical Writing / API Specs / Figma / UAT Testing' },
]

const profileLinks = {
  github: 'https://github.com/Febmy',
  linkedin: 'https://www.linkedin.com/in/febmybaihaqi',
}

const projects = [
  { number: '01', title: 'IT Asset Management', type: 'Asset Tracking System', description: 'Internal portal and asset management system for tracking operational workflows and company resources.', stack: 'Vue.js · Next.js · PostgreSQL', year: '2026', result: 'Enhanced operational workflows', url: 'https://github.com/Febmy/it-asset-management' },
  { number: '02', title: 'Enterprise Travel', type: 'Travel Booking Platform', description: 'A comprehensive travel booking project designed for enterprise use, featuring secure transactions and role-based access.', stack: 'React · TailwindCSS · Node.js', year: '2025', result: 'Streamlined enterprise booking', url: 'https://github.com/Febmy/TravelProject' },
  { number: '03', title: 'Undangan Pernikahan', type: 'Digital Invitation', description: 'A responsive and elegantly designed digital wedding invitation website with interactive features.', stack: 'HTML5 · CSS3 · JavaScript', year: '2025', result: 'Designed digital invitations', url: 'https://github.com/Febmy/Undangan-Pernikahan' },
]

const experience = [
  { date: 'Sep 2026 — Present', company: 'YODU', role: 'Full-Stack Developer', detail: 'Vue.js, React, Next.js, Go, Python microservices, and technical documentation.' },
  { date: 'Mar — Sep 2026', company: 'YODU', role: 'IT Support Officer', detail: 'System troubleshooting, technical writing, and UAT/QA testing support.' },
  { date: 'Jan — Apr 2026', company: 'KodingData', role: 'Front-End Developer Intern', detail: 'Responsive front-end solutions, API integration, and UI improvements.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <a className="logo" href="#top" aria-label="Febmy Baihaqi home">FB<span>.</span></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero section-grid" id="top">
        <div className="eyebrow">Based in Depok, Indonesia · Available worldwide</div>
        <div className="hero-photo">
          <img src="/profile.png" alt="Febmy Baihaqi" className="profile-img" />
        </div>
        <div className="hero-copy">
          <p className="kicker">Hello, I&apos;m Febmy —</p>
          <h1>Full-Stack<br /><em>developer</em></h1>
          <p className="hero-intro">I design and build digital products that are responsive, high-performance, and considered. Also skilled in technical writing.</p>
          <a className="circle-link" href="#work" aria-label="Explore selected work"><ArrowUpRight /></a>
        </div>
        <div className="hero-note" style={{ gridColumn: '2', marginTop: '40px' }}>Scroll to explore<br /><span>↓</span></div>
      </section>

      <section className="statement section-grid" id="about">
        <div className="about-left">
          <div className="section-label">/ About me</div>
          <img src="/Nobackground.png" alt="Febmy Baihaqi" className="about-photo" />
        </div>
        <div className="statement-content">
          <p className="lead">I build responsive, high-performance web applications, internal portals, and robust data pipelines.</p>
          <p className="muted">As a results-driven Full-Stack Developer with experience in fintech and software development, I specialize in Vue.js, React, Next.js, and TypeScript. I also have a strong background in technical documentation, API writing, user flow mapping, and QA/UAT scenarios, ensuring that both code and processes are well-structured.</p>
          <div className="social-row">
            <a href={profileLinks.github} target="_blank" rel="noreferrer" aria-label="Open Febmy's GitHub profile"><GitBranch /></a>
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" aria-label="Open Febmy's LinkedIn profile"><span className="social-text">in</span></a>
            <a href="mailto:febmysbaihaqi@gmail.com" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </section>

      <section className="skills section-grid">
        <div className="section-label">/ Capabilities</div>
        <div className="skill-list">
          {skills.map((skill) => <div className="skill-card" key={skill.label}><span>{skill.label}</span><p>{skill.value}</p><MoveUpRight /></div>)}
        </div>
      </section>

      <section className="work section-grid" id="work">
        <div className="section-label">/ Selected work</div>
        <div className="work-content">
          <div className="work-heading"><h2>Things I&apos;ve<br /><em>made</em></h2><p className="muted">A selection of products, experiments, and collaborations.</p></div>
          <div className="project-list">
            {projects.map((project) => <article className="project" key={project.number}><span className="project-number">{project.number}</span><div><p className="project-type">{project.type} · {project.year}</p><h3>{project.title}</h3><p className="muted project-description">{project.description}</p><p className="project-stack">{project.stack}</p><p className="project-result">↳ {project.result}</p></div><a href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight /></a></article>)}
          </div>
        </div>
      </section>

      <section className="experience section-grid" id="experience">
        <div className="section-label">/ Experience</div>
        <div className="experience-content"><h2>Where I&apos;ve<br /><em>been</em></h2><div className="timeline">{experience.map((item) => <div className="timeline-row" key={item.company + item.role}><span>{item.date}</span><div><h3>{item.company}</h3><p>{item.role}</p></div><p className="muted timeline-detail">{item.detail}</p></div>)}</div></div>
      </section>

      <section className="contact section-grid" id="contact"><div className="section-label">/ Start a conversation</div><div><h2>Have a good<br /><em>idea?</em></h2><a className="contact-link" href="mailto:febmysbaihaqi@gmail.com">febmysbaihaqi@gmail.com <ArrowUpRight /></a></div></section>

      <footer><span>© 2026 Febmy Shesar Baihaqi</span><span>Built with curiosity & care</span><span>Depok, ID</span></footer>
    </main>
  )
}
