import PropTypes from 'prop-types'
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react"
import { Sun, Moon, X, Menu } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' }
];

/**
 * Navbar Component
 * Fixed floating navbar with navigation links, dark mode toggle,
 * mobile hamburger menu, and scroll-based active section tracking.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is active
 * @param {Function} props.toggleDarkMode - Function to toggle dark mode
 */
const Navbar = ({ darkMode, toggleDarkMode }) => {

  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(() => NAV_ITEMS, []);

  // Scroll-based active section tracking
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.link))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) setActiveSection(id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [navItems])

  const lightColors = {
    navBg: 'bg-linear-to-br from-orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textHover: 'text-orange-500',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  }

  const darkColors = {
    navBg: 'bg-linear-to-br from-gray-700 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textHover: 'text-orange-400',
    textActive: 'text-orange-400',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  }

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveSection(item.name.toLowerCase());

    if (isMenuOpen) {
      setIsMenuOpen(false);
      // Wait for the Framer Motion exit animation (300ms) to finish
      // before scrolling, otherwise the layout shift aborts the smooth scroll
      setTimeout(() => {
        const element = document.querySelector(item.link);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 310);
    } else {
      const element = document.querySelector(item.link);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-2 sm:mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative flex items-center justify-center ${colors.navBg} backdrop-blur-xl rounded-2xl px-4 lg:px-8 py-2 shadow-lg border ${darkMode ? 'border-white/10' : 'border-white/30'}`}>
        <div className="flex items-center justify-between w-full space-x-4 lg:space-x-8">

          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, { name: 'Home', link: '#home' })}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 shrink-0">
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio <span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Navigation items (desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => handleNavClick(e, item)}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 
                  ${activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-500`
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  {item.name}
                </motion.span>
                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}>
                  </motion.div>
                )}
              </a>
            ))}
          </div>

          {/* Right side: Dark Toggle + Hire Me (desktop) + Hamburger (mobile) */}
          <div className="flex items-center space-x-3 ml-auto">
            {/* Dark Toggle Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              } transition-colors`}
              aria-label={darkMode ? 'Switch to light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Hire Me Button (desktop only) */}
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, { name: 'Contact', link: '#contact' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-xl bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}>
              Hire Me
            </motion.a>

            {/* Hamburger Button (mobile only) */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex lg:hidden p-2 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
              ) : (
                <Menu className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${darkMode
                ? 'bg-gray-900/95'
                : 'bg-white/95'
                } backdrop-blur-lg rounded-xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={(e) => handleNavClick(e, item)}
                    className="block">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`py-3 px-4 rounded-lg text-center ${activeSection === item.name.toLowerCase()
                        ? darkMode ? 'bg-gray-800' : 'bg-orange-50'
                        : ''
                        }`}>
                      <span
                        className={`font-medium ${activeSection === item.name.toLowerCase()
                          ? colors.textActive
                          : colors.textSecondary
                          }`}>
                        {item.name}
                      </span>
                    </motion.div>
                  </a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, { name: 'Contact', link: '#contact' })}
                  whileTap={{ scale: 0.95 }}
                  className={`block py-3 px-4 text-center font-semibold rounded-xl bg-linear-to-r ${colors.button} text-white shadow-md`}>
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


      </motion.nav>
    </div>
  )
};

Navbar.propTypes = {
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
  /** Function to toggle dark mode */
  toggleDarkMode: PropTypes.func.isRequired,
}

export default Navbar
