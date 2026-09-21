import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../../data/site.js'
import { Container } from '../layout/Primitives.jsx'
import Wordmark from '../ui/Wordmark.jsx'

function ThemeIcon({ theme }) {
  if (theme === 'dark') {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

export default function Header({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  const handleMenuKeyDown = (event) => {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu()
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleMenuKeyDown}>
      <Container className="header-inner">
        <a className="site-mark" href={site.logoUrl} onClick={closeMenu} aria-label={`${site.shortName}, home`}>
          <Wordmark image />
        </a>
        <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation" data-lenis-prevent>
          {site.navigation.map(({ label, to }) => (
            <NavLink key={to} to={to} onClick={closeMenu} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
              {label}
            </NavLink>
          ))}
          <NavLink to="/contact" onClick={closeMenu} className="nav-cta">Start a Project <span className="action-arrow" aria-hidden="true">↗</span></NavLink>
        </nav>
        <div className="header-controls">
          <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <span className="theme-toggle__icon" aria-hidden="true"><ThemeIcon theme={theme} /></span>
          </button>
          <button
            className="menu-toggle"
            ref={menuButtonRef}
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </Container>
    </header>
  )
}
