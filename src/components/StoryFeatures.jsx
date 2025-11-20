import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Vitamin-rich',
    copy: 'Naturally high in Vitamin C, E, and antioxidants to support immunity and skin.',
  },
  {
    title: 'Cold-pressed',
    copy: 'Minimal processing. Maximum nutrients. Zero concentrates or added sugar.',
  },
  {
    title: 'Small-batch craft',
    copy: 'Harvested responsibly and bottled fresh — quality you can taste.',
  },
  {
    title: 'Versatile ritual',
    copy: 'Enjoy as a morning shot, with water, or mixed into smoothies and teas.',
  },
]

export default function StoryFeatures() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2])

  return (
    <section id="features" ref={ref} className="relative bg-white dark:bg-black py-24 md:py-40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div style={{ scale, rotate }} className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
            <img src="https://images.unsplash.com/photo-1599580782029-3f71e2988c45?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZWElMjBidWNrdGhvcm58ZW58MHwwfHx8MTc2MzY1OTE0N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Sea buckthorn" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/20 via-transparent to-white/10 mix-blend-overlay" />
          </motion.div>
        </div>
        <div className="space-y-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            >
              <h3 className="text-2xl md:text-3xl font-medium text-black dark:text-white">{f.title}</h3>
              <p className="mt-2 text-gray-700/80 dark:text-gray-300/80">{f.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
