import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section ref={ref} className="relative min-h-[120vh] flex items-center justify-center overflow-clip bg-white dark:bg-black">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://cdn.coverr.co/videos/coverr-cinematic-waves-1080p.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90 dark:from-black/50 dark:via-black/40 dark:to-black/80"/>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-black dark:text-white"
        >
          A premium digital experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="mt-6 text-lg md:text-xl text-gray-700/80 dark:text-gray-300/80"
        >
          Sophisticated minimalism, cinematic motion, performance-first.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <a href="#story" className="px-6 py-3 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">Explore</a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-gray-300/60 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">Inquire</a>
        </motion.div>
      </div>
    </section>
  )
}
