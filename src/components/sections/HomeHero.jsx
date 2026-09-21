import { Container } from '../layout/Primitives.jsx'
import { Button, Divider, SectionLabel, TextLink } from '../ui/index.jsx'
import { homeContent } from '../../data/home.js'
import { site } from '../../data/site.js'

export default function HomeHero() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <Container className="home-hero__inner">
          <div className="home-hero__topline">
            <SectionLabel>{site.descriptor}</SectionLabel>
            <p className="type-meta">{site.brandLine}</p>
          </div>
          <h1 id="home-title" className="home-hero__headline">
            {homeContent.hero.headline.map((line) => <span key={line}>{line}</span>)}
          </h1>
          <div className="home-hero__divider">
            <Divider paired />
          </div>
        </Container>
      </section>
      <section className="home-hero__followup" aria-label="Studio introduction">
        <Container className="home-hero__bottom-grid">
          <p className="home-hero__index">PARALLEL / {site.location}</p>
          <div className="home-hero__intro">
            <p className="type-body-large">{homeContent.hero.introduction}</p>
            <div className="home-hero__actions">
              <Button href="#selected-work" arrow>View Selected Work</Button>
              <TextLink to="/contact" arrow>Start a Project</TextLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
