# 🚀 Saksham Gupta's Portfolio

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full Stack Developer. Built with React, Vite, and Tailwind CSS, featuring stunning animations and a beautiful dark/light theme.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-7.2.5-646cff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8)

## ✨ Features

### 🎨 **Design**

- **Dual Theme**: Beautiful dark and light modes with smooth transitions
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional interface with glassmorphism effects
- **Smooth Animations**: CSS and Three.js animations for an engaging experience
- **Custom Cursor**: Interactive diamond-shaped cursor with hover effects

### 🛠️ **Technical**

- **React 19**: Latest React with hooks and modern patterns
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS with custom configuration
- **React Router**: Client-side routing with SPA architecture
- **Three.js**: 3D graphics for interactive backgrounds
- **EmailJS**: Contact form integration without backend

### 📱 **Sections**

1. **Home**: Hero section with animated typing effect
2. **About Me**: Professional summary, certifications, and resume
3. **Skills**: Interactive skill showcase with category filtering
4. **Projects**: Highlighted projects with live demos and GitHub links
5. **Contact**: Working contact form with social media links

### ⚡ **Performance**

- **Optimized Bundle**: Code splitting and tree shaking
- **Fast Loading**: Preconnect to external resources
- **Asset Optimization**: Proper caching and compression
- **SEO Ready**: Meta tags and semantic HTML

## 🚀 Quick Start

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

## 📁 Project Structure

```
ERSA_portfolio/
├── public/
│   ├── ProjectSS/          # Project screenshots
│   ├── Resume3.pdf         # Resume file
│   ├── init.js             # Pre-render initialization
│   └── *.svg               # Icons and images
├── src/
│   ├── components/         # React components
│   │   ├── AboutMe.jsx
│   │   ├── Contact.jsx
│   │   ├── HomePage.jsx
│   │   ├── NavBar.jsx
│   │   ├── Project.jsx
│   │   ├── Skills.jsx
│   │   ├── StarBackground.jsx
│   │   ├── SpaceBackground.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ui/             # Reusable UI components
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles
├── .env.example            # Environment variables template
├── vercel.json             # Vercel deployment config
├── vite.config.js          # Vite configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts

```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SERVICE_ID=your_emailjs_service_id
VITE_TEMPLATE_ID=your_emailjs_template_id
VITE_PUBLIC_KEY=your_emailjs_public_key
```

**Note**: EmailJS variables are optional. The contact form will show an error toast if not configured.

### Customization

#### Update Personal Information

Edit the following components:

- `src/components/HomePage.jsx` - Name and title
- `src/components/AboutMe.jsx` - Bio, certifications, resume
- `src/components/Skills.jsx` - Your skills and technologies
- `src/components/Project.jsx` - Your projects
- `src/components/Contact.jsx` - Contact information

#### Update Theme Colors

Edit `src/index.css`:

```css
:root {
  --background: 210 40% 98%;
  --foreground: 222 47% 11%;
  --primary: 200 90% 40%;
  /* ... other colors */
}
```

## 📦 Available Scripts

| Script                | Description              |
| --------------------- | ------------------------ |
| `npm run dev`         | Start development server |
| `npm run build`       | Create production build  |
| `npm run preview`     | Preview production build |
| `npm run build:check` | Build and preview        |
| `npm run lint`        | Run ESLint               |
| `npm run clean`       | Clean build cache        |

## 🌐 Deployment

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

## 🛠️ Technologies Used

### Frontend

- **React** 19.2.0 - UI library
- **React Router DOM** 7.9.6 - Client-side routing
- **Tailwind CSS** 4.1.17 - Utility-first CSS
- **Three.js** 0.181.2 - 3D graphics
- **Lucide React** 0.554.0 - Icons
- **React Icons** 5.5.0 - Additional icons

### Build Tools

- **Vite** 7.2.5 - Build tool and dev server
- **PostCSS** - CSS processing
- **ESLint** - Code linting

### Services

- **EmailJS** 4.4.1 - Email service for contact form
- **Vercel** - Hosting and deployment

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Credits

- **Fonts**: [Google Fonts](https://fonts.google.com) (Space Grotesk, Lato, Montserrat)
- **Icons**: [Lucide Icons](https://lucide.dev), [React Icons](https://react-icons.github.io/react-icons/)
- **3D Graphics**: [Three.js](https://threejs.org)

## 📝 Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Comprehensive deployment guide
- **[EDGE_CASES.md](EDGE_CASES.md)** - All handled edge cases
- **[PRE_DEPLOYMENT_CHECKLIST.md](PRE_DEPLOYMENT_CHECKLIST.md)** - Pre-deployment verification
- **[DEPLOYMENT_FIX_SUMMARY.md](DEPLOYMENT_FIX_SUMMARY.md)** - Quick fix summary

## 🐛 Troubleshooting

### Common Issues

**CSS not loading in production**

- ✅ Fixed: Proper headers configured in `vercel.json`

**Theme flashing on load**

- ✅ Fixed: Theme initialized in `public/init.js`

**Images not found**

- ✅ Fixed: Proper paths with `/` prefix

**Build fails**

- Check Node.js version (>=18)
- Clear cache: `npm run clean`
- Reinstall: `rm -rf node_modules && npm install`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Saksham Gupta**

- 💼 [LinkedIn](https://www.linkedin.com/in/saksham-gupta-ersa/)
- 🐱 [GitHub](https://github.com/ERSA-14)
- 💻 [LeetCode](https://leetcode.com/u/ERSA-14/)
- 📧 Email: Saksham22sg@gmail.com
- 📱 Phone: +91 635 879 8314

## 🙏 Acknowledgments

- Thanks to the React team for an amazing framework
- Vite team for the blazing-fast build tool
- Tailwind CSS for the utility-first approach
- EmailJS for the contact form service

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on [GitHub](https://github.com/ERSA-14/ERSA_portfolio)!

---

**Built with ❤️ by Saksham Gupta** • **© 2025**
