import PropTypes from 'prop-types'
import { useState, useEffect, useCallback } from 'react'

/**
 * Typing Text Component
 * Animated typewriter effect that cycles through an array of words.
 * Types, pauses, deletes, and moves to the next word.
 *
 * @param {Object} props
 * @param {string[]} props.words - Array of words to cycle through
 * @param {boolean} props.darkMode - Whether dark mode is active
 * @param {number} [props.speed=100] - Typing speed in ms
 * @param {number} [props.deleteSpeed=60] - Delete speed in ms
 * @param {number} [props.pauseTime=2000] - Pause time after typing complete word
 */
const TypingText = ({ words, darkMode, speed = 100, deleteSpeed = 60, pauseTime = 2000 }) => {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const tick = useCallback(() => {
        const currentWord = words[wordIndex]

        if (!isDeleting) {
            setText(currentWord.substring(0, text.length + 1))

            if (text === currentWord) {
                setTimeout(() => setIsDeleting(true), pauseTime)
                return
            }
        } else {
            setText(currentWord.substring(0, text.length - 1))

            if (text === '') {
                setIsDeleting(false)
                setWordIndex((prev) => (prev + 1) % words.length)
                return
            }
        }
    }, [text, wordIndex, isDeleting, words, pauseTime])

    useEffect(() => {
        const timer = setTimeout(tick, isDeleting ? deleteSpeed : speed)
        return () => clearTimeout(timer)
    }, [tick, isDeleting, speed, deleteSpeed, words.length])

    return (
        <span
            className={darkMode ? 'text-orange-400' : 'text-orange-500'}
        >
            {text}
            <span className='animate-pulse'>|</span>
        </span>
    )
}

TypingText.propTypes = {
  /** Array of words to cycle through */
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Whether dark mode is active */
  darkMode: PropTypes.bool.isRequired,
  /** Typing speed in milliseconds */
  speed: PropTypes.number,
  /** Delete speed in milliseconds */
  deleteSpeed: PropTypes.number,
  /** Pause time after typing complete word in milliseconds */
  pauseTime: PropTypes.number,
}

export default TypingText
