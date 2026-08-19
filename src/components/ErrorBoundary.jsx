import { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * Error Boundary Component
 * Catches JavaScript errors in child components and displays a fallback UI.
 * Prevents the entire app from crashing due to a single component error.
 *
 * Usage:
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught:', error, errorInfo)
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='min-h-screen flex items-center justify-center bg-gray-900 p-4'>
          <div className='text-center max-w-md'>
            {/* Error Icon */}
            <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center'>
              <span className='text-4xl'>⚠️</span>
            </div>

            <h1 className='text-2xl font-bold text-white mb-2'>
              Something went wrong
            </h1>
            <p className='text-gray-400 mb-6 text-sm'>
              An unexpected error occurred. Please try refreshing the page.
            </p>

            {/* Error Details (dev only) */}
            {import.meta.env.DEV && this.state.error && (
              <details className='mb-6 text-left'>
                <summary className='text-orange-400 text-sm cursor-pointer mb-2'>
                  Error Details
                </summary>
                <pre className='text-xs text-red-400 bg-gray-800 p-3 rounded-lg overflow-auto max-h-40'>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            {/* Actions */}
            <div className='flex gap-3 justify-center'>
              <button
                onClick={this.handleReset}
                className='px-6 py-2.5 rounded-xl font-semibold text-sm text-white
                transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30'
                style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className='px-6 py-2.5 rounded-xl font-semibold text-sm
                border border-gray-600 text-gray-300 hover:border-orange-500
                hover:text-orange-400 transition-all duration-300'
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  /** Child components to wrap */
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary
