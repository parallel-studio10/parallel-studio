import { Container, Section } from '../layout/Primitives.jsx'
import { Button, SectionLabel, TextLink } from '../ui/index.jsx'
import { services, projectFoundations, serviceFaqs } from '../../data/services.js'
import { process } from '../../data/process.js'
import { team } from '../../data/team.js'

function ServiceRow({ service }) {
  return (
    <li className="services-offering" id={service.id} tabIndex="-1">
      <span className="services-offering__number">{service.number} / 04</span>
      <div className="services-offering__main">
        <h3>{service.name}</h3>
        <p className="services-offering__lead">{service.description}</p>
        <TextLink to="/contact" arrow>Discuss this service</TextLink>
      </div>
      <div className="services-offering__details">
        <div><h4>Who it is for</h4><p>{service.audience}</p></div>
        <div><h4>The problem</h4><p>{service.problem}</p></div>
        <div>
          <h4>Possible scope</h4>
          <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="services-offering__scope-note">Final inclusions depend on the agreed scope.</p>
        </div>
        <div><h4>First step</h4><p>{service.nextStep}</p></div>
        {service.relatedProject && <TextLink to={service.relatedProject.to} arrow>{service.relatedProject.label}</TextLink>}
      </div>
    </li>
  )
}

export default function ServicesContent() {
  return (
    <>
      <Section className="services-hero" aria-labelledby="services-title">
        <Container>
          <div className="services-hero__top"><SectionLabel>Services / PARALLEL</SectionLabel><span className="type-meta">Independent digital studio</span></div>
          <h1 id="services-title">Websites built around the business, not a template.</h1>
          <div className="services-hero__bottom">
            <p className="type-body-large">We work with businesses to plan, design and build thoughtful websites that are clear, responsive and made for real use.</p>
            <div className="services-hero__actions"><Button to="/contact" arrow>Start a Project</Button><TextLink to="/work" arrow>View Work</TextLink></div>
          </div>
        </Container>
      </Section>

      <Section className="services-core" aria-labelledby="services-core-title">
        <Container>
          <div className="services-section-heading">
            <SectionLabel number="01">What we offer</SectionLabel>
            <div><h2 id="services-core-title">Four ways we can help.</h2><p>Each project is shaped around what the business needs. These are the core ways we work.</p></div>
          </div>
          <ol className="services-offerings">{services.map((service) => <ServiceRow key={service.id} service={service} />)}</ol>
        </Container>
      </Section>

      <Section className="services-foundations" aria-labelledby="services-foundations-title">
        <Container>
          <div className="services-section-heading">
            <SectionLabel number="02">The foundation</SectionLabel>
            <div><h2 id="services-foundations-title">Built into every project.</h2><p>Good fundamentals should be part of the work, whatever the size of the website.</p></div>
          </div>
          <ul className="services-foundations__grid">
            {projectFoundations.map((item, index) => (
              <li key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.description}</p></li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="services-process" id="process" tabIndex="-1" aria-labelledby="services-process-title">
        <Container>
          <div className="services-section-heading">
            <SectionLabel number="03">How it works</SectionLabel>
            <div><h2 id="services-process-title">A clear path from brief to launch.</h2><p>You stay involved at the decisions that matter. Feedback and revisions happen at defined stages, so the project keeps moving with shared direction.</p></div>
          </div>
          <ol className="services-process__list">
            {process.map((step) => (
              <li key={step.id}>
                <span className="services-process__number">{step.number}</span>
                <h3>{step.title}</h3>
                <div><p>{step.description}</p><p>{step.detail}</p></div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="services-studio" aria-labelledby="services-studio-title">
        <Container>
          <div className="services-section-heading">
            <SectionLabel number="04">Working together</SectionLabel>
            <div><h2 id="services-studio-title">A small studio by design.</h2><p>Clients work directly with Sehjal and Sambhav, the people shaping and building the project. There is no account-manager layer between the conversation and the work.</p></div>
          </div>
          <div className="services-studio__grid">
            <div className="services-studio__people">
              {team.map((person) => <div key={person.id}><h3>{person.name}</h3><p>{person.focus.join(' / ')}</p></div>)}
              <p>Roles flex with the project. We work together across planning, development and delivery.</p>
            </div>
            <div className="services-studio__terms">
              <div><h3>Clear scope first.</h3><p>Deliverables, timeline, requirements and feedback stages are agreed before work begins. Content and brand assets can be supplied by you or discussed as part of that scope.</p></div>
              <div><h3>Technology follows the project.</h3><p>We choose an implementation that fits the website, from a lightweight site to a more involved build. Our focus is web design and development, rather than a full-service marketing offering.</p></div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="services-faq" aria-labelledby="services-faq-title">
        <Container>
          <div className="services-section-heading">
            <SectionLabel number="05">Good to know</SectionLabel>
            <div><h2 id="services-faq-title">Common questions.</h2><p>A few practical answers before we start a conversation.</p></div>
          </div>
          <div className="services-faq__list">
            {serviceFaqs.map(({ question, answer }) => (
              <details key={question}><summary><span>{question}</span><span className="services-faq__icon" aria-hidden="true">+</span></summary><p>{answer}</p></details>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="dark" className="services-cta" aria-labelledby="services-cta-title">
        <Container>
          <SectionLabel number="06">Start a project</SectionLabel>
          <div className="services-cta__content">
            <h2 id="services-cta-title">Tell us what you’re building.</h2>
            <div><p>Whether you need a new website, a redesign or help improving an existing one, start by sharing a little about the project.</p><div className="services-cta__actions"><Button to="/contact" arrow>Start a Project</Button><TextLink to="/work" arrow>View Work</TextLink></div></div>
          </div>
        </Container>
      </Section>
    </>
  )
}
