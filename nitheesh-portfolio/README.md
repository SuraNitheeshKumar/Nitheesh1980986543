# S Nitheesh Kumar — Premium Portfolio Website

A modern, premium portfolio website built with Node.js and Express, designed with a McKinsey/BCG aesthetic. The site presents an engineering professional's transition into business management via an MBA with clean typography, elegant animations, and data-forward design.

## Features

- ✨ **Premium Design**: Playfair Display + Inter typography, gold & navy color scheme
- 📱 **Fully Responsive**: Mobile-first design with optimized breakpoints at 768px and 480px
- ⚡ **Smooth Animations**: Scroll-triggered fade-ins, navbar frosted-glass effect, hover interactions
- 🎯 **Executive Layout**: Seven-slide deck format (Hero → Summary → Experience → Education → Skills → Story → Contact)
- 🔧 **Easy Customization**: All content in hardcoded `profileData` object — no database needed
- 🚀 **Lightweight**: ~50KB total assets, vanilla JavaScript (no frameworks)

## Project Structure

```
nitheesh-portfolio/
├── package.json
├── server.js
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── assets/
│       └── (images/icons — placeholder)
├── views/
│   ├── layouts/
│   │   └── main.hbs
│   ├── partials/
│   │   ├── navbar.hbs
│   │   ├── hero.hbs
│   │   ├── summary.hbs
│   │   ├── experience.hbs
│   │   ├── education.hbs
│   │   ├── skills.hbs
│   │   ├── story.hbs
│   │   └── contact.hbs
│   └── index.hbs
└── README.md
```

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 4.18+
- **Templating**: Handlebars (express-handlebars 7.1+)
- **Styling**: Custom CSS (no Tailwind)
- **Fonts**: Google Fonts (Playfair Display + Inter)
- **Icons**: Lucide Icons (via CDN)
- **Animations**: Vanilla JavaScript (IntersectionObserver)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This installs:
- `express` — Web framework
- `express-handlebars` — Templating engine
- `nodemon` (dev) — Auto-reload on file changes

### 2. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3000` and auto-reload when you save changes.

**Production build**:
```bash
npm start
```

### 3. Update Your Content

All content is hardcoded in `server.js` in the `profileData` object. Edit the following fields:

#### In `server.js`:

```javascript
const profileData = {
  name: "S Nitheesh Kumar",                    // Your name
  tagline: "Engineer → Quality Leader → ...",  // Your tagline
  tags: ["B.Tech EEE · VIT Vellore", ...],    // Education tags
  summary: "An engineer with...",              // Executive summary
  stats: [...],                                // Key metrics
  experience: [...],                           // Work history
  education: [...],                            // Education
  skills: { technical: [...], business: [...] }, // Your skills
  story: "Three years on the factory floor...", // Your narrative
  contact: { email: "...", linkedin: "...", location: "..." } // Contact info
};
```

**Important**: Placeholder text appears as `[Month Year]`, `[X]`, `[domain]`, etc. — leave these brackets visible so you can fill them manually later.

## Design System

### Color Palette

- **Navy** (`#0A1628`): Primary background
- **Navy Light** (`#112240`): Secondary background
- **Gold** (`#C9A84C`): Accents, highlights, borders
- **Slate** (`#8892A4`): Secondary text
- **Off-white** (`#F4F4F0`): Cards & secondary surfaces

### Typography

- **Headings**: Playfair Display (serif, bold)
- **Body**: Inter (sans-serif, 400–700 weights)

### Layout

- Min-height sections: 100vh (full viewport)
- Max content width: 1100px (centered)
- Responsive stacking: 1 column on <768px

## Seven Sections

### 1. **Hero** (Slide 01)
- Full-screen introduction with animated name underline
- Tagline + education tags
- Scroll indicator (animated chevron)

### 2. **Executive Summary** (Slide 02)
- 3 stat cards (value + label)
- Paragraph summary

### 3. **Experience** (Slide 03)
- Vertical timeline with 2 career entries
- Company, role, department, duration, achievements
- Hover animations

### 4. **Education** (Slide 04)
- Side-by-side education cards
- "Currently Enrolled" badge for XIMB
- Highlights/coursework

### 5. **Skills** (Slide 05)
- Two-column layout: Technical Core | Business & Strategy
- Skill tags with hover effects

### 6. **Story** (Slide 06)
- Large opening quotation mark
- Italicized narrative (3–4 sentences)
- Divider rules above and below

### 7. **Contact** (Slide 07)
- CTA text
- Email, LinkedIn, location (with Lucide icons)
- Copyright footer

## JavaScript Features

### Navbar Scroll Effect
- Transparent initially
- Becomes frosted glass (`rgba(10, 22, 40, 0.95)` + `backdrop-filter: blur(10px)`) when scrollY > 50px

### Scroll Animations
- **IntersectionObserver**: Triggers fade-in + slide-up when element enters viewport (threshold: 15%)
- **Stagger**: Child elements animate with 100ms delays via `data-delay` attribute
- **Smooth scroll**: Nav links use `scrollIntoView({ behavior: 'smooth' })`

### Active Nav Highlighting
- IntersectionObserver on sections
- Highlights corresponding nav link when section is 30% visible

## Deployment

### Free Options

#### Railway
1. Push to GitHub
2. Create account at [railway.app](https://railway.app)
3. Connect your repo
4. Add `PORT` env variable (defaults to 3000)
5. Deploy

#### Render
1. Push to GitHub
2. Create free account at [render.com](https://render.com)
3. New → Web Service
4. Connect repo → deploy
5. Build command: `npm install`
6. Start command: `npm start`

#### Heroku
1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. `heroku create <app-name>`
3. `git push heroku main`

### Custom Domain
Add your domain in your hosting platform's settings (usually under "Custom Domain").

## CSS Customization

All styles are in `public/css/style.css`. Key areas:

- **Color variables** (`:root` section) — Change once, apply everywhere
- **Section styling** (e.g., `.hero`, `.experience`, `.contact`)
- **Animations** (@keyframes section)
- **Responsive breakpoints** (@media queries)

## Folder Breakdown

| Folder | Purpose |
|--------|---------|
| `/public/css/` | Stylesheets |
| `/public/js/` | Client-side JavaScript |
| `/public/assets/` | Images, icons, PDFs (placeholder) |
| `/views/layouts/` | HTML shell (main.hbs) |
| `/views/partials/` | Reusable components (navbar, sections) |
| `/views/` | Main template (index.hbs) |

## Tips

1. **Add images**: Place in `/public/assets/`, reference in HTML as `/assets/image.jpg`
2. **Download your portfolio**: Browser → Save As HTML (includes styling)
3. **PDF resume**: Embed a link to your resume in the Contact section
4. **Analytics**: Add Google Analytics script to `views/layouts/main.hbs` `<head>`
5. **SEO**: Edit meta tags in `main.hbs` (title, description)

## License

Open source — feel free to customize and deploy.

---

**Built by** S Nitheesh Kumar | **Last Updated** June 2025
