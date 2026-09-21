import { caseStudies } from './caseStudies.js'

export const projects = [
  {
    slug: 'studydump',
    title: 'StudyDump',
    year: '2026',
    category: 'Academic Resource Platform',
    type: 'Independent digital product',
    description: 'A centralized academic platform designed to make course material easier to find, navigate and use.',
    services: ['Product Strategy', 'UI/UX', 'Development'],
    featured: true,
    cover: null,
    theme: 'ink',
    caseStudy: caseStudies.studydump,
  },
]

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)

export function getNextProject(project) {
  if (projects.length < 2) return null
  const index = projects.findIndex((item) => item.slug === project.slug)
  return index < 0 ? null : projects[(index + 1) % projects.length]
}
