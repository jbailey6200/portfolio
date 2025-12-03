# Jeremy Bailey - Portfolio

A modern, responsive portfolio built with React and Vite.

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## Deploying to Vercel

### Option 1: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Via GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

## Customization

### Adding Project Screenshots
1. Add your screenshots to the `/public` folder
2. Update the `image` property in the `projects` array in `src/App.jsx`

### Updating Content
All content (projects, skills, contact info) is in `src/App.jsx`:
- `projects` array - Your project data
- `skills` array - Your skills/technologies
- `Contact` component - Your contact information

### Colors & Theme
Edit CSS variables in `src/index.css`:
- `--accent-primary` - Main accent color
- `--bg-primary` - Background colors
- `--text-primary` - Text colors

## Tech Stack
- React 18
- Vite 5
- Lucide React (icons)
- CSS3 with custom properties
