import { useState } from 'react'
import PropTypes from 'prop-types'
import about from '../assets/images/about.png'
import Counter from './Counter'
import AboutModal from './AboutModal'

/**
 * About Section Component
 * Displays bio, stats with animated counters, and learning more CTA.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is active
 */
const About = ({ darkMode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section id="about" className={`py-16 sm:py-24 overflow-hidden flex
        items-center justify-center px-4 sm:px-6`}>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2
            gap-8 sm:gap-12 items-center">
                <figure
                    data-aos='fade-up'
                    data-aos-delay='300'
                    className="flex flex-wrap justify-center gap-4 relative
                    order-2 lg:order-1">
                    <div className="relative w-64 h-64 sm:w-75 sm:h-75 lg:w-96 lg:h-96">
                        {/* Image  */}
                        <div className="absolute -inset-4 lg:-inset-20
                        bg-linear-to-r from-[#f97316] via-[#fb923c]
                        to-[#f59e0b] rotate-12 star-shape z-0"
                        data-aos='zoom-in'
                        data-aos-delay='600'>
                        </div>
                        <img
                            src={about}
                            alt="About Image"
                            loading='lazy'
                            decoding='async'
                            className='absolute inset-0 w-full h-full
                            object-cover z-10 transition-all duration-300'
                            data-aos='zoom-in'
                            data-aos-delay='400'/>
                    </div>
                </figure>
                <article
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='text-center lg:text-left relative order-1
                    lg:order-2'>
                    <header>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl
                        xl:text-6xl font-bold mb-4 sm:mb-6
                        bg-linear-to-r from-orange-400
                        to-orange-600 bg-clip-text text-transparent'
                        data-aos='fade-up'
                        data-aos-delay='400'>
                            About Me
                        </h1>
                    </header>
                    <p className={`text-sm sm:text-base lg:text-lg
                        xl:text-xl mb-6 sm:mb-8 leading-relaxed
                        p-4 sm:p-6 rounded-xl sm:rounded-2xl
                        ${darkMode ? 'text-gray-300 bg-linear-to-r from-orange-900/10 to-orange-900/5 backdrop-blur-sm' : 'text-gray-600 bg-orange-50/50'}`}
                        data-aos='fade-up'
                        data-aos-delay='500'>
                        I'm a Full Stack Developer with a strong focus on building high-performance
                        web applications. At <b>DVertex</b>, I develop and maintain scalable solutions
                        across the entire stack — from pixel-perfect frontends to robust backend systems.
                        I thrive in fast-paced environments and enjoy turning complex problems into
                        intuitive, elegant interfaces.
                    </p>
                    <div
                        className='flex flex-wrap justify-center
                        lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6
                        sm:mb-8'>
                        <div
                            className='text-center'
                            data-aos='zoom-in'
                            data-aos-delay='700'>
                            <div className='text-2xl sm:text-3xl
                            lg:text-4xl font-bold text-orange-400'>
                                <Counter target={2} suffix='+' />
                            </div>
                            <div className={`text-xs sm:text-sm lg:text-base
                            ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                            >Years Experience</div>
                        </div>
                        <div
                            className='text-center'
                            data-aos='zoom-in'
                            data-aos-delay='600'>
                            <div className='text-2xl sm:text-3xl
                            lg:text-4xl font-bold text-orange-400'>
                                <Counter target={3} suffix='+' />
                            </div>
                            <div className={`text-xs sm:text-sm lg:text-base
                            ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                            >Projects Completed</div>
                        </div>
                        <div
                            className='text-center'
                            data-aos='zoom-in'
                            data-aos-delay='600'>
                            <div className='text-2xl sm:text-3xl
                            lg:text-4xl font-bold text-orange-400'>
                                <Counter target={10} suffix='+' />
                            </div>
                            <div className={`text-xs sm:text-sm lg:text-base
                            ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                            >Certifications</div>
                        </div>
                        
                    </div>
                    <button onClick={() => setIsModalOpen(true)} className={`w-full sm:w-auto border-2
                        border-orange-500 inline-flex items-center
                        justify-center py-2 px-4 sm:px-6
                        hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-xl text-base sm:text-lg font-semibold
                        transition-all duration-300 transform cursor-pointer
                        ${darkMode
                        ? 'text-white bg-orange-500/10'
                        : 'text-gray-800 bg-white/90'}`}
                        data-aos='fade-up'
                        data-aos-delay='800'>
                            Learn More
                        </button>

                    <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} darkMode={darkMode} />
                </article>
            </div>
        </section>
    );
};

About.propTypes = {
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
}

export default About

