import { budgetOptions, projectTypes, referralOptions, timelineOptions } from '../data/contact.js'

const validProjectTypes = new Set(projectTypes.map(({ value }) => value))
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function normalizeWebsite(value) {
  const trimmed = value.trim()
  if (!trimmed) return ''

  try {
    const url = new URL(/^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`)
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname.includes('.') || url.username || url.password) return null
    return url.toString()
  } catch {
    return null
  }
}

export function validateEnquiry(data) {
  const errors = {}
  if (!data.name.trim()) errors.name = 'Enter your name.'
  if (!emailPattern.test(data.email.trim())) errors.email = 'Enter a valid email address.'
  if (data.website.trim() && !normalizeWebsite(data.website)) errors.website = 'Enter a valid website URL.'
  if (!validProjectTypes.has(data.projectType)) errors.projectType = 'Choose the type of project.'
  if (!data.description.trim()) errors.description = 'Tell us a little about the project.'
  return errors
}

export function prepareEnquiry(data) {
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    company: data.company.trim(),
    website: normalizeWebsite(data.website) || '',
    projectType: data.projectType,
    description: data.description.trim(),
    goals: data.goals,
    functionality: data.functionality.trim(),
    budget: data.budget,
    budgetCurrency: data.budget ? 'INR' : '',
    timeline: data.timeline,
    referralSource: data.referralSource,
  }
}

export function buildEnquiryEmail(data, email) {
  const labelFor = (options, value) => options.find((option) => option.value === value)?.label || value
  const lines = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    ...(data.company ? [`Company or brand: ${data.company}`] : []),
    ...(data.website ? [`Existing website: ${data.website}`] : []),
    `Project type: ${labelFor(projectTypes, data.projectType)}`,
    '',
    'About the project:',
    data.description,
    ...(data.goals.length ? [`Goals: ${data.goals.join(', ')}`] : []),
    ...(data.functionality ? [`Specific functionality: ${data.functionality}`] : []),
    ...(data.budget ? [`Budget range: ${labelFor(budgetOptions.choices, data.budget)} (${data.budgetCurrency})`] : []),
    ...(data.timeline ? [`Timeline: ${labelFor(timelineOptions, data.timeline)}`] : []),
    ...(data.referralSource ? [`Found PARALLEL through: ${labelFor(referralOptions, data.referralSource)}`] : []),
  ]

  return `mailto:${email}?subject=${encodeURIComponent(`Project enquiry — ${data.projectType}`)}&body=${encodeURIComponent(lines.join('\n'))}`
}

export async function submitProjectEnquiry(data, { endpoint, preview = false, fetcher = fetch } = {}) {
  if (!endpoint) {
    if (!preview) throw new Error('Project enquiry submission is not configured.')
    await new Promise((resolve) => setTimeout(resolve, 500))
    return { status: 'preview' }
  }

  const response = await fetcher(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) throw new Error('Project enquiry could not be sent.')
  return { status: 'sent' }
}
