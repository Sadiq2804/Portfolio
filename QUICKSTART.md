# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

---

## 1️⃣ Install Dependencies (1 min)

```bash
cd portfolio
npm install
```

---

## 2️⃣ Run Development Server (30 sec)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3️⃣ Customize Content (3 min)

Edit these files to update your portfolio:

### `pages/index.jsx`
- Hero headline and tagline
- Social links

### `components/Hero.jsx`
- Availability status
- Main CTA buttons

### `components/About.jsx`
- About text
- Stats cards

### `components/Projects.jsx`
- Project descriptions
- Links to GitHub/demos
- Technologies used

### `components/Skills.jsx`
- Technical skills by category

### `components/Experience.jsx`
- Work experience details
- Education info

### `components/Contact.jsx`
- Contact methods
- CTA text

---

## 4️⃣ Deploy (5 minutes)

### 4A: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 4B: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your repository
4. Click "Deploy"
5. Done! 🎉

---

## 5️⃣ Connect Domain

1. Register domain: **sadiq.ai** (namecheap.com)
2. In Vercel: Settings → Domains → Add `sadiq.ai`
3. Update DNS records (Vercel provides instructions)
4. Wait 24-48 hours for propagation
5. Visit `https://sadiq.ai` ✓

---

## 📦 What's Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Smooth animations
✅ SEO optimized
✅ Fast performance
✅ Mobile-first
✅ Production-ready

---

## 🛠 Available Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Deploy
npm run export       # Export as static HTML
```

---

## 📂 Project Structure

```
portfolio/
├── pages/           # Main pages
├── components/      # Reusable components
├── styles/          # CSS files
├── public/          # Static files
└── README.md        # Full documentation
```

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0F172A',    // Main color
  accent: '#3B82F6',     // Accent color
}
```

### Change Fonts
Fonts are in `styles/globals.css`

### Add More Sections
1. Create new component in `components/`
2. Import in `pages/index.jsx`
3. Add styling

---

## ✨ Features

- **Dark Mode** - Automatic with toggle
- **Mobile Responsive** - Works on all devices
- **Fast** - Optimized Next.js build
- **SEO** - Meta tags, sitemap, robots.txt
- **Smooth Scrolling** - Framer Motion animations
- **Glassmorphism** - Modern design effects

---

## 📞 Need Help?

- Read `README.md` for detailed docs
- Check `DEPLOYMENT_GUIDE.md` for deployment
- Visit [nextjs.org](https://nextjs.org) for Next.js help
- Email: sadiqansari1918@gmail.com

---

**That's it! You're ready to go!** 🚀

Visit [vercel.com](https://vercel.com) to deploy.
