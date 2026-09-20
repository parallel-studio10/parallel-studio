import HomeHero from '../components/sections/HomeHero.jsx'
import SelectedWork from '../components/sections/SelectedWork.jsx'
import StudioStatement from '../components/sections/StudioStatement.jsx'
import ServicesPreview from '../components/sections/ServicesPreview.jsx'
import ProcessPreview from '../components/sections/ProcessPreview.jsx'
import StudioPreview from '../components/sections/StudioPreview.jsx'
import FinalCTA from '../components/sections/FinalCTA.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Home() {
  usePageMeta({ path: '/' })

  return (
    <>
      <HomeHero />
      <SelectedWork />
      <StudioStatement />
      <ServicesPreview />
      <ProcessPreview />
      <StudioPreview />
      <FinalCTA />
    </>
  )
}
