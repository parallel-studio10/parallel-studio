import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import useTheme from '../../hooks/useTheme.js'
import useRouteTransition from '../../hooks/useRouteTransition.js'
import useSmoothScroll from '../../hooks/useSmoothScroll.js'
import Header from '../navigation/Header.jsx'
import Footer from './Footer.jsx'

export default function PageShell({ children }) {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const lenisRef = useSmoothScroll()
  const mainRef = useRef(null)
  const routeRef = useRef(null)
  const previousPath = useRef(null)

  useRouteTransition(routeRef, location.pathname)

  useEffect(() => {
    const pathChanged = previousPath.current && previousPath.current !== location.pathname
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (target) {
        if (lenisRef.current) lenisRef.current.scrollTo(target, { immediate: true })
        else target.scrollIntoView()
        target.focus({ preventScroll: true })
      }
    } else if (pathChanged) {
      if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
      else window.scrollTo(0, 0)
      mainRef.current?.focus({ preventScroll: true })
    }
    previousPath.current = location.pathname
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main id="main-content" ref={mainRef} tabIndex="-1"><div className="route-view" ref={routeRef} key={location.pathname}>{children}</div></main>
      <Footer />
    </div>
  )
}
