import { useEffect, type ReactNode } from "react"
import { useLocation } from "react-router"

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d={diagonal ? "M5 15 15 5m-8 0h8v8" : "M3 10h14m-5-5 5 5-5 5"} /></svg>
}

function LocationPin() {
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

function SectionTitle({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return <div className="section-title"><h2>{children}</h2>{action}</div>
}

const projects = [
  {
    title: "AppFlowy Official Website",
    year: "2026",
    image: "project-1.png",
    href: "#/work/brandify",
  },
  {
    title: "AppFlowy Design Guideline",
    year: "2025",
    image: "project-2.png",
    href: "#",
  },
  {
    title: "AppFlowy.IO",
    year: "2025",
    image: "project-3.png",
    href: "#",
  },
  {
    title: "Synology Account 6.0",
    year: "2023",
    image: "project-1.png",
    href: "#",
  },
  {
    title: "Synology WorkPlus",
    year: "2020",
    image: "project-2.png",
    href: "#",
  },
  {
    title: "DUCTECH Brand Identity",
    year: "2018",
    image: "project-3.png",
    href: "#",
  },
]

const experience = [
  {
    place: "Singapore",
    company: "AppFlowy.IO",
    period: "2025.02 – Present",
    role: "Principal Product Designer",
    description: "Led UI/UX design and development for the Notion-alternative productivity platform, built clear and consistent design guidelines based on brand identity. Leveraged user feedback to create innovative, customizable solutions that enhanced overall user experience.",
  },
  {
    place: "Taiwan",
    company: "Synology",
    period: "2019.09 – 2024.11",
    role: "Senior UI Designer",
    description: "Served as design lead in the product department, improved product consistency and helped the team grow in developing various products. Managed design work across departments, led major UI/UX redesigns, and improved quality and creativity in the design process.",
  },
  {
    place: "Taiwan",
    company: "DUCTECH",
    period: "2017.10 – 2019.07",
    role: "Product Designer",
    description: "Built integrated Apple HomeKit based smart home services by bridging digital and physical environments. Set the core design direction and built the brand from the start. Worked on mobile apps, websites, and visual designs for marketing and exhibitions for shaping a seamless smart living experience.",
  },
  {
    place: "Taiwan",
    company: "Compal Electronics",
    period: "2014.07 – 2017.07",
    role: "Senior Interaction Designer",
    description: "Worked in the Experience Industrial Design team to explore new ways of using products. Led interaction design for hardware prototypes and created user scenarios and personas for exploring various possibilities of innovative products.",
  },
]

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section")
    if (!section) return
    requestAnimationFrame(() => document.getElementById(section)?.scrollIntoView())
  }, [location.search])

  return <main>
    <nav className="top-nav" aria-label="Page sections">
      <a href="#/?section=intro">Intro</a>
      <a href="#/?section=about">About</a>
      <a href="#/?section=work">Work</a>
      <a href="#/?section=experience">Experience</a>
      <a href="#/?section=education">Education</a>
    </nav>

    <div className="shell">
      <header className="profile" id="intro">
        <div className="profile-top">
          <div className="profile-photo"><img src={asset("avatar.png")} alt="Nate Yeh" /></div>
          <div className="identity">
            <h1>Nate Yeh</h1>
            <p className="job-title">Product designer</p>
            <p className="location"><LocationPin /><span>Taipei, Taiwan</span></p>
          </div>
        </div>
      </header>

      <section className="page-section about" id="about">
        <SectionTitle>About</SectionTitle>
        <div className="body-copy">
          <p>A product designer who loves bringing ideas to life by blending software and hardware to create intuitive experiences. Collaborates with designers, engineers, and PMs to turn complex challenges into seamless user solutions.</p>
        </div>
      </section>

      <section className="page-section" id="work">
        <SectionTitle>Projects</SectionTitle>
        <div className="project-grid">
          {projects.map((project) => <a className="project-card" href={project.href} key={project.title}>
            <div className="project-image"><img src={asset(project.image)} alt="" /></div>
            <div className="project-caption"><span><strong>{project.title}</strong><small>{project.year}</small></span><Arrow diagonal /></div>
          </a>)}
        </div>
      </section>

      <section className="page-section" id="experience">
        <SectionTitle>Experience</SectionTitle>
        <div className="timeline">
          {experience.map((item) => <article className="timeline-item" key={item.company}>
            <div className="timeline-meta"><span>{item.place}</span><strong>{item.company}</strong><span>{item.period}</span></div>
            <div className="timeline-content"><h3>{item.role}</h3><p>{item.description}</p></div>
          </article>)}
        </div>
      </section>

      <section className="page-section" id="education">
        <SectionTitle>Education</SectionTitle>
        <div className="education-list">
          <article><div><span>Taipei, Taiwan</span><strong>2011 – 2013</strong></div><div><h3>National Taipei University of Technology</h3><p>Master's degree, Graduate Institute of Interactive Media Design</p><small>GPA: 4.0</small></div></article>
          <article><div><span>Yunlin, Taiwan</span><strong>2006 – 2010</strong></div><div><h3>National Yunlin University of Science and Technology</h3><p>Bachelor’s degree, Digital Media Design</p></div></article>
        </div>
      </section>
    </div>

  </main>
}
