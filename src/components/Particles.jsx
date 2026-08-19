import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

/**
 * Particles Background Component
 * Canvas-based animated particle system with connecting lines.
 * Adapts opacity based on dark/light mode.
 *
 * @param {Object} props
 * @param {boolean} props.darkMode - Whether dark mode is active
 */
const Particles = ({ darkMode }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationId
        let particles = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createParticles = () => {
            particles = []
            const count = Math.floor((canvas.width * canvas.height) / 15000)
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.4,
                    speedY: (Math.random() - 0.5) * 0.4,
                    opacity: Math.random() * 0.5 + 0.1,
                })
            }
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p, i) => {
                p.x += p.speedX
                p.y += p.speedY

                if (p.x < 0) p.x = canvas.width
                if (p.x > canvas.width) p.x = 0
                if (p.y < 0) p.y = canvas.height
                if (p.y > canvas.height) p.y = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = darkMode
                    ? `rgba(249, 115, 22, ${p.opacity})`
                    : `rgba(249, 115, 22, ${p.opacity * 0.6})`
                ctx.fill()

                // Draw lines between nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x
                    const dy = p.y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = darkMode
                            ? `rgba(249, 115, 22, ${0.08 * (1 - dist / 120)})`
                            : `rgba(249, 115, 22, ${0.05 * (1 - dist / 120)})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            })

            animationId = requestAnimationFrame(drawParticles)
        }

        resize()
        createParticles()
        drawParticles()

        const handleResize = () => {
            resize()
            createParticles()
        }
        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', handleResize)
        }
    }, [darkMode])

    return (
        <canvas
            ref={canvasRef}
            className='absolute inset-0 pointer-events-none z-0'
            style={{ opacity: 0.6 }}
        />
    )
}

Particles.propTypes = {
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
}

export default Particles
