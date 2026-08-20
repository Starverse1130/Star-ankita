<div align="center">

# 🚀 Ankita | Portfolio

**Full Stack Developer — Crafting Digital Experiences**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Framer Motion](https://img.shields.io/badge/Framer-13-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion)

[![Live Demo](https://img.shields.io/badge/Live_Demo-🚀-22C55E?style=for-the-badge)]()
[![Report Bug](https://img.shields.io/badge/Report_Bug-🐛-EF4444?style=for-the-badge)]()
[![Request Feature](https://img.shields.io/badge/Request_Feature-💡-F59E0B?style=for-the-badge)]()

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Author](#-author)
- [License](#-license)

---

## 📌 About

A modern, responsive portfolio website built with **React** and **Tailwind CSS**. Features smooth animations, dark/light mode, contact form with email integration, and a clean, professional design.

**Live URL:** [ankita-portfolio.vercel.app](#)

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Build Tool** | Vite 8 |
| **Animations** | Framer Motion 13 |
| **Icons** | Lucide React, React Icons |
| **Scroll Animations** | AOS (Animate On Scroll) |
| **Email Service** | EmailJS |
| **Form Backend** | SheetDB (Google Sheets) |
| **Package Manager** | npm |

---

## ✨ Features

- 🌙 **Dark / Light Mode** — Toggle between themes with smooth transitions
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ✨ **Smooth Animations** — Framer Motion + AOS scroll animations
- 🎯 **Custom Cursor** — Glowing cursor effect on desktop
- 📊 **Animated Skill Bars** — Visual proficiency indicators
- 🗂 **Project Filtering** — Filter by Full Stack, Frontend, Backend
- 📧 **Contact Form** — Sends email via EmailJS + saves to Google Sheets
- 🔒 **Coming Soon Modal** — For upcoming project demos
- 📄 **Resume Download** — Direct PDF download
- ⬆️ **Scroll Progress Bar** — Visual progress indicator
- 🎨 **Particle Background** — Canvas-based animated particles

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/sonwanisonwani81-lang/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
src/
├── assets/
│   ├── icons/          # Skill & social icons
│   ├── images/         # Section images
│   ├── pdf/            # Resume PDF
│   └── projects/       # Project screenshots
├── components/
│   ├── About.jsx       # About section
│   ├── AboutModal.jsx  # Resume/experience modal
│   ├── Contact.jsx     # Contact form + validation
│   ├── ComingSoonModal.jsx  # Coming soon popup
│   ├── Counter.jsx     # Animated counters
│   ├── CustomCursor.jsx     # Custom cursor effect
│   ├── ErrorBoundary.jsx    # Error handling
│   ├── Footer.jsx      # Footer with links
│   ├── Hero.jsx        # Landing section
│   ├── Navbar.jsx      # Navigation bar
│   ├── Particles.jsx   # Canvas particles
│   ├── ProjectModal.jsx     # Project preview modal
│   ├── Projects.jsx    # Projects grid + filter
│   ├── Skills.jsx      # Skills with progress bars
│   └── TypingText.jsx  # Typing animation
├── config/
│   ├── data.js         # Centralized site data
│   └── theme.js        # Theme constants
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # Entry point
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
# ─── SheetDB (Google Sheets) ──────────────────────
VITE_SHEETDB_URL=https://sheetdb.io/api/v1/YOUR_ID

# ─── EmailJS ──────────────────────────────────────
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# ─── Social Links ─────────────────────────────────
VITE_GITHUB_URL=https://github.com/YOUR_USERNAME
VITE_LINKEDIN_URL=https://linkedin.com/in/YOUR_PROFILE
```

> ⚠️ Never commit `.env` file. It's already in `.gitignore`.

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build & Deploy
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
# Push dist/ to gh-pages branch
```

**Important:** Add environment variables in your hosting platform's dashboard.

---

## ⚡ Performance

| Metric | Score |
|--------|-------|
| **Build Time** | < 1s |
| **JS Bundle** | ~423 KB (132 KB gzipped) |
| **CSS Bundle** | ~87 KB (12 KB gzipped) |
| **Lighthouse** | 90+ (Performance) |

**Optimizations:**
- Lazy loading for images
- Code splitting with Vite
- Efficient canvas-based particles
- `requestAnimationFrame` for cursor
- AOS with `once: true` — animations play once

---

## 👩‍💻 Author

**Ankita** — Full Stack Developer

- 🔗 [GitHub](https://github.com/sonwanisonwani81-lang)
- 💼 [LinkedIn](https://linkedin.com/in/ankita-ankita-a627323aa/)
- 📧 starverse1130@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by Ankita**

*If you found this helpful, give it a ⭐*

</div>
