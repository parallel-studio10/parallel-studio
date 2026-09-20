import { useLocation } from 'react-router-dom'
import { Container, Section, Stack } from '../components/layout/Primitives.jsx'
import { TextLink } from '../components/ui/index.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  const { pathname } = useLocation()
  usePageMeta({ title: 'Page not found', path: pathname })
  return (
    <Section>
      <Container>
        <Stack className="page-intro">
          <p className="section-label">404</p>
          <h1>Page not found</h1>
          <p className="type-body-large text-muted">This page does not exist.</p>
          <TextLink to="/">Return home</TextLink>
        </Stack>
      </Container>
    </Section>
  )
}
