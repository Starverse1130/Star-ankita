import { useEffect, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={
      darkMode
      ? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      <Hero darkMode = {darkMode} />
      <About darkMode = {darkMode} />
      <Skills darkMode = {darkMode} />
      <Projects darkMode = {darkMode} />
      <Contact darkMode = {darkMode} />
      <Footer darkMode = {darkMode} />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all hover:scale-110 hover:shadow-orange-500/40 ${
              darkMode
                ? 'bg-gray-800 text-orange-400 border border-gray-700'
                : 'bg-white text-orange-500 border border-gray-200'
            }`}
            aria-label='Scroll to top'
          >
            <ArrowUp className='w-5 h-5' />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

