import { Container, Section } from '../layout/Primitives.jsx'
import { SectionLabel } from '../ui/index.jsx'
import MediaFrame from './MediaFrame.jsx'

function NarrativeSection({ section }) {
  return (
    <Section id={section.id} className="case-section case-section--narrative" aria-labelledby={`${section.id}-title`}>
      <Container className="case-section__grid">
        <SectionLabel>{section.label}</SectionLabel>
        <div className="case-section__body">
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          <div className="case-section__reading">
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </Container>
    </Section>
  )
}

function FeatureSection({ section }) {
  return (
    <Section id={section.id} className="case-section case-section--features" aria-labelledby={`${section.id}-title`}>
      <Container>
        <div className="case-section__grid">
          <SectionLabel>{section.label}</SectionLabel>
          <div className="case-section__body">
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <p className="case-section__intro">{section.intro}</p>
          </div>
        </div>
        <ol className="case-features">
          {section.items.map((item, index) => (
            <li key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

function StatementSection({ section }) {
  return (
    <Section id={section.id} size="lg" tone="dark" className="case-statement" aria-labelledby={`${section.id}-title`}>
      <Container>
        <SectionLabel>Key insight</SectionLabel>
        <h2 id={`${section.id}-title`}>{section.text}</h2>
      </Container>
    </Section>
  )
}

function MediaSection({ section, project }) {
  return (
    <Section id={section.id} size="lg" className="case-media" aria-labelledby={`${section.id}-title`}>
      <Container>
        <div className="case-media__heading">
          <SectionLabel>{section.label}</SectionLabel>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
        </div>
        <MediaFrame
          label={section.caption}
          ratio={section.ratio || 'wide'}
          tone={project.theme || 'neutral'}
          src={section.src}
          srcSet={section.srcSet}
          sources={section.sources}
          sizes={section.sizes || '(min-width: 1440px) 1280px, 100vw'}
          alt={section.alt || ''}
          placeholderEyebrow={project.title}
          placeholderTitle={section.title}
        />
      </Container>
    </Section>
  )
}

export default function CaseStudySections({ project }) {
  return project.caseStudy.sections.map((section) => {
    if (section.type === 'narrative') return <NarrativeSection key={section.id} section={section} />
    if (section.type === 'features') return <FeatureSection key={section.id} section={section} />
    if (section.type === 'statement') return <StatementSection key={section.id} section={section} />
    if (section.type === 'media') return <MediaSection key={section.id} section={section} project={project} />
    return null
  })
}
