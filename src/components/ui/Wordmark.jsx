import { site } from '../../data/site.js'

export default function Wordmark({ stacked = false, className = '' }) {
  if (stacked) {
    return (
      <span className={`wordmark wordmark--stacked ${className}`.trim()} aria-label={site.name}>
        <span aria-hidden="true">PARA</span>
        <span aria-hidden="true">LLEL</span>
      </span>
    )
  }

  return <span className={`wordmark ${className}`.trim()}>{site.name}</span>
}
