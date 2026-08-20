/**
 * Centralized Theme Configuration
 * All colors, gradients, and shared constants live here.
 * Components should import from this file instead of hardcoding values.
 */

// ─── Brand Colors ────────────────────────────────────────────────
export const COLORS = {
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
  },
  amber: {
    400: '#fbbf24',
    500: '#f59e0b',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
}

// ─── Gradients ───────────────────────────────────────────────────
export const GRADIENTS = {
  primary: 'linear-gradient(to right, #f97316, #f59e0b)',
  primaryHover: 'linear-gradient(to right, #ea580c, #d97706)',
  heroDark: 'linear-gradient(to right, #f97316, #fb923c, #f59e0b)',
  heroLight: 'linear-gradient(to right, #f97316, #fb923c, #f59e0b)',
}

// ─── Dark Mode Colors ────────────────────────────────────────────
export const DARK_THEME = {
  bg: {
    primary: '#111827',
    secondary: '#1f2937',
    card: 'linear-gradient(to bottom right, #1f2937, #111827)',
    cardHover: 'linear-gradient(to right, #1f2937, #111827)',
  },
  text: {
    primary: 'white',
    secondary: '#d1d5db',
    muted: '#9ca3af',
    subtle: '#6b7280',
  },
  border: {
    default: '#374151',
    hover: 'rgba(249, 115, 22, 0.5)',
  },
  nav: {
    bg: 'bg-linear-to-br from-gray-700 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textActive: 'text-orange-400',
  },
}

// ─── Light Mode Colors ───────────────────────────────────────────
export const LIGHT_THEME = {
  bg: {
    primary: '#f9fafb',
    secondary: '#f3f4f6',
    card: 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
    cardHover: 'linear-gradient(to right, #ffffff, #f9fafb)',
  },
  text: {
    primary: '#1f2937',
    secondary: '#4b5563',
    muted: '#6b7280',
    subtle: '#9ca3af',
  },
  border: {
    default: '#e5e7eb',
    hover: 'rgba(249, 115, 22, 0.5)',
  },
  nav: {
    bg: 'bg-linear-to-br from-orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textActive: 'text-orange-600',
  },
}

// ─── Helper: Get theme based on darkMode ─────────────────────────
export const getTheme = (darkMode) => darkMode ? DARK_THEME : LIGHT_THEME

// ─── Z-Index Scale ───────────────────────────────────────────────
export const Z_INDEX = {
  navbar: 50,
  progressBar: 100,
  modal: 50,
  cursor: 9999,
}

// ─── Animation Durations ─────────────────────────────────────────
export const DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 700,
}
