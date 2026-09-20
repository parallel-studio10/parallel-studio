import { Container, Section, Stack } from '../components/layout/Primitives.jsx'
import { SectionLabel, Tag } from '../components/ui/index.jsx'
import { site } from '../data/site.js'
import { team } from '../data/team.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function About() {
  usePageMeta({ title: 'About', path: '/about' })
  return (
    <Section>
      <Container>
        <Stack className="page-intro">
          <SectionLabel>The studio</SectionLabel>
          <h1>About</h1>
          <p className="type-body-large text-muted">{site.description}</p>
        </Stack>
        <div className="team-grid">
          {team.map((member) => (
            <section key={member.id} className="team-member" aria-labelledby={member.id}>
              <h2 id={member.id}>{member.name}</h2>
              <div className="tag-row">{member.focus.map((focus) => <Tag key={focus}>{focus}</Tag>)}</div>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  )
}
