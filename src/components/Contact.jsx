import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X, Mail, MapPin, User, MessageSquare, Send, Loader2 } from 'lucide-react'
import contactImg from '../assets/images/contact.png'

/**
 * Contact Section Component
 * Interactive form with floating icons, focus effects, loading state,
 * and success modal. Includes contact info cards.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is active
 */
const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [showModal, setShowModal] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedField, setFocusedField] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setShowModal(true)
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
        }, 1500)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const inputClasses = `w-full pl-10 pr-4 py-3 rounded-xl text-sm sm:text-base border
        transition-all duration-300 outline-none
        focus:ring-2 focus:ring-orange-500/20 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)]`

    const getInputStyle = (fieldName) => ({
        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
        borderColor: focusedField === fieldName ? '#f97316' : (darkMode ? '#374151' : '#e5e7eb'),
        color: darkMode ? 'white' : '#1f2937',
    })

    return (
        <section
            id="contact"
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb'
            }}
            className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos='fade-up'>
                    <h2
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
                        style={{ color: darkMode ? 'white' : '#1f2937' }}
                    >
                        Let's <span style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>Connect</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto"
                        style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                        Open to freelance projects, collaborations, and full-time opportunities. Drop me a message and I'll respond within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                    <div className='flex flex-col items-center order-2 lg:order-1 gap-8' data-aos='fade-right'>
                        <img src={contactImg} alt="Contact"
                            loading='lazy'
                            decoding='async'
                            className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain' />
                        {/* Contact Info Cards */}
                        <div className='flex flex-wrap justify-center gap-4'>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                className='flex items-center gap-3 px-5 py-3 rounded-xl cursor-default'
                                style={{
                                    background: darkMode ? 'rgba(31,41,55,0.5)' : 'rgba(255,255,255,0.8)',
                                    border: '1px solid ' + (darkMode ? '#374151' : '#e5e7eb')
                                }}>
                                <div className='w-8 h-8 rounded-lg flex items-center justify-center'
                                    style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}>
                                    <Mail className='w-4 h-4 text-white' />
                                </div>
                                <span className='text-sm' style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>
                                    ankita@email.com
                                </span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                className='flex items-center gap-3 px-5 py-3 rounded-xl cursor-default'
                                style={{
                                    background: darkMode ? 'rgba(31,41,55,0.5)' : 'rgba(255,255,255,0.8)',
                                    border: '1px solid ' + (darkMode ? '#374151' : '#e5e7eb')
                                }}>
                                <div className='w-8 h-8 rounded-lg flex items-center justify-center'
                                    style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}>
                                    <MapPin className='w-4 h-4 text-white' />
                                </div>
                                <span className='text-sm' style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>
                                    India
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Form Card */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            background: darkMode
                                ? 'linear-gradient(135deg, rgba(31,41,55,0.8), rgba(17,24,39,0.9))'
                                : 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(249,250,251,0.95))',
                            borderColor: darkMode ? '#374151' : '#e5e7eb',
                            backdropFilter: 'blur(10px)',
                        }}
                        className='rounded-2xl p-5 sm:p-6 md:p-8 border shadow-xl order-1 lg:order-2
                        hover:shadow-2xl transition-shadow duration-500'
                        data-aos='fade-left'>

                        {/* Form Header */}
                        <div className='mb-6'>
                            <h3 className='text-lg font-bold mb-1'
                                style={{ color: darkMode ? 'white' : '#1f2937' }}>
                                Send a Message
                            </h3>
                            <p className='text-xs'
                                style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}>
                                * marks are required
                            </p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                            {/* First Name */}
                            <div className='relative'>
                                <User className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4
                                    transition-colors duration-300'
                                    style={{ color: focusedField === 'firstName' ? '#f97316' : (darkMode ? '#6b7280' : '#9ca3af') }} />
                                <input
                                    type="text"
                                    name='firstName'
                                    placeholder='First Name *'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('firstName')}
                                    onBlur={() => setFocusedField(null)}
                                    style={getInputStyle('firstName')}
                                    className={inputClasses}
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div className='relative'>
                                <User className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4
                                    transition-colors duration-300'
                                    style={{ color: focusedField === 'lastName' ? '#f97316' : (darkMode ? '#6b7280' : '#9ca3af') }} />
                                <input
                                    type="text"
                                    name='lastName'
                                    placeholder='Last Name *'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('lastName')}
                                    onBlur={() => setFocusedField(null)}
                                    style={getInputStyle('lastName')}
                                    className={inputClasses}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className='relative mb-4'>
                            <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4
                                transition-colors duration-300'
                                style={{ color: focusedField === 'email' ? '#f97316' : (darkMode ? '#6b7280' : '#9ca3af') }} />
                            <input
                                type="email"
                                name='email'
                                placeholder='Email Address *'
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                style={getInputStyle('email')}
                                className={inputClasses}
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className='relative mb-4'>
                            <span className='absolute left-3 top-1/2 -translate-y-1/2 text-sm
                                transition-colors duration-300'
                                style={{ color: focusedField === 'phone' ? '#f97316' : (darkMode ? '#6b7280' : '#9ca3af') }}>
                                +91
                            </span>
                            <input
                                type="tel"
                                name='phone'
                                placeholder='Phone Number'
                                value={formData.phone}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('phone')}
                                onBlur={() => setFocusedField(null)}
                                style={{ ...getInputStyle('phone'), paddingLeft: '2.75rem' }}
                                className={inputClasses}
                            />
                        </div>

                        {/* Message */}
                        <div className='relative mb-5'>
                            <MessageSquare className='absolute left-3 top-3.5 w-4 h-4
                                transition-colors duration-300'
                                style={{ color: focusedField === 'message' ? '#f97316' : (darkMode ? '#6b7280' : '#9ca3af') }} />
                            <textarea
                                rows='4'
                                name='message'
                                placeholder='Your Message *'
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                style={{ ...getInputStyle('message'), resize: 'none' }}
                                className={`${inputClasses} pl-10 pt-3.5`}
                                required
                            />
                            <span className='absolute bottom-3 right-3 text-xs'
                                style={{ color: darkMode ? '#4b5563' : '#d1d5db' }}>
                                {formData.message.length}/500
                            </span>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type='submit'
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
                            className='w-full py-3.5 text-white font-semibold rounded-xl text-sm sm:text-base
                            flex items-center justify-center gap-2
                            hover:shadow-lg hover:shadow-orange-500/30
                            disabled:opacity-70 disabled:cursor-not-allowed
                            transition-all duration-300'>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className='w-4 h-4 animate-spin' />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className='w-4 h-4' />
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>
                </div>
            </div>

            <AnimatePresence>
                {showModal && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                        onClick={closeModal}>
                        <motion.div initial={{ scale: 0.5, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.5, opacity: 0, y: 50 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-sm rounded-2xl p-8 text-center shadow-2xl"
                            style={{
                                background: darkMode ? 'linear-gradient(to bottom right, #1f2937, #111827)' : 'linear-gradient(to bottom right, #ffffff, #f9fafb)',
                                border: '1px solid ' + (darkMode ? '#374151' : '#e5e7eb')
                            }}>
                            <button onClick={closeModal} className="absolute top-4 right-4 p-1 rounded-full transition-colors"
                                style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex justify-center mb-6">
                                <motion.div initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                                    className="relative">
                                    <motion.div initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1.4, opacity: 0 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                                        className="absolute inset-0 rounded-full"
                                        style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }} />
                                    <div className="w-20 h-20 rounded-full flex items-center justify-center"
                                        style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}>
                                        <motion.div initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}>
                                            <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }} className="text-xl font-bold mb-2"
                                style={{ color: darkMode ? 'white' : '#1f2937' }}>
                                Message Received!
                            </motion.h3>
                            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }} className="text-sm mb-6 leading-relaxed"
                                style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                                Thanks for reaching out! I'll review your message and get back to you within 24 hours.
                            </motion.p>
                            <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                onClick={closeModal}
                                className="px-8 py-2.5 text-white font-semibold rounded-xl text-sm transition-all"
                                style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}>
                                OK
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

Contact.propTypes = {
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
}

export default Contact
