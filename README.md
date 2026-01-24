# Portfolio Website

A modern, responsive portfolio website built with React and Vite, optimized for deployment on Vercel.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🚀 Easy deployment on Vercel
- 🎯 Smooth scrolling navigation
- 💼 Showcase your projects and skills
- 📧 Contact form

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment on Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect Vite and configure the build settings
6. Click "Deploy"

The project is already configured with `vercel.json` for optimal deployment.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the subtitle and description

2. **About Section** (`src/components/About.jsx`):
   - Update the about paragraphs
   - Modify the stats numbers

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update the skills arrays with your technologies

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace the example projects with your own
   - Update project links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Add your GitHub and LinkedIn links

### Styling

- Global styles: `src/index.css`
- Component styles: Each component has its own CSS file in `src/components/`

### Colors

You can customize the color scheme by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

## Project Structure

```
portfolio1/
├── public/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## License

MIT
