# Logo Not Showing in Email - Fix Instructions

## The Problem

**SVG images are NOT supported by email clients!**

Most email clients (Gmail, Outlook, Apple Mail, etc.) block SVG images for security reasons. That's why your logo isn't showing.

## The Solution

You need to convert your SVG logo to PNG format.

## Step 1: Convert SVG to PNG

### Option A: Online Converter (Easiest)
1. Go to https://cloudconvert.com/svg-to-png
2. Upload `public/Liqwifi_logo.svg`
3. Set width to **280px** (or 2x for retina: 560px)
4. Download the PNG
5. Save it as `Liqwifi_logo.png` in your `public` folder

### Option B: Using Image Editor
1. Open `Liqwifi_logo.svg` in Photoshop, Figma, or any image editor
2. Export as PNG
3. Set width to **280px** (or higher for retina)
4. Save as `Liqwifi_logo.png` in your `public` folder

### Option C: Command Line (if you have ImageMagick)
```bash
convert public/Liqwifi_logo.svg -resize 280x public/Liqwifi_logo.png
```

## Step 2: Add PNG to Your Project

1. Place `Liqwifi_logo.png` in the `public` folder
2. Commit and push to GitHub:
   ```bash
   git add public/Liqwifi_logo.png
   git commit -m "Add PNG version of logo for email compatibility"
   git push
   ```

## Step 3: Verify

After deployment, the logo should be accessible at:
- `https://liqwifi.com/Liqwifi_logo.png`

The email template is already configured to use this URL.

## Alternative: Use a CDN

If you prefer, you can:
1. Upload the PNG to a CDN (Cloudinary, Imgur, etc.)
2. Update the `logoUrl` in `app/api/waitlist/route.ts` to use the CDN URL

## Why PNG Works

- ✅ PNG is universally supported by all email clients
- ✅ Better compatibility than SVG
- ✅ Smaller file size than JPEG for logos
- ✅ Supports transparency (like SVG)

## Current Status

The email template is already set to use:
```
https://liqwifi.com/Liqwifi_logo.png
```

Once you add the PNG file and deploy, the logo will show in emails!

