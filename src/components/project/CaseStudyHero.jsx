import { Container, Section } from '../layout/Primitives.jsx'
import { ProjectMeta, SectionLabel, TextLink } from '../ui/index.jsx'
import MediaFrame from './MediaFrame.jsx'

export default function CaseStudyHero({ project, number }) {
  return (
    <Section size="lg" className="case-hero" aria-labelledby="case-title">
      <Container>
        <div className="case-hero__topline">
          <SectionLabel number={number}>{project.caseStudy ? 'Case Study' : 'Independent Concept'}</SectionLabel>
          <TextLink to="/work">← Back to Work</TextLink>
        </div>
        <h1 id="case-title">{project.title}</h1>
        <p className="case-hero__lead">{project.caseStudy?.lead || project.description}</p>
        <ProjectMeta project={project} />
        {project.disclaimer && <p className="case-hero__disclaimer">{project.disclaimer}</p>}
        {project.contributions?.length > 0 && (
          <div className="case-hero__contributions">
            <SectionLabel>Contributions</SectionLabel>
            <dl>
              {project.contributions.map(({ name, roles }) => (
                <div key={name}><dt>{name}</dt><dd>{roles.join(' / ')}</dd></div>
              ))}
            </dl>
          </div>
        )}
        {(project.externalUrl || project.repositoryUrl) && (
          <div className="case-hero__external">
            {project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} site (opens in a new tab)`}>Visit Site ↗</a>}
            {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} repository (opens in a new tab)`}>View Repository ↗</a>}
          </div>
        )}
        <div className="case-hero__media">
          <MediaFrame
            label={project.coverCaption || 'Project imagery is being prepared.'}
            ratio="wide"
            tone={project.theme || 'neutral'}
            src={project.cover}
            srcSet={project.coverSrcSet}
            sources={project.coverSources}
            sizes={project.coverSizes || '(min-width: 1440px) 1280px, 100vw'}
            alt={project.coverAlt || (project.cover ? `Visual from ${project.title}` : '')}
            placeholderEyebrow={`PARALLEL / ${number}`}
            placeholderTitle={project.title}
          />
        </div>
      </Container>
    </Section>
  )
}
