# 🚀 Saksham Gupta - Portfolio

![Portfolio Preview](public/vite.svg) <!-- Replace with an actual screenshot if available -->

A modern, immersive, and responsive personal portfolio website built with **React** and **Vite**. This project showcases my skills, projects, and professional journey with a focus on premium aesthetics, interactive user experience, and clean code architecture.

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [📂 Project Structure](#-project-structure)
- [🧩 Component Documentation](#-component-documentation)
- [🎨 Customization Guide](#-customization-guide)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Features

- **🌌 Immersive Backgrounds**:
  - **Space Mode**: A deep space theme with floating particles and a glowing moon.
  - **Star Mode**: An interactive star field with animated meteors and pulse effects.
- **🎨 Modern UI/UX**:
  - **Glassmorphism**: Translucent cards and elements for a sleek, modern look.
  - **Responsive Design**: Fluid layouts that adapt perfectly to mobile, tablet, and desktop.
  - **Dark/Light Mode**: Seamless theme switching with persistent state management.
- **⚡ High Performance**:
  - **Vite**: Ultra-fast development server and optimized production builds.
  - **Lazy Loading**: Efficient asset loading for quick initial render.
- **📧 Functional Contact Form**:
  - **EmailJS Integration**: Sends emails directly from the frontend without a backend server.
  - **Form Validation**: Ensures all required fields are filled correctly.
  - **Toast Notifications**: Provides real-time feedback on success or error.
- **🏆 Certification Showcase**: A dedicated section to display professional certifications with Credly integration.

---

## 🛠️ Tech Stack

### Core

- **[React 18](https://react.dev/)**: Library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling.

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development.
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Comprehensive icon library.
- **CSS Modules / Custom CSS**: For complex animations and specific component styling.

### Functionality

- **[EmailJS](https://www.emailjs.com/)**: Client-side email service.
- **[React Router](https://reactrouter.com/)**: Client-side routing.
- **[React Hook Form](https://react-hook-form.com/)** (Optional): For complex form handling.

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **pnpm**

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/ERSA-14/ERSA_portfolio.git
    cd ERSA_portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or if using pnpm
    pnpm install
    ```

### Environment Setup

This project uses **EmailJS** for the contact form. You need to create a `.env` file in the root directory to store your API keys.

1.  Create a file named `.env` in the root.
2.  Add the following variables:

    ```env
    VITE_SERVICE_ID=your_emailjs_service_id
    VITE_TEMPLATE_ID=your_emailjs_template_id
    VITE_PUBLIC_KEY=your_emailjs_public_key
    ```

    > **Note**: You can get these keys by signing up at [EmailJS](https://www.emailjs.com/).

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 📂 Project Structure

A quick look at the top-level files and directories you'll see in this project.

```
src/
├── assets/            # Static assets like images, fonts, and global icons
├── components/        # Reusable UI components
│   ├── ui/            # Generic UI elements (buttons, inputs, toast)
│   ├── AboutMe.jsx    # "About Me" section with bio and certifications
│   ├── Contact.jsx    # Contact form logic and layout
│   ├── HomePage.jsx   # Hero section with typing animation
│   ├── NavBar.jsx     # Responsive navigation bar
│   ├── Project.jsx    # Projects grid with hover effects
│   ├── Skills.jsx     # Skills categorization (Frontend, Backend, Tools)
│   ├── SpaceBackground.jsx # Three.js/CSS based space background
│   └── ThemeToggle.jsx     # Component to switch between Dark/Light mode
├── hooks/             # Custom React hooks
│   └── use-toast.js   # Hook for managing toast notifications
├── lib/               # Utility functions (cn, formatters)
├── pages/             # Page-level components
│   ├── Home.jsx       # Main landing page assembling all sections
│   └── NotFound.jsx   # 404 Error page
├── App.jsx            # Main application wrapper
├── main.jsx           # Entry point rendering the React app
└── index.css          # Global styles and Tailwind directives
```

---

## 🧩 Component Documentation

### `Contact.jsx`

Handles the contact form submission. It uses `emailjs-com` to send emails.

- **Props**: None
- **State**: `form` (ref), `loading` (boolean)
- **Features**:
  - Validates inputs (Name, Email, Message).
  - Sends structured email including sender's name and email in the body.
  - Displays success/error toasts.

### `Project.jsx`

Displays a grid of project cards.

- **Data Source**: The projects array is defined locally within the component.
- **Features**:
  - Hover effects revealing "View Code" and "Live Demo" buttons.
  - Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop).

### `ThemeToggle.jsx`

Manages the application's theme (Light/Dark).

- **Logic**: Toggles a `dark` class on the `<html>` element and persists the preference in `localStorage`.

---

## 🎨 Customization Guide

### Changing Colors

The project uses **Tailwind CSS** for styling. You can customize the color palette in `tailwind.config.js` or `index.css`.

- **Primary Color**: Modify the `--primary` CSS variable in `index.css`.
- **Backgrounds**: Adjust `--background` and `--foreground` variables for light/dark modes.

### Updating Content

- **Personal Info**: Update `AboutMe.jsx` and `HomePage.jsx` with your bio.
- **Projects**: Edit the `projects` array in `Project.jsx`.
- **Skills**: Update the categories in `Skills.jsx`.

---

## 🌐 Deployment

This project is optimized for deployment on platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

### Deploying to Vercel (Recommended)

1.  Push your code to a GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and sign up/login.
3.  Click **"Add New Project"** and select your repository.
4.  **Important**: Add your Environment Variables (`VITE_SERVICE_ID`, etc.) in the Vercel project settings.
5.  Click **Deploy**.

### Building for Production

To create a production-ready build locally:

```bash
npm run build
```

The output will be in the `dist/` folder, which you can serve using any static file server.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this portfolio template:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Crafted and Maintained by Saksham Gupta**
