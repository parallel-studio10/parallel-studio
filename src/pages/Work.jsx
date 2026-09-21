import { Container, Section } from '../components/layout/Primitives.jsx'
import ProjectPreview from '../components/project/ProjectPreview.jsx'
import { SectionLabel, TextLink } from '../components/ui/index.jsx'
import { projects } from '../data/projects.js'
import usePageMeta from '../hooks/usePageMeta.js'

const layouts = ['full', 'split', 'split-reverse', 'split', 'split-reverse']

export default function Work() {
  usePageMeta({
    title: 'Work',
    description: 'Explore PARALLEL projects across digital products, interface design and independent commercial concepts.',
    path: '/work',
  })

  return (
    <>
      <Section size="sm" className="work-intro" aria-labelledby="work-title">
        <Container>
          <SectionLabel number="01">Work</SectionLabel>
          <h1 id="work-title">Selected work across product, design and development.</h1>
          <p className="type-body-large">A selection of digital products, interface explorations and independent commercial concepts.</p>
        </Container>
      </Section>
      <section className="work-archive" aria-label="Project archive">
        <Container>
          {projects.map((project, index) => (
            <ProjectPreview
              key={project.slug}
              project={project}
              number={String(index + 1).padStart(2, '0')}
              layout={layouts[index % layouts.length]}
              contextLabel="Project"
              linkText={project.caseStudy ? 'Read case study' : 'View concept'}
              showStatus
              headingLevel={2}
            />
          ))}
        </Container>
      </section>
      <Section size="lg" className="work-outro" aria-labelledby="work-outro-title">
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
