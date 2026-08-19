/**
 * Shared Site Data
 * Centralized data for navigation, social links, services, and other site-wide content.
 * Components should import from this file instead of defining data inline.
 */

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Globe, Code, Smartphone, Palette } from 'lucide-react'

// ─── Navigation Links ────────────────────────────────────────────
export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

// ─── Social Links ────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: 'https://github.com/sonwanisonwani81-lang',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/ankita-ankita-a627323aa/',
    label: 'LinkedIn',
  },
]

// ─── Hero Social Icons (PNG) ─────────────────────────────────────
export const HERO_SOCIAL_ICONS = [
  { alt: 'LinkedIn', url: 'https://www.linkedin.com/in/ankita-ankita-a627323aa/' },
  { alt: 'GitHub', url: 'https://github.com/sonwanisonwani81-lang' },
]

// ─── Services ────────────────────────────────────────────────────
export const SERVICES = [
  { icon: Globe, name: 'Web Development' },
  { icon: Code, name: 'Frontend Development' },
  { icon: Smartphone, name: 'Responsive Design' },
  { icon: Palette, name: 'UI/UX Design' },
]

// ─── Skills Data ─────────────────────────────────────────────────
export const SKILLS = [
  { name: 'HTML', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'CSS', level: 88, color: 'from-yellow-500 to-amber-500' },
  { name: 'JavaScript', level: 92, color: 'from-teal-500 to-cyan-500' },
  { name: 'React', level: 85, color: 'from-cyan-500 to-blue-500' },
  { name: 'Git', level: 85, color: 'from-red-500 to-orange-500' },
  { name: 'MySQL', level: 92, color: 'from-green-500 to-emerald-500' },
  { name: 'Python', level: 75, color: 'from-blue-500 to-indigo-500' },
  { name: 'Django', level: 95, color: 'from-orange-500 to-amber-500' },
]

// ─── Projects Data ───────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    desc: 'A modern online store with product listing, cart, and smooth checkout flow. Built with a focus on clean UI and fast performance.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Recipe Finder App',
    desc: 'A responsive app to search and save recipes based on ingredients. Features category filters and a clean card-based layout.',
    tags: ['React', 'API Integration', 'Tailwind CSS'],
    category: 'API',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    desc: 'A personal portfolio site showcasing projects and skills with smooth animations. Fully responsive across all devices.',
    tags: ['React', 'Framer Motion', 'CSS3'],
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Task Management App',
    desc: 'A simple and intuitive to-do app with drag-and-drop task organization. Helps users track daily tasks with ease.',
    tags: ['React', 'JavaScript', 'LocalStorage'],
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    desc: 'A real-time weather app showing current conditions and a 5-day forecast. Clean UI with dynamic backgrounds based on weather.',
    tags: ['React', 'OpenWeather API', 'CSS3'],
    category: 'API',
  },
  {
    id: 6,
    title: 'Blog Website',
    desc: 'A minimal blogging platform with category-based posts and a clean reading experience. Fully responsive and fast-loading.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    category: 'Frontend',
  },
]

// ─── About Stats ─────────────────────────────────────────────────
export const STATS = [
  { target: 2, suffix: '+', label: 'Years Experience' },
  { target: 3, suffix: '+', label: 'Projects Completed' },
  { target: 10, suffix: '+', label: 'Certifications' },
]

// ─── Contact Info ────────────────────────────────────────────────
export const CONTACT_INFO = {
  email: 'ankita@email.com',
  location: 'India',
}

// ─── Typing Words ────────────────────────────────────────────────
export const TYPING_WORDS = [
  'Frontend Developer',
  'Full Stack Developer',
  'UI/UX Designer',
]
