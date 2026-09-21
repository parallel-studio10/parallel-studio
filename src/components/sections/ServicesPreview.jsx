import { Link } from 'react-router-dom'
import { Container, Section } from '../layout/Primitives.jsx'
import { SectionLabel, TextLink } from '../ui/index.jsx'
import { services } from '../../data/services.js'

export default function ServicesPreview() {
  return (
    <Section className="home-services" aria-labelledby="home-services-title">
      <Container>
        <div className="home-section-heading">
          <SectionLabel number="02">Services</SectionLabel>
          <h2 id="home-services-title">What we do.</h2>
          <p>From a first website to a more considered next version.</p>
        </div>
        <ol className="home-services__list">
          {services.map((service) => (
            <li key={service.id}>
              <Link className="home-service-row" to={`/services#${service.id}`}>
                <span className="home-service-row__number">{service.number}</span>
                <h3>{service.name}</h3>
                <p>{service.shortDescription}</p>
                <span className="action-arrow" aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ol>
        <TextLink to="/services" arrow>Explore Services</TextLink>
      </Container>
    </Section>
  )
}
