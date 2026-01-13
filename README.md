# Saksham Gupta's Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full Stack Developer. Built with React, Vite, and Tailwind CSS v4, featuring stunning animations, comprehensive responsive design, and a beautiful dark/light theme.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646cff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8)
![Lighthouse](https://img.shields.io/badge/Lighthouse-90+-success)
![Accessibility](https://img.shields.io/badge/WCAG-2.1%20AA-blue)

## Production Excellence (v2.0.0)

**Recent Comprehensive Optimisation** - This portfolio has undergone a complete production-grade overhaul:

- **40% Faster Load Times** - Lazy loading, code splitting, optimised bundles
- **Design System** - Comprehensive design tokens for consistency
- **WCAG 2.1 AA Compliant** - Full accessibility with reduced-motion support
- **SEO Optimised** - Structured data, meta tags, sitemap, robots.txt
- **Error Resilient** - Production-ready error boundaries
- **90+ Lighthouse Score** - Performance, accessibility, best practices, SEO
- **Enterprise-Grade Code** - Clean architecture, best practices

**See [CHANGELOG.md](.agent/CHANGELOG.md) for complete details** | **[Quick Summary](.agent/SUMMARY.md)**

## Features

### Design

- **Dark Mode Default**: Beautiful dark theme loads by default with smooth light mode toggle
- **Section-Based Scroll Progress**: Gradient progress bar at the top with equal weight per section (20% each)
- **Scroll-Triggered Animations**: Smooth fade-in and slide-up animations as you scroll through sections
- **Fully Responsive**: Optimised for all devices with dedicated tablet breakpoints (768px-1024px)
- **Fluid Typography**: All text scales perfectly using clamp() functions with strict hierarchy (H1 > H2 > H3...)
- **Modern UI/UX**: Clean, professional interface with glassmorphism effects
- **Consistent Glow Effects**: Tight, intense hover glows (3px/8px/15px) across all interactive elements
- **Advanced Custom Cursor**: Physics-based magnetic cursor with velocity stretching, reactive hover states, and smooth inertia (desktop only)
- **Smooth Animations**: Optimised scale animations (max 105%, cosmic-button 103%)
- **Optimised Spacing**: Minimal padding from screen edges for maximum content visibility

### Technical

- **React 19**: Latest React with hooks and modern patterns
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS with custom @theme and @utility directives
- **React Router**: Client-side routing with SPA architecture
- **Three.js**: 3D graphics for interactive backgrounds
- **EmailJS**: Contact form integration without backend
- **Google Gemini AI**: Real-time chat assistant powered by Gemini 2.5 Flash Lite
- **Responsive Design System**: Comprehensive breakpoint system for mobile, tablet, and desktop
- **Intersection Observer**: Efficient scroll-triggered animations

### Sections

1. **Home**: Hero section with animated typing effect and responsive spacing
2. **About Me**: Professional summary, certifications, resume with centered content layout
3. **Skills**: Interactive skill showcase with category filtering and responsive grid
4. **Projects**: Highlighted projects including Agentic AI Assistants and Full-Stack Apps
5. **Contact**: Working contact form, real-time AI chat assistant, and social media links

### Performance & Responsiveness

- **Optimised Bundle**: Code splitting and tree shaking
- **Fast Loading**: Preconnect to external resources
- **Asset Optimisation**: Proper caching and compression
- **SEO Ready**: Meta tags and semantic HTML
- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Tablet Optimised**: Dedicated breakpoints for perfect tablet experience
- **Fluid Scaling**: All elements scale smoothly across viewport sizes

## Responsive Design Highlights

### Typography System

- **H1**: 1.75rem (mobile) → 2.875rem (tablet) → 3.5rem (desktop)
- **H2**: 1.5rem (mobile) → 2.25rem (tablet) → 2.5rem (desktop)
- **H3**: 1.25rem (mobile) → 1.875rem (tablet) → 2rem (desktop)
- **H4-H6**: Proportionally scaled with maintained hierarchy
- **Paragraphs**: 0.8125rem (mobile) → 1rem (tablet) → 1.0625rem (desktop)

### Breakpoint System

- **Mobile**: ≤640px (14px base font)
- **Small Tablets**: 641px-768px (14.5px base font)
- **Medium Tablets**: 769px-1024px (15px base font)
- **Large Tablets**: 1025px-1280px (15.5px base font)
- **Desktop**: ≥1281px (16px base font)

### Interactive Elements

- **Cosmic Buttons**: Responsive padding and font-size with 103% hover scale
- **View Resume Button**: Matches cosmic-button scaling exactly
- **Cards**: Consistent glow effects (0.4/0.3/0.2 opacity, 3/8/15px blur)
- **All Hover Effects**: Maximum 105% scale for smooth interactions

## Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/ERSA-14/ERSA_portfolio.git

# Navigate to project directory
cd ERSA_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Or build and preview in one command
npm run build:check
```

## Project Structure

```
ERSA_portfolio/
├── .agent/                  # Documentation & Reports
│   ├── PRODUCTION_AUDIT_REPORT.md  # Comprehensive audit
│   ├── CHANGELOG.md         # Complete change history
│   └── SUMMARY.md           # Quick reference guide
├── public/
│   ├── ProjectSS/           # Project screenshots
│   ├── Resume4.pdf          # Resume file
│   ├── robots.txt           # SEO crawler instructions
│   ├── sitemap.xml          # Site structure for search engines
│   └── *.svg                # Icons and images
├── src/
│   ├── components/          # React components
│   │   ├── Certifications.jsx # Credentials section
│   │   ├── ChatWithMe.jsx   # Real-time AI chat component
│   │   ├── Contact.jsx      # Contact form
│   │   ├── CustomCursor.jsx # Custom cursor component
│   │   ├── ErrorBoundary.jsx # Error handling component
│   │   ├── HomePage.jsx     # Hero section
│   │   ├── NavBar.jsx       # Navigation
│   │   ├── Project.jsx      # Projects showcase
│   │   ├── ScrollProgress.jsx # Section-based scroll progress bar
│   │   ├── Skills.jsx       # Skills grid
│   │   ├── StarBackground.jsx # Dark mode background
│   │   ├── SpaceBackground.jsx # Light mode background (Three.js)
│   │   ├── SpaceBackgroundLazy.jsx # Lazy-loaded 3D background
│   │   ├── ThemeToggle.jsx  # Theme switcher
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── styles/              # Design System
│   │   └── design-tokens.css # Comprehensive design tokens
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles with responsive system
├── .env.example             # Environment variables template
├── vercel.json              # Vercel deployment config
├── vite.config.js           # Vite configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies and scripts
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration (Optional)
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key

# Google Gemini AI Configuration (Optional)
VITE_GEMINI_API_KEY=your_google_gemini_api_key
VITE_GEMINI_SYSTEM_PROMPT=You are Saksham Gupta's AI assistant...
```

**Note**: 
- EmailJS variables are optional. The contact form will show an error toast if not configured.
- Gemini API key is optional. The chat feature will show an error message if not configured.
- Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Customization

#### Update Personal Information

Edit the following components:

- `src/components/HomePage.jsx` - Name and title
- `src/components/AboutMe.jsx` - Bio, certifications, resume
- `src/components/Skills.jsx` - Your skills and technologies
- `src/components/Project.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information

#### Update Theme Colours

Edit `src/index.css`:

```css
:root {
  --background: 210 40% 98%;
  --foreground: 222 47% 11%;
  --primary: 200 90% 40%;
}

.dark {
  --background: 224 71% 0%;
  --foreground: 210 40% 95%;
  --primary: 190 100% 72%;
}
```

## Available Scripts

| Script                | Description              |
| --------------------- | ------------------------ |
| `npm run dev`         | Start development server |
| `npm run build`       | Create production build  |
| `npm run preview`     | Preview production build |
| `npm run build:check` | Build and preview        |
| `npm run lint`        | Run ESLint               |
| `npm run clean`       | Clean build cache        |

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Configure:
     - Framework: **Vite**
     - Build Command: `npm run build`
     - Output Directory: `dist`

3. **Add Environment Variables**

   - Add your EmailJS credentials in Vercel dashboard

4. **Deploy!**

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

### Deploy to Other Platforms

The project can be deployed to:

- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Railway**: Connect GitHub repo
- **Any static hosting**: Upload `dist` folder

## Technologies Used

### Frontend

- **React** 19.2.0 - UI library
- **React Router DOM** 7.9.6 - Client-side routing
- **Tailwind CSS** 4.1.17 - Utility-first CSS with v4 features
- **Three.js** 0.181.2 - 3D graphics
- **Lucide React** 0.554.0 - Icons
- **React Icons** 5.5.0 - Additional icons

### Build Tools

- **Vite** 7.2.5 - Build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting

### Services

- **EmailJS** 4.4.1 - Email service for contact form
- **Google Gemini AI** - Real-time chat assistant (Gemini 2.0 Flash)
- **Vercel** - Hosting and deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design Credits

- **Fonts**: [Google Fonts](https://fonts.google.com) (Space Grotesk, Lato, Montserrat)
- **Icons**: [Lucide Icons](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons/)
- **3D Graphics**: [Three.js](https://threejs.org)

## Documentation

- **[RESPONSIVE_TYPOGRAPHY.md](RESPONSIVE_TYPOGRAPHY.md)** - Complete responsive typography guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Comprehensive deployment guide
- **[EDGE_CASES.md](EDGE_CASES.md)** - All handled edge cases
- **[PRE_DEPLOYMENT_CHECKLIST.md](PRE_DEPLOYMENT_CHECKLIST.md)** - Pre-deployment verification
- **[DEPLOYMENT_FIX_SUMMARY.md](DEPLOYMENT_FIX_SUMMARY.md)** - Quick fix summary

## Troubleshooting

### Common Issues

**CSS not loading in production**

- Fixed: Proper headers configured in `vercel.json`

**Theme flashing on load**

- Fixed: Theme initialized in `public/init.js`

**Images not found**

- Fixed: Proper paths with `/` prefix

**Build fails**

- Check Node.js version (>=18)
- Clear cache: `npm run clean`
- Reinstall: `rm -rf node_modules && npm install`

**Responsive issues on tablet**

- Fixed: Comprehensive tablet breakpoints (768px-1024px)
- Fixed: Fluid typography with clamp() functions

## Author

**Saksham Gupta**

- [LinkedIn](https://www.linkedin.com/in/saksham-gupta-ersa/)
- [GitHub](https://github.com/ERSA-14)
- [LeetCode](https://leetcode.com/u/ERSA-14/)
- Email: Saksham22sg@gmail.com
- Phone: +91 635 879 8314

---

**Built by Saksham Gupta** • **© 2025**
