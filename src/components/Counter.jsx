import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

/**
 * Animated Counter Component
 * Counts from 0 to target number when visible in viewport.
 * Uses Intersection Observer for scroll-triggered animation.
 *
 * @param {Object} props
 * @param {number} props.target - Target number to count to
 * @param {string} [props.suffix=''] - Suffix to append (e.g., '+', '%')
 * @param {number} [props.duration=2000] - Animation duration in ms
 */
const Counter = ({ target, suffix = '', duration = 2000 }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const startTime = Date.now()
                    const numTarget = parseInt(target)

                    const animate = () => {
                        const elapsed = Date.now() - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.floor(eased * numTarget))

                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        } else {
                            setCount(numTarget)
                        }
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, duration])

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    )
}

Counter.propTypes = {
  /** Target number to count to */
  target: PropTypes.number.isRequired,
  /** Suffix to append after the number */
  suffix: PropTypes.string,
  /** Animation duration in milliseconds */
  duration: PropTypes.number,
}

export default Counter
