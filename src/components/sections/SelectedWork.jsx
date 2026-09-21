import { Container, Section } from '../layout/Primitives.jsx'
import ProjectPreview from '../project/ProjectPreview.jsx'
import { SectionLabel } from '../ui/index.jsx'
import { projects } from '../../data/projects.js'

export default function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <Section id="selected-work" size="sm" className="home-work" aria-labelledby="selected-work-title">
      <Container>
        <div className="home-section-heading home-section-heading--work">
          <SectionLabel number="01">Selected Work</SectionLabel>
          <h2 id="selected-work-title">Selected work.</h2>
        </div>
        <div className="home-work__projects">
          {featuredProjects.map((project, index) => (
            <ProjectPreview
              key={project.slug}
              project={project}
              number={String(index + 1).padStart(2, '0')}
              layout="editorial"
              contextLabel="Case Study"
              showStatus
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
