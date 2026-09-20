import { Container, Section, Stack } from '../components/layout/Primitives.jsx'
import { SectionLabel } from '../components/ui/index.jsx'
import { services } from '../data/services.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Services() {
  usePageMeta({ title: 'Services', path: '/services' })
  return (
    <Section>
      <Container>
        <Stack className="page-intro">
          <SectionLabel>Capabilities</SectionLabel>
          <h1>Services</h1>
          <p className="type-body-large text-muted">A starting outline of how the studio can help.</p>
        </Stack>
        <ul className="service-list">
          {services.map((service) => (
            <li key={service.id}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
