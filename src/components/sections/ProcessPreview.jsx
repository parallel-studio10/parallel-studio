import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Container, Section } from '../layout/Primitives.jsx'
import { SectionLabel } from '../ui/index.jsx'
import { process } from '../../data/process.js'

gsap.registerPlugin(ScrollTrigger)

export default function ProcessPreview() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      const items = gsap.utils.toArray('.home-process__steps li')
      
      items.forEach((item, index) => {
        const isOdd = index % 2 === 1
        gsap.fromTo(
          item,
          {
            rotateX: 18,
            rotateY: isOdd ? -12 : 12,
            z: -40,
            opacity: 0.7,
            y: 40,
          },
          {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 92%',
              end: 'top 55%',
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          }
        )
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <Section ref={sectionRef} size="lg" className="home-process" aria-labelledby="home-process-title">
      <Container>
        <div className="home-section-heading">
          <SectionLabel number="03">Process</SectionLabel>
          <h2 id="home-process-title">From first conversation to launch.</h2>
          <p>A clear path, with the same people close to the work.</p>
        </div>
        <ol className="home-process__steps home-process__steps--3d">
          {process.map((step) => (
            <li key={step.id} className="process-card-3d">
              <span className="home-process__number">{step.number}</span>
              <div className="process-card-3d__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              <span className="process-card-3d__depth-indicator" aria-hidden="true" />
            </li>
          ))}
        </ol>
        <Link className="text-link home-process__link" to="/services#process">See the Process <span className="action-arrow" aria-hidden="true">↗</span></Link>
      </Container>
    </Section>
  )
}

