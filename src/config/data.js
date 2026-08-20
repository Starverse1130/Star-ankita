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
    href: import.meta.env.VITE_GITHUB_URL || 'https://github.com/sonwanisonwani81-lang',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/ankita-ankita-a627323aa/',
    label: 'LinkedIn',
  },
]

// ─── Hero Social Icons (PNG) ─────────────────────────────────────
export const HERO_SOCIAL_ICONS = [
  { alt: 'LinkedIn', url: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/ankita-ankita-a627323aa/' },
  { alt: 'GitHub', url: import.meta.env.VITE_GITHUB_URL || 'https://github.com/sonwanisonwani81-lang' },
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
    fullDesc: 'A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and secure checkout. Built with a focus on clean UI, responsive design, and fast performance.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/sonwanisonwani81-lang/ecommerce-platform',
    live: '#',
    highlights: ['Product catalog with search & filters', 'Shopping cart with persistence', 'User auth & secure checkout', 'Responsive across all devices'],
  },
  {
    id: 2,
    title: 'Recipe Finder App',
    desc: 'A responsive app to search and save recipes based on ingredients. Features category filters and a clean card-based layout.',
    fullDesc: 'A responsive recipe discovery app that lets users search by ingredients, save favorites, and explore categories. Features real-time API integration and a clean card-based UI.',
    tags: ['React', 'API Integration', 'Tailwind CSS'],
    category: 'Backend',
    github: 'https://github.com/sonwanisonwani81-lang/recipe-finder',
    live: '#',
    highlights: ['Search recipes by ingredients', 'Save favorites to local storage', 'Category-based filtering', 'Responsive card layout'],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    desc: 'A personal portfolio site showcasing projects and skills with smooth animations. Fully responsive across all devices.',
    fullDesc: 'A personal portfolio website built with React and Framer Motion, featuring smooth scroll animations, dark/light mode, and a fully responsive design that looks great on every device.',
    tags: ['React', 'Framer Motion', 'CSS3'],
    category: 'Frontend',
    github: 'https://github.com/sonwanisonwani81-lang/portfolio',
    live: '#',
    highlights: ['Framer Motion animations', 'Dark/Light mode toggle', 'Fully responsive', 'Contact form integration'],
  },
  {
    id: 4,
    title: 'Task Management App',
    desc: 'A simple and intuitive to-do app with drag-and-drop task organization. Helps users track daily tasks with ease.',
    fullDesc: 'An intuitive task management application with drag-and-drop functionality, priority levels, and local storage persistence. Helps users organize and track daily tasks efficiently.',
    tags: ['React', 'JavaScript', 'LocalStorage'],
    category: 'Frontend',
    github: 'https://github.com/sonwanisonwani81-lang/task-manager',
    live: '#',
    highlights: ['Drag & drop task organization', 'Priority levels & status', 'Local storage persistence', 'Clean, minimal UI'],
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    desc: 'A real-time weather app showing current conditions and a 5-day forecast. Clean UI with dynamic backgrounds based on weather.',
    fullDesc: 'A real-time weather dashboard that displays current conditions, 5-day forecast, and dynamic backgrounds based on weather. Uses OpenWeather API for accurate, up-to-date data.',
    tags: ['React', 'OpenWeather API', 'CSS3'],
    category: 'Backend',
    github: 'https://github.com/sonwanisonwani81-lang/weather-dashboard',
    live: '#',
    highlights: ['Real-time weather data', '5-day forecast', 'Dynamic weather backgrounds', 'Location search'],
  },
  {
    id: 6,
    title: 'Blog Website',
    desc: 'A minimal blogging platform with category-based posts and a clean reading experience. Fully responsive and fast-loading.',
    fullDesc: 'A minimal blogging platform with category-based navigation, clean typography, and a distraction-free reading experience. Built for speed and readability.',
    tags: ['React', 'JavaScript', 'Tailwind CSS'],
    category: 'Frontend',
    github: 'https://github.com/sonwanisonwani81-lang/blog-website',
    live: '#',
    highlights: ['Category-based post filtering', 'Clean reading typography', 'Fast page loads', 'Mobile-first responsive'],
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
  email: 'starverse1130@gmail.com',
  location: 'India',
}

// ─── Typing Words ────────────────────────────────────────────────
export const TYPING_WORDS = [
  'Frontend Developer',
  'Full Stack Developer',
  'UI/UX Designer',
]

// ─── About Modal / Resume Data ───────────────────────────────────
export const ABOUT_MODAL_DATA = {
  name: 'Ankita',
  title: 'Full Stack Developer',
  tagline: 'Crafting digital experiences with clean code and creative design.',
  about: `I'm a passionate Full Stack Developer with 2+ years of experience building modern web applications. At DVertex, I develop and maintain scalable solutions across the entire stack — from pixel-perfect frontends to robust backend systems. I thrive in fast-paced environments and enjoy turning complex problems into intuitive, elegant interfaces.`,

  experience: [
    {
      role: 'Full Stack Developer',
      company: 'DVertex',
      period: '2023 — Present',
      highlights: [
        'Developing and maintaining scalable web applications across the full stack',
        'Building pixel-perfect, responsive frontends with React & Tailwind CSS',
        'Designing robust backend APIs with Django & MySQL',
        'Collaborating with cross-functional teams in an agile environment',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'University, India',
      year: '2023',
    },
  ],

  certifications: [
    'Full Stack Web Development',
    'React & Frontend Development',
    'Python & Django Framework',
    'UI/UX Design Fundamentals',
    'Git & Version Control',
    'REST API Development',
    'Database Management (MySQL)',
    'Agile & Scrum Methodology',
    'JavaScript Advanced Concepts',
    'Responsive Web Design',
  ],

  quickInfo: [
    { label: 'Location', value: 'India' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Availability', value: 'Open to Work' },
    { label: 'Languages', value: 'English, Hindi' },
  ],
}
