export default function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-black border-t border-gray-200/70 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Catina Studio — All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">Privacy</a>
          <a href="#" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors">Terms</a>
          <a href="mailto:contact@example.com" className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
