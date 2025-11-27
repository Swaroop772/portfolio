# AI/ML Portfolio Website

A modern, responsive portfolio website for an AI/ML Engineer, built with React, TailwindCSS, and Vite.

## Features

- **Hero Section**: Professional introduction with call-to-actions.
- **About**: Summary of education and experience.
- **Skills**: Visual representation of technical skills.
- **Projects**: Showcase of AI/ML projects with GitHub/Demo links.
- **Resume**: Embedded PDF viewer and download option.
- **Fun Zone**: Interactive games (Snake, Tic-Tac-Toe, Space Shooter) built with React/Canvas.
- **Contact**: Contact form and social links.
- **Responsive Design**: Fully optimized for mobile and desktop.

## Tech Stack

- React.js
- TailwindCSS
- Vite
- Lucide React (Icons)

## Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

3.  **Build for Production**
    ```bash
    npm run build
    ```

## Customization

- **Resume**: Replace `public/resume.pdf` with your actual resume PDF file.
- **Content**: Update the content in the components located in `src/components/`.
- **Images**: Add your profile image and project images to `src/assets/` or `public/` and update the references.

## Deployment

### Vercel (Recommended)

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
3.  Follow the prompts.

### Netlify

1.  Drag and drop the `dist` folder (created after `npm run build`) to the Netlify dashboard.
