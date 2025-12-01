# Vercel Deployment Guide

## Pre-deployment Checklist

This guide will help you deploy your portfolio to Vercel successfully, avoiding common Windows → Linux deployment issues.

### 1. Environment Variables

Before deploying to Vercel, you need to set up your environment variables in the Vercel dashboard:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables:
   - `VITE_SERVICE_ID` - Your EmailJS service ID
   - `VITE_TEMPLATE_ID` - Your EmailJS template ID
   - `VITE_PUBLIC_KEY` - Your EmailJS public key

### 2. Build Configuration

The project is already configured with:

- ✅ `vercel.json` - Handles SPA routing and CSS headers
- ✅ `vite.config.js` - Optimized build settings
- ✅ `postcss.config.js` - PostCSS configuration

### 3. Common Deployment Issues (Windows → Vercel/Linux)

#### Issue 1: Case Sensitivity

- **Problem**: Windows is case-insensitive, but Linux (Vercel) is case-sensitive
- **Solution**: All file imports must match exact file names
- **Status**: ✅ Already verified and fixed

#### Issue 2: CSS Not Loading

- **Problem**: CSS files might not load due to incorrect MIME types or missing headers
- **Solution**: Added proper headers in `vercel.json`
- **Status**: ✅ Configured

#### Issue 3: Public Assets

- **Problem**: Public assets might not be found due to path issues
- **Solution**: Using proper `/` prefixed paths (e.g., `/ProjectSS/one.jpeg`)
- **Status**: ✅ Already configured

#### Issue 4: Font Loading

- **Problem**: Google Fonts might not load consistently
- **Solution**: Using `@import` in CSS with proper fallbacks
- **Status**: ✅ Configured in `index.css`

### 4. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

#### Option B: Using Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variables (see step 1)
7. Click "Deploy"

### 5. Post-Deployment Verification

After deployment, check:

- ✅ All styles are loading correctly
- ✅ Theme toggle works (dark/light mode)
- ✅ Background animations render properly
- ✅ All fonts are displaying correctly
- ✅ Images in the Projects section load
- ✅ Contact form works (if EmailJS is configured)
- ✅ Responsive design works on different devices

### 6. Troubleshooting

#### CSS Not Loading

If CSS doesn't load after deployment:

1. Check browser console for errors
2. Verify `vercel.json` is in the root directory
3. Clear Vercel build cache and redeploy

#### Images Not Loading

1. Verify image paths start with `/` (e.g., `/ProjectSS/one.jpeg`)
2. Check that images exist in the `public` folder
3. Verify file names match exactly (case-sensitive)

#### Fonts Not Displaying

1. Check Network tab in browser DevTools
2. Verify Google Fonts URL is accessible
3. Check console for CORS errors

### 7. Performance Optimization

The build is already optimized with:

- Code splitting
- Asset optimization
- Proper caching headers
- CSS minification

### 8. Continuous Deployment

Once connected to Git:

- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Instant rollbacks available

## Need Help?

If you encounter issues:

1. Check Vercel deployment logs
2. Verify all file names match exactly (case-sensitive)
3. Ensure environment variables are set
4. Test build locally: `npm run build && npm run preview`
