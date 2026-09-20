export function Container({ className = '', children, ...props }) {
  return <div className={`container ${className}`.trim()} {...props}>{children}</div>
}

export function Section({ size = 'md', tone = 'light', className = '', children, ...props }) {
  return <section className={`section section--${size} ${tone === 'dark' ? 'section--dark' : ''} ${className}`.trim()} {...props}>{children}</section>
}

export function Grid({ className = '', children, ...props }) {
  return <div className={`grid ${className}`.trim()} {...props}>{children}</div>
}

export function Stack({ className = '', children, ...props }) {
  return <div className={`stack ${className}`.trim()} {...props}>{children}</div>
}

export function Inline({ className = '', children, ...props }) {
  return <div className={`inline ${className}`.trim()} {...props}>{children}</div>
}
