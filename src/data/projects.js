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
  {
    slug: 'chitkara-student-portal-redesign',
    title: 'Chitkara Student Portal Redesign',
    year: null,
    category: 'Student Portal Redesign',
    type: 'Independent Redesign Concept',
    description: 'An independent redesign concept that organizes a student dashboard around the information needed day to day.',
    services: ['Information Architecture', 'UI/UX', 'Responsive Design'],
    featured: true,
    cover: null,
    theme: 'stone',
    disclaimer: 'This project is an independent redesign concept and is not an official Chitkara University product or endorsement.',
    caseStudy: caseStudies['chitkara-student-portal-redesign'],
  },
  {
    slug: 'case-zero',
    title: 'CASE//ZERO',
    year: null,
    category: 'Interactive Product Exploration',
    type: 'Independent product concept',
    description: 'An investigation game concept that evolved from a terminal-only idea into a more guided forensic interface.',
    services: ['Product Thinking', 'Interaction Design', 'UX Iteration'],
    featured: true,
    cover: null,
    theme: 'paper',
    caseStudy: caseStudies['case-zero'],
  },
  {
    slug: 'dental-clinic-concept',
    title: 'Dental Clinic Concept',
    year: null,
    category: 'Independent Concept',
    type: 'Independent Concept',
    description: 'An independent commercial website concept for a dental clinic. The design and case study are in development.',
    services: [],
    featured: false,
    cover: null,
    theme: 'stone',
    status: 'Concept in development',
    disclaimer: 'This is an independent concept project created to explore a commercial website direction. It was not commissioned by a dental clinic.',
    caseStudy: null,
  },
  {
    slug: 'restaurant-cafe-concept',
    title: 'Restaurant / Cafe Concept',
    year: null,
    category: 'Independent Concept',
    type: 'Independent Concept',
    description: 'An independent commercial website concept for a restaurant or cafe. The design and case study are in development.',
    services: [],
    featured: false,
    cover: null,
    theme: 'paper',
    status: 'Concept in development',
    disclaimer: 'This is an independent concept project created to explore a commercial website direction. It was not commissioned by a restaurant or cafe.',
    caseStudy: null,
  },
]

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug)

export function getNextProject(project) {
  const index = projects.findIndex((item) => item.slug === project.slug)
  return index < 0 ? null : projects[(index + 1) % projects.length]
}
