import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { site } from '../../data/site.js'
import { Container } from '../layout/Primitives.jsx'
import Wordmark from '../ui/Wordmark.jsx'

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
        <Link className="site-mark" to="/" onClick={closeMenu} aria-label={`${site.shortName}, home`}>
          <Wordmark />
        </Link>
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
            <span className="theme-toggle__icon" aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
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
