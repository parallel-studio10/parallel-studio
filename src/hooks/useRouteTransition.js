import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function useRouteTransition(routeRef, path) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !routeRef.current) return undefined

    const sections = routeRef.current.querySelectorAll(':scope > *')
    const context = gsap.context(() => {
      gsap.fromTo(
        sections,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          clearProps: 'opacity,visibility,transform',
          duration: 0.65,
          delay: 0.04,
          ease: 'power3.out',
          stagger: 0.055,
        },
      )
    }, routeRef)

    return () => context.revert()
  }, [routeRef, path])
}
