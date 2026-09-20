import { Container, Section } from '../layout/Primitives.jsx'
import { SectionLabel } from '../ui/index.jsx'
import { homeContent } from '../../data/home.js'

export default function ProcessPreview() {
  return (
    <Section size="lg" className="home-process" aria-labelledby="home-process-title">
      <Container>
        <div className="home-section-heading">
          <SectionLabel number="03">Process</SectionLabel>
          <h2 id="home-process-title">From first conversation to launch.</h2>
          <p>A clear path, with the same people close to the work.</p>
        </div>
        <ol className="home-process__steps">
          {homeContent.process.map((step, index) => (
            <li key={step.id}>
              <span className="home-process__number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
