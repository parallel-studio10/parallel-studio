import { useSearchParams } from 'react-router-dom'
import { Container, Section } from '../components/layout/Primitives.jsx'
import ProjectEnquiryForm from '../components/contact/ProjectEnquiryForm.jsx'
import { SectionLabel } from '../components/ui/index.jsx'
import { contactSteps } from '../data/contact.js'
import { site } from '../data/site.js'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Contact() {
  const [searchParams] = useSearchParams()
  usePageMeta({
    title: 'Start a Project',
    description: 'Tell PARALLEL about your website, redesign or digital project and start a conversation with the studio.',
    path: '/contact',
  })

  return (
    <>
      <Section className="contact-hero" aria-labelledby="contact-title">
        <Container>
          <div className="contact-hero__top"><SectionLabel>Project enquiries / PARALLEL</SectionLabel><span className="type-meta">New websites / Redesigns / Digital work</span></div>
          <h1 id="contact-title">Tell us what you’re working on.</h1>
          <div className="contact-hero__bottom"><p className="type-body-large">Whether you need a new website, a redesign or help improving an existing digital experience, tell us a little about the project and we’ll take it from there.</p><p>You don’t need a perfect brief. Start with what you know.</p></div>
        </Container>
      </Section>

      <Section className="contact-intake" aria-labelledby="contact-form-title">
        <Container className="contact-intake__grid">
          <div className="contact-intake__intro"><SectionLabel number="01">The enquiry</SectionLabel><h2 id="contact-form-title">Start with the essentials.</h2><p>Tell us about the business and what you’re trying to make better. We can work through the technical details together.</p></div>
          <ProjectEnquiryForm serviceIntent={searchParams.get('service')} />
        </Container>
      </Section>

      <Section className="contact-followup" aria-labelledby="contact-next-title">
        <Container className="contact-followup__grid">
          <div className="contact-direct"><SectionLabel number="02">Direct contact</SectionLabel><h2>Prefer email?</h2><p>You can send a short outline directly. Include what the business does, what you need and any timeline you have in mind.</p><a className="text-link" href={`mailto:${site.email}`}>{site.email}<span className="action-arrow" aria-hidden="true">↗</span></a></div>
          <div className="contact-next"><SectionLabel number="03">After you reach out</SectionLabel><h2 id="contact-next-title">What happens next.</h2><ol>{contactSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></li>)}</ol></div>
        </Container>
      </Section>

      <Section size="sm" className="contact-faq" aria-labelledby="contact-faq-title">
        <Container className="contact-faq__grid"><SectionLabel number="04">Before you send</SectionLabel><div><h2 id="contact-faq-title">A few useful answers.</h2><p><strong>No complete brief required.</strong> Basic context is enough to begin; defining the details is part of the conversation.</p><p><strong>Remote projects are welcome.</strong> PARALLEL is based in India and can collaborate remotely.</p><p><strong>Quotes follow scope.</strong> We prepare a project cost after understanding the requirements, rather than guessing from a form.</p></div></Container>
      </Section>
    </>
  )
}
