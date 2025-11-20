import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Manifesto() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true })

  const lines = [
    'Design that feels inevitable.',
    'Motion that tells a story.',
    'Craft at the speed of thought.'
  ]

  return (
    <section id="story" className="relative bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6 py-28 md:py-40 text-center">
        <div ref={ref}>
          {lines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
              className="text-3xl md:text-5xl font-light tracking-tight text-black/90 dark:text-white/90"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
