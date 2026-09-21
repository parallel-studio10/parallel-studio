import { useEffect, useState } from 'react'

const storageKey = 'parallel-theme'

function savedTheme() {
  try {
    const value = window.localStorage.getItem(storageKey)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function defaultTheme() {
  return 'light'
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171c19' : '#f4f2ec')
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => savedTheme() || defaultTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const syncTabs = (event) => {
      if (event.key === storageKey || event.key === null) {
        const saved = savedTheme()
        setTheme(saved || defaultTheme())
      }
    }
    window.addEventListener('storage', syncTabs)
    return () => {
      window.removeEventListener('storage', syncTabs)
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    try { window.localStorage.setItem(storageKey, next) } catch { /* The choice lasts for this visit. */ }
  }

  return { theme, toggleTheme }
}
