import test from 'node:test'
import assert from 'node:assert/strict'
import { emptyEnquiry } from '../data/contact.js'
import { buildEnquiryEmail, normalizeWebsite, prepareEnquiry, submitProjectEnquiry, validateEnquiry } from './projectEnquiry.js'

const validEnquiry = {
  ...emptyEnquiry,
  name: ' Ada Lovelace ',
  email: ' ada@example.com ',
  website: 'example.com/work',
  projectType: 'website-redesign',
  description: ' Refresh our business website. ',
  goals: ['Generate enquiries'],
  budget: '30000-60000',
  timeline: '1-2-months',
}

test('required fields and malformed optional website receive specific errors', () => {
  assert.deepEqual(validateEnquiry(emptyEnquiry), {
    name: 'Enter your name.',
    email: 'Enter a valid email address.',
    projectType: 'Choose the type of project.',
    description: 'Tell us a little about the project.',
  })
  assert.equal(validateEnquiry({ ...validEnquiry, website: 'bad url' }).website, 'Enter a valid website URL.')
  assert.equal(validateEnquiry({ ...validEnquiry, email: 'bad@' }).email, 'Enter a valid email address.')
  assert.deepEqual(validateEnquiry(validEnquiry), {})
})

test('website and email draft preserve useful structured enquiry details', () => {
  assert.equal(normalizeWebsite('example.com/work'), 'https://example.com/work')
  assert.equal(normalizeWebsite('https://example.com/'), 'https://example.com/')
  assert.equal(normalizeWebsite('ftp://example.com'), null)
  const prepared = prepareEnquiry(validEnquiry)
  assert.equal(prepared.name, 'Ada Lovelace')
  assert.equal(prepared.website, 'https://example.com/work')
  assert.equal(prepared.budgetCurrency, 'INR')
  const draft = new URL(buildEnquiryEmail(prepared, 'workwithparallel0@gmail.com'))
  assert.equal(draft.protocol, 'mailto:')
  assert.equal(draft.pathname, 'workwithparallel0@gmail.com')
  assert.match(draft.searchParams.get('body'), /Website Redesign/)
  assert.match(draft.searchParams.get('body'), /Generate enquiries/)
  assert.match(draft.searchParams.get('body'), /₹30,000–₹60,000 \(INR\)/)
  const minimal = prepareEnquiry({ ...validEnquiry, company: '', website: '', goals: [], functionality: '', budget: '', timeline: '', referralSource: '' })
  const minimalBody = new URL(buildEnquiryEmail(minimal, 'workwithparallel0@gmail.com')).searchParams.get('body')
  assert.equal(minimalBody, 'Name: Ada Lovelace\nEmail: ada@example.com\nProject type: Website Redesign\n\nAbout the project:\nRefresh our business website.')
})

test('submission reports success only for a successful endpoint response', async () => {
  let captured
  const fetcher = async (url, options) => {
    captured = { url, options }
    return { ok: true }
  }
  const prepared = prepareEnquiry(validEnquiry)
  assert.deepEqual(await submitProjectEnquiry(prepared, { endpoint: '/api/enquiries', fetcher }), { status: 'sent' })
  assert.equal(captured.url, '/api/enquiries')
  assert.equal(captured.options.method, 'POST')
  assert.deepEqual(JSON.parse(captured.options.body), prepared)
  await assert.rejects(submitProjectEnquiry(prepared, { endpoint: '/api/enquiries', fetcher: async () => ({ ok: false }) }))
  await assert.rejects(submitProjectEnquiry(prepared, {}))
})
