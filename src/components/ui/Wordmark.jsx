import { site } from '../../data/site.js'
import logoImage from '../../assets/parallel-logo-transparent.png'

export default function Wordmark({ stacked = false, image = false, className = '' }) {
  if (image) {
    return (
      <span className={`wordmark wordmark--image ${className}`.trim()} aria-label={site.name}>
        <img src={logoImage} alt="" />
      </span>
    )
  }

  return (
    <span className={`wordmark ${stacked ? 'wordmark--stacked' : ''} ${className}`.trim()} aria-label={site.name}>
      <span className="wordmark__text" aria-hidden="true">
        <span className="wordmark__prefix">PARA</span>
        <span className="wordmark__suffix">LLEL</span>
      </span>
    </span>
  )
}
