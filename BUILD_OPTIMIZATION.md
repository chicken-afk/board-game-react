# Build Optimization Guide

## Production Build Optimization

Untuk mengoptimalkan build production, jalankan command berikut:

```bash
# Standard build
npm run build

# Analyze bundle size
npm install --save-dev webpack-bundle-analyzer
```

## Tambahkan Script ke package.json

```json
{
  "scripts": {
    "analyze": "source-map-explorer 'build/static/js/*.js'",
    "build:analyze": "npm run build && npm run analyze"
  }
}
```

## Install Dependencies untuk Analysis

```bash
npm install --save-dev source-map-explorer
```

## Environment Variables

Buat file `.env.production` untuk production settings:

```env
REACT_APP_GA_TRACKING_ID=G-YLNFR49CE4
REACT_APP_API_URL=https://your-api.com
GENERATE_SOURCEMAP=false
```

## .gitignore Additions

Pastikan file berikut ada di `.gitignore`:

```
# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
```

## Performance Checklist

- [ ] Enable compression (gzip/brotli) di server
- [ ] Set proper cache headers
- [ ] Use CDN untuk static assets
- [ ] Minify CSS dan JS (otomatis dengan CRA)
- [ ] Optimize images (convert to WebP)
- [ ] Lazy load images dan components
- [ ] Remove console.log di production
- [ ] Enable service worker untuk offline support

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload build folder ke Netlify
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Post-Deployment

1. Test di berbagai device dan browser
2. Check Lighthouse score (target: >90)
3. Monitor performance dengan Google Analytics
4. Setup error tracking dengan Sentry
5. Enable monitoring dan alerting
