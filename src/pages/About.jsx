import { Container, Section } from '../components/layout/Primitives.jsx'
import { Button, Divider, SectionLabel, TextLink } from '../components/ui/index.jsx'
import { site } from '../data/site.js'
import { team } from '../data/team.js'
import { capabilities, preferredWork, principles } from '../data/about.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function About() {
  usePageMeta({
    title: 'Studio',
    description: 'Meet PARALLEL, an independent digital studio founded by Sehjal Saxena and Sambhav Jain, working across web design, development and digital products.',
    path: '/about',
  })

  return (
    <>
      <Section className="about-hero" aria-labelledby="about-title">
        <Container>
          <div className="about-hero__top"><SectionLabel>Studio / PARALLEL</SectionLabel><span className="type-meta">Independent digital studio</span></div>
          <h1 id="about-title">Two people. One studio. Design and development moving together.</h1>
          <Divider paired />
          <div className="about-hero__bottom">
            <p className="type-body-large">Founded by Sehjal Saxena and Sambhav Jain, PARALLEL works across product thinking, interface design and development to make websites and digital experiences that are clear, useful and built with care.</p>
            <div className="about-hero__meta"><span>Sehjal Saxena & Sambhav Jain</span><span>Based in {site.location} / Working remotely</span></div>
          </div>
        </Container>
      </Section>

      <Section className="about-story" aria-labelledby="about-story-title">
        <Container className="about-story__grid">
          <SectionLabel number="01">Why we exist</SectionLabel>
          <div>
            <h2 id="about-story-title">One process, not a handoff.</h2>
            <div className="about-story__copy">
              <p>PARALLEL began with a simple idea: design and development work better when they are considered together from the beginning.</p>
              <p>We think through the structure, interface and implementation as parts of the same problem. That helps decisions stay practical, the build stay faithful to the idea and the final website serve the people who use it.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="dark" className="about-model" aria-labelledby="about-model-title">
        <Container>
          <SectionLabel number="02">How we work</SectionLabel>
          <h2 id="about-model-title">Small by design.</h2>
          <div className="about-model__bottom">
            <p className="type-body-large">The people discussing your project are also involved in designing and building it. Communication stays direct, with fewer handoffs between an idea and its execution.</p>
            <p>Both founders stay close to the work. Roles shift with the project, and decisions are made at clear checkpoints with the client rather than disappearing behind an account-manager layer.</p>
          </div>
        </Container>
      </Section>

      <Section className="about-founders" aria-labelledby="about-founders-title">
        <Container>
          <div className="about-section-heading"><SectionLabel number="03">The founders</SectionLabel><h2 id="about-founders-title">The people behind PARALLEL.</h2></div>
          <div className="about-founders__grid">
            {team.map((member, index) => (
              <article key={member.id} className="about-founder" aria-labelledby={`about-${member.id}`}>
                <div className="about-founder__top"><span>{String(index + 1).padStart(2, '0')} / Founder</span><span>PARALLEL</span></div>
                <h3 id={`about-${member.id}`}>{member.name}</h3>
                <div className="about-founder__body"><p className="about-founder__focus">{member.focus.join(' / ')}</p><p>{member.bio}</p></div>
              </article>
            ))}
          </div>
          <p className="about-founders__note">These focus areas are starting points, not separate departments. We contribute across planning, development and delivery as each project needs.</p>
        </Container>
      </Section>

      <Section className="about-principles" aria-labelledby="about-principles-title">
        <Container>
          <div className="about-section-heading"><SectionLabel number="04">Our approach</SectionLabel><h2 id="about-principles-title">How we think about the work.</h2></div>
          <ol className="about-principles__list">
            {principles.map((principle) => (
              <li key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.description}</p></li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="about-capabilities" aria-labelledby="about-capabilities-title">
        <Container>
          <div className="about-section-heading"><SectionLabel number="05">What we bring</SectionLabel><h2 id="about-capabilities-title">From first structure to a working site.</h2></div>
          <div className="about-capabilities__grid">
            {capabilities.map((group, index) => (
              <div key={group.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
            ))}
          </div>
          <p className="about-capabilities__note">Tools change with the work. We choose an approach based on what the website or product actually needs.</p>
          <TextLink to="/services" arrow>Explore Services</TextLink>
        </Container>
      </Section>

      <Section className="about-preference" aria-labelledby="about-preference-title">
        <Container>
          <SectionLabel number="06">The work</SectionLabel>
          <div className="about-preference__grid">
            <h2 id="about-preference-title">The kind of work we enjoy.</h2>
            <div><p>We are drawn to projects where the problem is real and there is room to make the experience clearer.</p><ul>{preferredWork.map((item) => <li key={item}>{item}</li>)}</ul><p className="about-preference__closing">Good collaboration matters as much as the brief. We are open to selected projects and conversations.</p></div>
          </div>
        </Container>
      </Section>

      <Section tone="dark" className="about-cta" aria-labelledby="about-cta-title">
        <Container>
          <SectionLabel number="07">Work with us</SectionLabel>
          <div className="about-cta__content"><h2 id="about-cta-title">Think we would work well together?</h2><div><p>Tell us what you’re working on and we’ll take a look.</p><div className="about-cta__actions"><Button to="/contact" arrow>Start a Project</Button><TextLink to="/work" arrow>View Our Work</TextLink></div></div></div>
        </Container>
      </Section>
    </>
  )
}
