# 🚀 Deployment Guide for sadiq.ai Portfolio

Complete step-by-step guide to deploy your AI Engineer portfolio to sadiq.ai.

---

## 📋 Pre-Deployment Checklist

Before deploying, complete these tasks:

- [ ] Add your professional headshot to `/public/profile.jpg`
- [ ] Update all social links (GitHub, LinkedIn, email)
- [ ] Update project links to your actual GitHub repos
- [ ] Verify Creator Flow AI HF Space is working
- [ ] Register domain: **sadiq.ai**
- [ ] Create GitHub repository (or use existing)
- [ ] Have Vercel account ready (vercel.com)

---

## 🌐 Step 1: Register Domain (sadiq.ai)

### Option A: Namecheap (Recommended)
1. Go to [namecheap.com](https://namecheap.com)
2. Search for "sadiq.ai"
3. Add to cart and purchase (~$10-15/year)
4. Save the domain registrar login details

### Option B: GoDaddy
1. Go to [godaddy.com](https://godaddy.com)
2. Search for "sadiq.ai"
3. Purchase domain
4. Save login details

**Cost:** ~$10-20/year
**Estimated Time:** 10 minutes

---

## 📁 Step 2: Prepare Repository

### Option A: Create New GitHub Repository

```bash
# Navigate to portfolio folder
cd portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Create main branch
git branch -M main

# Add remote (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Option B: Push to Existing Repository

```bash
cd portfolio
git add .
git commit -m "Update portfolio"
git push origin main
```

**Estimated Time:** 5 minutes

---

## 🚀 Step 3: Deploy on Vercel

### 3A: Connect Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign up"** or **"Log in"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Click **"Import Project"**
6. Select your **portfolio** repository

### 3B: Configure Project

1. **Project Name:** `sadiq-portfolio` (or preferred name)
2. **Framework Preset:** Should auto-detect "Next.js" ✓
3. **Root Directory:** Default (.) ✓
4. Keep all other settings as default
5. Click **"Deploy"**

### 3C: Wait for Deployment

- Vercel will build and deploy your site
- You'll see a temporary URL like `https://sadiq-portfolio-xyz.vercel.app`
- Visit this URL to verify it works ✓

**Estimated Time:** 10 minutes (including build)

---

## 🔗 Step 4: Connect Custom Domain

### 4A: Add Domain in Vercel

1. Go to Vercel Dashboard
2. Select your **portfolio project**
3. Go to **Settings → Domains**
4. Click **"Add"**
5. Enter your domain: `sadiq.ai`
6. Click **"Add"**

### 4B: Update DNS Records (Namecheap)

Vercel will show you DNS records to add. Follow these steps:

1. Go to [Namecheap Dashboard](https://www.namecheap.com/myaccount/login.aspx)
2. Find your **sadiq.ai** domain
3. Click **"Manage"**
4. Go to **"Advanced DNS"** tab
5. Add Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - `ns3.vercel-dns.com`
   - `ns4.vercel-dns.com`

**OR** Add DNS records if keeping Namecheap nameservers:
- Type: `A`
- Value: `76.76.19.89`
- TTL: `3600`

### 4C: Verify Domain

1. Return to Vercel
2. Check if domain shows "Valid Configuration" ✓
3. Wait 24-48 hours for DNS propagation
4. Visit `https://sadiq.ai` in browser

**Note:** DNS changes can take 24-48 hours to propagate globally.

**Estimated Time:** 5-10 minutes (setup) + 24-48 hours (propagation)

---

## 📊 Step 5: Verify Deployment

### Check These:

- [ ] Portfolio loads at `https://sadiq.ai`
- [ ] Dark/Light mode toggle works
- [ ] All project links work
- [ ] GitHub links point to correct repos
- [ ] Contact section displays correctly
- [ ] Mobile responsive (test on phone)
- [ ] All images load properly
- [ ] No console errors (press F12)

### Test on Different Devices:
```
Desktop → Chrome, Firefox, Safari
Mobile → iOS Safari, Chrome Mobile
Tablet → iPad, Android tablet
```

---

## 🔍 Step 6: SEO & Analytics Setup (Optional)

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **"URL prefix"**
3. Enter: `https://sadiq.ai`
4. Add verification code from Vercel or HTML file
5. Submit sitemap: `https://sadiq.ai/sitemap.xml`

### Google Analytics (Optional)

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property for `sadiq.ai`
3. Copy tracking ID
4. Add to portfolio (ask if needed)

---

## 📧 Step 7: Test Contact System

1. Click "Get in Touch" on portfolio
2. Click "Send Me an Email"
3. Verify email link works
4. Test email address: `sadiqansari1918@gmail.com`

---

## 🆘 Troubleshooting

### Domain Not Working
- [ ] Check DNS records in Namecheap
- [ ] Wait 24-48 hours for propagation
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Try incognito mode
- [ ] Check Vercel domain settings

### Portfolio Shows Build Error
- [ ] Check Vercel deployment logs
- [ ] Ensure all dependencies in package.json
- [ ] Verify Node.js version compatibility
- [ ] Redeploy from Vercel dashboard

### Links Not Working
- [ ] Verify GitHub URLs are correct
- [ ] Check HF Space URL for Creator Flow
- [ ] Ensure project repos are public
- [ ] Test links manually in new tab

### Styling Issues
- [ ] Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- [ ] Clear `.next` folder locally and rebuild
- [ ] Check Tailwind config for typos

### Dark Mode Not Working
- [ ] Verify `next-themes` is installed
- [ ] Check browser's theme preference settings
- [ ] Clear browser cache
- [ ] Test in incognito/private mode

---

## 💰 Total Costs

| Item | Cost | Duration |
|------|------|----------|
| Domain (sadiq.ai) | $10-20 | 1 year |
| Hosting (Vercel) | **FREE** | Forever |
| SSL/HTTPS | **FREE** | Forever |
| Emails | Optional | - |
| **Total** | **~$10-20** | **1 year** |

---

## 📞 Support

If you encounter issues:

1. **Check Vercel Logs:**
   - Vercel Dashboard → Project → Deployments → Logs

2. **Test Build Locally:**
   ```bash
   npm run build
   npm start
   ```

3. **Ask for Help:**
   - Vercel Support: https://vercel.com/support
   - Next.js Discord: https://discord.gg/vercel
   - GitHub Issues on your repo

---

## ✅ Deployment Checklist

### Before Going Live
- [ ] All content is accurate and up-to-date
- [ ] Links point to correct repositories
- [ ] Portfolio looks good on mobile
- [ ] Dark/Light mode works
- [ ] No broken images or links
- [ ] Performance is acceptable

### After Going Live
- [ ] Visit sadiq.ai in browser ✓
- [ ] Test on mobile device
- [ ] Share with friends/mentors
- [ ] Monitor analytics (optional)
- [ ] Update resume with portfolio URL
- [ ] Share on LinkedIn/GitHub

---

## 🎉 Congratulations!

Your AI Engineer portfolio is now live at **sadiq.ai**

### Next Steps:
1. **Share with recruiters** - Add to resume, LinkedIn
2. **Monitor traffic** - Check Google Analytics
3. **Keep updated** - Add new projects regularly
4. **Get feedback** - Ask mentors for improvements

---

**Questions?** Email: sadiqansari1918@gmail.com
**Support:** Check README.md for tech stack details

---

**Built with Next.js ❤️ by Sadiq**
