import ServicesContent from '../components/sections/ServicesContent.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Services() {
  usePageMeta({
    title: 'Services',
    description: 'Explore PARALLEL’s web design and development services, including business websites, landing pages, website redesigns and ongoing support.',
    path: '/services',
  })
  return <ServicesContent />
}
