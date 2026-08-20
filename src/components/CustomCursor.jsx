import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Custom Cursor Component
 * Glowing cursor effect for dark mode on desktop. Uses requestAnimationFrame
 * for smooth performance. Includes hover detection for interactive elements.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is active
 */
const CustomCursor = ({ darkMode }) => {
    const [position, setPosition] = useState({ x: -100, y: -100 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        let animFrameId = null
        let latestPos = { x: -100, y: -100 }

        const updatePosition = () => {
            setPosition(latestPos)
            animFrameId = null
        }

        const handleMouseMove = (e) => {
            latestPos = { x: e.clientX, y: e.clientY }
            if (!animFrameId) {
                animFrameId = requestAnimationFrame(updatePosition)
            }
        }

        const handleMouseOver = (e) => {
            const target = e.target
            const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], [data-cursor-hover]')
            setIsHovering(!!isInteractive)
        }

        const handleMouseOut = (e) => {
            const relatedTarget = e.relatedTarget
            if (!relatedTarget) {
                setIsHovering(false)
                return
            }
            const isStillInteractive = relatedTarget.closest?.('a, button, input, textarea, select, [role="button"], [data-cursor-hover]')
            setIsHovering(!!isStillInteractive)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mouseout', handleMouseOut)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mouseout', handleMouseOut)
            if (animFrameId) cancelAnimationFrame(animFrameId)
        }
    }, [])

    return (
        <>
            {/* Outer glow ring */}
            <motion.div
                className='fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden lg:block'
                animate={{
                    x: position.x - 16,
                    y: position.y - 16,
                    scale: isHovering ? 1.8 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
                style={{
                    border: isHovering
                        ? '2px solid rgba(249, 115, 22, 0.8)'
                        : `1.5px solid ${darkMode ? 'rgba(249, 115, 22, 0.4)' : 'rgba(249, 115, 22, 0.3)'}`,
                    background: isHovering
                        ? 'rgba(249, 115, 22, 0.08)'
                        : 'transparent',
                    mixBlendMode: darkMode ? 'screen' : 'normal',
                    transition: 'background 0.3s, border 0.3s',
                }}
            />
            {/* Inner dot */}
            <motion.div
                className='fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] hidden lg:block'
                animate={{
                    x: position.x - 3,
                    y: position.y - 3,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                }}
                style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)',
                    boxShadow: darkMode
                        ? '0 0 10px rgba(249, 115, 22, 0.8)'
                        : '0 0 8px rgba(249, 115, 22, 0.5)',
                }}
            />
        </>
    )
}

CustomCursor.propTypes = {
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
}

export default CustomCursor
