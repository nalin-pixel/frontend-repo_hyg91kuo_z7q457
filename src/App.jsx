import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import StoryFeatures from './components/StoryFeatures'
import Comparison from './components/Comparison'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <StoryFeatures />
        <Comparison />
      </main>
      <Footer />
    </div>
  )
}

export default App
