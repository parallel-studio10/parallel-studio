import { Container, Section, Stack } from '../components/layout/Primitives.jsx'
import ProjectList from '../components/project/ProjectList.jsx'
import { SectionLabel } from '../components/ui/index.jsx'
import { projects } from '../data/projects.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Work() {
  usePageMeta({ title: 'Work', path: '/work' })
  return (
    <Section>
      <Container>
        <Stack className="page-intro">
          <SectionLabel>Selected work</SectionLabel>
          <h1>Work</h1>
          <p className="type-body-large text-muted">A working index of projects. Case studies will be developed in a later milestone.</p>
        </Stack>
        <ProjectList projects={projects} />
      </Container>
    </Section>
  )
}
