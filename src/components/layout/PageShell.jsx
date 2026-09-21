import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../navigation/Header.jsx'
import Footer from './Footer.jsx'

export default function PageShell({ children }) {
  const location = useLocation()
  const mainRef = useRef(null)
  const previousPath = useRef(null)

  useEffect(() => {
    const pathChanged = previousPath.current && previousPath.current !== location.pathname
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (target) {
        target.scrollIntoView()
        target.focus({ preventScroll: true })
      }
    } else if (pathChanged) {
      window.scrollTo(0, 0)
      mainRef.current?.focus({ preventScroll: true })
    }
    previousPath.current = location.pathname
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" ref={mainRef} tabIndex="-1">{children}</main>
      <Footer />
    </div>
  )
}
