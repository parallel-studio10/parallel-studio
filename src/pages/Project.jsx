import { useParams } from 'react-router-dom'
import { Container, Section, Stack } from '../components/layout/Primitives.jsx'
import { ProjectMeta, SectionLabel, TextLink } from '../components/ui/index.jsx'
import { getProjectBySlug } from '../data/projects.js'
import usePageMeta from '../hooks/usePageMeta.js'
import NotFound from './NotFound.jsx'

function ProjectDetail({ project }) {
  usePageMeta({ title: project.title, path: `/work/${project.slug}` })
  return (
    <Section>
      <Container>
        <Stack className="page-intro">
          <SectionLabel>Project / case study placeholder</SectionLabel>
          <h1>{project.title}</h1>
          <p className="type-body-large text-muted">Project details are being prepared.</p>
        </Stack>
        <ProjectMeta project={project} />
        <div className="page-tail"><TextLink to="/work">← All work</TextLink></div>
      </Container>
    </Section>
  )
}

export default function Project() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  return project ? <ProjectDetail project={project} /> : <NotFound />
}
