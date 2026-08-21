import { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Calendar,
  User,
} from 'lucide-react'
import { ABOUT_MODAL_DATA } from '../config/data'
import about from '../assets/images/about.png'
import CV from '../assets/pdf/Resume.pdf'

// ── Animation Variants ──────────────────────────────────────────
const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 40,
    transition: { duration: 0.25 },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// ── Section Wrapper (defined outside render) ────────────────────
const Section = ({ icon: Icon, title, darkMode, children }) => (
  <motion.div variants={fadeUp} className='mb-6 last:mb-0'>
    <div className='flex items-center gap-2 mb-3'>
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
          darkMode ? 'bg-orange-500/15' : 'bg-orange-100'
        }`}
      >
        <Icon className='w-4 h-4 text-orange-500' />
      </div>
      <h3
        className={`text-lg font-bold ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h3>
    </div>
    {children}
  </motion.div>
)

Section.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}

/**
 * AboutModal — Full-screen resume-style popup with animated sections.
 *
 * @param {Object}  props
 * @param {boolean} props.isOpen   - Controls visibility
 * @param {Function} props.onClose - Called when modal should close
 * @param {boolean} props.darkMode - Dark mode toggle
 */
const AboutModal = ({ isOpen, onClose, darkMode }) => {
  const data = ABOUT_MODAL_DATA

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='about-modal-backdrop'
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='exit'
          onClick={onClose}
          className='fixed inset-0 z-50 flex items-start justify-center p-4 pt-10 sm:pt-16 overflow-y-auto modal-scroll'
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
        >
          {/* ─── Modal Card ────────────────────────────────── */}
          <motion.div
            key='about-modal-card'
            variants={modal}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden text-left ${
              darkMode
                ? 'bg-gray-900 border border-white/10'
                : 'bg-white border border-gray-200'
            }`}
          >
            {/* ── Gradient Header ──────────────────────────── */}
            <div className='relative bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 overflow-hidden'>
              {/* Decorative circles */}
              <div className='absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10' />
              <div className='absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10' />
              <div className='absolute top-6 right-20 w-16 h-16 rounded-full bg-white/5' />

              {/* Close Button */}
              <button
                onClick={onClose}
                className='absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors z-10'
                aria-label='Close modal'
              >
                <X className='w-4 h-4 text-white' />
              </button>

              {/* Header Content: Image + Name/Tagline */}
              <div className='relative flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 p-5 sm:p-6 text-center sm:text-left'>
                <div className='w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg shrink-0'>
                  <img
                    src={about}
                    alt={data.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex flex-col justify-center items-center sm:items-start min-w-0'>
                  <h2 className='text-xl sm:text-2xl font-bold text-white truncate w-full'>
                    {data.name}
                  </h2>
                  <p className='text-white/90 font-semibold text-sm sm:text-base mt-0.5 w-full'>
                    {data.title}
                  </p>
                  <p className='text-white/70 text-xs sm:text-sm mt-1 italic w-full whitespace-normal'>
                    {data.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Body ─────────────────────────────────────── */}
            <div className='px-6 sm:px-8 pt-6 pb-8'>


              {/* Quick Info Row */}
              <motion.div
                variants={fadeUp}
                className={`grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-4 rounded-xl ${
                  darkMode ? 'bg-white/5' : 'bg-gray-50'
                }`}
              >
                {data.quickInfo.map((info) => (
                  <div key={info.label} className='text-center'>
                    <p
                      className={`text-xs uppercase tracking-wider mb-1 ${
                        darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}
                    >
                      {info.label}
                    </p>
                    <p
                      className={`text-sm font-semibold ${
                        info.value === 'Open to Work'
                          ? 'text-green-400'
                          : darkMode
                            ? 'text-white'
                            : 'text-gray-900'
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Animated Sections */}
              <motion.div
                variants={stagger}
                initial='hidden'
                animate='visible'
              >
                {/* About */}
                <Section icon={User} title='About Me' darkMode={darkMode}>
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {data.about}
                  </p>
                </Section>

                {/* Experience */}
                <Section icon={Briefcase} title='Experience' darkMode={darkMode}>
                  {data.experience.map((exp) => (
                    <div
                      key={exp.role}
                      className={`p-4 rounded-xl ${
                        darkMode ? 'bg-white/5' : 'bg-gray-50'
                      }`}
                    >
                      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2'>
                        <div>
                          <p
                            className={`font-semibold ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {exp.role}
                          </p>
                          <p className='text-orange-500 text-sm font-medium'>
                            {exp.company}
                          </p>
                        </div>
                        <div className='flex items-center gap-1 mt-1 sm:mt-0'>
                          <Calendar className='w-3 h-3 text-gray-400' />
                          <span
                            className={`text-xs ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}
                          >
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <ul className='mt-3 space-y-1.5'>
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-xs ${
                              darkMode ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          >
                            <span className='mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0' />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Section>

                {/* Education */}
                <Section icon={GraduationCap} title='Education' darkMode={darkMode}>
                  {data.education.map((edu) => (
                    <div
                      key={edu.degree}
                      className={`p-4 rounded-xl ${
                        darkMode ? 'bg-white/5' : 'bg-gray-50'
                      }`}
                    >
                      <p
                        className={`font-semibold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {edu.degree}
                      </p>
                      <div className='flex items-center gap-3 mt-1'>
                        <span
                          className={`text-sm ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          {edu.school}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            darkMode
                              ? 'bg-white/10 text-gray-300'
                              : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  ))}
                </Section>

                {/* Certifications */}
                <Section icon={Award} title='Certifications' darkMode={darkMode}>
                  <div className='flex flex-wrap gap-2'>
                    {data.certifications.map((cert) => (
                      <span
                        key={cert}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          darkMode
                            ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                            : 'bg-orange-50 text-orange-600 border border-orange-200'
                        }`}
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </Section>
              </motion.div>

              {/* ── Footer Actions ───────────────────────── */}
              <motion.div
                variants={fadeUp}
                className='flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200/10'
              >
                <a
                  href={CV}
                  download
                  className='flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300'
                >
                  <Download className='w-4 h-4' />
                  Download Resume
                </a>
                <a
                  href='#contact'
                  onClick={onClose}
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 border-2 border-orange-500 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    darkMode
                      ? 'text-white hover:bg-orange-500/10'
                      : 'text-gray-800 hover:bg-orange-50'
                  }`}
                >
                  <Mail className='w-4 h-4' />
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

AboutModal.propTypes = {
  /** Whether the modal is open */
  isOpen: PropTypes.bool.isRequired,
  /** Function to close the modal */
  onClose: PropTypes.func.isRequired,
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
}

export default AboutModal
