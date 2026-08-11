# Sadiq Hussain Ansari | AI Engineer Portfolio

A premium, modern portfolio website showcasing AI engineering projects, skills, and experience.

**Live Demo:** https://sadiq.ai

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or download the portfolio
cd portfolio

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── pages/
│   ├── _app.jsx          # App wrapper with theme provider
│   └── index.jsx          # Main portfolio page
├── components/
│   ├── NavBar.jsx         # Navigation with dark/light toggle
│   ├── Hero.jsx           # Hero section with CTA
│   ├── About.jsx          # About me section
│   ├── Projects.jsx       # Featured projects showcase
│   ├── Skills.jsx         # Technical skills organized by category
│   ├── Experience.jsx     # Work experience and education
│   ├── Contact.jsx        # Contact section
│   └── Footer.jsx         # Footer with social links
├── styles/
│   └── globals.css        # Global Tailwind + custom styles
├── public/
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # XML sitemap
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── vercel.json            # Vercel deployment config
```

---

## 🎨 Features

✅ **Dark/Light Mode Toggle** — Seamless theme switching with persistence
✅ **Responsive Design** — Mobile, tablet, and desktop optimized
✅ **Smooth Animations** — Framer Motion for engaging interactions
✅ **SEO Optimized** — Meta tags, structured data, sitemap, robots.txt
✅ **Fast Performance** — Next.js optimization, image handling
✅ **Accessibility** — WCAG compliant, keyboard navigation
✅ **Production Ready** — Deployment configuration for Vercel

---

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Typography:** Inter font family
- **Deployment:** Vercel

---

## 📝 Customization

### Update Your Information

Edit `pages/index.jsx` and component files:
- **Hero section:** Update headline, tagline, CTA buttons
- **About:** Change personal bio and stats
- **Projects:** Add/remove projects, update links and descriptions
- **Skills:** Customize skill categories and technologies
- **Experience:** Update work history and education
- **Contact:** Change email, phone, social links

### Change Theme Colors

Edit `tailwind.config.js`:
```javascript
extend: {
  colors: {
    primary: '#0F172A',      // Main background
    secondary: '#1E293B',    // Secondary background
    accent: '#3B82F6',       // Primary accent color
  }
}
```

### Update Domain

Replace all instances of `sadiq.ai` with your domain in:
- `public/sitemap.xml`
- `vercel.json`
- `pages/index.jsx` (favicon SVG)

---

## 📊 SEO Optimization

The portfolio includes:
- ✅ Meta tags (title, description, viewport)
- ✅ Open Graph tags for social sharing
- ✅ Twitter card optimization
- ✅ robots.txt for search engines
- ✅ XML sitemap
- ✅ Semantic HTML structure
- ✅ Mobile-first responsive design

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Your Repository**
   ```bash
   # Push to GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Configure custom domain in Vercel settings

3. **Set Custom Domain**
   - Vercel Dashboard → Settings → Domains
   - Add your custom domain (e.g., sadiq.ai)
   - Follow DNS configuration instructions

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Or export as static HTML
npm run export
```

---

## 📧 Contact & Deployment

For questions or domain setup:
- Email: sadiqansari1918@gmail.com
- GitHub: github.com/Sadiq2804
- LinkedIn: linkedin.com/in/sadiq-hussain-ansari

---

## 📄 License

© 2026 Sadiq Hussain Ansari. All rights reserved.

---

## 🤝 Contributing

This is a personal portfolio. Feel free to fork and customize for your own use!

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vercel Deployment](https://vercel.com/docs)

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
