import { Link } from 'react-router-dom'
import MediaFrame from './MediaFrame.jsx'
import { SectionLabel, TextLink } from '../ui/index.jsx'

export default function ProjectPreview({ project, number = '01', layout = 'full' }) {
  const projectUrl = `/work/${project.slug}`

  return (
    <article className={`project-preview project-preview--${layout}`}>
      <div className="project-preview__media">
        <MediaFrame
          label={project.cover ? null : `Visual placeholder for ${project.title}`}
          captionHidden
          ratio={layout === 'full' ? 'wide' : 'portrait'}
          tone={project.theme || 'neutral'}
          src={project.cover}
          srcSet={project.coverSrcSet}
          sources={project.coverSources}
          sizes={project.coverSizes || (layout === 'full' ? '(min-width: 1440px) 1280px, 100vw' : '(min-width: 768px) 60vw, 100vw')}
          alt={project.coverAlt || (project.cover ? `Visual from ${project.title}` : '')}
          placeholderEyebrow={`PARALLEL / ${number}`}
          placeholderTitle={project.title}
        />
      </div>
      <div className="project-preview__content">
        <div className="project-preview__heading">
          <SectionLabel number={number}>Selected Work</SectionLabel>
          <h3 className="project-preview__title"><Link to={projectUrl}>{project.title}</Link></h3>
        </div>
        <div className="project-preview__details">
          <p className="type-body-large">{project.description}</p>
          <dl className="project-preview__facts">
            <div><dt>Type</dt><dd>{project.category}</dd></div>
            <div><dt>Year</dt><dd>{project.year || 'To be confirmed'}</dd></div>
            <div><dt>Scope</dt><dd>{project.services?.length ? project.services.join(' / ') : 'Details to follow'}</dd></div>
          </dl>
          <TextLink to={projectUrl} arrow>View project</TextLink>
        </div>
      </div>
    </article>
  )
}
