import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ParallelPlanes() {
  const sceneRef = useRef(null)

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const context = gsap.context(() => {
      const layers = gsap.utils.toArray('.parallel-planes__layer')
      const spread = () => window.innerWidth < 768 ? 48 : 82
      gsap.timeline({
        scrollTrigger: {
          trigger: scene,
          start: 'top 88%',
          end: 'bottom 16%',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      })
        .to(layers[0], { x: () => -spread(), y: 48, z: -95, rotationX: 70, rotationZ: -32, ease: 'none' }, 0)
        .to(layers[1], { x: -10, y: 1, z: 15, rotationX: 52, rotationZ: -23, ease: 'none' }, 0)
        .to(layers[2], { x: spread, y: -48, z: 110, rotationX: 37, rotationZ: -15, ease: 'none' }, 0)
    }, scene)

    return () => context.revert()
  }, [])

  return (
    <div ref={sceneRef} className="parallel-planes" aria-hidden="true">
      <span className="parallel-planes__layer parallel-planes__layer--back"><span>01 / IDEA</span></span>
      <span className="parallel-planes__layer parallel-planes__layer--middle"><span>02 / DESIGN</span></span>
      <span className="parallel-planes__layer parallel-planes__layer--front"><span>03 / BUILD</span></span>
    </div>
  )
}
