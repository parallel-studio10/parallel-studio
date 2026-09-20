import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import { Container, Inline, Stack } from './Primitives.jsx'
import Wordmark from '../ui/Wordmark.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div className="footer-top">
          <Stack className="footer-intro">
            <p className="footer-name"><Wordmark /></p>
            <p>{site.descriptor}</p>
            {site.availability && <p className="text-muted">{site.availability}</p>}
          </Stack>
          <div className="footer-links">
            <nav aria-label="Footer navigation">
              <Inline className="footer-nav">
                {site.navigation.map(({ label, to }) => <Link key={to} to={to}>{label}</Link>)}
              </Inline>
            </nav>
            {site.socialLinks.length > 0 && <nav aria-label="Social links">
              <Inline className="footer-nav">
                {site.socialLinks.map(({ label, url }) => <a key={url} href={url} rel="noreferrer" target="_blank">{label}</a>)}
              </Inline>
            </nav>}
          </div>
        </div>
        <div className="footer-bottom">
          <p>Founded by<br /><strong>{site.founders}</strong></p>
          <p>Location<br /><strong>{site.location}</strong></p>
          <p>Project enquiries<br />
            {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : <Link to="/contact">Contact the studio <span aria-hidden="true">↗</span></Link>}
          </p>
          <small>© {new Date().getFullYear()} {site.name}</small>
        </div>
      </Container>
    </footer>
  )
}
