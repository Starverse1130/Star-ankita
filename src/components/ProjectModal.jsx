import { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, CheckCircle, Layers } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

// ── Animation Variants ──────────────────────────────────────────
const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 22, stiffness: 280 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 50,
    transition: { duration: 0.25 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
}

/**
 * ProjectModal — Full-screen project preview with image, details, and actions.
 *
 * @param {Object}  props
 * @param {boolean} props.isOpen   - Controls visibility
 * @param {Function} props.onClose - Called when modal should close
 * @param {Object}  props.project  - Project data object
 * @param {boolean} props.darkMode - Dark mode toggle
 * @param {string}  props.image    - Project image source
 */
const ProjectModal = ({ isOpen, onClose, project, darkMode, image, onLiveDemo }) => {
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

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key='project-modal-backdrop'
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='exit'
          onClick={onClose}
          className='fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 sm:pt-12 overflow-y-auto modal-scroll'
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
        >
          {/* ─── Modal Card ────────────────────────────────── */}
          <motion.div
            key='project-modal-card'
            variants={modal}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden mb-8 ${
              darkMode
                ? 'bg-gray-900 border border-white/10'
                : 'bg-white border border-gray-200'
            }`}
          >
            {/* ── Close Button ──────────────────────────────── */}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-colors z-20'
              aria-label='Close modal'
            >
              <X className='w-5 h-5 text-white' />
            </button>

            {/* ── Project Image ─────────────────────────────── */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial='hidden'
              animate='visible'
              className='relative h-56 sm:h-72 md:h-80 overflow-hidden'
            >
              <img
                src={image}
                alt={project.title}
                className='w-full h-full object-cover'
              />
              {/* Gradient overlay */}
              <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent' />

              {/* Category Badge */}
              <div className='absolute bottom-4 left-5'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-500 text-white shadow-lg'>
                  <Layers className='w-3 h-3' />
                  {project.category}
                </span>
              </div>
            </motion.div>

            {/* ── Body ─────────────────────────────────────── */}
            <div className='px-6 sm:px-8 py-6 sm:py-8'>
              {/* Title */}
              <motion.h2
                custom={1}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                className={`text-2xl sm:text-3xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {project.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                custom={2}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                className={`text-sm sm:text-base leading-relaxed mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {project.fullDesc || project.desc}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                className='mb-6'
              >
                <h4
                  className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  Tech Stack
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        darkMode
                          ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                          : 'bg-orange-50 text-orange-600 border border-orange-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Highlights */}
              {project.highlights && (
                <motion.div
                  custom={4}
                  variants={fadeUp}
                  initial='hidden'
                  animate='visible'
                  className='mb-8'
                >
                  <h4
                    className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    Key Features
                  </h4>
                  <div
                    className={`grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-xl ${
                      darkMode ? 'bg-white/5' : 'bg-gray-50'
                    }`}
                  >
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2 text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        <CheckCircle className='w-4 h-4 text-orange-500 shrink-0 mt-0.5' />
                        {h}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                custom={5}
                variants={fadeUp}
                initial='hidden'
                animate='visible'
                className='flex flex-col sm:flex-row gap-3'
              >
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 border-2 border-orange-500 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    darkMode
                      ? 'text-white hover:bg-orange-500/10'
                      : 'text-gray-800 hover:bg-orange-50'
                  }`}
                >
                  <FaGithub className='w-4 h-4' />
                  View Code
                </a>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={(e) => {
                    if (project.live === '#') {
                      e.preventDefault()
                      onLiveDemo && onLiveDemo()
                    }
                  }}
                  className='flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-sm hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all duration-300'
                >
                  <ExternalLink className='w-4 h-4' />
                  Live Demo
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

ProjectModal.propTypes = {
  /** Whether the modal is open */
  isOpen: PropTypes.bool.isRequired,
  /** Function to close the modal */
  onClose: PropTypes.func.isRequired,
  /** Callback when Live Demo is clicked but not yet available */
  onLiveDemo: PropTypes.func,
  /** Project data object */
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    fullDesc: PropTypes.string,
    category: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
  }),
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
  /** Project image source */
  image: PropTypes.string.isRequired,
}

export default ProjectModal
