import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTAPortal3D() {
  const portalRef = useRef(null)

  useEffect(() => {
    const portal = portalRef.current
    if (!portal || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const section = portal.closest('.home-cta') || portal

    const context = gsap.context(() => {
      const rings = gsap.utils.toArray('.cta-portal-3d__ring')
      
      rings.forEach((ring, i) => {
        const factor = (i + 1) / rings.length
        gsap.fromTo(
          ring,
          {
            rotateZ: i * 15,
            rotateX: 45,
            rotateY: -20,
            z: (i - 2) * 50,
            scale: 0.8 + i * 0.15,
          },
          {
            rotateZ: i * 45 + 120,
            rotateX: 15,
            rotateY: 40,
            z: (i - 1) * 80,
            scale: 1 + i * 0.2,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              end: 'bottom bottom',
              scrub: 0.8 + factor * 0.5,
              invalidateOnRefresh: true,
            },
          }
        )
      })

      gsap.to('.cta-portal-3d__nodes span', {
        y: -30,
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
    }, portal)

    return () => context.revert()
  }, [])

  return (
    <div ref={portalRef} className="cta-portal-3d" aria-hidden="true">
      <div className="cta-portal-3d__scene">
        <div className="cta-portal-3d__ring cta-portal-3d__ring--outer">
          <span className="cta-portal-3d__ring-corner cta-portal-3d__ring-corner--1" />
          <span className="cta-portal-3d__ring-corner cta-portal-3d__ring-corner--2" />
        </div>
        <div className="cta-portal-3d__ring cta-portal-3d__ring--mid">
          <span className="cta-portal-3d__ring-corner cta-portal-3d__ring-corner--3" />
          <span className="cta-portal-3d__ring-corner cta-portal-3d__ring-corner--4" />
        </div>
        <div className="cta-portal-3d__ring cta-portal-3d__ring--inner">
          <span className="cta-portal-3d__label">PARALLEL // 2026</span>
        </div>
        <div className="cta-portal-3d__nodes">
          <span className="cta-portal-3d__node cta-portal-3d__node--1" />
          <span className="cta-portal-3d__node cta-portal-3d__node--2" />
          <span className="cta-portal-3d__node cta-portal-3d__node--3" />
        </div>
      </div>
    </div>
  )
}
