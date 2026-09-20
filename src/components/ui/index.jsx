import { Link } from 'react-router-dom'

export function Button({ variant = 'primary', to, href, className = '', children, disabled = false, arrow = false, ...props }) {
  const classes = `button button--${variant} ${className}`.trim()
  const content = <>{children}{arrow && <span className="action-arrow" aria-hidden="true">↗</span>}</>
  if (disabled && (to || href)) {
    return <span className={classes} aria-disabled="true">{content}</span>
  }
  if (to) {
    return <Link className={classes} to={to} {...props}>{content}</Link>
  }
  if (href) {
    return <a className={classes} href={href} {...props}>{content}</a>
  }
  return <button className={classes} type="button" disabled={disabled} {...props}>{content}</button>
}

export function TextLink({ to, href, className = '', children, arrow = false, ...props }) {
  const classes = `text-link ${className}`.trim()
  const content = <>{children}{arrow && <span className="action-arrow" aria-hidden="true">↗</span>}</>
  if (to) return <Link className={classes} to={to} {...props}>{content}</Link>
  return <a className={classes} href={href} {...props}>{content}</a>
}

export function Tag({ children, className = '' }) {
  return <span className={`tag ${className}`.trim()}>{children}</span>
}

export function SectionLabel({ children, number, className = '' }) {
  return <span className={`section-label ${className}`.trim()}>{number && <><span className="section-label__number">{number}</span><span aria-hidden="true"> / </span></>}{children}</span>
}

export function Divider({ paired = false }) {
  if (paired) return <div className="divider divider--paired" role="separator" aria-orientation="horizontal"><span /><span /></div>
  return <hr className="divider" />
}

export function ProjectMeta({ project }) {
  const items = [
    ['Category', project.category],
    ['Year', project.year],
    ['Services', project.services?.length ? project.services.join(' / ') : null],
    ['Status', project.status],
  ].filter(([, value]) => value)

  return (
    <dl className="project-meta">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}
