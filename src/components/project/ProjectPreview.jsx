import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaFrame from './MediaFrame.jsx'
import { SectionLabel, TextLink } from '../ui/index.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectPreview({ project, number = '01', layout = 'full', contextLabel = 'Selected Work', linkText = 'View project', showStatus = false, headingLevel = 3 }) {
  const projectUrl = `/work/${project.slug}`
  const Heading = `h${headingLevel}`
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      // 3D scroll-driven entrance and depth shift
      gsap.fromTo(
        card,
        {
          rotateX: 10,
          rotateY: -3,
          z: -30,
          scale: 0.98,
        },
        {
          rotateX: 0,
          rotateY: 0,
          z: 0,
          scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 45%',
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        }
      )

      // Subtle parallax on facts and heading
      const facts = card.querySelector('.project-preview__facts')
      if (facts) {
        gsap.fromTo(
          facts,
          { y: 20, opacity: 0.8 },
          {
            y: 0,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 30%',
              scrub: 0.6,
            },
          }
        )
      }
    }, card)

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      gsap.to(card, {
        rotateY: x * 4,
        rotateX: -y * 4,
        duration: 0.4,
        ease: 'power1.out',
        transformPerspective: 1200,
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
      context.revert()
    }
  }, [])

  return (
    <article ref={cardRef} className={`project-preview project-preview--${layout} project-preview--3d`}>
      {layout !== 'editorial' && <div className="project-preview__media">
        <MediaFrame
          label={project.cover ? null : `Visual placeholder for ${project.title}`}
          captionHidden
          ratio={layout === 'full' ? 'wide' : 'portrait'}
          tone={project.theme || 'neutral'}
          src={project.cover}
          srcSet={project.coverSrcSet}
          sources={project.coverSources}
          sizes={project.coverSizes || (layout === 'full' ? '(min-width: 1440px) 1280px, 100vw' : '(min-width: 768px) 60vw, 100vw')}
          alt={project.coverAlt || (project.cover ? `Visual from ${project.title}` : '')}
          placeholderEyebrow={`PARALLEL / ${number}`}
          placeholderTitle={project.title}
        />
      </div>}
      <div className="project-preview__content">
        <div className="project-preview__heading">
          <SectionLabel number={number}>{contextLabel}</SectionLabel>
          <Heading className="project-preview__title"><Link to={projectUrl}>{project.title}</Link></Heading>
          {showStatus && project.type && <p className="project-preview__type">{project.type}</p>}
        </div>
        <div className="project-preview__details">
          <p className="type-body-large">{project.description}</p>
          <dl className="project-preview__facts">
            <div><dt>Type</dt><dd>{project.category}</dd></div>
            <div><dt>Year</dt><dd>{project.year || 'To be confirmed'}</dd></div>
            <div><dt>Scope</dt><dd>{project.services?.length ? project.services.join(' / ') : 'Details to follow'}</dd></div>
            {showStatus && project.status && <div><dt>Status</dt><dd>{project.status}</dd></div>}
          </dl>
          {showStatus && project.disclaimer && <p className="project-preview__disclaimer">{project.disclaimer}</p>}
          <TextLink to={projectUrl} arrow>{linkText}</TextLink>
        </div>
      </div>
    </article>
  )
}

