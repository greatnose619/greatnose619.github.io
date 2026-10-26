import { useEffect } from "react"
import { Navigate, useParams } from "react-router"
import { projects } from "./data/projects"

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

function Arrow({ back = false }: { back?: boolean }) {
  return <svg aria-hidden="true" viewBox="0 0 20 20"><path d={back ? "M17 10H3m5-5-5 5 5 5" : "M5 15 15 5m-8 0h8v8"} /></svg>
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    if (project) document.title = `${project.title} — Nate's Design`
    window.scrollTo(0, 0)
    return () => { document.title = "Nate's Design" }
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const moreProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2)

  return <main className="project-page">
    <nav className="top-nav project-nav" aria-label="Page navigation">
      <a href="#/?section=intro">Intro</a>
      <a href="#/?section=about">About</a>
      <a href="#/?section=work">Projects</a>
      <a href="#/?section=experience">Experience</a>
      <a href="#/?section=education">Education</a>
    </nav>

    <article className="project-detail-shell">
      <a className="project-back" href="#/"><Arrow back />Projects</a>

      <header className="project-hero-copy">
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
      </header>

      <dl className="project-meta">
        <div><dt>Category</dt><dd>{project.category}</dd></div>
        <div><dt>Services</dt><dd>{project.services}</dd></div>
        <div><dt>Client</dt><dd>{project.client}</dd></div>
        <div><dt>Year</dt><dd>{project.year}</dd></div>
      </dl>

      <img className="project-detail-image" src={asset("projects/brandify/hero.jpg")} alt={`${project.title} project overview`} />

      <div className="project-description">
        {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      <div className="project-gallery">
        <img src={asset("projects/brandify/detail-1.jpg")} alt={`${project.title} project detail`} />
        <img src={asset("projects/brandify/detail-2.jpg")} alt={`${project.title} design system`} />
        <img src={asset("projects/brandify/detail-3.jpg")} alt={`${project.title} responsive views`} />
      </div>

      <section className="more-projects">
        <div className="more-projects-title"><h2>More projects</h2></div>
        <div className="more-project-grid">
          {moreProjects.map((item) => <a href={`#/work/${item.slug}`} className="more-project-card" key={item.slug}>
            <img src={asset(item.image)} alt="" />
            <span><strong>{item.title}</strong><small>{item.year}</small></span>
            <Arrow />
          </a>)}
        </div>
      </section>
    </article>
  </main>
}
