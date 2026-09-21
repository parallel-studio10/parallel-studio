import { useEffect, useRef, useState } from 'react'

const storageKey = 'parallel-theme'

function savedTheme() {
  try {
    const value = window.localStorage.getItem(storageKey)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171c19' : '#f4f2ec')
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => savedTheme() || systemTheme())
  const manualChoice = useRef(Boolean(savedTheme()))

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const followSystem = () => {
      if (!manualChoice.current) setTheme(systemTheme())
    }
    const syncTabs = (event) => {
      if (event.key === storageKey || event.key === null) {
        const saved = savedTheme()
        manualChoice.current = Boolean(saved)
        setTheme(saved || systemTheme())
      }
    }
    media.addEventListener('change', followSystem)
    window.addEventListener('storage', syncTabs)
    return () => {
      media.removeEventListener('change', followSystem)
      window.removeEventListener('storage', syncTabs)
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    manualChoice.current = true
    setTheme(next)
    try { window.localStorage.setItem(storageKey, next) } catch { /* The choice lasts for this visit. */ }
  }

  return { theme, toggleTheme }
}
