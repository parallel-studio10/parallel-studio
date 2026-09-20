import { Container, Section } from '../layout/Primitives.jsx'
import ProjectPreview from '../project/ProjectPreview.jsx'
import { SectionLabel, TextLink } from '../ui/index.jsx'
import { projects } from '../../data/projects.js'

const layouts = ['full', 'split', 'split-reverse']

export default function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <Section id="selected-work" size="lg" className="home-work" aria-labelledby="selected-work-title">
      <Container>
        <div className="home-section-heading home-section-heading--work">
          <SectionLabel number="01">Selected Work</SectionLabel>
          <h2 id="selected-work-title">Work in focus.</h2>
        </div>
        <div className="home-work__projects">
          {featuredProjects.map((project, index) => (
            <ProjectPreview
              key={project.slug}
              project={project}
              number={String(index + 1).padStart(2, '0')}
              layout={layouts[index % layouts.length]}
            />
          ))}
        </div>
        <TextLink to="/work" arrow>View all work</TextLink>
      </Container>
    </Section>
  )
}
