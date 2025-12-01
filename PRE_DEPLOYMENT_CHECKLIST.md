# Pre-Deployment Checklist ✅

Complete this checklist before deploying to Vercel to ensure everything works perfectly.

## 🔧 Local Testing

- [ ] Run `npm run build` - Should complete without errors
- [ ] Run `npm run preview` - Site should look correct
- [ ] Test light mode - All styles load correctly
- [ ] Test dark mode - All styles load correctly
- [ ] Theme toggle works - Switches between modes smoothly
- [ ] No console errors - Check browser DevTools
- [ ] All fonts display correctly - Not showing system defaults
- [ ] Background animations work - Stars/comets/confetti visible

## 📸 Visual Verification

- [ ] HomePage loads completely
- [ ] About Me section displays correctly
- [ ] Skills section shows all skills
- [ ] Projects section shows all 3 projects with images
- [ ] Contact form is visible
- [ ] NavBar sticky and functional
- [ ] Footer displays correctly

## 🖼️ Asset Check

- [ ] Project images load (`/ProjectSS/one.jpeg`, `two.jpeg`, `three.jpeg`)
- [ ] Resume PDF accessible (`/Resume3.pdf`)
- [ ] Favicon loads (`/letter-s-svgrepo-com.svg`)
- [ ] All external links work (GitHub, LinkedIn, etc.)

## 📱 Responsive Testing

- [ ] Mobile view (\<768px) - Layout adapts correctly
- [ ] Tablet view (768px-1024px) - Everything readable
- [ ] Desktop view (\>1024px) - Optimal layout
- [ ] Navigation menu works on mobile
- [ ] Touch interactions work (if testing on mobile)

## 🌐 Browser Testing (if possible)

- [ ] Chrome/Edge - Works correctly
- [ ] Firefox - Works correctly
- [ ] Safari - Works correctly

## ⚙️ Configuration Files

- [ ] `vercel.json` - Present in root directory
- [ ] `postcss.config.js` - Present in root directory
- [ ] `.env.example` - Present (contains EmailJS template)
- [ ] `.gitignore` - Updated to exclude vercel and dist

## 📦 Vercel Setup

- [ ] GitHub repository created and pushed
- [ ] Vercel account created
- [ ] Environment variables ready:
  - [ ] `VITE_SERVICE_ID`
  - [ ] `VITE_TEMPLATE_ID`
  - [ ] `VITE_PUBLIC_KEY`

## 🚀 Deployment Settings

When importing to Vercel, verify:

- [ ] Framework Preset: **Vite**
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Root Directory: `./` (default)
- [ ] Node.js Version: **18.x or higher**

## 📧 EmailJS (Optional - for Contact Form)

If you want the contact form to work:

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template created
- [ ] Public key obtained
- [ ] All three env variables added to Vercel

If you don't need it now:

- [ ] Skip EmailJS setup
- [ ] Contact form will show error toast (graceful degradation)

## 🔍 Post-Deployment Verification

After deploying, check the live site:

- [ ] Visit the deployed URL
- [ ] CSS loads immediately (no flash of unstyled content)
- [ ] Correct theme loads (or defaults to light)
- [ ] Theme toggle works
- [ ] All sections visible and styled correctly
- [ ] Images load without 404 errors
- [ ] Fonts display correctly (not system defaults)
- [ ] Animations work smoothly
- [ ] Navigation works
- [ ] External links open in new tabs
- [ ] Mobile responsive design works
- [ ] No console errors in production

## 🎯 Performance Check

After deployment, use browser DevTools:

- [ ] Lighthouse score (aim for 90+ performance)
- [ ] CSS loads quickly (\<100ms)
- [ ] Images optimized
- [ ] No render-blocking resources
- [ ] First Contentful Paint \<2s

## 📱 Mobile Test on Real Device

If possible:

- [ ] Load on actual phone
- [ ] Theme toggle works
- [ ] Smooth scrolling
- [ ] Touch interactions responsive
- [ ] No layout issues
- [ ] Fonts readable

## 🐛 If Something Goes Wrong

1. Check Vercel deployment logs
2. Verify environment variables are set
3. Compare local preview with deployed version
4. Check browser console for specific errors
5. Review DEPLOYMENT.md and EDGE_CASES.md
6. Try clearing Vercel build cache and redeploying

## 📝 Notes

- Build time: ~30-60 seconds (normal)
- First deployment might take longer
- Subsequent deploys are faster (caching)
- Auto-deploys enabled after initial setup

## ✅ Ready to Deploy?

If you've checked all the boxes above, you're ready!

Run: `npm run build:check` one final time, then deploy to Vercel!

---

**Good luck with your deployment! 🚀**

Need help? Review:

- `DEPLOYMENT.md` - Detailed deployment guide
- `EDGE_CASES.md` - All handled edge cases
- `DEPLOYMENT_FIX_SUMMARY.md` - What was fixed
