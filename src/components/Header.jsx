import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50`}
    >
      <div className={`mx-auto max-w-7xl px-6 py-3 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-white/20 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]' : 'bg-transparent'
      } rounded-b-2xl`}
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-amber-400 to-orange-600 shadow-inner" />
            <span className="text-sm tracking-widest uppercase text-gray-700 dark:text-gray-200">Catina lui BICU</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700/80 dark:text-gray-200/80">
            <a href="#story" className="hover:text-black dark:hover:text-white transition-colors">Story</a>
            <a href="#features" className="hover:text-black dark:hover:text-white transition-colors">Benefits</a>
            <a href="#compare" className="hover:text-black dark:hover:text-white transition-colors">Overview</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-amber-600 text-white hover:bg-amber-500 transition-colors">Order now</a>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
