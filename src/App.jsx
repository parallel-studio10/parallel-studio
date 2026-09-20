import { Route, Routes } from 'react-router-dom'
import PageShell from './components/layout/PageShell.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Project from './pages/Project.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import StyleGuide from './pages/StyleGuide.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguide" element={<StyleGuide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageShell>
  )
}
