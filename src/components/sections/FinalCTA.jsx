import { Container, Section } from '../layout/Primitives.jsx'
import { Button, SectionLabel } from '../ui/index.jsx'
import { homeContent } from '../../data/home.js'

export default function FinalCTA() {
  return (
    <Section tone="dark" size="lg" className="home-cta" aria-labelledby="home-cta-title">
      <Container>
        <SectionLabel number="05">Start a Project</SectionLabel>
        <div className="home-cta__content">
          <h2 id="home-cta-title">
            <span>{homeContent.closing.headline}</span>
            <span>{homeContent.closing.response}</span>
          </h2>
          <div className="home-cta__action">
            <p className="type-body-large">{homeContent.closing.description}</p>
            <Button to="/contact" arrow>Start a Project</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
