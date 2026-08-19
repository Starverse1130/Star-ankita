import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X } from 'lucide-react'
import contactImg from '../assets/images/contact.png'

const Contact = ({ darkMode }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })
    const [showModal, setShowModal] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(true)
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
    }

    const closeModal = () => {
        setShowModal(false)
    }

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
                        Get In{' '}
                        <span style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}>Touch</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl"
                        style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                        Have a project in mind? Let's build something great together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                    <div className="flex justify-center order-2 lg:order-1" data-aos='fade-right'>
                        <img src={contactImg} alt="Contact"
                            className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain' />
                    </div>

                    <form onSubmit={handleSubmit}
                        style={{
                            background: darkMode ? 'linear-gradient(to right, #1f2937, #111827)' : 'linear-gradient(to right, #ffffff, #f9fafb)',
                            borderColor: darkMode ? '#374151' : '#e5e7eb'
                        }}
                        className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2'
                        data-aos='fade-left'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4'>
                            <input type="text" name='firstName' placeholder='First Name'
                                value={formData.firstName} onChange={handleChange}
                                style={{ backgroundColor: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937' }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all' required />
                            <input type="text" name='lastName' placeholder='Last Name'
                                value={formData.lastName} onChange={handleChange}
                                style={{ backgroundColor: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937' }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all' required />
                            <input type="email" name='email' placeholder='Email'
                                value={formData.email} onChange={handleChange}
                                style={{ backgroundColor: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937' }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4' required />
                            <input type="tel" name='phone' placeholder='Phone Number'
                                value={formData.phone} onChange={handleChange}
                                style={{ backgroundColor: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937' }}
                                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4' required />
                        </div>
                        <textarea rows="4" name='message' placeholder='Your Message'
                            value={formData.message} onChange={handleChange}
                            style={{ backgroundColor: darkMode ? '#374151' : '#faede3', borderColor: darkMode ? '#4b5563' : '#d1d5db', color: darkMode ? 'white' : '#1f2937' }}
                            className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-4 sm:mb-6 resize-none' required />
                        <button type='submit'
                            style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
                            className='w-full py-2 sm:py-3 text-white font-semibold rounded-xl text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all'>
                            Send Message
                        </button>
                    </form>
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
                                Message Sent!
                            </motion.h3>
                            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }} className="text-sm mb-6"
                                style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                                Thank you for reaching out. I will get back to you soon!
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

export default Contact
