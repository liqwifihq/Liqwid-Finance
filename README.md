# Liqwifi Landing Page

A modern Next.js landing page for Liqwifi, built with TypeScript and Tailwind CSS, matching the Figma design exactly.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Add your images to the `public` folder:
   - `Image (2).png` - The smartphone image showing the app interface (should be 388px width, ~706px height)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app directory with pages and layout
- `/components` - React components (HeroSection, FAQ, Footer, etc.)
- `/public` - Static assets (images)
- `/app/globals.css` - Global styles with Tailwind
- `/tailwind.config.ts` - Tailwind configuration with custom colors
- `/hooks` - Custom React hooks

## Design Specifications

- **Font**: Plus Jakarta Sans (weights: 400, 500, 700)
- **Colors**:
  - Cod Gray: #0F0F0F, #0E0E0E
  - Trout: #4B4B57
  - Celery: #9ECE58
  - Spray: #93E4F1
  - Athens Gray: #E5E7EB

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### GitHub

1. Initialize git repository (if not already done):
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Create initial commit:
```bash
git commit -m "Initial commit"
```

4. Add remote repository:
```bash
git remote add origin https://github.com/yourusername/liqwifi.git
```

5. Push to GitHub:
```bash
git push -u origin main
```

### Netlify

The project is configured for automatic deployment on Netlify.

1. Connect your GitHub repository to Netlify:
   - Go to [Netlify](https://www.netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Select your GitHub repository

2. Netlify will automatically detect the Next.js configuration:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - The `@netlify/plugin-nextjs` plugin will be automatically installed

3. Environment variables (if needed):
   - Add any required environment variables in Netlify dashboard under Site settings > Environment variables

4. Deploy:
   - Netlify will automatically deploy on every push to the main branch
   - Preview deployments are created for pull requests

### Manual Netlify Deployment

If deploying manually via Netlify CLI:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
