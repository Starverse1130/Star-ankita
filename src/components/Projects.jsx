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
import { PROJECTS } from '../config/data'
import ProjectModal from './ProjectModal'
import ComingSoonModal from './ComingSoonModal'

// Project images map — data.js mein sirf id hai, images yahan hain
const PROJECT_IMAGES = {
    1: project1,
    2: project2,
    3: project3,
    4: project4,
    5: project5,
    6: project6,
}

/**
 * Projects Section Component
 * Displays project cards with category filter and animated transitions.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is active
 */
const Projects = ({ darkMode }) => {
    const [activeFilter, setActiveFilter] = useState('All')
    const [showAll, setShowAll] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [comingSoonOpen, setComingSoonOpen] = useState(false)
    const [comingSoonTitle, setComingSoonTitle] = useState('')

    const openComingSoon = (title) => {
        setComingSoonTitle(title)
        setComingSoonOpen(true)
    }

    const openModal = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

    const projects = PROJECTS

    const filters = ['All', ...new Set(projects.map(p => p.category))]
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter)
    const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

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
                    className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-10'
                    data-aos='fade-up'
                    data-aos-delay='200'>
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => { setActiveFilter(filter); setShowAll(false) }}
                            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold
                            transition-all duration-300 border cursor-pointer
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
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => openModal(project)}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            style={{
                                background: darkMode
                                    ? 'linear-gradient(to right, #1f2937, #111827)'
                                    : 'linear-gradient(to right, #ffffff, #f9fafb)',
                                borderColor: darkMode ? '#374151' : '#e5e7eb'
                            }}
                            className='group rounded-xl border duration-500
                            hover:border-orange-500/50 transition-all
                            hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(255,165,0,0.15)]
                            hover:scale-[1.01] cursor-pointer'>
                            {/* Image with overlay */}
                            <div className='relative h-36 sm:h-44 overflow-hidden rounded-t-xl'>
                                <img
                                    src={PROJECT_IMAGES[project.id]}
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
                                        href={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        onClick={(e) => e.stopPropagation()}
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
                                        href={project.live}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            if (project.live === '#') {
                                                e.preventDefault()
                                                openComingSoon(project.title)
                                            }
                                        }}
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

                {/* Project Preview Modal */}
                {selectedProject && (
                    <ProjectModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        project={selectedProject}
                        darkMode={darkMode}
                        image={PROJECT_IMAGES[selectedProject.id]}
                        onLiveDemo={() => openComingSoon(selectedProject.title)}
                    />
                )}

                {/* Coming Soon Modal */}
                <ComingSoonModal
                    isOpen={comingSoonOpen}
                    onClose={() => setComingSoonOpen(false)}
                    title={comingSoonTitle}
                    darkMode={darkMode}
                />

                <div className='text-center mt-10'>
                    <motion.button
                        onClick={() => setShowAll(!showAll)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                        }}
                        className='inline-flex items-center font-semibold
                        gap-2 px-7 py-4 text-white
                        text-sm rounded-xl hover:shadow-lg
                        hover:shadow-orange-500/25 transition-all cursor-pointer'
                        data-aos='zoom-in'
                        data-aos-delay='400'
                    >
                        <FaGithub />
                        <span>{showAll ? 'Show Less' : 'View All Projects'}</span>
                        <FaExternalLinkAlt className='text-sm'/>
                    </motion.button>
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