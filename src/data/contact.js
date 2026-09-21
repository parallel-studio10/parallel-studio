export const projectTypes = [
  { value: 'business-websites', label: 'New Business Website' },
  { value: 'landing-pages', label: 'Landing Page' },
  { value: 'website-redesign', label: 'Website Redesign' },
  { value: 'ongoing-support', label: 'Ongoing Support' },
  { value: 'custom-web-work', label: 'Digital Product / Custom Web Work' },
  { value: 'not-sure', label: 'Not Sure Yet' },
]

export const projectGoals = [
  'Generate enquiries',
  'Present the business professionally',
  'Sell products or services',
  'Improve an existing experience',
  'Launch something new',
  'Make information easier to find',
]

export const budgetOptions = {
  currency: 'INR',
  choices: [
    { value: 'under-15000', label: 'Under ₹15,000' },
    { value: '15000-30000', label: '₹15,000–₹30,000' },
    { value: '30000-60000', label: '₹30,000–₹60,000' },
    { value: '60000-100000', label: '₹60,000–₹1,00,000' },
    { value: 'over-100000', label: '₹1,00,000+' },
    { value: 'not-sure', label: 'Not sure yet' },
  ],
}

export const timelineOptions = [
  { value: 'asap', label: 'As soon as practical' },
  { value: 'within-1-month', label: 'Within 1 month' },
  { value: '1-2-months', label: '1–2 months' },
  { value: '2-3-months', label: '2–3 months' },
  { value: 'flexible', label: 'Flexible' },
  { value: 'not-sure', label: 'Not sure yet' },
]

export const referralOptions = [
  { value: 'referral', label: 'Referral' },
  { value: 'social', label: 'Social media' },
  { value: 'search', label: 'Search' },
  { value: 'project', label: 'Saw one of your projects' },
  { value: 'platform', label: 'Freelance platform' },
  { value: 'other', label: 'Other' },
]

export const contactSteps = [
  'We review the details you share.',
  'If the project looks like a fit, we continue the conversation and clarify what it needs.',
  'Once the scope is clear, we prepare a proposed structure, timeline and quote.',
  'Work begins after project terms and an initial payment are agreed.',
]

export const emptyEnquiry = {
  name: '',
  email: '',
  company: '',
  website: '',
  projectType: '',
  description: '',
  goals: [],
  functionality: '',
  budget: '',
  timeline: '',
  referralSource: '',
  companyWebsiteCheck: '',
}
