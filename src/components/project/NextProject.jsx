import { Link } from 'react-router-dom'
import { Container, Section } from '../layout/Primitives.jsx'
import { SectionLabel, TextLink } from '../ui/index.jsx'

export default function NextProject({ project }) {
  return (
    <Section size="lg" className="next-project" aria-labelledby="next-project-title">
      <Container>
        <div className="next-project__topline">
          <SectionLabel>Next Project</SectionLabel>
          <TextLink to="/work">Back to Work</TextLink>
        </div>
        <Link className="next-project__link" to={`/work/${project.slug}`}>
          <span>
            <span className="next-project__category">{project.category}{project.year ? ` / ${project.year}` : ''}</span>
            <h2 id="next-project-title" className="next-project__title">{project.title}</h2>
          </span>
          <span className="next-project__arrow" aria-hidden="true">↗</span>
        </Link>
      </Container>
    </Section>
  )
}
