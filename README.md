# Vennela Madagani — Healthcare Data Analyst Portfolio

A modern, cinematic, and fully responsive portfolio website built with React, Vite, Tailwind CSS, Framer Motion, AOS.js, and Swiper.js.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Hero & preloader animations |
| AOS.js | Scroll-triggered section animations |
| Swiper.js | Project cards carousel |
| Lucide React | Icon library |

## Folder Structure

```
src/
├── components/
│   ├── Header.tsx             # Fixed navigation with mobile menu
│   ├── Hero.tsx               # Split hero with gold-ringed profile image
│   ├── About.tsx              # Professional summary + highlights
│   ├── Experience.tsx         # Work experience timeline
│   ├── Projects.tsx           # Swiper carousel project cards
│   ├── Skills.tsx             # Categorized skill tags
│   ├── Certifications.tsx     # Certification list
│   ├── Education.tsx          # Education cards
│   ├── Achievements.tsx       # Activities & achievements
│   ├── Contact.tsx            # Contact information
│   ├── Footer.tsx             # Minimal footer
│   ├── Preloader.tsx          # Silver cinematic loading screen
│   └── SectionHeading.tsx     # Reusable section title
├── data/
│   └── resume.ts              # Centralized resume data (source of truth)
├── pages/
│   └── Index.tsx              # Main page composing all sections
├── index.css                  # Design system (colors, tokens, utilities)
└── main.tsx                   # App entry point
public/
└── assets/
    └── profile.jpg            # Profile image placeholder
```

## Setup & Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Sections

| Section | Description |
|---|---|
| **Header** | Fixed glass-morphism nav, smooth scroll links, mobile hamburger menu |
| **Hero** | Split layout with animated profile image (gold ring), CTA buttons |
| **About** | Professional summary with key highlight cards |
| **Experience** | Detailed role at Denton Healthcare with bullet points |
| **Projects** | Swiper carousel with 3 project cards featuring gold accents |
| **Skills** | 8 categorized skill groups displayed as tags |
| **Certifications** | List of 5 professional certifications |
| **Education** | MS Healthcare Management + B.Pharmacy cards |
| **Achievements** | Activities and volunteer work |
| **Contact** | Email, phone, and location with direct links |
| **Footer** | Copyright notice |

## Replacing Assets & Resume Data

### Profile Image
Replace `public/assets/profile.jpg` with your own photo. Recommended: 512×512px or larger, square aspect ratio.

### Resume Data
All portfolio content is centralized in `src/data/resume.ts`. Edit this single file to update:
- Name, title, contact info
- Professional summary
- Experience (roles, bullets)
- Projects (titles, descriptions)
- Skills (categories and items)
- Certifications
- Education
- Achievements

## Design System

All colors are defined as HSL values in `src/index.css` using CSS custom properties. The palette features:
- Dark cinematic background (near-black)
- Warm off-white text
- Rose accent for interactive elements and CTA
- Gold highlights reserved exclusively for project cards and hero profile image ring

To customize colors, edit the CSS custom properties in `src/index.css`.

## Accessibility

- Semantic HTML with proper landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on all sections and interactive elements
- Keyboard-navigable menu and links with focus ring indicators
- Descriptive alt text on images
- Screen-reader friendly structure

## Performance

- Tree-shaken icon imports (Lucide)
- Lazy scroll animations (AOS with `once: true`)
- Optimized Framer Motion animations
- Minimal CSS with Tailwind purging
- Responsive images with proper loading attributes

## Deployment

Build output goes to `dist/`. Deploy to any static hosting provider.

```bash
npm run build
# Upload dist/ folder to Vercel, Netlify, GitHub Pages, etc.
```
