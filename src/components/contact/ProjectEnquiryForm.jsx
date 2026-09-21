import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { budgetOptions, emptyEnquiry, projectGoals, projectTypes, referralOptions, timelineOptions } from '../../data/contact.js'
import { site } from '../../data/site.js'
import { buildEnquiryEmail, prepareEnquiry, submitProjectEnquiry, validateEnquiry } from '../../lib/projectEnquiry.js'

const submissionMode = site.contactEndpoint ? 'endpoint' : import.meta.env.DEV ? 'preview' : 'email'

function FieldError({ field, errors }) {
  return errors[field] ? <span className="contact-form__error" id={`${field}-error`}>{errors[field]}</span> : null
}

function TextField({ id, label, required = false, hint, errors, value, onChange, ...inputProps }) {
  const hintId = hint ? `${id}-hint` : null
  const errorId = errors[id] ? `${id}-error` : null
  return (
    <div className="contact-form__field">
      <label htmlFor={id}>{label}<span>{required ? 'Required' : 'Optional'}</span></label>
      {hint && <p className="contact-form__hint" id={hintId}>{hint}</p>}
      <input id={id} name={id} value={value} onChange={onChange} required={required} aria-invalid={Boolean(errors[id])} aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined} {...inputProps} />
      <FieldError field={id} errors={errors} />
    </div>
  )
}

function TextAreaField({ id, label, required = false, hint, errors, value, onChange, rows = 5, maxLength = 1200 }) {
  const hintId = hint ? `${id}-hint` : null
  const errorId = errors[id] ? `${id}-error` : null
  return (
    <div className="contact-form__field">
      <label htmlFor={id}>{label}<span>{required ? 'Required' : 'Optional'}</span></label>
      {hint && <p className="contact-form__hint" id={hintId}>{hint}</p>}
      <textarea id={id} name={id} rows={rows} maxLength={maxLength} value={value} onChange={onChange} required={required} aria-invalid={Boolean(errors[id])} aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined} />
      <FieldError field={id} errors={errors} />
    </div>
  )
}

function SelectField({ id, label, hint, options, value, onChange }) {
  return (
    <div className="contact-form__field">
      <label htmlFor={id}>{label}<span>Optional</span></label>
      {hint && <p className="contact-form__hint" id={`${id}-hint`}>{hint}</p>}
      <select id={id} name={id} value={value} onChange={onChange} aria-describedby={hint ? `${id}-hint` : undefined}>
        <option value="">Select if you know</option>
        {options.map(({ value: optionValue, label: optionLabel }) => <option key={optionValue} value={optionValue}>{optionLabel}</option>)}
      </select>
    </div>
  )
}

export default function ProjectEnquiryForm({ serviceIntent }) {
  const [data, setData] = useState(() => ({ ...emptyEnquiry, projectType: projectTypes.some(({ value }) => value === serviceIntent) ? serviceIntent : '' }))
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [draftUrl, setDraftUrl] = useState('')
  const formRef = useRef(null)
  const resultRef = useRef(null)

  useEffect(() => {
    if (projectTypes.some(({ value }) => value === serviceIntent)) {
      setData((current) => ({ ...current, projectType: serviceIntent }))
    }
  }, [serviceIntent])

  useEffect(() => {
    if (['sent', 'preview', 'draft', 'error'].includes(status)) resultRef.current?.focus()
  }, [status])

  const update = (field, value) => {
    setData((current) => ({ ...current, [field]: value }))
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
    if (status === 'draft' || status === 'error') setStatus('idle')
  }

  const updateText = (event) => update(event.target.name, event.target.value)
  const updateGoal = (goal) => {
    const goals = data.goals.includes(goal) ? data.goals.filter((item) => item !== goal) : [...data.goals, goal]
    update('goals', goals)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'sending') return

    const nextErrors = validateEnquiry(data)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      const firstField = Object.keys(nextErrors)[0]
      formRef.current?.querySelector(`[name="${firstField}"]`)?.focus()
      return
    }

    const payload = prepareEnquiry(data)
    if (data.companyWebsiteCheck) return

    if (submissionMode === 'email') {
      setDraftUrl(buildEnquiryEmail(payload, site.email))
      setStatus('draft')
      return
    }

    setStatus('sending')
    try {
      const result = await submitProjectEnquiry(payload, { endpoint: site.contactEndpoint, preview: submissionMode === 'preview' })
      setStatus(result.status)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent' || status === 'preview') {
    return (
      <div className="contact-result" role="status" tabIndex="-1" ref={resultRef}>
        <span className="type-label">{status === 'sent' ? 'Project enquiry' : 'Development preview'}</span>
        <h3>{status === 'sent' ? 'Enquiry received.' : 'Preview complete.'}</h3>
        <p>{status === 'sent' ? 'Thanks for reaching out. We’ll review the details and get back to you using the email you provided.' : 'Your details passed validation. This preview did not send an enquiry. Connect a submission endpoint before publishing online submissions.'}</p>
        <div className="contact-result__actions"><Link className="text-link" to="/work">View Our Work <span aria-hidden="true">↗</span></Link>{status === 'preview' && <button type="button" className="text-link contact-result__reset" onClick={() => setStatus('idle')}>Edit enquiry <span aria-hidden="true">↗</span></button>}</div>
      </div>
    )
  }

  return (
    <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={status === 'sending'}>
      {status === 'error' && <div className="contact-form__notice contact-form__notice--error" role="alert" tabIndex="-1" ref={resultRef}><h3>Something went wrong.</h3><p>Your enquiry could not be sent. Your answers are still here, so you can try again or email us at <a href={`mailto:${site.email}`}>{site.email}</a>.</p></div>}
      {status === 'draft' && <div className="contact-form__notice" role="status" tabIndex="-1" ref={resultRef}><h3>Email draft ready.</h3><p>Your enquiry has not been sent yet. Open the prepared draft and send it from your email app.</p><a className="text-link" href={draftUrl}>Open email draft <span aria-hidden="true">↗</span></a></div>}
      {submissionMode === 'preview' && <p className="contact-form__mode">Development preview: submitting here checks the form but does not send an enquiry. For a real enquiry, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>}
      {submissionMode === 'email' && <p className="contact-form__mode">Online sending is not configured yet. After completing the form, you can open a prepared email draft and send it from your email app.</p>}

      <div className="contact-form__group">
        <p className="contact-form__group-label">01 / A little about you</p>
        <div className="contact-form__pair">
          <TextField id="name" label="Your name" required errors={errors} value={data.name} onChange={updateText} type="text" autoComplete="name" maxLength={120} />
          <TextField id="email" label="Email" required errors={errors} value={data.email} onChange={updateText} type="email" autoComplete="email" maxLength={254} />
          <TextField id="company" label="Company or brand" hint="If applicable." errors={errors} value={data.company} onChange={updateText} type="text" autoComplete="organization" maxLength={160} />
          <TextField id="website" label="Existing website" hint="A domain is enough; you can leave off https://." errors={errors} value={data.website} onChange={updateText} type="text" inputMode="url" autoComplete="url" maxLength={2048} />
        </div>
      </div>

      <fieldset className="contact-form__group contact-form__choices" aria-invalid={Boolean(errors.projectType)} aria-describedby={errors.projectType ? 'projectType-error' : undefined}>
        <legend><span className="contact-form__group-label">02 / The project</span><span className="contact-form__legend-title">What kind of project is it? <small>Required</small></span></legend>
        <p className="contact-form__hint">Choose the closest match. “Not Sure Yet” is completely fine.</p>
        <div className="contact-form__option-grid">
          {projectTypes.map(({ value, label }) => (
            <label className="contact-form__option" key={value}><input type="radio" name="projectType" value={value} checked={data.projectType === value} onChange={() => update('projectType', value)} required /><span>{label}</span></label>
          ))}
        </div>
        <FieldError field="projectType" errors={errors} />
      </fieldset>

      <div className="contact-form__group">
        <p className="contact-form__group-label">03 / What you have in mind</p>
        <TextAreaField id="description" label="Tell us about the project" required hint="What does the business do, what do you need and what would make this project successful?" errors={errors} value={data.description} onChange={updateText} rows={7} />
        <fieldset className="contact-form__goals">
          <legend>What should the website help you achieve? <small>Optional</small></legend>
          <p className="contact-form__hint">Pick any that feel relevant.</p>
          <div className="contact-form__goal-grid">
            {projectGoals.map((goal) => <label className="contact-form__option" key={goal}><input type="checkbox" name="goals" value={goal} checked={data.goals.includes(goal)} onChange={() => updateGoal(goal)} /><span>{goal}</span></label>)}
          </div>
        </fieldset>
        <TextAreaField id="functionality" label="Anything specific the website needs to do?" hint="Bookings, payments, enquiry forms, member access, a CMS, integrations or anything else you know about." errors={errors} value={data.functionality} onChange={updateText} rows={3} maxLength={500} />
      </div>

      <div className="contact-form__group">
        <p className="contact-form__group-label">04 / Practical details</p>
        <div className="contact-form__pair">
          <SelectField id="budget" label="Approximate project budget" hint={`An estimate helps us understand scope. It does not lock in a final price. Ranges shown in ${budgetOptions.currency}.`} options={budgetOptions.choices} value={data.budget} onChange={updateText} />
          <SelectField id="timeline" label="When are you hoping to launch?" hint="Timelines depend on scope, content readiness and technical requirements." options={timelineOptions} value={data.timeline} onChange={updateText} />
        </div>
        <SelectField id="referralSource" label="How did you find us?" options={referralOptions} value={data.referralSource} onChange={updateText} />
      </div>

      <div className="contact-form__honeypot" aria-hidden="true"><label htmlFor="companyWebsiteCheck">Leave this field blank</label><input id="companyWebsiteCheck" name="companyWebsiteCheck" type="text" tabIndex="-1" autoComplete="off" value={data.companyWebsiteCheck || ''} onChange={updateText} /></div>

      <div className="contact-form__submit">
        <p>By continuing, you’re sharing these details with PARALLEL so we can respond to your enquiry. You don’t need a perfect brief to start.</p>
        <button className="button button--primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry…' : submissionMode === 'endpoint' ? 'Send Project Enquiry' : submissionMode === 'preview' ? 'Preview Enquiry' : 'Prepare Email Enquiry'}<span className="action-arrow" aria-hidden="true">↗</span></button>
      </div>
    </form>
  )
}
