import { Link } from 'react-router-dom'
import { Container, Section } from '../layout/Primitives.jsx'
import { SectionLabel } from '../ui/index.jsx'
import { process } from '../../data/process.js'

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
          {process.map((step) => (
            <li key={step.id}>
              <span className="home-process__number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link className="text-link home-process__link" to="/services#process">See the Process <span className="action-arrow" aria-hidden="true">↗</span></Link>
      </Container>
    </Section>
  )
}
