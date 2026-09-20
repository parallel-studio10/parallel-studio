import { Container, Section } from '../layout/Primitives.jsx'
import { SectionLabel, TextLink } from '../ui/index.jsx'
import { homeContent } from '../../data/home.js'
import { team } from '../../data/team.js'

export default function StudioPreview() {
  return (
    <Section size="lg" className="home-studio" aria-labelledby="home-studio-title">
      <Container>
        <div className="home-studio__intro">
          <SectionLabel number="04">Studio</SectionLabel>
          <div>
            <h2 id="home-studio-title">{homeContent.studio.headline}</h2>
            <p className="type-body-large">{homeContent.studio.description}</p>
          </div>
        </div>
        <div className="home-studio__people">
          {team.map((member, index) => (
            <article className="home-founder" key={member.id}>
              <span className="home-founder__number">{String(index + 1).padStart(2, '0')} / Founder</span>
              <h3>{member.name}</h3>
              <ul aria-label={`${member.name}'s areas of focus`}>
                {member.focus.map((focus) => <li key={focus}>{focus}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <TextLink to="/about" arrow>About the studio</TextLink>
      </Container>
    </Section>
  )
}
