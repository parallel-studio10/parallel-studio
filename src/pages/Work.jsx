import { Container, Section } from '../components/layout/Primitives.jsx'
import ProjectPreview from '../components/project/ProjectPreview.jsx'
import { SectionLabel, TextLink } from '../components/ui/index.jsx'
import { projects } from '../data/projects.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Work() {
  usePageMeta({
    title: 'Work',
    description: 'Explore StudyDump, an academic resource platform shaped through product strategy, interface design and development.',
    path: '/work',
  })

  return (
    <>
      <Section size="sm" className="work-intro" aria-labelledby="work-title">
        <Container>
          <SectionLabel number="01">Work</SectionLabel>
          <h1 id="work-title">Work with a clear purpose.</h1>
          <p className="type-body-large">A closer look at StudyDump, an academic platform designed to make useful course material easier to find.</p>
        </Container>
      </Section>
      <section className="work-archive" aria-label="Project archive">
        <Container>
          {projects.map((project, index) => (
            <ProjectPreview
              key={project.slug}
              project={project}
              number={String(index + 1).padStart(2, '0')}
              layout="editorial"
              contextLabel="Project"
              linkText={project.caseStudy ? 'Read case study' : 'View concept'}
              showStatus
              headingLevel={2}
            />
          ))}
        </Container>
      </section>
      <Section className="work-outro" aria-labelledby="work-outro-title">
        <Container className="work-outro__inner">
          <SectionLabel>Work with us</SectionLabel>
          <div>
            <h2 id="work-outro-title">Have a project that needs this kind of thinking?</h2>
            <TextLink to="/contact" arrow>Start a Project</TextLink>
          </div>
        </Container>
      </Section>
    </>
  )
}
