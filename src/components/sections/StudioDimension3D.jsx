import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function StudioDimension3D() {
  const containerRef = useRef(null)
  const cubeRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const cube = cubeRef.current
    if (!container || !cube || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const section = container.closest('.home-statement') || container

    const context = gsap.context(() => {
      gsap.fromTo(
        cube,
        {
          rotateX: 25,
          rotateY: -35,
          rotateZ: -5,
          scale: 0.85,
        },
        {
          rotateX: 75,
          rotateY: 145,
          rotateZ: 40,
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        }
      )

      gsap.to('.studio-cube__core', {
        rotateX: -180,
        rotateY: 240,
        scale: 1.25,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.2,
        },
      })
    }, container)

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      gsap.to(container, {
        '--mouse-tilt-x': `${-y * 12}deg`,
        '--mouse-tilt-y': `${x * 15}deg`,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(container, {
        '--mouse-tilt-x': '0deg',
        '--mouse-tilt-y': '0deg',
        duration: 0.8,
        ease: 'power2.out',
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      context.revert()
    }
  }, [])

  return (
    <div ref={containerRef} className="studio-dimension-3d" aria-hidden="true">
      <div className="studio-dimension-3d__stage">
        <div ref={cubeRef} className="studio-cube">
          <div className="studio-cube__face studio-cube__face--front">
            <span className="studio-cube__label">01 / STRATEGY</span>
            <span className="studio-cube__grid" />
            <span className="studio-cube__corner studio-cube__corner--tl" />
            <span className="studio-cube__corner studio-cube__corner--br" />
          </div>
          <div className="studio-cube__face studio-cube__face--back">
            <span className="studio-cube__label">02 / INTERFACE</span>
            <span className="studio-cube__grid" />
          </div>
          <div className="studio-cube__face studio-cube__face--right">
            <span className="studio-cube__label">03 / SYSTEMS</span>
            <span className="studio-cube__cross" />
          </div>
          <div className="studio-cube__face studio-cube__face--left">
            <span className="studio-cube__label">04 / CODE</span>
            <span className="studio-cube__diagonal" />
          </div>
          <div className="studio-cube__face studio-cube__face--top">
            <span className="studio-cube__label">05 / MOTION</span>
            <span className="studio-cube__ring" />
          </div>
          <div className="studio-cube__face studio-cube__face--bottom">
            <span className="studio-cube__label">06 / LAUNCH</span>
            <span className="studio-cube__grid" />
          </div>
          <div className="studio-cube__core">
            <span className="studio-cube__core-plane studio-cube__core-plane--xy" />
            <span className="studio-cube__core-plane studio-cube__core-plane--yz" />
            <span className="studio-cube__core-plane studio-cube__core-plane--xz" />
          </div>
        </div>
      </div>
      <div className="studio-dimension-3d__caption">
        <span className="type-meta">3D AXIS // PARALLEL FRAMEWORK</span>
      </div>
    </div>
  )
}
