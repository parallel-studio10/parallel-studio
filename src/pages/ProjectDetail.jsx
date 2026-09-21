import { Container, Section } from '../components/layout/Primitives.jsx'
import CaseStudyHero from '../components/project/CaseStudyHero.jsx'
import CaseStudySections from '../components/project/CaseStudySections.jsx'
import NextProject from '../components/project/NextProject.jsx'
import { SectionLabel } from '../components/ui/index.jsx'
import { getNextProject, projects } from '../data/projects.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function ProjectDetail({ project }) {
  const number = String(projects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, '0')
  const nextProject = getNextProject(project)

  usePageMeta({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
    image: project.cover,
    type: 'article',
  })

  return (
    <article className="case-study">
      <CaseStudyHero project={project} number={number} />
      {project.caseStudy ? (
        <CaseStudySections project={project} />
      ) : (
        <Section className="case-pending" aria-labelledby="case-pending-title">
          <Container className="case-pending__inner">
            <SectionLabel>Concept in development</SectionLabel>
            <div>
              <h2 id="case-pending-title">Full case study coming soon.</h2>
              <p>The design direction and project imagery are still being developed. This page will document the work when there is something concrete to show.</p>
            </div>
          </Container>
        </Section>
      )}
      {nextProject && <NextProject project={nextProject} />}
    </article>
  )
}
