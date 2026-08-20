import { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Rocket } from 'lucide-react'

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.7, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 20, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.7,
    y: 40,
    transition: { duration: 0.25 },
  },
}

/**
 * ComingSoonModal — Popup shown when a "Live Demo" link is not yet available.
 *
 * @param {Object}   props
 * @param {boolean}  props.isOpen    - Controls visibility
 * @param {Function} props.onClose   - Called when modal should close
 * @param {string}   props.title     - Project name (optional)
 * @param {boolean}  props.darkMode  - Dark mode toggle
 */
const ComingSoonModal = ({ isOpen, onClose, title = '', darkMode }) => {
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
          key='coming-soon-backdrop'
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit='exit'
          onClick={onClose}
          className='fixed inset-0 z-[60] flex items-center justify-center p-4'
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            key='coming-soon-card'
            variants={modal}
            initial='hidden'
            animate='visible'
            exit='exit'
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-sm rounded-2xl p-8 text-center shadow-2xl overflow-hidden ${
              darkMode
                ? 'bg-gray-900 border border-white/10'
                : 'bg-white border border-gray-200'
            }`}
          >
            {/* ── Decorative glow ─────────────────────────── */}
            <div
              className='absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none'
              style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
            />
            <div
              className='absolute -bottom-12 -left-12 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none'
              style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
            />

            {/* ── Close Button ────────────────────────────── */}
            <button
              onClick={onClose}
              className='absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-10'
              style={{
                color: darkMode ? '#9ca3af' : '#6b7280',
                backgroundColor: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
              }}
              aria-label='Close'
            >
              <X className='w-4 h-4' />
            </button>

            {/* ── Icon ────────────────────────────────────── */}
            <div className='flex justify-center mb-5 relative z-10'>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className='w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg'
                style={{
                  background: 'linear-gradient(to right, #f97316, #f59e0b)',
                  boxShadow: '0 8px 30px rgba(249,115,22,0.35)',
                }}
              >
                <Rocket className='w-8 h-8 text-white' />
              </motion.div>
            </div>

            {/* ── Text ────────────────────────────────────── */}
            <h3
              className={`text-xl font-bold mb-2 relative z-10 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Coming Soon!
            </h3>

            {title && (
              <p
                className={`text-sm mb-3 font-medium relative z-10 ${
                  darkMode ? 'text-orange-400' : 'text-orange-500'
                }`}
              >
                {title}
              </p>
            )}

            <p
              className={`text-sm leading-relaxed mb-6 relative z-10 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              This demo is currently under development. Stay tuned — it will be live soon!
            </p>

            {/* ── Button ──────────────────────────────────── */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onClose}
              className='relative z-10 px-7 py-2.5 text-white font-semibold rounded-xl text-sm transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30'
              style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
            >
              Got It
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

ComingSoonModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  darkMode: PropTypes.bool.isRequired,
}

export default ComingSoonModal
