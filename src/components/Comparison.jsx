import { motion } from 'framer-motion'

const items = [
  { title: 'Design System', points: ['Tokenized', 'Accessible', 'Responsive'], accent: 'from-emerald-400 to-emerald-600' },
  { title: 'Motion Engine', points: ['Scroll-synced', '60fps', 'Micro-interactions'], accent: 'from-emerald-400 to-emerald-600' },
  { title: 'Delivery', points: ['Next.js/React', 'CI-ready', 'Docs included'], accent: 'from-emerald-400 to-emerald-600' },
]

export default function Comparison() {
  return (
    <section id="compare" className="bg-white dark:bg-black py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">At-a-glance</h2>
          <p className="mt-2 text-gray-700/80 dark:text-gray-300/80">A concise overview of what you get.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-3xl border border-gray-200/70 dark:border-white/10 p-6 md:p-8 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.accent} shadow-inner mb-4`} />
              <h3 className="text-xl font-medium text-black dark:text-white">{card.title}</h3>
              <ul className="mt-3 space-y-1 text-gray-700/80 dark:text-gray-300/80">
                {card.points.map(p => <li key={p}>• {p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
