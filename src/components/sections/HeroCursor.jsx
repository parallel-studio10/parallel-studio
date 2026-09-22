import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cursorPath = 'M8 6H16V14H24V22H32V30H40V38H48V46H56V54H64V62H72V70H80V78H56V82H60V86H64V90H68V94H60V90H56V86H52V82H48V78H44V74H40V70H36V66H32V62H28V66H24V70H20V74H16V78H8Z'

function CursorShape() {
  return (
    <svg viewBox="0 0 100 100" shapeRendering="crispEdges" focusable="false">
      <path d={cursorPath} />
    </svg>
  )
}

export default function HeroCursor() {
  const sceneRef = useRef(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const hero = scene.closest('.home-hero')
    const context = gsap.context(() => {
      gsap.to('.hero-cursor__assembly', {
        y: () => window.innerWidth < 768 ? 18 : 72,
        rotationX: -10,
        rotationY: 15,
        rotationZ: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      })
      gsap.to('.hero-cursor__pixel', {
        y: -35,
        x: 20,
        ease: 'none',
        stagger: 0.1,
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      })
    }, scene)

    return () => context.revert()
  }, [])

  return (
    <div ref={sceneRef} className="hero-cursor" aria-hidden="true">
      <span className="hero-cursor__glow" />
      <span className="hero-cursor__pixel hero-cursor__pixel--one" />
      <span className="hero-cursor__pixel hero-cursor__pixel--two" />
      <span className="hero-cursor__assembly">
        <span className="hero-cursor__layer hero-cursor__layer--back"><CursorShape /></span>
        <span className="hero-cursor__layer hero-cursor__layer--middle"><CursorShape /></span>
        <span className="hero-cursor__layer hero-cursor__layer--front"><CursorShape /></span>
      </span>
    </div>
  )
}
