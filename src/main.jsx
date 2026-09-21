import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import '@fontsource-variable/space-grotesk/wght.css'
import '@fontsource-variable/dm-sans/wght.css'
import './styles/reset.css'
import './styles/tokens.css'
import './styles/typography.css'
import './styles/global.css'
import './styles/utilities.css'
import './styles/transitions.css'
import './styles/components.css'
import './styles/pages.css'
import './styles/styleguide.css'
import './styles/home.css'
import './styles/services.css'
import './styles/about.css'
import './styles/contact.css'
import './styles/work.css'
import './styles/case-study.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
