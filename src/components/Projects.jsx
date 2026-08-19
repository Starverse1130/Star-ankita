import { useState } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'
import project5 from '../assets/projects/project5.png'
import project6 from '../assets/projects/project6.png'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

/**
 * Projects Section Component
 * Displays project cards with category filter and animated transitions.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is active
 */
const Projects = ({ darkMode }) => {
    const [activeFilter, setActiveFilter] = useState('All')

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            desc: 'A modern online store with product listing, cart, and smooth checkout flow. Built with a focus on clean UI and fast performance.',
            image: project1,
            tags: ['React', 'Node.js', 'MongoDB'],
            category: 'Full Stack'
        },
        {
            id: 2,
            title: 'Recipe Finder App',
            desc: 'A responsive app to search and save recipes based on ingredients. Features category filters and a clean card-based layout.',
            image: project2,
            tags: ['React', 'API Integration', 'Tailwind CSS'],
            category: 'API'
        },
        {
            id: 3,
            title: 'Portfolio Website',
            desc: 'A personal portfolio site showcasing projects and skills with smooth animations. Fully responsive across all devices.',
            image: project3,
            tags: ['React', 'Framer Motion', 'CSS3'],
            category: 'Frontend'
        },
        {
            id: 4,
            title: 'Task Management App',
            desc: 'A simple and intuitive to-do app with drag-and-drop task organization. Helps users track daily tasks with ease.',
            image: project4,
            tags: ['React', 'JavaScript', 'LocalStorage'],
            category: 'Frontend'
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            desc: 'A real-time weather app showing current conditions and a 5-day forecast. Clean UI with dynamic backgrounds based on weather.',
            image: project5,
            tags: ['React', 'OpenWeather API', 'CSS3'],
            category: 'API'
        },
        {
            id: 6,
            title: 'Blog Website',
            desc: 'A minimal blogging platform with category-based posts and a clean reading experience. Fully responsive and fast-loading.',
            image: project6,
            tags: ['React', 'JavaScript', 'Tailwind CSS'],
            category: 'Frontend'
        }
    ]

    const filters = ['All', ...new Set(projects.map(p => p.category))]
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)

    return (
        <section
            id='projects'
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb'
            }}
            className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-10' data-aos='fade-up'>
                    <h2
                        className='text-3xl sm:text-4xl font-bold mb-3'
                        style={{
                            color: darkMode ? 'white' : '#1f2937'
                        }}>
                        My <span
                            style={{
                                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}>
                            Projects
                        </span>
                    </h2>
                    <p
                        className='max-w-xl mx-auto'
                        style={{
                            color: darkMode ? '#d1d5db' : '#6b7280'
                        }}>
                        A few projects I've built while learning and growing as a frontend developer.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div
                    className='flex flex-wrap justify-center gap-3 mb-10'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-5 py-2 rounded-xl text-sm font-semibold
                            transition-all duration-300 border
                            ${activeFilter === filter
                                ? 'bg-linear-to-r from-orange-500 to-amber-500 text-white border-transparent shadow-lg shadow-orange-500/25'
                                : darkMode
                                    ? 'bg-gray-800 text-gray-300 border-gray-700 hover:border-orange-500/50 hover:text-orange-400'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-orange-400 hover:text-orange-500'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2
                lg:grid-cols-3 gap-5 mb-12'>
                    <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right, #1f2937, #111827)'
                                    : 'linear-gradient(to right, #ffffff, #f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='group rounded-xl border duration-500
                            hover:border-orange-500/50 transition-all
                            hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(255,165,0,0.15)]'>
                            {/* Image with overlay */}
                            <div className='relative h-36 sm:h-44 overflow-hidden rounded-t-xl'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading='lazy'
                                    decoding='async'
                                    className='w-full h-full object-cover
                                    group-hover:scale-110 transition-transform
                                    duration-700 ease-out' />
                                {/* Hover overlay */}
                                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                    flex items-end justify-center pb-4'>
                                    <span className='text-white text-sm font-semibold tracking-wide
                                        translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                                        View Project →
                                    </span>
                                </div>
                            </div>

                            <div className='p-5'>
                                <h3
                                    className='text-lg font-bold mb-2
                                    group-hover:text-orange-400 transition-colors duration-300'
                                    style={{
                                        color: darkMode ? 'white' : '#1f2937'
                                    }}>
                                    {project.title}
                                </h3>

                                <p
                                    className='text-sm mb-4 leading-relaxed'
                                    style={{
                                        color: darkMode ? '#9ca3af' : '#6b7280'
                                    }}>
                                    {project.desc}
                                </p>

                                <div className='flex flex-wrap gap-2 mb-5'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                                color: darkMode ? '#d1d5db' : '#4b5563'
                                            }}
                                            className='px-2.5 py-1 text-xs rounded-full
                                            group-hover:border group-hover:border-orange-500/30
                                            transition-all duration-300'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex gap-2'>
                                    <a
                                        href="https://github.com/sonwanisonwani81-lang"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? 'white' : '#374151'
                                        }}
                                        className='flex-1 flex items-center
                                        justify-center gap-1.5 px-3 py-2.5
                                        text-sm rounded-xl hover:bg-gray-600
                                        hover:scale-105 transition-all duration-300'>
                                        <FaGithub className='text-sm'/>
                                        <span>Code</span>
                                    </a>

                                    {/* Demo  */}
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        style={{
                                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                                        }}
                                        className='flex-1 flex items-center
                                        justify-center gap-1.5 px-3 py-2.5 text-white
                                        text-sm rounded-xl hover:shadow-lg
                                        hover:shadow-orange-500/30 hover:scale-105
                                        transition-all duration-300'>
                                        <FaExternalLinkAlt className='text-sm'/>
                                        <span>Demo</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    </AnimatePresence>
                </div>

                <div className='text-center mt-10'>
                    <a
                        href="https://github.com/sonwanisonwani81-lang"
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                        }}
                        className='inline-flex items-center font-semibold
                        gap-2 px-7 py-4 text-white
                        text-sm rounded-xl hover:shadow-lg
                        hover:shadow-orange-500/25 transition-all'
                        data-aos='zoom-in'
                        data-aos-delay='400'
                    >
                        <FaGithub />
                        <span>View All Projects</span>
                        <FaExternalLinkAlt className='text-sm'/>
                    </a>
                </div>
            </div>
        </section>
    )
}


Projects.propTypes = {
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
}

export default Projects