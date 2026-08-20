import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaHeart, FaArrowUp } from 'react-icons/fa'
import { Mail, MapPin, Send, Code, Smartphone, Globe, Palette } from 'lucide-react'

/**
 * Footer Component
 * 4-column layout with brand info, quick links, services, and contact CTA.
 * Includes back-to-top button and copyright bar.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is active
 */
const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear()

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    const services = [
        { icon: Globe, name: 'Web Development' },
        { icon: Code, name: 'Frontend Development' },
        { icon: Smartphone, name: 'Responsive Design' },
        { icon: Palette, name: 'UI/UX Design' },
    ]

    const socialLinks = [
        { icon: FaGithub, href: import.meta.env.VITE_GITHUB_URL || 'https://github.com/sonwanisonwani81-lang', label: 'GitHub' },
        { icon: FaLinkedin, href: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/ankita-ankita-a627323aa/', label: 'LinkedIn' },
    ]

    return (
        <footer
            style={{
                background: darkMode
                    ? 'linear-gradient(to bottom, #000000, #111827)'
                    : 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)',
            }}
        >
            {/* Top Divider */}
            <div
                className='h-px w-full'
                style={{
                    background: 'linear-gradient(to right, transparent, ' + (darkMode ? '#374151' : '#d1d5db') + ', transparent)'
                }}
            />

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6'>
                {/* 4 Column Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-10'>

                    {/* Column 1: Brand */}
                    <div className='sm:col-span-2 lg:col-span-1 text-center sm:text-left'>
                        <h3 className='text-2xl font-bold mb-3'>
                            <span className='text-orange-500'>Portfolio</span>
                            <span style={{ color: darkMode ? 'white' : '#1f2937' }}>. </span>
                        </h3>
                        <p
                            className='text-sm mb-4 max-w-xs mx-auto sm:mx-0'
                            style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                        >
                            Crafting digital experiences with clean code and creative design.
                        </p>
                        <div className='flex items-center gap-3 justify-center sm:justify-start'>
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className='w-9 h-9 rounded-full flex items-center
                                    justify-center transition-all duration-300
                                    hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                                    style={{
                                        backgroundColor: darkMode ? '#1f2937' : '#f3f4f6',
                                        color: darkMode ? 'white' : '#374151',
                                        border: '1px solid ' + (darkMode ? '#374151' : '#e5e7eb')
                                    }}
                                >
                                    <social.icon className='w-3.5 h-3.5' />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className='text-center sm:text-left'>
                        <h4
                            className='text-sm font-semibold uppercase tracking-wider mb-4'
                            style={{ color: darkMode ? 'white' : '#1f2937' }}
                        >
                            Quick Links
                        </h4>
                        <ul className='space-y-2.5'>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className='text-sm transition-all duration-300
                                        hover:text-orange-500 hover:pl-1'
                                        style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                                    >
                                        <span className='text-orange-500 mr-1'>›</span>{link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className='text-center sm:text-left'>
                        <h4
                            className='text-sm font-semibold uppercase tracking-wider mb-4'
                            style={{ color: darkMode ? 'white' : '#1f2937' }}
                        >
                            Services
                        </h4>
                        <ul className='space-y-2.5'>
                            {services.map((service) => (
                                <li key={service.name} className='flex items-center gap-2 justify-center sm:justify-start'>
                                    <service.icon className='w-3.5 h-3.5 text-orange-500 shrink-0' />
                                    <span
                                        className='text-sm'
                                        style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                                    >
                                        {service.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact + CTA */}
                    <div className='text-center sm:text-left'>
                        <h4
                            className='text-sm font-semibold uppercase tracking-wider mb-4'
                            style={{ color: darkMode ? 'white' : '#1f2937' }}
                        >
                            Get In Touch
                        </h4>
                        <div className='space-y-2.5 mb-5'>
                            <div className='flex items-center gap-2 justify-center sm:justify-start'>
                                <Mail className='w-3.5 h-3.5 text-orange-500 shrink-0' />
                                <a
                                    href='mailto:starverse1130@gmail.com'
                                    className='text-sm transition-colors duration-300 hover:text-orange-500'
                                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                                >
                                    starverse1130@gmail.com
                                </a>
                            </div>
                            <div className='flex items-center gap-2 justify-center sm:justify-start'>
                                <MapPin className='w-3.5 h-3.5 text-orange-500 shrink-0' />
                                <span
                                    className='text-sm'
                                    style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
                                >
                                    India
                                </span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href='#contact'
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            className='inline-flex items-center gap-2 px-5 py-2.5
                            rounded-xl text-sm font-semibold transition-all duration-300
                            hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]'
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                color: 'white'
                            }}
                        >
                            <Send className='w-3.5 h-3.5' />
                            Hire Me
                        </motion.a>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div
                    className='h-px w-full mb-6'
                    style={{
                        background: 'linear-gradient(to right, transparent, ' + (darkMode ? '#374151' : '#d1d5db') + ', transparent)'
                    }}
                />

                {/* Bottom Bar */}
                <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
                    <p
                        className='text-xs'
                        style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}
                    >
                        © {currentYear} All rights reserved.
                    </p>
                    <div className='flex items-center gap-4'>
                        <p
                            className='text-xs flex items-center gap-1'
                            style={{ color: darkMode ? '#6b7280' : '#9ca3af' }}
                        >
                            Crafted with <FaHeart className='text-red-500 text-[10px]' /> by
                            <span className='text-orange-500 font-semibold'> Ankita</span>
                        </p>
                        <motion.a
                            href='#home'
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className='w-8 h-8 rounded-full flex items-center
                            justify-center transition-all duration-300
                            hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                color: 'white'
                            }}
                            aria-label='Back to top'
                        >
                            <FaArrowUp className='w-3 h-3' />
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
}

export default Footer