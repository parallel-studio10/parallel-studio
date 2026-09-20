import { Container, Section, Stack } from '../components/layout/Primitives.jsx'
import { SectionLabel } from '../components/ui/index.jsx'
import { site } from '../data/site.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Contact() {
  usePageMeta({ title: 'Contact', path: '/contact' })
  return (
    <Section>
      <Container>
        <Stack className="page-intro">
          <SectionLabel>Project enquiries</SectionLabel>
          <h1>Contact</h1>
          <p className="type-body-large text-muted">The enquiry channel is being prepared.</p>
          {site.email && <p><a href={`mailto:${site.email}`}>{site.email}</a></p>}
        </Stack>
        <section className="enquiry-outline" aria-labelledby="enquiry-heading">
          <h2 id="enquiry-heading">When you get in touch</h2>
          <p>Share a short outline of your business, what you need, and your intended timeline. We’ll use this structure for the future enquiry form.</p>
        </section>
      </Container>
    </Section>
  )
}
