# 🚀 ERSA Portfolio

A modern, immersive, and responsive personal portfolio website built with **React** and **Vite**. This project showcases my skills, projects, and professional journey with a focus on premium aesthetics and interactive user experience.

## ✨ Features

- **🌌 Immersive 3D Backgrounds**: Features a dynamic Space/Star background powered by `Three.js` for a unique visual experience.
- **🎨 Modern UI/UX**: Clean, glassmorphism-inspired design with smooth transitions and animations.
- **🌓 Dark/Light Mode**: Fully supported theme toggling with persistent state.
- **📱 Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
- **⚡ High Performance**: Built with Vite for lightning-fast development and production builds.
- **🧩 Component-Based Architecture**: Modular and maintainable code structure.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities**: `clsx`, `tailwind-merge`

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/ERSA_portfolio.git
    cd ERSA_portfolio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## 📂 Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── AboutMe.jsx    # About section
│   ├── HomePage.jsx   # Hero/Intro section
│   ├── NavBar.jsx     # Navigation bar
│   ├── Project.jsx    # Projects showcase
│   ├── Skills.jsx     # Skills grid
│   ├── SpaceBackground.jsx # 3D Background
│   ├── StarBackground.jsx  # Alternative background
│   └── ThemeToggle.jsx     # Light/Dark mode switch
├── pages/             # Page components
│   ├── Home.jsx       # Main landing page
│   └── NotFound.jsx   # 404 page
├── assets/            # Static assets (images, icons)
├── lib/               # Utility functions
├── App.jsx            # Main application component
└── main.jsx           # Entry point
```

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️+🅰️ℹ️ by Saksham Gupta
